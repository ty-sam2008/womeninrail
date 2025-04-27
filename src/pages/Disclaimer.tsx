import React from 'react';

export function Disclaimer() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-orange-950 mb-8">Disclaimer</h1>
        
        <div className="prose max-w-none text-gray-600 space-y-6">
          <p>
            This website is owned and operated by London Skills and Development Network. 
            Respecting your privacy and ensuring the confidentiality of your personal 
            information is critical to us. The purpose of this Privacy Policy is to ensure 
            that we interact with you in line with current data protection legislation such 
            as the Data Protection Act 1998 and in accordance with your wishes.
          </p>

          <p>
            This statement does not extend to websites that are linked to this website. 
            You should refer to the privacy policies of any such websites for future 
            details about their use of your personal information.
          </p>

          <p>
            In addition to information gathered directly we also gather information 
            indirectly. In common with most websites we have access logs. These logs 
            record a user's IP address and browser and are aggregated to produce summary 
            information. This allows statistics about the popularity of the website to be 
            compiled. Log files do not contain any personal information. London Skills 
            and Development Network reserves the right to store this information indefinitely.
          </p>

          <p>
            We detect the browser that the user is using for the purpose of tailoring 
            the content to suit the features of, and to deal with the bugs in, different 
            operating system, browser type and browser version combinations.
          </p>

          <div className="bg-orange-50 p-6 rounded-xl mt-8">
            <h2 className="text-xl font-semibold text-orange-950 mb-4">Contact Information</h2>
            <p className="mb-4">This website is owned and operated by:</p>
            <p className="font-semibold text-orange-900">London Skills and Development Network</p>
          </div>

          <p className="mt-8">
            If you have any questions about this privacy statement or any other matters 
            concerning this website or you wish to report a technical error, you can{' '}
            <a 
              href="/contact" 
              className="text-orange-600 hover:text-orange-700 underline"
            >
              contact us
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}