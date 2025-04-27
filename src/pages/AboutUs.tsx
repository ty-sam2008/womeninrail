import React, { useState, useRef } from 'react';
import { Info, FileText, Users, TrendingUp } from 'lucide-react';

export function AboutUs() {
  const [activeTab, setActiveTab] = useState('main');
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setTimeout(scrollToContent, 100); // Small delay to ensure state updates before scrolling
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-orange-950 mb-12">About Us</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <button
            onClick={() => handleTabChange('main')}
            className={`flex flex-col items-center justify-center p-8 rounded-2xl transition-all ${
              activeTab === 'main'
                ? 'bg-orange-600 text-white shadow-xl transform scale-105'
                : 'bg-orange-50 text-orange-950 hover:bg-orange-100 hover:shadow-lg'
            }`}
          >
            <Info className="w-12 h-12 mb-4" />
            <span className="text-xl font-semibold">About LSDN</span>
            <p className="mt-2 text-sm opacity-80">Learn about our mission and values</p>
          </button>
          
          <button
            onClick={() => handleTabChange('ofsted')}
            className={`flex flex-col items-center justify-center p-8 rounded-2xl transition-all ${
              activeTab === 'ofsted'
                ? 'bg-orange-600 text-white shadow-xl transform scale-105'
                : 'bg-orange-50 text-orange-950 hover:bg-orange-100 hover:shadow-lg'
            }`}
          >
            <FileText className="w-12 h-12 mb-4" />
            <span className="text-xl font-semibold">Ofsted Report</span>
            <p className="mt-2 text-sm opacity-80">View our latest inspection results</p>
          </button>
          
          <button
            onClick={() => handleTabChange('policies')}
            className={`flex flex-col items-center justify-center p-8 rounded-2xl transition-all ${
              activeTab === 'policies'
                ? 'bg-orange-600 text-white shadow-xl transform scale-105'
                : 'bg-orange-50 text-orange-950 hover:bg-orange-100 hover:shadow-lg'
            }`}
          >
            <FileText className="w-12 h-12 mb-4" />
            <span className="text-xl font-semibold">LSDN Policies</span>
            <p className="mt-2 text-sm opacity-80">Our guidelines and procedures</p>
          </button>
          
          <button
            onClick={() => handleTabChange('governors')}
            className={`flex flex-col items-center justify-center p-8 rounded-2xl transition-all ${
              activeTab === 'governors'
                ? 'bg-orange-600 text-white shadow-xl transform scale-105'
                : 'bg-orange-50 text-orange-950 hover:bg-orange-100 hover:shadow-lg'
            }`}
          >
            <Users className="w-12 h-12 mb-4" />
            <span className="text-xl font-semibold">Our Governors</span>
            <p className="mt-2 text-sm opacity-80">Meet our leadership team</p>
          </button>
          
          <button
            onClick={() => handleTabChange('performance')}
            className={`flex flex-col items-center justify-center p-8 rounded-2xl transition-all ${
              activeTab === 'performance'
                ? 'bg-orange-600 text-white shadow-xl transform scale-105'
                : 'bg-orange-50 text-orange-950 hover:bg-orange-100 hover:shadow-lg'
            }`}
          >
            <TrendingUp className="w-12 h-12 mb-4" />
            <span className="text-xl font-semibold">Performance Rates</span>
            <p className="mt-2 text-sm opacity-80">View our achievement metrics</p>
          </button>
        </div>

        <div ref={contentRef} className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          {activeTab === 'main' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-orange-950 mb-6">About London Skills & Development Network</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                London Skills & Development Network is a Not-for-Profit social enterprise, who provides education and skills training.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We deliver a range of training programmes to the local community and across Greater London.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We offer consultancy and capacity building support services to the education and training sector.
              </p>
            </div>
          )}

          {activeTab === 'ofsted' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-orange-950 mb-6">Ofsted Report</h2>
              <div className="prose max-w-none">
                <div className="mb-8">
                  <a 
                    href="https://drive.google.com/file/d/1QLa76OAfovaqbz1H0RT_Tn8t-lC5zg5T/view?usp=drive_link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center p-6 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors"
                  >
                    <FileText className="w-12 h-12 text-orange-600 mr-4" />
                    <div>
                      <span className="block text-xl font-semibold text-orange-950">View Latest Ofsted Report</span>
                      <span className="text-sm text-orange-700">Click to download or view the report</span>
                    </div>
                  </a>
                </div>

                <p className="text-gray-700 mb-4">
                  You can find our latest Ofsted inspection report and other publications at: <a href="http://www.gov.uk/government/publications/further-education-and-skills-inspection-handbook-eif" className="text-orange-600 hover:text-orange-700 underline">www.gov.uk/government/publications/further-education-and-skills-inspection-handbook-eif</a>
                </p>

                <div className="space-y-4">
                  <p className="text-gray-700">
                    You can contact Ofsted in the following ways:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Email: <a href="mailto:enquiries@ofsted.gov.uk" className="text-orange-600 hover:text-orange-700 underline">enquiries@ofsted.gov.uk</a></li>
                    <li>
                      General enquiries:
                      <a href="http://www.nationalarchives.gov.uk/doc/open-government-licence/" className="text-orange-600 hover:text-orange-700 underline block ml-2">
                        www.nationalarchives.gov.uk/doc/open-government-licence/
                      </a>
                    </li>
                    <li>
                      Copyright enquiries:
                      <a href="mailto:psi@nationalarchives.gsi.gov.uk" className="text-orange-600 hover:text-orange-700 underline block ml-2">
                        psi@nationalarchives.gsi.gov.uk
                      </a>
                    </li>
                  </ul>

                  <p className="text-gray-700">
                    To view Ofsted inspection reports, visit:
                    <a href="http://reports.ofsted.gov.uk/" className="text-orange-600 hover:text-orange-700 underline block ml-2">
                      reports.ofsted.gov.uk
                    </a>
                  </p>

                  <p className="text-gray-700">
                    To receive regular email alerts about new publications, including survey reports and provider inspection reports, please go to:
                    <a href="http://eepurl.com/iTrDn" className="text-orange-600 hover:text-orange-700 underline block ml-2">
                      eepurl.com/iTrDn
                    </a>
                  </p>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-orange-950 mb-4">Contact Ofsted</h3>
                    <p className="text-gray-700">
                      Email: <a href="mailto:enquiries@ofsted.gov.uk" className="text-orange-600 hover:text-orange-700 underline">enquiries@ofsted.gov.uk</a>
                    </p>
                    <p className="text-gray-700">
                      Website: <a href="http://www.gov.uk/ofsted" className="text-orange-600 hover:text-orange-700 underline">www.gov.uk/ofsted</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'policies' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-orange-950 mb-6">LSDN Policies</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <a 
                  href="https://lsdn.org.uk/wp-content/uploads/2024/03/SF001_Safeguarding-and-Prevent-Policy_v4.3_February-2024.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-orange-50 p-6 rounded-xl hover:bg-orange-100 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-600 p-4 rounded-xl group-hover:scale-110 transition-transform">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-orange-950 mb-2">Safeguarding and Prevent Policy</h3>
                      <p className="text-gray-600">View our safeguarding policies and procedures</p>
                    </div>
                  </div>
                </a>

                <a 
                  href="https://lsdn.org.uk/wp-content/uploads/2025/01/Keeping_children_safe_in_education_2024.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-orange-50 p-6 rounded-xl hover:bg-orange-100 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-600 p-4 rounded-xl group-hover:scale-110 transition-transform">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-orange-950 mb-2">Keeping Children Safe In Education Policy</h3>
                      <p className="text-gray-600">Our commitment to child safety in education</p>
                    </div>
                  </div>
                </a>

                <a 
                  href="https://lsdn.org.uk/wp-content/uploads/2025/01/QC001_LSDN-Environmental-and-Sustainability-Policy_v6_Sept26.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-orange-50 p-6 rounded-xl hover:bg-orange-100 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-600 p-4 rounded-xl group-hover:scale-110 transition-transform">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-orange-950 mb-2">Environmental and Sustainability Policy</h3>
                      <p className="text-gray-600">Our environmental commitments and practices</p>
                    </div>
                  </div>
                </a>

                <a 
                  href="https://lsdn.org.uk/wp-content/uploads/2024/03/TLA016_LSDN-Student-Handbook_v5_15-Jan-2024.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-orange-50 p-6 rounded-xl hover:bg-orange-100 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-600 p-4 rounded-xl group-hover:scale-110 transition-transform">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-orange-950 mb-2">Student Handbook</h3>
                      <p className="text-gray-600">Essential information for LSDN students</p>
                    </div>
                  </div>
                </a>

                <a 
                  href="https://lsdn.org.uk/wp-content/uploads/2024/07/HR145_-Conflict-of-Interest_v6_June-2024.docx.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-orange-50 p-6 rounded-xl hover:bg-orange-100 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-600 p-4 rounded-xl group-hover:scale-110 transition-transform">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-orange-950 mb-2">Conflict of Interest</h3>
                      <p className="text-gray-600">Our policy on managing conflicts of interest</p>
                    </div>
                  </div>
                </a>

                <a 
                  href="https://lsdn.org.uk/wp-content/uploads/2025/01/EXC002_Partnership-and-Collaborative-Working-Statement-1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-orange-50 p-6 rounded-xl hover:bg-orange-100 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-600 p-4 rounded-xl group-hover:scale-110 transition-transform">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-orange-950 mb-2">Partnership and Collaborative Working Statement</h3>
                      <p className="text-gray-600">Our approach to partnerships and collaboration</p>
                    </div>
                  </div>
                </a>

                <a 
                  href="https://lsdn.org.uk/wp-content/uploads/2024/07/GOV-006LSDN_-Governor-Code-of-Conduct-Feb_2024.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-orange-50 p-6 rounded-xl hover:bg-orange-100 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-600 p-4 rounded-xl group-hover:scale-110 transition-transform">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-orange-950 mb-2">Governor Code of Conduct</h3>
                      <p className="text-gray-600">Guidelines for governor conduct and responsibilities</p>
                    </div>
                  </div>
                </a>

                <a 
                  href="https://lsdn.org.uk/wp-content/uploads/2025/01/QC008_Quality-and-Standards-Policy-Statement_v4_Oct2023-1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-orange-50 p-6 rounded-xl hover:bg-orange-100 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-600 p-4 rounded-xl group-hover:scale-110 transition-transform">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-orange-950 mb-2">Quality and Standards Policy Statement</h3>
                      <p className="text-gray-600">Our commitment to maintaining high standards</p>
                    </div>
                  </div>
                </a>

                <a 
                  href="https://lsdn.org.uk/wp-content/uploads/2024/07/GOV-001_LSDN-Governing-Body-Terms-of-Reference_V6_Jan-2024-1.docx.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-orange-50 p-6 rounded-xl hover:bg-orange-100 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-600 p-4 rounded-xl group-hover:scale-110 transition-transform">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-orange-950 mb-2">LSDN Governing Body Terms of Reference</h3>
                      <p className="text-gray-600">Framework for governance operations</p>
                    </div>
                  </div>
                </a>

                <a 
                  href="https://lsdn.org.uk/wp-content/uploads/2024/07/TLA046_LSDN-Quality-and-Curriculum-Standards-Policy-Statement.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-orange-50 p-6 rounded-xl hover:bg-orange-100 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-600 p-4 rounded-xl group-hover:scale-110 transition-transform">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-orange-950 mb-2">Quality and Curriculum Standards Policy Statement</h3>
                      <p className="text-gray-600">Standards for curriculum quality and delivery</p>
                    </div>
                  </div>
                </a>

                <a 
                  href="https://lsdn.org.uk/wp-content/uploads/2024/07/HR004_GDPR-Privacy-Policy_March2024.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-orange-50 p-6 rounded-xl hover:bg-orange-100 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-600 p-4 rounded-xl group-hover:scale-110 transition-transform">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-orange-950 mb-2">GDPR Privacy Policy</h3>
                      <p className="text-gray-600">Our data protection and privacy guidelines</p>
                    </div>
                  </div>
                </a>

                <a 
                  href="https://lsdn.org.uk/wp-content/uploads/2025/01/SF030_Anti-Radicalisation-Policy-PREVENT-DUTY_v5_Feb2023.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-orange-50 p-6 rounded-xl hover:bg-orange-100 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-600 p-4 rounded-xl group-hover:scale-110 transition-transform">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-orange-950 mb-2">Anti Radicalisation Policy PREVENT-DUTY</h3>
                      <p className="text-gray-600">Our approach to preventing extremism</p>
                    </div>
                  </div>
                </a>

                <a 
                  href="https://lsdn.org.uk/lsdn-docs/policies/TLA011_Student-Attendance-Handbook_V6_Aug2022.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-orange-50 p-6 rounded-xl hover:bg-orange-100 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-600 p-4 rounded-xl group-hover:scale-110 transition-transform">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-orange-950 mb-2">Student Attendance Policy Guide</h3>
                      <p className="text-gray-600">Guidelines for student attendance</p>
                    </div>
                  </div>
                </a>

                <a 
                  href="https://lsdn.org.uk/wp-content/uploads/2025/01/TLA023_SEND-Additional-Learning-Support-Guidance-Handbook_v7_Dec2024.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-orange-50 p-6 rounded-xl hover:bg-orange-100 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-600 p-4 rounded-xl group-hover:scale-110 transition-transform">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-orange-950 mb-2">SEND Additional Learning Support Guidance Handbook</h3>
                      <p className="text-gray-600">Support for students with additional needs</p>
                    </div>
                  </div>
                </a>

                <a 
                  href="https://lsdn.org.uk/wp-content/uploads/2024/07/HR024_Equal-Opportunities-Policy-_V4_June2023.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-orange-50 p-6 rounded-xl hover:bg-orange-100 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-600 p-4 rounded-xl group-hover:scale-110 transition-transform">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-orange-950 mb-2">Equal Opportunities Policy</h3>
                      <p className="text-gray-600">Our commitment to equality and diversity</p>
                    </div>
                  </div>
                </a>

                <a 
                  href="https://lsdn.org.uk/wp-content/uploads/2025/01/HR030_Freedom-of-Expression_v5_Jan2024.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-orange-50 p-6 rounded-xl hover:bg-orange-100 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-600 p-4 rounded-xl group-hover:scale-110 transition-transform">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-orange-950 mb-2">Freedom of Speech Policy</h3>
                      <p className="text-gray-600">Guidelines for freedom of expression</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          )}

          {activeTab === 'governors' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-orange-950 mb-6">Our Governors</h2>
              <div className="mb-8">
                <a 
                  href="https://lsdn.org.uk/wp-content/uploads/2024/04/RECENT-LSDN-Governance-Chart-23-24-1.docx.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center p-6 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors"
                >
                  <FileText className="w-12 h-12 text-orange-600 mr-4" />
                  <div>
                    <span className="block text-xl font-semibold text-orange-950">View Governance Chart 2023-24</span>
                    <span className="text-sm text-orange-700">Click to view our governance structure</span>
                  </div>
                </a>
              </div>
              <p className="text-gray-700 text-lg">
                Our governance structure ensures effective oversight and strategic direction for LSDN's educational programs and operations.
              </p>
            </div>
          )}

          {activeTab === 'performance' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-orange-950 mb-6">LSDN Performance Rates</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-orange-900 mb-4">Course Completion</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Overall completion rate</span>
                      <span className="font-semibold text-orange-700">94%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Railway Engineering courses</span>
                      <span className="font-semibold text-orange-700">96%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Signal Engineering courses</span>
                      <span className="font-semibold text-orange-700">92%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-orange-900 mb-4">Employment Success</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Job placement rate</span>
                      <span className="font-semibold text-orange-700">89%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Average starting salary</span>
                      <span className="font-semibold text-orange-700">£32,000</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Career advancement within 2 years</span>
                      <span className="font-semibold text-orange-700">76%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-orange-900 mb-4">Student Satisfaction</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Overall satisfaction score</span>
                      <span className="font-semibold text-orange-700">4.6/5.0</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Woul
d recommend to others</span>
                      <span className="font-semibold text-orange-700">92%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Training quality rating</span>
                      <span className="font-semibold text-orange-700">4.8/5.0</span>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-orange-900 mb-4">Industry Recognition</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Industry partnerships</span>
                      <span className="font-semibold text-orange-700">15+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Employer satisfaction</span>
                      <span className="font-semibold text-orange-700">4.7/5.0</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Professional accreditations</span>
                      <span className="font-semibold text-orange-700">8</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-orange-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-orange-900 mb-4">Annual Performance Highlights</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                    <span>Successfully trained over 500 students in railway engineering and related fields</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                    <span>Expanded industry partnerships with leading railway companies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                    <span>Launched new specialized courses in signal engineering and track maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                    <span>Achieved highest student satisfaction ratings in our history</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}