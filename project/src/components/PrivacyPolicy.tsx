import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-blue-800 mb-8">Privacy Policy & Terms</h1>
          
          <div className="space-y-12">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-xl font-bold text-blue-800">Data Protection</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  We are committed to protecting your personal information and ensuring its privacy, 
                  security, and integrity.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>All personal data is encrypted and stored securely</li>
                  <li>We never share your information with third parties without consent</li>
                  <li>Regular security audits and updates are performed</li>
                  <li>You can request your data or its deletion at any time</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-xl font-bold text-blue-800">Donation Security</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  Your donations are processed securely through our trusted payment partners.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>SSL-encrypted payment processing</li>
                  <li>Multiple payment options available</li>
                  <li>Immediate transaction confirmation</li>
                  <li>Detailed donation receipts provided</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-xl font-bold text-blue-800">Transparency</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  We maintain complete transparency in our operations and use of funds.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Regular financial reports published</li>
                  <li>Detailed program impact metrics</li>
                  <li>Clear fund allocation breakdown</li>
                  <li>Annual audited statements available</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-xl font-bold text-blue-800">Terms of Service</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  By using our services or making donations, you agree to our terms of service.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Program eligibility criteria</li>
                  <li>Code of conduct for participants</li>
                  <li>Intellectual property rights</li>
                  <li>Dispute resolution process</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-blue-50 rounded-xl">
            <p className="text-center text-gray-600">
              Last updated: March 2024. For any questions about our privacy policy or terms,
              please contact our data protection officer at privacy@devsfoundation.org
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}