import SEO from '@/components/SEO';

export default function TokenBridge() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <SEO 
        title="Bridge - DeHub Documentation"
        description="Learn how to bridge DHB tokens between BASE and BNB chains with DeHub's cross-chain bridge solution."
        url="/docs/token/bridge"
      />
      
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-6">Bridge</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Cross-chain token bridging between BASE and BNB networks.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-card rounded-lg p-6 border">
            <h2 className="text-2xl font-semibold mb-4">Bridge to BASE from BNB</h2>
            <p className="mb-4">
              To bridge to BASE from BNB simply send your tokens to this address. No fees deducted.
            </p>
            <div className="bg-muted p-4 rounded-md font-mono text-sm break-all">
              0x680D3113caf77B61b510f332D5Ef4cf5b41A761D
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 border">
            <h2 className="text-2xl font-semibold mb-4">Bridge to BNB from BASE</h2>
            <p className="mb-4">
              To bridge to BNB from Base simply send your tokens to this address. No fees deducted.
            </p>
            <div className="bg-muted p-4 rounded-md font-mono text-sm break-all">
              0x11D79aE9a0F8a8f9Fcf5BE71e403ed203EC2394d
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Processing Time</h3>
            <p className="mb-4">
              All bridge requests are distributed within 1-5 business days.
            </p>
            <p className="text-sm text-muted-foreground">
              The automated bridge is being improved & released soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}