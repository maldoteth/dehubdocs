
import React, { useState, useEffect } from 'react';
import { ScrollText, Gamepad2, Users, Shield, Zap, Globe, Edit3, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const Overview = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showEditControls, setShowEditControls] = useState(false);
  const [editableContent, setEditableContent] = useState({
    title: "Overview",
    subtitle: "An overview of our past, present and future.",
    paragraph1: "DeHub is a next-generation gaming and streaming protocol, sustainably scaled through our proprietary DePIN infrastructure for content hosting, transcoding, and delivery. Built by a team of gamers and streamers, we harness cutting-edge advances in blockchain, AI, and open-source technology to tackle the limitations of legacy media platforms—such as censorship, demonetisation, deplatforming, algorithm manipulation, opaque earnings, and lack of data ownership.",
    paragraph2: "Our seamless user experience abstracts away the complexities of crypto—wallet creation, onboarding, and transaction confirmations—while ensuring that every interaction remains on-chain and publicly verifiable through our leaderboards. No crypto knowledge required.",
    paragraph3: "DeHub empowers creators with innovative tools for content creation, monetisation, and community building. Host PPV events, launch Watch2Earn experiences, or share token-gated content—all without banks or KYC. Retain full ownership of your content and audience data in a censorship-resistant, creator-first ecosystem.",
    paragraph4: "Join us in building the network of the future—a user-owned creator economy where value flows directly to those who earn it, free from intermediaries.",
    paragraph5: "Before rebranding, we proudly operated as Futurov (FTV), earning a growing user base on our Web2 streaming app with rave reviews on the Google Play Store.",
    paragraph6: "An in-depth overview of our dApps and technical infrastructure follows.",
    disclaimerTitle: "Disclaimer",
    disclaimerText: "DeHub tokens are strictly for utility purposes in the same way that any in-game or in-app digital tokens or currencies and strictly not an investment. As our token lives on-chain, we can offer added utility as well as unprecedented levels of verifiable transparency. The above data is solely compiled for transparency, educational and informative purposes only. DeHub and all affiliates hold no liability for financial losses incurred from purchasing any tokens or NFTs we release. Markets are highly volatile. You could also lose all your money due to any unforeseen errors such as competency failures, technical error, hacks and so on. Therefore, you should only ever spend what you can comfortably afford to lose."
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
