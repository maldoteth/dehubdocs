
import React from 'react';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { DAppHeader } from '@/components/dapp/DAppHeader';
import { DAppUpload } from '@/components/dapp/DAppUpload';
import { DAppTokenization } from '@/components/dapp/DAppTokenization';
import { DAppBadgeSystem } from '@/components/dapp/DAppBadgeSystem';
import { DAppSuperpowers } from '@/components/dapp/DAppSuperpowers';

const Dapp = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      <ErrorBoundary>
        <DAppHeader />
      </ErrorBoundary>

      <ErrorBoundary>
        <DAppUpload />
      </ErrorBoundary>

      <ErrorBoundary>
        <DAppTokenization />
      </ErrorBoundary>

      <ErrorBoundary>
        <DAppBadgeSystem />
      </ErrorBoundary>

      <ErrorBoundary>
        <DAppSuperpowers />
      </ErrorBoundary>
    </div>
  );
};

export default Dapp;
