import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export function Contact() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-orange-950 mb-12">Contact Us</h1>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-orange-900 to-orange-800 p-8 rounded-2xl text-white">
              <h2 className="text-2xl font-semibold mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-700/50 p-3 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-orange-200">Call Us</p>
                    <p className="font-semibold">0203 784 1294</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-700/50 p-3 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-orange-200">Email Us</p>
                    <p className="font-semibold">info@lsdn.org.uk</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-700/50 p-3 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-orange-200">Location</p>
                    <p className="font-semibold">London, United Kingdom</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-semibold text-orange-950 mb-6">Office Hours</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="text-orange-900 font-semibold">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Saturday - Sunday</span>
                  <span className="text-orange-900 font-semibold">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-orange-100">
            <h2 className="text-2xl font-semibold text-orange-950 mb-8">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center justify-center hover:from-orange-700 hover:to-orange-800 transition-all shadow-lg"
              >
                Send Message <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://lsdn.org.uk/apply-now/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 text-white px-10 py-4 rounded-xl font-semibold inline-flex items-center hover:bg-orange-700 transition-colors shadow-lg"
          >
            Apply Now <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}