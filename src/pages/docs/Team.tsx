
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ExternalLink, Users } from 'lucide-react';
const teamMembers = [{
  name: 'Malik Jan',
  role: 'Co-Founder',
  bio: "Founder of U.K registered Web3 developers DeLabs LTD and Co-founder of Puso group, a SEC licensed construction & development company in the Philippines.",
  experience: ["Guide Dogs: Raised >$1m as fundraising manager with a team of 5-10 across multiple sectors", "Randstad: Senior consultant at $8bn dollar market cap and world's largest agency", "Blue Arrow: Biggest biller & award winning consultant at UK's largest agency with >600 staff & 70 offices nationwide. Producing personal net margins in excess of $10,000 per week & hiring thousands in the process with >100 full or part time staff at any one time", "ITS Construction: Sussex regional manager launching offices at leading UK construction agency with 20 offices nationwide"],
  socials: [{
    platform: 'LinkedIn',
    url: 'https://uk.linkedin.com/in/malik-jan-turkistani-842b4b195'
  }, {
    platform: 'X',
    url: 'https://x.com/maldoteth'
  }],
  initials: 'MJ',
  photo: '/lovable-uploads/361bb373-38ee-4888-a4b1-ab8239941261.png'
}, {
  name: 'Mike Hales',
  role: 'Co-founder',
  bio: "Rising social media star & owner of the UK's largest official TikTok partner agency, First Class, with 400 influencers exclusively signed to his books.",
  experience: ["Selected by TikTok executives after 10 months of leading the UK charts with his live streams", "Digital and mixed martial artist behind the Lean Chad Fight Club and Rapz Sport", "Owner of the UK's leading cobra bag provider that recently merged with NGNE"],
  socials: [{
    platform: 'TikTok',
    url: 'https://www.tiktok.com/@mikehalesmma?lang=en'
  }, {
    platform: 'X',
    url: 'https://x.com/Mikehalesmma'
  }, {
    platform: 'Instagram',
    url: 'https://www.instagram.com/mikehalesmma'
  }],
  initials: 'MH',
  photo: '/lovable-uploads/4cc7ad51-0d4d-49fd-9307-b932b6dc7246.png'
}, {
  name: 'Indi Jay Cammish',
  role: 'Co-Founder',
  bio: 'Social media, content & dance expert overseeing communications & corporate relations.',
  experience: ["Highly experienced working directly alongside global stars such as Mabel on long term world tours", "Performed at the Platinum Party at The Palace event for her majesty, the Queen of England in the summer of 2022", "Co-founder of First Class, the UK's leading TikTok partner agency"],
  socials: [{
    platform: 'Instagram',
    url: 'https://www.instagram.com/indijayofficial/?hl=es'
  }, {
    platform: 'X',
    url: 'https://x.com/indijaycammish'
  }, {
    platform: 'TikTok',
    url: 'https://www.tiktok.com/@indijaycammish'
  }],
  initials: 'IC',
  photo: '/lovable-uploads/e06bb6aa-5093-4691-98a1-7bf09b02a71d.png'
}, {
  name: 'Bailey Young',
  role: 'Co-Founder',
  bio: 'Operational powerhouse and former pro-gamer heavily connected across the gaming, music & entertainment scene.',
  experience: ["Investments and tokenomics expert who played an instrumental role in the astronomic growth of DeHub in 2021", "Oversaw the Blocjerk fundraise of $1,000,000 in 2023 which gave a peak ROI of 1,000%", "Former professional gamer, ranking globally in the top 3 COD MW2 and top 100 on Warzone under the tag RickyBobby"],
  socials: [],
  initials: 'BY',
  photo: '/lovable-uploads/980e65e0-cae8-4ed4-86da-c11e3d42fa69.png'
}];
export default function Team() {
  return <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <Users className="w-8 h-8 text-blue-600" />
          <h1 className="text-4xl font-bold text-slate-800">Team</h1>
        </div>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Meet the innovative minds behind DeHub - a diverse team of entrepreneurs, 
          social media experts, and gaming professionals driving the future of decentralized entertainment.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {teamMembers.map((member, index) => <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center space-y-4">
              <Avatar className="w-20 h-20 mx-auto">
                {member.photo ? <AvatarImage src={member.photo} alt={member.name} className="object-cover" /> : null}
                <AvatarFallback className="text-lg font-semibold bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <p className="text-blue-600 font-medium">{member.role}</p>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Bio */}
              <p className="text-slate-700 leading-relaxed">{member.bio}</p>
              
              {/* Experience */}
              {member.experience && <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Experience:</h4>
                  <ul className="space-y-2">
                    {member.experience.map((exp, idx) => <li key={idx} className="text-sm text-slate-600 flex">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>{exp}</span>
                      </li>)}
                  </ul>
                </div>}
              
              {/* Social Links */}
              {member.socials.length > 0 && <div className="flex space-x-2 pt-4 border-t border-slate-200">
                  {member.socials.map((social, idx) => <Button key={idx} variant="outline" size="sm" asChild>
                      <a href={social.url} className="flex items-center space-x-1">
                        <span>{social.platform}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>)}
                </div>}
            </CardContent>
          </Card>)}
      </div>
    </div>;
}
