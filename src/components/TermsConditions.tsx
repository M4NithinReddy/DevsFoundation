import React from 'react';
import { Scale, Users, Shield, FileText } from 'lucide-react';

export function TermsConditions() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-blue-800 mb-8">Terms and Conditions</h1>
          
          <div className="space-y-12">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Scale className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-xl font-bold text-blue-800">General Terms</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  By accessing and using our services, you agree to comply with and be bound by the following terms and conditions.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Services are provided "as is" without any warranties</li>
                  <li>We reserve the right to modify or discontinue services</li>
                  <li>Users must be at least 18 years old or have guardian consent</li>
                  <li>All program participation is subject to eligibility criteria</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-xl font-bold text-blue-800">Program Participation</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  Guidelines and requirements for participating in our educational programs.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Regular attendance is mandatory</li>
                  <li>Participants must follow safety protocols</li>
                  <li>Equipment usage guidelines must be followed</li>
                  <li>Certification requirements must be met</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-xl font-bold text-blue-800">Liability and Insurance</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  Understanding of risks and liability limitations.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Participants must sign liability waivers</li>
                  <li>Insurance coverage requirements</li>
                  <li>Equipment damage responsibility</li>
                  <li>Accident reporting procedures</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-xl font-bold text-blue-800">Intellectual Property</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  Rights and restrictions regarding content and materials.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Course materials are copyrighted</li>
                  <li>Usage restrictions on training content</li>
                  <li>Photo and video sharing guidelines</li>
                  <li>Brand usage restrictions</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-blue-50 rounded-xl">
            <p className="text-center text-gray-600">
              Last updated: March 2024. For any questions about our terms and conditions,
              please contact our legal team at legal@devsfoundation.org
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}