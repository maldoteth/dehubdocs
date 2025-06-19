
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  authorName?: string;
  tags?: string[];
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image,
  url,
  type = 'website',
  publishedTime,
  authorName,
  tags,
}) => {
  const siteName = 'DeHub Docs';
  const fullTitle = `${title} | ${siteName}`;
  const baseUrl = window.location.origin || 'https://dehub.io';
  const fullUrl = `${baseUrl}${url}`;
  const fullImage = image ? (image.startsWith('http') ? image : `${baseUrl}${image}`) : `${baseUrl}/lovable-uploads/b8f9c8a0-4e2b-4d5c-9a1f-3e7d6c8b9a0e.png`;

  // Enhanced structured data for cryptocurrency/finance articles
  const isCryptoArticle = title.includes('DHB') || title.includes('Coinbase') || title.includes('Token') || tags?.some(tag => ['cryptocurrency', 'blockchain', 'trading', 'defi'].includes(tag.toLowerCase()));
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type === 'article' ? 'Article' : 'WebSite',
    'name': title,
    'headline': title,
    'description': description,
    'url': fullUrl,
    ...(image && { 'image': fullImage }),
    ...(type === 'article' && {
      'datePublished': publishedTime,
      'dateModified': publishedTime,
      'publisher': {
        '@type': 'Organization',
        'name': 'DeHub',
        'logo': {
          '@type': 'ImageObject',
          'url': `${baseUrl}/lovable-uploads/b8f9c8a0-4e2b-4d5c-9a1f-3e7d6c8b9a0e.png`
        }
      },
      ...(authorName && {
        'author': {
          '@type': 'Person',
          'name': authorName,
        }
      }),
      ...(isCryptoArticle && {
        'about': [
          {
            '@type': 'Thing',
            'name': 'Cryptocurrency'
          },
          {
            '@type': 'Thing', 
            'name': 'Blockchain Technology'
          }
        ],
        'keywords': tags?.join(', ') || 'cryptocurrency, blockchain, DHB token, Coinbase, crypto trading'
      })
    })
  };

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={tags?.join(', ') || 'DeHub, cryptocurrency, blockchain, DHB token'} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Open Graph metadata tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && publishedTime && (
        <meta property="article:modified_time" content={publishedTime} />
      )}
      {type === 'article' && authorName && (
        <meta property="article:author" content={authorName} />
      )}
      {type === 'article' && tags && tags.map(tag => (
        <meta property="article:tag" content={tag} key={tag} />
      ))}

      {/* Twitter Card metadata tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
