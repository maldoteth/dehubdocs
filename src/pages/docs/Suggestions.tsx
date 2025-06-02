
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { ThumbsUp, ThumbsDown, Plus, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Suggestion {
  id: string;
  title: string;
  description: string;
  upvotes: number;
  downvotes: number;
  createdAt: string;
  userVotes: { [userId: string]: 'up' | 'down' };
}

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [userId] = useState(() => {
    // Generate a unique user ID for voting tracking
    let id = localStorage.getItem('suggestions-user-id');
    if (!id) {
      id = Math.random().toString(36).substr(2, 9);
      localStorage.setItem('suggestions-user-id', id);
    }
    return id;
  });
  const { toast } = useToast();

  // Load suggestions from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem('community-suggestions');
    if (saved) {
      setSuggestions(JSON.parse(saved));
    }
  }, []);

  // Save suggestions to localStorage whenever suggestions change
  useEffect(() => {
    localStorage.setItem('community-suggestions', JSON.stringify(suggestions));
  }, [suggestions]);

  const addSuggestion = () => {
    if (!newTitle.trim() || !newDescription.trim()) {
      toast({
        title: "Missing information",
        description: "Please fill in both title and description",
        variant: "destructive"
      });
      return;
    }

    const suggestion: Suggestion = {
      id: Date.now().toString(),
      title: newTitle.trim(),
      description: newDescription.trim(),
      upvotes: 0,
      downvotes: 0,
      createdAt: new Date().toISOString(),
      userVotes: {}
    };

    setSuggestions(prev => [suggestion, ...prev]);
    setNewTitle('');
    setNewDescription('');
    setShowAddForm(false);
    
    toast({
      title: "Suggestion added!",
      description: "Your suggestion has been submitted to the community",
    });
  };

  const vote = (suggestionId: string, voteType: 'up' | 'down') => {
    setSuggestions(prev => prev.map(suggestion => {
      if (suggestion.id !== suggestionId) return suggestion;

      const currentVote = suggestion.userVotes[userId];
      const newUserVotes = { ...suggestion.userVotes };
      let newUpvotes = suggestion.upvotes;
      let newDownvotes = suggestion.downvotes;

      // Remove previous vote if exists
      if (currentVote === 'up') newUpvotes--;
      if (currentVote === 'down') newDownvotes--;

      // Add new vote if different from current
      if (currentVote !== voteType) {
        newUserVotes[userId] = voteType;
        if (voteType === 'up') newUpvotes++;
        if (voteType === 'down') newDownvotes++;
      } else {
        // Remove vote if clicking same button
        delete newUserVotes[userId];
      }

      return {
        ...suggestion,
        upvotes: newUpvotes,
        downvotes: newDownvotes,
        userVotes: newUserVotes
      };
    }));
  };

  const sortedSuggestions = [...suggestions].sort((a, b) => {
    const scoreA = a.upvotes - a.downvotes;
    const scoreB = b.upvotes - b.downvotes;
    return scoreB - scoreA;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-royal-blue font-exo">
          Community Suggestions
        </h1>
        <p className="text-lg text-royal-blue/70 max-w-2xl mx-auto">
          Share your ideas and vote on suggestions from the DeHub community. Help us shape the future of the platform together.
        </p>
      </div>

      {/* Add Suggestion Button */}
      <div className="flex justify-center">
        <Button 
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-middle-blue hover:bg-middle-blue/90 text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Suggestion
        </Button>
      </div>

      {/* Add Suggestion Form */}
      {showAddForm && (
        <Card className="border-sky-blue/20 bg-gradient-to-br from-white to-sky-blue/5">
          <CardHeader>
            <CardTitle className="text-royal-blue flex items-center">
              <MessageSquare className="w-5 h-5 mr-2" />
              Submit a New Suggestion
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-royal-blue/80 mb-2 block">
                Title
              </label>
              <Input
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="Brief title for your suggestion..."
                className="border-sky-blue/30 focus:border-middle-blue"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-royal-blue/80 mb-2 block">
                Description
              </label>
              <Textarea
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                placeholder="Describe your suggestion in detail..."
                rows={4}
                className="border-sky-blue/30 focus:border-middle-blue"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <Button 
                variant="outline" 
                onClick={() => setShowAddForm(false)}
                className="border-sky-blue/30 text-royal-blue hover:bg-sky-blue/10"
              >
                Cancel
              </Button>
              <Button 
                onClick={addSuggestion}
                className="bg-middle-blue hover:bg-middle-blue/90 text-white"
              >
                Submit Suggestion
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Suggestions List */}
      <div className="space-y-4">
        {sortedSuggestions.length === 0 ? (
          <Card className="border-sky-blue/20 bg-gradient-to-br from-white to-sky-blue/5">
            <CardContent className="py-12 text-center">
              <MessageSquare className="w-12 h-12 text-royal-blue/30 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-royal-blue/70 mb-2">
                No suggestions yet
              </h3>
              <p className="text-royal-blue/50">
                Be the first to share your ideas with the community!
              </p>
            </CardContent>
          </Card>
        ) : (
          sortedSuggestions.map((suggestion) => (
            <Card key={suggestion.id} className="border-sky-blue/20 bg-gradient-to-br from-white to-sky-blue/5">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-royal-blue mb-2">
                      {suggestion.title}
                    </h3>
                    <p className="text-royal-blue/70 mb-3">
                      {suggestion.description}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-royal-blue/50">
                      <span>Added {formatDate(suggestion.createdAt)}</span>
                      <Badge variant="outline" className="border-sky-blue/30 text-royal-blue/70">
                        Score: {suggestion.upvotes - suggestion.downvotes}
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => vote(suggestion.id, 'up')}
                    className={`border-sky-blue/30 hover:bg-green-50 ${
                      suggestion.userVotes[userId] === 'up' 
                        ? 'bg-green-100 text-green-700 border-green-300' 
                        : 'text-royal-blue'
                    }`}
                  >
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    {suggestion.upvotes}
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => vote(suggestion.id, 'down')}
                    className={`border-sky-blue/30 hover:bg-red-50 ${
                      suggestion.userVotes[userId] === 'down' 
                        ? 'bg-red-100 text-red-700 border-red-300' 
                        : 'text-royal-blue'
                    }`}
                  >
                    <ThumbsDown className="w-4 h-4 mr-1" />
                    {suggestion.downvotes}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default Suggestions;
