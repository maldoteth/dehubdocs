import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

const Terms = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-royal-blue font-exo">
          Legal Disclaimer
        </h1>
        
        <div className="text-royal-blue/70 space-y-1 font-exo">
          <p><strong>Last updated:</strong> Tuesday, September 22, 2022</p>
          <p><strong>Effective:</strong> July 15, 2021</p>
        </div>
      </div>

      {/* Legal Disclaimer Card */}
      <Card className="border-sky-blue/20">
        <CardHeader>
          <CardTitle className="text-2xl text-royal-blue font-exo">Legal Disclaimer</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-royal-blue/80 leading-relaxed font-exo">
          <p>
            DeHub is a protocol built and managed by DeLabs LTD (14204474) office 4, 219 Kensington Highstreet, London, UK, W68BD.
          </p>

          <p>
            All information provided directly or indirectly by the DeHub team, community or affiliates is for general information purposes or promotions only. It does not constitute investment or financial advice, recommendations or any form of solicitation. Any information provided is at all times subject to change by the sole discretion of DeHub Group and should this occur, all users will be notified by our social channels. There is no presale or premine of the DeHub Tokens and only liquidity generation events also referred to as LGEs where all funds raised are added to liquidity pools to facilitate trading. At no point will DeHub use promotional materials to solicit investment in DeHub. Through the development of DeHub, we do not grant any rights, express or implied, other than the right to use DeHub on the DeHub Platform or within the DAO. In particular, DeHub expressly denies any ability of the DeHub token to represent or confer any ownership right or stake, share, security, or equivalent rights, or any right to receive future revenue shares, intellectual property rights or any other form of participation in or relating to any DeHub product and/or DeHub and/or any of its corporate affiliates. DeHub created the DeHub tokens as decentralised smart contracts, and in no way are meant to be a security, commodity or any kind of financial instrument.
          </p>

          <p>
            DeHub reserves the right to reject any usage of DeHub tokens on the DeHub Platform. DeHub rejects any responsibility for any direct or consequential loss or damage of any kind whatsoever arising directly or indirectly from: (i) reliance on any information provided, (ii) any error, omission or inaccuracy in any such information; or (iii) any action resulting from such information.
          </p>

          <p>
            To the fullest extent permitted by applicable law and except as otherwise specified in writing by DeHub: (i) DeHub tokens are airdropped on an "as is" and "as available" basis without warranties of any kind, and DeHub expressly disclaims all implied warranties as to the DeHub tokens, including, without limitation, implied warranties of merchantability, fitness for a particular purpose, title and non-infringement; (ii) DeHub does not represent or warrant that the DeHub tokens are reliable, current or error-free, or that technical defects in the DeHub tokens will be corrected; and (iii) DeHub cannot and does not represent or warrant that the DeHub tokens or the delivery mechanism for DeHub tokens are free of viruses or other harmful components.
          </p>

          <p>
            No terms in this website, or any other DeHub documentation or information constitute a prospectus, an offer document of any sort, or are intended to constitute an offer of securities, or a solicitation for investment in securities in any jurisdiction. If you decide to participate and receive DeHub tokens, please note that any DeHub platform contribution and/or participation does not represent, constitute or involve the exchange of value for any form of securities, investment units and/or form of ordinary shares in any project, in any platform, in DeHub, or any other related company. Digital assets are a new frontier and technical innovation so come with volatility and unpredictability. Only part ways with what you can afford to lose. Operating on the BNB chain where KYC is required at all intermediaries, DeHub exercises third party issuer liability and all KYC related enquiries should be made with the respective BNB issuer.
          </p>

          <p>
            This website, and the Website, in any part thereof and any copy thereof must not be transmitted to any country where distribution or dissemination of these documents and its information is prohibited or restricted. No regulatory authority has examined or approved to this date of any of the information set out in this document. The publication, distribution or dissemination of these terms do not imply that the applicable laws, regulatory requirements or rules have been complied with.
          </p>

          <p>
            To the fullest extent permitted by the applicable laws, regulations and rules, DeHub, its founders, team members and any third party involved in the project shall not be liable for any direct, indirect, special, incidental, consequential or other losses of any kind, in tort, contract or otherwise (including but not limited to loss of revenue, income or profits, and loss of use or data), arising out of or in connection with any acceptance of or reliance on the information in this website, or any part thereof and/or information provided on the DeHub web page.
          </p>

          <p>
            To the fullest extent permitted by applicable law: (i) in no event will DeHub or any of the company parties be liable for any indirect, special, incidental, consequential, or exemplary damages of any kind (including, but not limited to, where related to loss of revenue, income or profits, loss of use or data, or damages for business interruption) arising out of or in any way related to the distribution or use of DeHub, regardless of the form of action, whether based in contract, tort (including, but not limited to, simple negligence, whether active, passive or imputed), or any other legal or equitable theory (even if the party has been advised of the possibility of such damages and regardless of whether such damages were foreseeable); and (ii) in no event will the aggregate liability of DeHub and affiliate parties (jointly), whether in contract, warranty, tort (including negligence, whether active, passive or imputed), or other theory, arising out of or relating to DeHub or the use of or inability to use DeHub.
          </p>

          <p>
            All statements on this website or originating from any connection to the DeHub entity on social mediums or those made in press releases or in any place accessible by the public both verbally, orally or written from its founders, team members or any third party acting on behalf of DeHub or statements of historical fact constitute "forward-looking statements". No information provided should be considered to be business, legal, financial or advice regarding contribution or participation to the development of the DeHub network and any of its projects. DeHub does not make or intends to make, and hereby disclaims, any representation, warranty or undertaking in any form whatsoever to any entity or person, including any representation, warranty or undertaking in relation to the truth, accuracy, and completeness of any of the information set out on our website.
          </p>

          <p>
            All DeHub recipients are responsible for implementing reasonable measures for securing their own wallet, vault or other storage mechanism used to receive and hold DeHub tokens, including any requisite private key(s) or other credentials necessary to access such storage mechanism(s). If any private key(s) or other access credentials are lost, the holder may lose access to their DeHub Tokens. DeHub is not responsible for any losses, costs or expenses relating to lost access credentials. DeHub shall have no obligations in any form or whatsoever to you in respect of DeHub token management. It is the token holder's entire responsibility to withhold, collect, report and remit the correct taxes to the appropriate tax authorities regarding any received DeHub tokens. DeHub will never hold custody of funds or your seed phrase nor would we or anybody associated to DeHub ever ask you for this information under any circumstance.
          </p>
        </CardContent>
      </Card>

      {/* Important Notice */}
      <Card className="border-orange-200 bg-orange-50/50">
        <CardHeader>
          <CardTitle className="text-xl text-orange-800 font-exo flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2" />
            Important Notice
          </CardTitle>
        </CardHeader>
        <CardContent className="text-orange-700 font-exo">
          <p className="font-semibold mb-2">Disclaimer:</p>
          <p>
            DeHub tokens are strictly for utility purposes in the same way that any in-game or in-app digital tokens or currencies and strictly not an investment. As our token lives on-chain, we can offer added utility as well as unprecedented levels of verifiable transparency. The above data is solely compiled for transparency, educational and informative purposes only. DeHub and all affiliates hold no liability for financial losses incurred from purchasing any tokens or NFTs we release. Markets are highly volatile. You could also lose all your money due to any unforeseen errors such as competency failures, technical error, hacks and so on. Therefore, you should only ever spend what you can afford to lose.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Terms;
