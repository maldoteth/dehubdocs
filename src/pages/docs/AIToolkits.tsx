
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OptimizedImage } from "@/components/OptimizedImage";

const AIToolkits = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">AI Toolkits</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Your Personal AI Assistant</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-center mb-6">
            <OptimizedImage
              src="/lovable-uploads/b02ef883-d180-40ea-837a-a7e4b10f544b.png"
              alt="AI Toolkits Interface"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          
          <p className="text-lg leading-relaxed">
            DeHub users will soon have their very own uncensored AI assistant and full toolkit suite directly in-app.
          </p>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Features include but are not limited to:</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                Help create & perfect content
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                Automate engagement and tipping
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                Aid with finance management and payments
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                Track, analyse, and monitor performance & trends
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                Translate and clarify content for a global audience
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIToolkits;
