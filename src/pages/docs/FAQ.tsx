import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SEO from '@/components/SEO';

const FAQ = () => {
  const faqData = [
    {
      question: "What is DeHub?",
      answer: "DeHub is a decentralised user owned alternative to legacy media apps such as X, Facebook, YouTube and Rumble, that utilises the advancements in blockchain technology to offer users a whole new world of possibilities."
    },
    {
      question: "What is the DHB token used for?",
      answer: "DHB tokens provide utility across the entire DeHub ecosystem including access to games and content, global transactions, tipping creators, purchasing on the NFT marketplace, governance voting, staking for rewards, and network security."
    },
    {
      question: "How does DeHub's governance system work?",
      answer: "DeHub uses a novel fair voting logic where stakeholder weight is multiplied by limited amounts to prevent whale manipulation. Each vote requires burning 50 DHB tokens to discourage bad actors while incentivizing meaningful participation."
    },
    {
      question: "Where can I buy DHB tokens?",
      answer: "DHB tokens are available on various exchanges. Check our 'Where to Buy' section for the most up-to-date list of supported exchanges and trading pairs."
    },
    {
      question: "Can I stake DHB tokens?",
      answer: "Yes, you can stake DHB tokens to earn real yield from protocol revenue buybacks and x-2-earn rewards. Staking also helps secure the network and provides enhanced rights within the ecosystem."
    },
    {
      question: "What games are available on DeHub?",
      answer: "DeHub offers various blockchain-integrated games where you can earn rewards, compete in tournaments, and use DHB tokens for in-game purchases and enhanced features."
    },
    {
      question: "How does the DePIN infrastructure work?",
      answer: "DeHub's DePIN (Decentralized Physical Infrastructure Network) allows users to contribute computing resources and earn rewards while helping to build a decentralized infrastructure network."
    },
    {
      question: "What are DeHub's AI Toolkits?",
      answer: "Our AI Toolkits provide developers and users with advanced AI-powered tools and services integrated into the DeHub ecosystem, enhancing functionality across d'Apps and games."
    },
    {
      question: "How does advertising work on DeHub?",
      answer: "DeHub offers a decentralized advertising platform where advertisers can create campaigns, target specific audiences, and pay with DHB tokens. Content creators can earn rewards for displaying relevant ads."
    },
    {
      question: "Is DeHub secure?",
      answer: "Yes, DeHub has undergone security audits by Certik and maintains a bug bounty program. We prioritize security across all our smart contracts and infrastructure."
    },
    {
      question: "What is the total supply of DHB tokens?",
      answer: "DeHub follows a carefully designed tokenomics model with controlled emissions and buyback mechanisms. Check our Token Economics section for detailed supply information and distribution schedules."
    },
    {
      question: "How can I participate in DeHub governance?",
      answer: "DHB token holders can participate in governance by voting on protocol decisions, content productions, and Hub Improvement Proposals (HIPs). Remember that each vote requires burning 50 DHB tokens."
    },
    {
      question: "What are the benefits of holding DHB tokens?",
      answer: "Benefits include access to enhanced features, global transactions, creator tipping, NFT marketplace purchases, governance rights, staking rewards, network security participation, and future utility expansions."
    },
    {
      question: "Can I tip content creators on DeHub?",
      answer: "Yes, you can tip creators and reward viewers by attaching bounties to published or token-locked content using DHB tokens."
    },
    {
      question: "What is the Phygital NFT Marketplace?",
      answer: "Our marketplace allows users to purchase digital collectibles, physical assets, and services using DHB tokens, bridging the gap between physical and digital ownership."
    },
    {
      question: "How do I access DeHub's d'Apps?",
      answer: "You can access DeHub's d'Apps through our main platform. DHB token holders get enhanced features and functionality across all current and future d'Apps."
    },
    {
      question: "What is DeHub's roadmap?",
      answer: "Our roadmap includes expanding the d'App ecosystem, launching new games, enhancing DePIN infrastructure, developing AI toolkits, and officially launching governance in early 2026."
    },
    {
      question: "How can I contact the DeHub team?",
      answer: "You can reach us through our official channels: tech@dehub.net for technical issues, or follow us on Twitter and Instagram @dehub_official for updates and community engagement."
    },
    {
      question: "Are DHB tokens an investment?",
      answer: "No, DHB tokens are strictly for utility purposes within the DeHub ecosystem, similar to in-game or in-app digital currencies. They are not investment instruments and markets are highly volatile."
    },
    {
      question: "How does content moderation work on DeHub?",
      answer: "DeHub uses a decentralized content moderation system where community members can participate in dispute management and content moderation to earn rewards while maintaining platform quality."
    }
  ];

  return (
    <>
      <SEO 
        title="Frequently Asked Questions" 
        description="Find answers to common questions about DeHub, DHB tokens, governance, staking, games, and our decentralized ecosystem." 
        url="/docs/faq" 
      />
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Find answers to the most common questions about DeHub, our token ecosystem, and platform features.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-slate-800">Common Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="space-y-2">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 rounded-lg px-4">
                  <AccordionTrigger className="text-left font-medium text-slate-700 hover:text-slate-900 py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-xl text-blue-800">Still Have Questions?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-700 leading-relaxed mb-4">
              Can't find what you're looking for? Our team is here to help!
            </p>
            <div className="space-y-2">
              <p className="text-blue-600">
                <strong>Technical Support:</strong> <a href="mailto:tech@dehub.net" className="underline hover:text-blue-800">tech@dehub.net</a>
              </p>
              <p className="text-blue-600">
                <strong>Follow Us:</strong> <a href="https://x.com/dehub_official" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">@dehub_official</a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default FAQ;
