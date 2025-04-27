import React from 'react';
import { FileText, GraduationCap, Award } from 'lucide-react';

export function CourseDetails() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-orange-950 mb-12">Course Details</h1>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-3xl overflow-hidden mb-12">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="flex flex-col justify-center text-white space-y-6">
              <h2 className="text-3xl font-bold">Railway Track Engineering</h2>
              <p className="text-lg text-orange-100">
                Gain essential skills and knowledge in railway track engineering through our comprehensive certification program.
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-lg">
                  <Award className="w-5 h-5 mr-2" />
                  <span>Level 1 Certificate</span>
                </div>
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-lg">
                  <Award className="w-5 h-5 mr-2" />
                  <span>Level 2 Certificate</span>
                </div>
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-lg">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  <span>Accredited</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://lsdn.org.uk/wp-content/uploads/2022/03/RTN-railway-leaflets-Final-V2-24-03-22_Page_1-small.png"
                alt="Railway Track Engineering Course"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Course Information Documents */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <a 
            href="https://lsdn.org.uk/wp-content/uploads/2025/01/RTN_L2-Cert-Course-Info-Sheet_24-25_FINAL_V1.5.docx.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-orange-50 p-6 rounded-2xl hover:bg-orange-100 transition-all duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-orange-600 p-4 rounded-xl group-hover:scale-110 transition-transform">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-orange-950 mb-2">Course Information Sheet</h3>
                <p className="text-gray-600">Download detailed information about the course structure, requirements, and outcomes.</p>
              </div>
            </div>
          </a>

          <a 
            href="https://lsdn.org.uk/wp-content/uploads/2025/01/RTN_L2-Cert-Course-Info-Sheet_24-25_FINAL_V1.5.docx.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-orange-50 p-6 rounded-2xl hover:bg-orange-100 transition-all duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-orange-600 p-4 rounded-xl group-hover:scale-110 transition-transform">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-orange-950 mb-2">Course Information Sheet (Swap)</h3>
                <p className="text-gray-600">Access alternative course information and program details.</p>
              </div>
            </div>
          </a>
        </div>

        {/* Course Features */}
        <div className="bg-orange-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-orange-950 mb-6">Course Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-semibold text-xl mb-3 text-orange-950">Duration</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Flexible learning schedule</li>
                <li>• Practical workshops</li>
                <li>• Self-paced learning</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-semibold text-xl mb-3 text-orange-950">Certification</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Level 1 Certificate</li>
                <li>• Level 2 Certificate</li>
                <li>• Industry recognized</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-semibold text-xl mb-3 text-orange-950">Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Expert tutors</li>
                <li>• Learning resources</li>
                <li>• Career guidance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <a 
            href="https://lsdn.org.uk/apply-now/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition-colors shadow-lg"
          >
            Apply Now
            <GraduationCap className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}