import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageCircle, Send, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  
  const contactOptions = [
    {
      title: 'Telegram',
      description: 'Join our Telegram community',
      link: 'https://t.me/dehub_dhb',
      icon: Send,
      color: 'from-sky-blue to-middle-blue'
    },
    {
      title: 'Discord',
      description: 'Connect with us on Discord',
      link: 'https://discord.gg/dehub',
      iconImage: '/lovable-uploads/71547e53-6be8-428a-b088-3c07a9c9a1ff.png',
      color: 'from-middle-blue to-royal-blue'
    },
    {
      title: 'Direct Message',
      description: 'DM on DeHub',
      link: 'https://dehub.io/d',
      icon: MessageCircle,
      color: 'from-royal-blue to-sky-blue'
    }
  ];

  const emailContacts = [
    {
      title: 'Technical Support',
      email: 'tech@dehub.net',
      description: 'For technical issues and development inquiries'
    },
    {
      title: 'Marketing',
      email: 'marketing@dehub.net',
      description: 'For partnerships and marketing opportunities'
    },
    {
      title: 'Human Resources',
      email: 'hr@dehub.net',
      description: 'For career opportunities and HR matters'
    }
  ];

  const communityChannels = [
    {
      title: 'Turkish',
      description: 'Turkish speaking community',
      link: 'https://t.me/Dehub_Turkish',
      icon: Send,
      color: 'from-sky-blue to-middle-blue'
    },
    {
      title: 'Arabic',
      description: 'Arabic speaking community',
      link: 'https://t.me/Dehub_Arabic',
      icon: Send,
      color: 'from-middle-blue to-royal-blue'
    },
    {
      title: 'Hindi',
      description: 'Hindi speaking community',
      link: 'https://t.me/dehub_hindi',
      icon: Send,
      color: 'from-royal-blue to-sky-blue'
    },
    {
      title: 'China',
      description: 'Chinese speaking community',
      link: 'https://t.me/dehub_china',
      icon: Send,
      color: 'from-sky-blue to-royal-blue'
    },
    {
      title: 'Indonesia',
      description: 'Indonesian speaking community',
      link: 'https://t.me/dehub_indonesia',
      icon: Send,
      color: 'from-sky-blue to-middle-blue'
    },
    {
      title: 'Germany',
      description: 'German speaking community',
      link: 'https://t.me/dehub_dach',
      icon: Send,
      color: 'from-middle-blue to-royal-blue'
    },
    {
      title: 'Vietnam',
      description: 'Vietnamese speaking community',
      link: 'https://t.me/dehub_vietnam',
      icon: Send,
      color: 'from-royal-blue to-sky-blue'
    },
    {
      title: 'Philippines',
      description: 'Filipino speaking community',
      link: 'https://t.me/DeHub_Philippines',
      icon: Send,
      color: 'from-sky-blue to-royal-blue'
    }
  ];

  const gatedChannels = [
    {
      title: 'Holders',
      description: 'Exclusive channel for token holders',
      link: 'https://t.me/c/2488788799/1/10563',
      icon: Users,
      color: 'from-royal-blue to-sky-blue'
    },
    {
      title: 'Whales',
      description: 'For holders over 10m DHB tokens',
      link: 'https://t.me/c/2488788799/1/10563',
      icon: Users,
      color: 'from-sky-blue to-royal-blue'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-royal-blue font-exo">Contact Us</h1>
        <p className="text-xl text-royal-blue/70 max-w-2xl mx-auto font-exo">
          Get in touch with our team through any of the channels below. We're here to help and answer your questions.
        </p>
      </div>

      {/* Quick Contact Options */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-royal-blue font-exo">Quick Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactOptions.map((option) => (
            <a
              key={option.title}
              href={option.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <Card className="border-sky-blue/20 hover:border-sky-blue/40 transition-all duration-200 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    {option.iconImage ? (
                      <img src={option.iconImage} alt={option.title} className="w-8 h-8 filter brightness-0" />
                    ) : (
                      <option.icon className="w-8 h-8 text-royal-blue" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-royal-blue mb-2 font-exo">{option.title}</h3>
                  <p className="text-royal-blue/70 text-sm font-exo">{option.description}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>

      {/* Community Channels */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-royal-blue font-exo">Community Channels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {communityChannels.map((channel) => (
            <a
              key={channel.title}
              href={channel.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <Card className="border-sky-blue/20 hover:border-sky-blue/40 transition-all duration-200 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <channel.icon className="w-8 h-8 text-royal-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-royal-blue mb-2 font-exo">{channel.title}</h3>
                  <p className="text-royal-blue/70 text-sm font-exo">{channel.description}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>

      {/* Gated Channels */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-royal-blue font-exo">Gated Channels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gatedChannels.map((channel) => (
            <a
              key={channel.title}
              href={channel.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <Card className="border-sky-blue/20 hover:border-sky-blue/40 transition-all duration-200 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <channel.icon className="w-8 h-8 text-royal-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-royal-blue mb-2 font-exo">{channel.title}</h3>
                  <p className="text-royal-blue/70 text-sm font-exo">{channel.description}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>

      {/* Email Contacts */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-royal-blue font-exo">Email Contacts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {emailContacts.map((contact) => (
            <Card key={contact.email} className="border-sky-blue/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-royal-blue font-exo flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-middle-blue" />
                  {contact.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-middle-blue hover:text-royal-blue font-medium font-exo block mb-2"
                >
                  {contact.email}
                </a>
                <p className="text-royal-blue/70 text-sm font-exo">{contact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <Card className="bg-gradient-to-r from-royal-blue to-middle-blue border-0">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-plain-white mb-4 font-exo">Need Help?</h3>
          <p className="text-plain-white mb-6 font-exo">
            Join our community for real-time support and discussions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://t.me/dehub_dhb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-plain-white text-royal-blue font-semibold rounded-lg hover:bg-sky-blue/10 transition-all duration-200 font-exo"
            >
              <Send className="w-4 h-4 mr-2" />
              Join Telegram
            </a>
            <a
              href="https://discord.gg/dehub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-plain-white text-plain-white font-semibold rounded-lg hover:bg-plain-white/10 transition-all duration-200 font-exo"
            >
              <Users className="w-4 h-4 mr-2" />
              Join Discord
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
