import React from 'react';
import { Lock, Shield, Key, CheckCircle, XCircle, AlertTriangle, Zap, Clock, QrCode, Smartphone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
const E2EEncryption = () => {
  return <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-slate-900">End To End Encryption</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Military-grade privacy protection for your conversations
        </p>
      </div>

      {/* How DeHub's E2EE Works */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Lock className="w-7 h-7 text-slate-700" />
            How DeHub's End-to-End Encryption Works
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
            <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              🔒 Military-Grade Privacy Protection
            </h3>
            <p className="text-green-700">
              At DeHub, we've implemented military-grade End-to-End Encryption (E2EE) to ensure your conversations remain completely private. When you send a message, only you and your recipient can read it—not even DeHub's servers have access to your decrypted messages.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* What Makes Our E2EE Secure */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Shield className="w-7 h-7 text-slate-700" />
            🛡️ What Makes Our E2EE Secure?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Zero-Trust Architecture */}
          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Zero-Trust Architecture</h3>
            <p className="text-slate-700 mb-3">
              We use audited, zero-dependency cryptographic libraries from the @noble suite—the same cryptographic foundation trusted by security experts worldwide:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="text-slate-700">
                <code className="bg-slate-100 px-2 py-1 rounded text-sm">@noble/ciphers</code> - For authenticated encryption
              </li>
              <li className="text-slate-700">
                <code className="bg-slate-100 px-2 py-1 rounded text-sm">@noble/curves</code> - For elliptic curve cryptography
              </li>
              <li className="text-slate-700">
                <code className="bg-slate-100 px-2 py-1 rounded text-sm">@noble/hashes</code> - For cryptographic hashing
              </li>
            </ul>
          </div>

          {/* Battle-Tested Algorithms */}
          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Battle-Tested Encryption Algorithms</h3>
            
            <div className="space-y-4">
              {/* XChaCha20-Poly1305 */}
              <div className="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <h4 className="text-lg font-semibold text-blue-800 mb-2">XChaCha20-Poly1305 - Message Encryption</h4>
                <ul className="text-blue-700 space-y-1 ml-4 list-disc text-sm">
                  <li>Modern authenticated encryption used by Signal, WhatsApp, and secure messaging apps</li>
                  <li>Provides both confidentiality (messages can't be read) and authenticity (messages can't be tampered with)</li>
                  <li>Lightning-fast performance even on mobile devices</li>
                </ul>
              </div>

              {/* X25519 ECDH */}
              <div className="bg-purple-50 p-5 rounded-xl border border-purple-200">
                <h4 className="text-lg font-semibold text-purple-800 mb-2">X25519 ECDH - Key Exchange</h4>
                <ul className="text-purple-700 space-y-1 ml-4 list-disc text-sm">
                  <li>Elliptic Curve Diffie-Hellman for secure key agreement</li>
                  <li>Provides Perfect Forward Secrecy—each conversation uses unique session keys</li>
                  <li>Based on Curve25519, offering 128-bit security level</li>
                </ul>
              </div>

              {/* HKDF-SHA256 */}
              <div className="bg-cyan-50 p-5 rounded-xl border border-cyan-200">
                <h4 className="text-lg font-semibold text-cyan-800 mb-2">HKDF-SHA256 - Key Derivation</h4>
                <ul className="text-cyan-700 space-y-1 ml-4 list-disc text-sm">
                  <li>Industry-standard key derivation from shared secrets</li>
                  <li>Ensures cryptographic separation between different conversations</li>
                  <li>Deterministic yet secure key generation</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Complete Flow */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Key className="w-7 h-7 text-slate-700" />
            🔐 How It Works: The Complete Flow
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Phase 1 */}
          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Phase 1: One-Time Setup (Enable E2EE)</h3>
            <p className="text-slate-700 mb-4">When you enable E2EE in DeHub, here's what happens:</p>
            
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <h4 className="font-semibold text-slate-800 mb-2">1. Wallet Signature Request</h4>
                <ul className="text-slate-700 space-y-1 ml-4 list-disc text-sm">
                  <li>You're asked to sign a message: "Enable E2EE for Holder Chat"</li>
                  <li>Your wallet produces a unique cryptographic signature</li>
                  <li>This signature never leaves your device</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <h4 className="font-semibold text-slate-800 mb-2">2. Private Key Generation</h4>
                <pre className="bg-slate-900 text-green-400 p-4 rounded-lg text-xs overflow-x-auto font-mono">
                {`Your Wallet Signature
     ↓ [SHA-256 hash]
32-byte seed
     ↓ [HKDF derivation]
Your Private Key (32 bytes)`}
                </pre>
                <ul className="text-slate-700 space-y-1 ml-4 list-disc text-sm mt-3">
                  <li>Your private key is derived from your wallet signature</li>
                  <li>Never transmitted to DeHub servers</li>
                  <li>Never stored anywhere except your device</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <h4 className="font-semibold text-slate-800 mb-2">3. Public Key Creation</h4>
                <pre className="bg-slate-900 text-green-400 p-4 rounded-lg text-xs overflow-x-auto font-mono">
                {`Private Key
     ↓ [X25519 operation]
Public Key (32 bytes)
     ↓ [Base64 encoding]
Uploaded to DeHub database`}
                </pre>
                <ul className="text-slate-700 space-y-1 ml-4 list-disc text-sm mt-3">
                  <li>Your public key is mathematically linked to your private key</li>
                  <li>Safe to share publicly—it's used by others to encrypt messages for you</li>
                  <li>Stored in DeHub's database so others can find it</li>
                </ul>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">What Gets Stored:</h4>
                <ul className="text-amber-700 space-y-1 ml-4 list-disc text-sm">
                  <li><strong>On Your Device (IndexedDB):</strong> Private key, session keys (24-hour cache)</li>
                  <li><strong>On DeHub Servers:</strong> Public key, E2EE enabled status, key creation timestamp</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Phase 2: Starting a Conversation</h3>
            <p className="text-slate-700 mb-4">When you chat with someone who also has E2EE enabled:</p>
            
            <pre className="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto font-mono">
            {`Your Private Key (from your device)
    +
Their Public Key (from DeHub database)
    ↓ [X25519 ECDH Magic]
Shared Secret (32 bytes)
    ↓ [HKDF with conversation context]
Session Key (32 bytes)`}
            </pre>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200 mt-4">
              <h4 className="font-semibold text-green-800 mb-2">Key Features:</h4>
              <ul className="text-green-700 space-y-1 ml-4 list-disc text-sm">
                <li><strong>Perfect Forward Secrecy</strong> - Each conversation has a unique session key</li>
                <li><strong>Performance Optimization</strong> - Session keys are cached for 24 hours</li>
                <li><strong>Both Parties Get the Same Key</strong> - Even though derived independently!</li>
              </ul>
            </div>
          </div>

          {/* Phase 3 */}
          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Phase 3: Sending a Message</h3>
            <p className="text-slate-700 mb-4">When you type and send "Hello, world!":</p>
            
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <h4 className="font-semibold text-slate-800 mb-2">1. Message Preparation</h4>
                <pre className="bg-slate-900 text-green-400 p-4 rounded-lg text-xs overflow-x-auto font-mono">
                {`"Hello, world!"
    ↓ [UTF-8 encoding]
Plaintext bytes: [72, 101, 108, 108, 111, ...]`}
                </pre>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <h4 className="font-semibold text-slate-800 mb-2">2. Encryption</h4>
                <pre className="bg-slate-900 text-green-400 p-4 rounded-lg text-xs overflow-x-auto font-mono">
                {`Plaintext bytes
    +
Session Key
    +
Random Nonce (24 bytes, freshly generated)
    ↓ [XChaCha20-Poly1305 encryption]
Ciphertext + Authentication Tag (16 bytes)
    ↓ [Base64 encoding]
Ready for DeHub servers`}
                </pre>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">3. Storage</h4>
                <p className="text-blue-700 mb-2 text-sm">DeHub's database stores:</p>
                <ul className="text-blue-700 space-y-1 ml-4 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Who sent it (your address)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Who receives it (recipient's address)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    When it was sent (timestamp)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Encrypted gibberish (the ciphertext)
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="w-4 h-4" />
                    What it says (completely unreadable)
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <AlertTriangle className="w-5 h-5 text-amber-600 mb-2" />
                <p className="text-amber-800 text-sm">
                  <strong>What DeHub Sees:</strong> We can see metadata (who, when, message count) but never the actual content—it's just encrypted gibberish to us!
                </p>
              </div>
            </div>
          </div>

          {/* Phase 4 */}
          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Phase 4: Receiving a Message</h3>
            <p className="text-slate-700 mb-4">When someone sends you an encrypted message:</p>
            
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <h4 className="font-semibold text-slate-800 mb-2">1. Fetch from Database</h4>
                <p className="text-slate-700 text-sm">DeHub retrieves: encrypted_content + nonce + version</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <h4 className="font-semibold text-slate-800 mb-2">2. Session Key Retrieval</h4>
                <pre className="bg-slate-900 text-green-400 p-4 rounded-lg text-xs overflow-x-auto font-mono">
                {`Check cache → If found, use it
             ↓ If not found
Derive fresh session key using ECDH (same as Phase 2)`}
                </pre>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <h4 className="font-semibold text-slate-800 mb-2">3. Decryption</h4>
                <pre className="bg-slate-900 text-green-400 p-4 rounded-lg text-xs overflow-x-auto font-mono">
                {`Ciphertext + Authentication Tag
    +
Nonce
    +
Session Key
    ↓ [XChaCha20-Poly1305 decryption]
Plaintext bytes (authentication verified!)
    ↓ [UTF-8 decoding]
"Hello, world!" appears on your screen`}
                </pre>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">Security Verification:</h4>
                <ul className="text-green-700 space-y-1 ml-4 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <strong>Authenticity Verified</strong> - The authentication tag proves the message wasn't tampered with
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <strong>Correct Sender</strong> - Only someone with the sender's private key could create this ciphertext
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <strong>Replay Protection</strong> - Unique nonce prevents old messages from being replayed
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What E2EE Protects */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="text-2xl">🛡️ What E2EE Protects vs. What It Doesn't</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Fully Protected */}
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                ✅ Fully Protected
              </h3>
              <ul className="space-y-2">
                <li className="text-green-700 text-sm flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Message Content</strong> - Completely encrypted before leaving your device
                  </div>
                </li>
                <li className="text-green-700 text-sm flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Message Integrity</strong> - Cannot be altered without detection
                  </div>
                </li>
                <li className="text-green-700 text-sm flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Private Keys</strong> - Never leave your device, never transmitted
                  </div>
                </li>
                <li className="text-green-700 text-sm flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Forward Secrecy</strong> - Unique keys per conversation
                  </div>
                </li>
                <li className="text-green-700 text-sm flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Authenticity</strong> - Guaranteed sender identity
                  </div>
                </li>
              </ul>
            </div>

            {/* Metadata */}
            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
              <h3 className="text-lg font-semibold text-amber-800 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                ⚠️ Metadata (Visible to DeHub)
              </h3>
              <p className="text-amber-700 text-sm mb-3">
                Like all E2EE systems (Signal, WhatsApp, etc.), some metadata must be visible for the app to function:
              </p>
              <ul className="space-y-2">
                <li className="text-amber-700 text-sm flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>Who you're messaging (sender/recipient addresses)</div>
                </li>
                <li className="text-amber-700 text-sm flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>When messages are sent (timestamps)</div>
                </li>
                <li className="text-amber-700 text-sm flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>How many messages exchanged (message count)</div>
                </li>
                <li className="text-amber-700 text-sm flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>Message type (text/image/voice—but not the content)</div>
                </li>
              </ul>
              <p className="text-amber-800 text-sm mt-3 italic">
                <strong>Why?</strong> This metadata is necessary for message routing and delivery. Without it, we couldn't deliver your messages!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Current Status & Roadmap */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="text-2xl">🚀 Current Status & Roadmap</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Live Now */}
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                ✅ Live Now
              </h3>
              <ul className="space-y-2">
                <li className="text-green-700 text-sm flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  Wallet-based key generation (no passwords!)
                </li>
                <li className="text-green-700 text-sm flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  Automatic DM encryption/decryption
                </li>
                <li className="text-green-700 text-sm flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  Session key caching
                </li>
                <li className="text-green-700 text-sm flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  Perfect forward secrecy
                </li>
                <li className="text-green-700 text-sm flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  E2EE status badges
                </li>
                <li className="text-green-700 text-sm flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  Backward compatibility with unencrypted messages
                </li>
              </ul>
            </div>

            {/* Coming Soon */}
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                🚧 Coming Soon
              </h3>
              <ul className="space-y-2">
                <li className="text-blue-700 text-sm flex items-center gap-2">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  Group message encryption - Encrypted group chats
                </li>
                <li className="text-blue-700 text-sm flex items-center gap-2">
                  <Smartphone className="w-4 h-4 flex-shrink-0" />
                  Media encryption - Images, GIFs, voice messages
                </li>
                <li className="text-blue-700 text-sm flex items-center gap-2">
                  <QrCode className="w-4 h-4 flex-shrink-0" />
                  Key verification - Verify your contact's identity with QR codes
                </li>
                <li className="text-blue-700 text-sm flex items-center gap-2">
                  <Key className="w-4 h-4 flex-shrink-0" />
                  Key backup & recovery - Safely backup your encryption keys
                </li>
                <li className="text-blue-700 text-sm flex items-center gap-2">
                  <Zap className="w-4 h-4 flex-shrink-0" />
                  Multi-device sync - Use E2EE across devices
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Why This Matters */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="text-2xl">💡 Why This Matters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl border border-red-200 mb-6">
            <h3 className="text-lg font-semibold text-red-800 mb-3">DeHub can never:</h3>
            <ul className="space-y-2">
              <li className="text-red-700 text-sm flex items-center gap-2">
                <XCircle className="w-4 h-4 flex-shrink-0" />
                Read your messages
              </li>
              <li className="text-red-700 text-sm flex items-center gap-2">
                <XCircle className="w-4 h-4 flex-shrink-0" />
                Access your private keys
              </li>
              <li className="text-red-700 text-sm flex items-center gap-2">
                <XCircle className="w-4 h-4 flex-shrink-0" />
                Decrypt your conversations
              </li>
              <li className="text-red-700 text-sm flex items-center gap-2">
                <XCircle className="w-4 h-4 flex-shrink-0" />
                Share your message content with anyone
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
            <h3 className="text-lg font-semibold text-green-800 mb-3">Even if:</h3>
            <ul className="space-y-2">
              <li className="text-green-700 text-sm flex items-center gap-2">
                <Shield className="w-4 h-4 flex-shrink-0" />
                🚨 DeHub's servers are hacked
              </li>
              <li className="text-green-700 text-sm flex items-center gap-2">
                <Shield className="w-4 h-4 flex-shrink-0" />
                🚨 We're served a government warrant
              </li>
              <li className="text-green-700 text-sm flex items-center gap-2">
                <Shield className="w-4 h-4 flex-shrink-0" />
                🚨 A rogue employee tries to access data
              </li>
            </ul>
            <p className="text-green-800 mt-4 font-medium">
              Your messages remain encrypted and unreadable. That's the power of true end-to-end encryption.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* DeHub's Commitment */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="text-2xl">🎯 DeHub's Commitment to Privacy</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-200">
            <p className="text-purple-900 leading-relaxed">
              At DeHub, we believe privacy is a fundamental right. Our E2EE implementation ensures that your conversations are truly private—protected by mathematics, not just policies. We've chosen industry-leading cryptographic libraries and algorithms to give you the same level of security used by Signal, WhatsApp, and other privacy-focused messaging platforms.
            </p>
            <p className="text-purple-900 font-semibold mt-4 text-center text-lg">
              Your messages. Your privacy. Always.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>;
};
export default E2EEncryption;