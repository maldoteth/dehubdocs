
import React, { useState, useEffect } from 'react';
import { ScrollText, Gamepad2, Users, Shield, Zap, Globe, Edit3, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const Overview = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showEditControls, setShowEditControls] = useState(false);
  const [editableContent, setEditableContent] = useState({
    title: "DeHub: The Future Creator Economies",
    subtitle: "Live forever onchain, free from censorship or limitations of legacy media apps.",
    paragraph1: "Imagine a world where creators own their audience data, control their content distribution, and never fear censorship or demonetization. DeHub makes this reality through our revolutionary gaming and streaming protocol, powered by cutting-edge DePIN infrastructure that's reshaping how content is hosted, transcoded, and delivered globally.",
    paragraph2: "Built by gamers & streamers, we've solved the crypto complexity problem. Our platform delivers a seamless Web2 experience while everything runs on-chain with full transparency—no wallet setup, no gas fees, no technical barriers. Just pure creative freedom with blockchain-verified earnings visible on our public leaderboards.",
    paragraph3: "Launch pay-per-view events, create Watch2Earn experiences, or distribute exclusive token-gated content—all without traditional banking or lengthy KYC processes. Your content, your rules, your revenue. Direct creator-to-fan relationships in a censorship-resistant ecosystem where your success is entirely in your hands.",
    paragraph4: "Join thousands of creators already building the user-owned economy of tomorrow, where value flows directly to those who create it—completely free from corporate gatekeepers and algorithmic manipulation.",
    paragraph5: "Our journey began as Futurov (FTV), where we built a thriving community of streamers and gamers who loved our Web2 app and gave us incredible reviews on Google Play Store. Now we're taking everything they loved and making it unstoppable.",
    paragraph6: "Ready to see how we're revolutionizing digital content? Dive into our technical infrastructure and discover the dApps powering this creator renaissance.",
    disclaimerTitle: "Important Notice",
    disclaimerText: "DeHub tokens serve as utility tokens within our ecosystem, similar to in-game currencies, and are not investment vehicles. While our blockchain infrastructure provides unprecedented transparency and verifiable on-chain data for educational purposes, all markets carry inherent risks. You could lose your entire investment due to market volatility, technical issues, security breaches, or unforeseen circumstances. Only participate with funds you can afford to lose completely. DeHub and its affiliates assume no responsibility for any financial losses incurred."
  });

  useEffect(() => {
    const checkUserIP = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setShowEditControls(data.ip === '80.103.61.100');
      } catch (error) {
        console.log('Could not determine IP address');
        setShowEditControls(false);
      }
    };

    checkUserIP();
  }, []);

  const handleSave = () => {
    setIsEditing(false);
    // Content is automatically saved in state
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset to original content if needed
  };

  return (
    <div className="space-y-8">
      {/* Edit Controls - Only show for authorized IP */}
      {showEditControls && (
        <div className="flex justify-end">
          {!isEditing ? (
            <Button 
              onClick={() => setIsEditing(true)}
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <Edit3 className="w-4 h-4" />
              Edit Content
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button 
                onClick={handleSave}
                size="sm"
                className="flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Save
              </Button>
              <Button 
                onClick={handleCancel}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <X className="w-4 h-4" />
                Cancel
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Header */}
      <div className="text-center space-y-4">
        {isEditing ? (
          <div className="space-y-4">
            <input
              type="text"
              value={editableContent.title}
              onChange={(e) => setEditableContent({...editableContent, title: e.target.value})}
              className="text-4xl font-bold text-slate-900 bg-transparent border-b-2 border-slate-300 focus:border-slate-500 outline-none text-center w-full"
            />
            <Textarea
              value={editableContent.subtitle}
              onChange={(e) => setEditableContent({...editableContent, subtitle: e.target.value})}
              className="text-lg text-slate-600 text-center resize-none"
              rows={2}
            />
          </div>
        ) : (
          <>
            <h1 className="text-4xl font-bold text-slate-900">
              {editableContent.title}
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {editableContent.subtitle}
            </p>
          </>
        )}
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-2xl border border-slate-200 p-8">
        <div className="prose prose-slate max-w-none">
          {isEditing ? (
            <div className="space-y-6">
              <Textarea
                value={editableContent.paragraph1}
                onChange={(e) => setEditableContent({...editableContent, paragraph1: e.target.value})}
                className="text-lg leading-relaxed text-slate-700"
                rows={4}
              />
              <Textarea
                value={editableContent.paragraph2}
                onChange={(e) => setEditableContent({...editableContent, paragraph2: e.target.value})}
                className="text-lg leading-relaxed text-slate-700"
                rows={3}
              />
              <Textarea
                value={editableContent.paragraph3}
                onChange={(e) => setEditableContent({...editableContent, paragraph3: e.target.value})}
                className="text-lg leading-relaxed text-slate-700"
                rows={4}
              />
              <Textarea
                value={editableContent.paragraph4}
                onChange={(e) => setEditableContent({...editableContent, paragraph4: e.target.value})}
                className="text-lg leading-relaxed text-slate-700"
                rows={2}
              />
              <Textarea
                value={editableContent.paragraph5}
                onChange={(e) => setEditableContent({...editableContent, paragraph5: e.target.value})}
                className="text-lg leading-relaxed text-slate-700"
                rows={2}
              />
              <Textarea
                value={editableContent.paragraph6}
                onChange={(e) => setEditableContent({...editableContent, paragraph6: e.target.value})}
                className="text-lg leading-relaxed text-slate-700"
                rows={1}
              />
            </div>
          ) : (
            <>
              <p className="text-lg leading-relaxed text-slate-700 mb-6">
                {editableContent.paragraph1}
              </p>
              <p className="text-lg leading-relaxed text-slate-700 mb-6">
                {editableContent.paragraph2}
              </p>
              <p className="text-lg leading-relaxed text-slate-700 mb-6">
                {editableContent.paragraph3}
              </p>
              <p className="text-lg leading-relaxed text-slate-700 mb-6">
                {editableContent.paragraph4}
              </p>
              <p className="text-lg leading-relaxed text-slate-700 mb-6">
                {editableContent.paragraph5}
              </p>
              <p className="text-lg leading-relaxed text-slate-700 mb-8">
                {editableContent.paragraph6}
              </p>
            </>
          )}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
        <div className="flex items-start space-x-3">
          <Shield className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
          <div className="flex-1">
            {isEditing ? (
              <div className="space-y-3">
                <input
                  type="text"
                  value={editableContent.disclaimerTitle}
                  onChange={(e) => setEditableContent({...editableContent, disclaimerTitle: e.target.value})}
                  className="text-lg font-semibold text-amber-800 bg-transparent border-b border-amber-300 focus:border-amber-500 outline-none w-full"
                />
                <Textarea
                  value={editableContent.disclaimerText}
                  onChange={(e) => setEditableContent({...editableContent, disclaimerText: e.target.value})}
                  className="text-amber-700 text-sm leading-relaxed bg-amber-50"
                  rows={6}
                />
              </div>
            ) : (
              <>
                <h3 className="text-lg font-semibold text-amber-800 mb-3">
                  {editableContent.disclaimerTitle}
                </h3>
                <p className="text-amber-700 text-sm leading-relaxed">
                  {editableContent.disclaimerText}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
