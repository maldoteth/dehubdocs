import React from 'react';
import { Cpu, Network, Shield, Zap, Calculator } from 'lucide-react';
const DePIN = () => {
  return <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        
        
        <h1 className="text-4xl font-bold text-slate-900">
          DePIN
        </h1>
        
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">A Decentralised Physical Infrastructure Network (DePIN) of Shared Computing Power For True Censorship Resistance</p>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-2xl border border-slate-200 p-8">
        <div className="prose prose-slate max-w-none">
          {/* Abstract */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Abstract</h2>
            <p className="text-lg leading-relaxed text-slate-700">
              This whitepaper introduces a Decentralised Physical Infrastructure Network (DePIN) designed to scale and sustain DeHub. The system leverages shared computing power from a network of miners who contribute resources for data hosting, transcoding, and delivery. Miners are rewarded directly from application revenue and token transaction fees, ensuring a sustainable, inflation-free model. This paper outlines the technical framework, economic incentives, and implementation strategies for deploying this DePIN, enabling contributions from as little as a mobile device.
            </p>
          </section>

          {/* System Architecture */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">System Architecture</h2>
            <div className="bg-slate-100 p-6 rounded-lg font-mono text-sm mb-6">
              <pre className="whitespace-pre-wrap text-slate-700">
              {`----------------------        -----------------
|  DeHub Application |        |   End Users   |   - Start of data flow
----------------------        -----------------
         ⬇ ⬆                       ⬇ ⬆                                     
----------------------------------------------
|              DePIN Coordinator             |    - Tasking, encryption + decryption
----------------------------------------------
     ⬇                ⬇                ⬇                              
----------        -----------       -----------
| Mobile |        | PC/GC   |       | Server  |   - That provide computing power
| Miners |        | Miners  |       | Miners  |   - in exchange for DHB tokens
----------        -----------       -----------
    ⬇        ↙        ⬇       ↙↙ ↘     ⬇
-----------       -------------     ------------
| Hosting |       | Transcode |     | Deliver  |  - Content delivery network
-----------       -------------     ------------`}
              </pre>
            </div>
          </section>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Introduction</h2>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Challenges in Streaming and Gaming Platforms</h3>
            <p className="text-lg leading-relaxed text-slate-700 mb-6">
              Centralised infrastructure for streaming and gaming platforms faces challenges such as high operational costs, scalability limits, and susceptibility to censorship or outages. These challenges hinder the ability of platforms like DeHub to achieve its purpose of being a decentralised, permissionless and user owned protocol that lives forever on-chain while maintaining cost efficiency.
            </p>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200 mb-6">
              <div className="flex items-start space-x-3">
                <Network className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Solution: Shared Computing DePIN</h3>
                  <p className="text-green-700 mb-3">
                    By decentralising the infrastructure, DeHub can tap into a distributed network of computing power to address these challenges. A DePIN allows users to share their computing resources, ensuring:
                  </p>
                  <ul className="text-green-700 space-y-1 ml-4 list-disc">
                    <li><strong>Cost Efficiency:</strong> Lower hosting and delivery costs by using shared resources.</li>
                    <li><strong>Scalability:</strong> Dynamically grow the network as demand increases.</li>
                    <li><strong>Sustainability:</strong> Reward contributors directly from app revenues without token inflation.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Core Components */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Core Components</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Contributors (Miners)</h3>
                <p className="text-blue-700">Individuals providing computing resources via devices such as mobile phones, PCs, or dedicated servers.</p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                <h3 className="text-lg font-semibold text-purple-800 mb-2">DePIN Coordinator</h3>
                <p className="text-purple-700">A data encryption, decryption and smart contract system managing miner rewards, resource allocation, and task distribution.</p>
              </div>
              
              <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-200">
                <h3 className="text-lg font-semibold text-cyan-800 mb-2">DeHub Application</h3>
                <p className="text-cyan-700">The streaming and gaming app interfacing with the DePIN to request and deliver data.</p>
              </div>
              
              <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
                <h3 className="text-lg font-semibold text-amber-800 mb-2">Clients (End Users)</h3>
                <p className="text-amber-700">Users consuming content via DeHub.</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">Workflow</h3>
            <ol className="list-decimal ml-6 space-y-2 text-slate-700">
              <li><strong>Resource Sharing:</strong> Contributors register and allocate resources.</li>
              <li><strong>Task Assignment:</strong> The DePIN Coordinator assigns tasks such as hosting, transcoding, or delivery based on contributor capacity.</li>
              <li><strong>Revenue Sharing:</strong> Miners are compensated from a revenue pool funded by in-app revenue and token transaction fees.</li>
              <li><strong>Verification:</strong> Proof-of-computation mechanisms validate miners' contributions.</li>
            </ol>
          </section>

          {/* Incentive Model */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Incentive Model</h2>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200 mb-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Revenue Pool</h3>
              <p className="text-green-700 mb-3">The reward pool is composed of:</p>
              <ul className="text-green-700 space-y-1 ml-4 list-disc">
                <li><strong>In-App Revenue:</strong> A percentage of subscription fees, ad revenue, and in-app purchases.</li>
                <li><strong>Token Transaction Fees:</strong> A share of transaction fees from the $DHB token.</li>
              </ul>
            </div>

            <h3 className="text-lg font-semibold text-slate-800 mb-3">Distribution Mechanism</h3>
            <ul className="text-slate-700 space-y-1 ml-4 list-disc mb-6">
              <li>Rewards are distributed based on the volume and quality of contributions.</li>
              <li>Miners earn proportionally higher rewards for tasks requiring more resources or bandwidth.</li>
            </ul>
          </section>

          {/* Participation Requirements */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Participation Requirements</h2>
            
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Minimum Hardware Requirements</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-300 mb-6">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 px-4 py-2 text-left">Device Type</th>
                    <th className="border border-slate-300 px-4 py-2 text-left">Minimum Specs</th>
                    <th className="border border-slate-300 px-4 py-2 text-left">Supported Tasks</th>
                    <th className="border border-slate-300 px-4 py-2 text-left">Staking Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">Mobile Phones</td>
                    <td className="border border-slate-300 px-4 py-2">Quad-core CPU, 4GB RAM</td>
                    <td className="border border-slate-300 px-4 py-2">Hosting</td>
                    <td className="border border-slate-300 px-4 py-2">100,000 $DHB</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">PCs/Laptops</td>
                    <td className="border border-slate-300 px-4 py-2">4-core CPU, 8GB RAM, GPU</td>
                    <td className="border border-slate-300 px-4 py-2">Transcoding, Hosting, Delivery</td>
                    <td className="border border-slate-300 px-4 py-2">1,000,000 $DHB</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">Dedicated Servers</td>
                    <td className="border border-slate-300 px-4 py-2">8-core CPU, 16GB RAM, SSD</td>
                    <td className="border border-slate-300 px-4 py-2">High-volume Hosting, Delivery</td>
                    <td className="border border-slate-300 px-4 py-2">10,000,000 $DHB</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Software Setup</h3>
              <p className="text-blue-700">Miners install a lightweight client application that:</p>
              <ul className="text-blue-700 space-y-1 ml-4 list-disc mt-2">
                <li>Connects to the DePIN network.</li>
                <li>Reports available resources.</li>
                <li>Executes assigned tasks.</li>
              </ul>
            </div>
          </section>


          {/* Scalability and Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Scalability and Security</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <div className="flex items-start space-x-3">
                  <Zap className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Dynamic Task Allocation</h3>
                    <p className="text-blue-700 mb-2">Tasks are distributed based on:</p>
                    <ul className="text-blue-700 text-sm space-y-1 ml-4 list-disc">
                      <li>Current demand</li>
                      <li>Contributor capacity</li>
                      <li>Proximity to end users</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Proof-of-Computation</h3>
                    <p className="text-green-700">
                      A lightweight proof-of-computation mechanism ensures tasks are completed reliably. Rewards are only issued upon verification.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Conclusion</h2>
            <p className="text-lg leading-relaxed text-slate-700 mb-4">
              The proposed DePIN enables truly decentralised, censorship resistant, limitlessly scalable, and cost-efficient infrastructure for DeHub. By leveraging shared computing power and rewarding miners directly from revenue, the system avoids inflation and ensures long-term sustainability.
            </p>
            <p className="text-lg leading-relaxed text-slate-700 mb-4">
              This model empowers anyone with spare computing resources, from mobile phones to servers, to participate in and benefit from DeHub's growth. In order to disrupt this behemoth of an industry, one requires billionaire backing or true innovation, just like this DePIN.
            </p>
            <p className="text-sm text-slate-600 italic">
              *The full code will be open sourced upon completion.
            </p>
          </section>
        </div>
      </div>
    </div>;
};
export default DePIN;