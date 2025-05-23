import React from 'react';

export function Privacy() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-orange-950 mb-8">Privacy Policy</h1>
        
        <div className="prose max-w-none text-gray-600 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-orange-950 mb-4">Who we are</h2>
            <p>
              London Skills & Development Network (LSDN) is a not-for-profit Social Enterprise, we provide adult education 
              and community learning across London and surrounding areas. As well as managing and delivering a diverse 
              range of education and training programmes and courses, LSDN also offers a range of consultancy and capacity 
              building support services to the education and training sector.
            </p>
            <p>
              We want to give you the best possible learning experience and the data we collect and hold helps us to 
              recommend progression routes i.e jobs, further training, labour market information and support you in your learning.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-orange-950 mb-4">What personal data we collect and why we collect it</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-orange-900 mb-2">Comments</h3>
                <p>
                  When visitors leave comments on the site we collect the data shown in the comments form, and also the 
                  visitor's IP address and browser user agent string to help spam detection.
                </p>
                <p>
                  An anonymized string created from your email address (also called a hash) may be provided to the Gravatar 
                  service to see if you are using it. The Gravatar service privacy policy is available here:{' '}
                  <a href="https://automattic.com/privacy/" className="text-orange-600 hover:text-orange-700 underline">
                    https://automattic.com/privacy/
                  </a>
                  . After approval of your comment, your profile picture is visible to the public in the context of your comment.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-orange-900 mb-2">Media</h3>
                <p>
                  If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) 
                  included. Visitors to the website can download and extract any location data from images on the website.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-orange-900 mb-2">Forms</h3>
                <p>
                  On enrolment and registration forms, we collect your basic personal information including your learning history, 
                  we are required to share this with Education & Skills Funding Agency in order to draw down the funds to pay 
                  for your training.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-orange-900 mb-2">Cookies</h3>
                <p>
                  If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. 
                  These are for your convenience so that you do not have to fill in your details again when you leave another 
                  comment. These cookies will last for one year.
                </p>
                <p>
                  If you have an account and you log in to this site, we will set a temporary cookie to determine if your 
                  browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.
                </p>
                <p>
                  When you log in, we will also set up several cookies to save your login information and your screen display 
                  choices. Login cookies last for two days, and screen options cookies last for a year. If you select "Remember Me", 
                  your login will persist for two weeks. If you log out of your account, the login cookies will be removed.
                </p>
                <p>
                  If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes 
                  no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-orange-900 mb-2">Embedded content from other websites</h3>
                <p>
                  Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content 
                  from other websites behaves in the exact same way as if the visitor has visited the other website.
                </p>
                <p>
                  These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor 
                  your interaction with that embedded content, including tracking your interaction with the embedded content 
                  if you have an account and are logged in to that website.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-orange-950 mb-4">Who we share your data with</h2>
            <p>
              LSDN Adult Education is funded by Education & Skills Funding Agency and we are mandated to collect personal 
              information for this purpose.
            </p>
            <p>
              On enrolment and registration forms, we collect your basic personal information including your learning history, 
              we are required to share this with Education & Skills Funding Agency in order to draw down the funds to pay for 
              your training.
            </p>
            <p>
              If you agree for us to help you to gain employment or further training we may share your data, we will always 
              ask you first.
            </p>
            <p>
              If you do not want us to share your data with third parties you can inform us of this at any time.
            </p>
            <p>
              Visitor comments may be checked through an automated spam detection service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-orange-950 mb-4">How long we retain your data</h2>
            <p>
              If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize 
              and approve any follow-up comments automatically instead of holding them in a moderation queue.
            </p>
            <p>
              For users that register on our website (if any), we also store the personal information they provide in their 
              user profile. All users can see, edit, or delete their personal information at any time (except they cannot 
              change their username). Website administrators can also see and edit that information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-orange-950 mb-4">What rights you have over your data</h2>
            <p>
              If you have an account on this site, or have left comments, you can request to receive an exported file of 
              the personal data we hold about you, including any data you have provided to us. You can also request that 
              we erase any personal data we hold about you. This does not include any data we are obliged to keep for 
              administrative, legal, or security purposes.
            </p>
            <p>
              Further information about use of and access to your personal data, are available at:{' '}
              <a 
                href="https://www.gov.uk/government/publications/esfa-privacy-notice" 
                className="text-orange-600 hover:text-orange-700 underline"
              >
                https://www.gov.uk/government/publications/esfa-privacy-notice
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-orange-950 mb-4">Additional information</h2>
            <p>
              Your Data Controller is Patricia Shalet:{' '}
              <a href="mailto:pshalet@lsdn.org.uk" className="text-orange-600 hover:text-orange-700 underline">
                pshalet@lsdn.org.uk
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-orange-950 mb-4">Plugin: Smush</h2>
            <p>
              Note: Smush does not interact with end users on your website. The only input option Smush has is to a 
              newsletter subscription for site admins only. If you would like to notify your users of this in your 
              privacy policy, you can use the information below.
            </p>
            <p>
              Smush sends images to the WPMU DEV servers to optimize them for web use. This includes the transfer of 
              EXIF data. The EXIF data will either be stripped or returned as it is. It is not stored on the WPMU DEV servers.
            </p>
            <p>
              Smush uses a third-party email service (Drip) to send informational emails to the site administrator. 
              The administrator's email address is sent to Drip and a cookie is set by the service. Only administrator 
              information is collected by Drip.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}