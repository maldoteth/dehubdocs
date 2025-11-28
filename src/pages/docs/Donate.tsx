import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Donate = () => {
  const { toast } = useToast();
  const [copiedAddress, setCopiedAddress] = React.useState<string | null>(null);

  const addresses = [
    {
      network: 'EVM (Ethereum, BNB, Polygon, etc.)',
      address: '0x1759ceb6255dbebfe2c0c51edbcd29ad7efb9229',
      icon: '⟠'
    },
    {
      network: 'Bitcoin (BTC)',
      address: 'bc1qldncd2fejalxjjpa4z5rhkd8rnd0lmchvpdxr2',
      icon: '₿'
    }
  ];

  const copyToClipboard = (address: string, network: string) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(address);
    toast({
      title: "Address Copied",
      description: `${network} address copied to clipboard`,
    });
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-royal-blue to-middle-blue mb-4">
          <Heart className="w-8 h-8 text-red-500" />
        </div>
        <h1 className="text-4xl font-bold text-jet-black font-exo">Donate</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Support the DeHub ecosystem
        </p>
      </div>

      {/* About Section */}
      <Card className="border-gray-200 bg-gradient-to-br from-plain-white to-gray-50">
        <CardHeader>
          <CardTitle className="text-jet-black font-exo">About DeHub</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-700">
          <p>
            DeHub is a non-profit, decentralised, user-owned protocol. All net profit is used to buy back and share $DHB tokens with stakeholders.
          </p>
          <p>
            All revenue is spent in accordance with DAO proposals, ensuring 100% reinvestment into the ecosystem. DeHub will forever be maintained as a public good through revenue and donations.
          </p>
        </CardContent>
      </Card>

      {/* Donation Addresses */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-jet-black font-exo">Donation Addresses</h2>
        <div className="grid gap-4">
          {addresses.map((item) => (
            <Card key={item.network} className="border-gray-200 hover:border-royal-blue/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{item.icon}</span>
                      <h3 className="font-semibold text-jet-black">{item.network}</h3>
                    </div>
                    <p className="font-mono text-sm text-gray-600 break-all bg-gray-100 p-3 rounded-lg">
                      {item.address}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(item.address, item.network)}
                    className="shrink-0"
                  >
                    {copiedAddress === item.address ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Thank You */}
      <Card className="border-royal-blue/20 bg-gradient-to-r from-royal-blue/5 to-middle-blue/5">
        <CardContent className="p-6 text-center">
          <Heart className="w-8 h-8 text-royal-blue mx-auto mb-3" />
          <p className="text-gray-700">
            Thank you for supporting the DeHub community and helping us build a better decentralised future.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Donate;
