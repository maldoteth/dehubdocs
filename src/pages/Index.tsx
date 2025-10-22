
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to docs home page after a brief moment
    const timer = setTimeout(() => {
      navigate('/docs');
    }, 100);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center space-y-4">
        <img 
          src="/lovable-uploads/bca432dc-7ef2-4a07-99b6-fac376265184.png" 
          alt="DeHub Logo" 
          className="w-16 h-16 mx-auto"
        />
        <h1 className="text-4xl font-bold text-jet-black font-exo">DeHub</h1>
        <p className="text-xl text-gray-600 font-exo">Redirecting to documentation...</p>
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-light-silver rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
          <div className="w-2 h-2 bg-medium-silver rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          <div className="w-2 h-2 bg-jet-black rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
    </div>
  );
};

export default Index;
