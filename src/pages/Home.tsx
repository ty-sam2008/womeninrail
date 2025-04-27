import React from 'react';
import { Train, Users, GraduationCap, Briefcase, TrendingUp, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <header className="relative min-h-[600px] flex items-center bg-orange-950">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-orange-950/40 z-10"></div>
          <img 
            src="/image/women_in_rail.png"
            alt="Women Railway Workers"
            className="m-auto object-cover"
            loading="eager"
            width={1620}
                   />
        </div>
        <div className="relative container mx-auto px-6 z-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Women Transforming<br/>Britain's Railways
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl">
              Join a growing community of women leading the future of rail engineering and operations through innovation, expertise, and leadership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#opportunities" 
                className="bg-white text-orange-900 px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center hover:bg-orange-50 transition-colors shadow-lg group"
              >
                Explore Opportunities 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center hover:bg-orange-600 transition-colors shadow-lg border border-orange-600/30 group"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-orange-950 to-orange-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Industry Impact</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="relative bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="absolute -top-6 left-8 bg-orange-600 p-3 rounded-xl shadow-lg">
                <Users className="w-6 h-6" />
              </div>
              <p className="text-5xl font-bold mb-2">16.4%</p>
              <p className="text-orange-100">of the rail workforce are women</p>
            </div>
            <div className="relative bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="absolute -top-6 left-8 bg-orange-600 p-3 rounded-xl shadow-lg">
                <Briefcase className="w-6 h-6" />
              </div>
              <p className="text-5xl font-bold mb-2">£65k</p>
              <p className="text-orange-100">maximum average salary</p>
            </div>
            <div className="relative bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="absolute -top-6 left-8 bg-orange-600 p-3 rounded-xl shadow-lg">
                <TrendingUp className="w-6 h-6" />
              </div>
              <p className="text-5xl font-bold mb-2">1000+</p>
              <p className="text-orange-100">annual job opportunities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Video Section */}
      <section className="py-20 bg-gradient-to-b from-orange-950 to-orange-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Success Stories</h2>
            <div className="bg-orange-800/30 p-8 rounded-2xl backdrop-blur-sm border border-orange-700/30">
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-orange-900/50 flex items-center justify-center">
                <video src="/video/testimonial.mp4" autoPlay loop muted className="w-full h-full object-cover"/>
                </div>
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-xl font-semibold mb-2">Sarah Thompson</h3>
                <p className="text-orange-200">Signal Engineer at Network Rail</p>
                <p className="mt-4 text-orange-100/90 max-w-2xl mx-auto">
                  "The LSDN railway course opened doors I never thought possible. Now I'm leading signal engineering projects and inspiring other women to join the industry."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Rail Section */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-orange-950">Why Choose Rail?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-2xl mb-4 text-orange-950">Career Growth</h3>
              <p className="text-gray-600">Clear progression paths and continuous professional development opportunities.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-2xl mb-4 text-orange-950">Training Support</h3>
              <p className="text-gray-600">Comprehensive training programs and mentorship opportunities.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-2xl mb-4 text-orange-950">Job Security</h3>
              <p className="text-gray-600">Stable employment with excellent benefits and pension schemes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LSDN Partnership Section */}
      <section id="opportunities" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-orange-950">LSDN Network Rail Partnership</h2>
            <div className="bg-gradient-to-br from-orange-900 to-orange-800 p-1 rounded-2xl shadow-xl">
              <div className="bg-white p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6 text-orange-950">Guaranteed Career Path</h3>
                <p className="text-gray-600 mb-8 text-lg">
                  Through our partnership with LSDN, women who complete the railway course are guaranteed placement opportunities with Network Rail, opening doors to a rewarding career in the rail industry.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h4 className="font-semibold text-xl mb-4 text-orange-950">Technical Roles</h4>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-xl">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-700">Signal Engineer (£45k-£65k)</span>
                      </div>
                      <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-xl">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-700">Track Maintenance (£35k-£45k)</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <h4 className="font-semibold text-xl mb-4 text-orange-950">Management Roles</h4>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-xl">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-700">Operations Manager (£50k-£70k)</span>
                      </div>
                      <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-xl">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-700">Project Engineer (£40k-£60k)</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <a 
                    href="https://lsdn.org.uk/apply-now/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center hover:bg-orange-700 transition-colors shadow-lg"
                  >
                    Apply for LSDN Course <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-orange-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-16 text-orange-950">Start Your Journey Today</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <Phone className="w-6 h-6 text-orange-600 mx-auto mb-4" />
                <p className="text-gray-600">0203 784 1294</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <Mail className="w-6 h-6 text-orange-600 mx-auto mb-4" />
                <p className="text-gray-600">info@lsdn.org.uk</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <MapPin className="w-6 h-6 text-orange-600 mx-auto mb-4" />
                <p className="text-gray-600">London, United Kingdom</p>
              </div>
            </div>
            <a 
              href="https://lsdn.org.uk/apply-now/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-10 py-4 rounded-xl font-semibold inline-flex items-center hover:from-orange-700 hover:to-orange-800 transition-all shadow-lg"
            >
              Apply Now <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;