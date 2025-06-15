
import { useState, useEffect, useCallback } from 'react';

const getLocalStorageItem = <T>(key: string, defaultValue: T): T => {
  try {
    if (typeof window === 'undefined') return defaultValue;
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error reading from localStorage for key "${key}":`, error);
    return defaultValue;
  }
};

const setLocalStorageItem = <T>(key: string, value: T) => {
  try {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error writing to localStorage for key "${key}":`, error);
  }
};

export const usePostStats = (slug?: string, initialViews: number = 0, initialLikes: number = 0) => {
  const [views, setViews] = useState(initialViews);
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (!slug) return;
    
    const allViews = getLocalStorageItem<{ [key: string]: number }>('post_views', {});
    const postViews = allViews[slug] || 0;
    setViews(initialViews + postViews);

    const allLikes = getLocalStorageItem<{ [key: string]: number }>('post_likes', {});
    const postLikes = allLikes[slug] || 0;
    setLikes(initialLikes + postLikes);

    const likedPosts = getLocalStorageItem<string[]>('liked_posts', []);
    setIsLiked(likedPosts.includes(slug));
  }, [slug, initialViews, initialLikes]);

  const incrementViews = useCallback(() => {
    if (!slug) return;
    const viewedPosts = getLocalStorageItem<string[]>('viewed_posts', []);
    if (!viewedPosts.includes(slug)) {
      const newViewedPosts = [...viewedPosts, slug];
      setLocalStorageItem('viewed_posts', newViewedPosts);
      
      const allViews = getLocalStorageItem<{ [key: string]: number }>('post_views', {});
      const newCount = (allViews[slug] || 0) + 1;
      allViews[slug] = newCount;
      setLocalStorageItem('post_views', allViews);
      setViews(initialViews + newCount);
    }
  }, [slug, initialViews]);

  const toggleLike = useCallback(() => {
    if (!slug) return;
    
    const likedPosts = getLocalStorageItem<string[]>('liked_posts', []);
    const allLikes = getLocalStorageItem<{ [key: string]: number }>('post_likes', {});
    let newLikesCount = allLikes[slug] || 0;
    
    if (likedPosts.includes(slug)) {
      // Unlike
      const newLikedPosts = likedPosts.filter(s => s !== slug);
      setLocalStorageItem('liked_posts', newLikedPosts);
      newLikesCount = Math.max(0, newLikesCount - 1);
      setIsLiked(false);
    } else {
      // Like
      const newLikedPosts = [...likedPosts, slug];
      setLocalStorageItem('liked_posts', newLikedPosts);
      newLikesCount += 1;
      setIsLiked(true);
    }
    
    allLikes[slug] = newLikesCount;
    setLocalStorageItem('post_likes', allLikes);
    setLikes(initialLikes + newLikesCount);
  }, [slug, initialLikes]);

  return { views, likes, isLiked, incrementViews, toggleLike };
};
