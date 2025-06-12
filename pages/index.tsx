import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'

const HomePage = () => {
  return (
    <Layout>
      <Head>
        <title>King K Consulting - AI Consulting for Business Growth</title>
        <meta name="description" content="Unlock AI-powered growth for your business with practical, hands-on AI consulting and automation tailored for small and midsize businesses." />
        <meta name="keywords" content="AI consulting, business automation, workflow optimization, AI strategy, small business AI" />
      </Head>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-gray-50 to-primary-50 pt-32 lg:pt-40 pb-16 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-navy-900 mb-6">
                Unlock AI-Powered Growth for Your Business
              </h1>
              <p className="text-xl lg:text-2xl text-primary-600 font-medium mb-8">
                Practical, hands-on AI consulting and automation for small and midsize businesses—simple, actionable, and tailored for you.
              </p>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                Our expertise lies in making advanced AI accessible and effective for all business types. Whether you're a digital startup or a traditional brick-and-mortar business, we provide the guidance and tools you need to harness the power of AI for growth, efficiency, and competitive advantage.
              </p>
              <a href="#contact" className="cta-button">
                Book Your Free Strategy Session
              </a>
            </div>
            <div className="flex justify-center">
              <Image
                src="/attached_assets/Unlock AI-power_1749671416488.png"
                alt="AI Business Growth Illustration"
                width={500}
                height={400}
                className="w-full max-w-lg h-auto rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="section-header">
            <h2 className="section-title">About King K Consulting</h2>
            <p className="section-subtitle">Your trusted partner in AI transformation</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-navy-700 mb-6">Real-World Experience, Practical Solutions</h3>
              <p className="mb-6">
                King K Consulting was founded on the belief that every business, regardless of size or industry, deserves access to the transformative power of AI. With extensive real-world executive experience working with businesses of all sizes, we understand the unique challenges that small and midsize business owners face.
              </p>
              
              <p className="mb-8">
                Our approach is rooted in deep empathy for entrepreneurs and business leaders who want to grow but may not have technical backgrounds or in-house expertise. We bridge that gap with hands-on guidance that makes AI and automation simple, actionable, and immediately effective.
              </p>
              
              <h3 className="text-2xl font-semibold text-navy-700 mb-6">Our Mission</h3>
              <p className="mb-8">
                We're passionate about democratizing AI technology, making it accessible and practical for any business—whether you're running a digital marketing agency or a family-owned restaurant. Our goal is to help you implement AI solutions that deliver real results, not just impressive technology.
              </p>
              
              <a href="#contact" className="cta-button secondary">
                Learn More About Our Approach
              </a>
            </div>
            <div>
              <Image
                src="/attached_assets/AI-Workflow-bkground_1749671840367.jpg"
                alt="AI Workflow Network"
                width={600}
                height={400}
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">Comprehensive AI solutions tailored to your business needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Service 1 */}
            <div className="service-card">
              <div className="w-20 h-20 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <Image src="/assets/services-icon-1.svg" alt="Strategy Icon" width={50} height={50} />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-4">AI Strategy & Roadmapping</h3>
              <p className="text-gray-600 mb-6">
                We assess your business needs, identify automation opportunities, and build a clear step-by-step AI adoption plan tailored specifically to your goals. Get a strategic foundation that guides your AI journey from day one.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-green-600">
                  <span className="mr-2">✓</span> Comprehensive business assessment
                </li>
                <li className="flex items-center text-green-600">
                  <span className="mr-2">✓</span> Custom AI implementation roadmap
                </li>
                <li className="flex items-center text-green-600">
                  <span className="mr-2">✓</span> ROI projections and timeline planning
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="service-card">
              <div className="w-20 h-20 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <Image src="/assets/services-icon-2.svg" alt="Automation Icon" width={50} height={50} />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-4">AI Automation & Workflow Optimization</h3>
              <p className="text-gray-600 mb-6">
                Transform your operations with time-saving automations and AI tool integrations that streamline business processes. Boost efficiency and productivity without requiring any technical background from your team.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-green-600">
                  <span className="mr-2">✓</span> Custom workflow automation setup
                </li>
                <li className="flex items-center text-green-600">
                  <span className="mr-2">✓</span> AI tool integration and training
                </li>
                <li className="flex items-center text-green-600">
                  <span className="mr-2">✓</span> Process optimization and monitoring
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="service-card">
              <div className="w-20 h-20 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <Image src="/assets/services-icon-3.svg" alt="Avatar Icon" width={50} height={50} />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-4">AI-Powered Avatar & Media Communication</h3>
              <p className="text-gray-600 mb-6">
                Create engaging custom spokesperson avatars, AI-generated videos, and automated media for enhanced brand messaging and customer engagement. Professional media production made simple and affordable.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-green-600">
                  <span className="mr-2">✓</span> Custom AI avatar creation
                </li>
                <li className="flex items-center text-green-600">
                  <span className="mr-2">✓</span> Automated video content generation
                </li>
                <li className="flex items-center text-green-600">
                  <span className="mr-2">✓</span> Brand-consistent media assets
                </li>
              </ul>
              <p className="text-sm text-gray-500 italic">*Platform costs for certain features may apply</p>
            </div>

            {/* Service 4 */}
            <div className="service-card">
              <div className="w-20 h-20 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <Image src="/assets/services-icon-4.svg" alt="Website Icon" width={50} height={50} />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-4">Website Design & AI Integration</h3>
              <p className="text-gray-600 mb-6">
                Get a modern website design or refresh that includes built-in AI features such as intelligent chatbots, smart booking systems, advanced analytics, and more to enhance user experience and drive conversions.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-green-600">
                  <span className="mr-2">✓</span> Modern, responsive web design
                </li>
                <li className="flex items-center text-green-600">
                  <span className="mr-2">✓</span> AI chatbot integration
                </li>
                <li className="flex items-center text-green-600">
                  <span className="mr-2">✓</span> Smart booking and analytics systems
                </li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="service-card md:col-span-2 lg:col-span-1">
              <div className="w-20 h-20 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <Image src="/assets/services-icon-5.svg" alt="Tools Icon" width={50} height={50} />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-4">Business Optimization Tools</h3>
              <p className="text-gray-600 mb-6">
                Implement custom AI-driven tools designed to improve productivity, enhance marketing efforts, generate more leads, and enable data-driven decision making that accelerates your business growth.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-green-600">
                  <span className="mr-2">✓</span> Custom AI productivity tools
                </li>
                <li className="flex items-center text-green-600">
                  <span className="mr-2">✓</span> Marketing automation systems
                </li>
                <li className="flex items-center text-green-600">
                  <span className="mr-2">✓</span> Data analytics and reporting
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <a href="#contact" className="cta-button">
              Discuss Your Project
            </a>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="section-header">
            <h2 className="section-title">Success Stories</h2>
            <p className="section-subtitle">Real results from businesses like yours</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Case Study 1 */}
            <div className="case-study-card">
              <div className="bg-gradient-to-r from-navy-700 to-primary-500 text-white p-6">
                <h3 className="text-xl font-semibold mb-2">Local Retail Store Doubles Lead Generation</h3>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                  Retail • Automation
                </span>
              </div>
              <div className="p-6">
                <p className="mb-4">
                  <strong>Challenge:</strong> A family-owned retail store struggled with inconsistent lead capture and follow-up processes, missing potential customers.
                </p>
                <p className="mb-4">
                  <strong>Solution:</strong> Implemented AI-driven workflow automation including automated email sequences, smart lead scoring, and integrated customer management.
                </p>
                <p className="mb-6">
                  <strong>Result:</strong> Doubled qualified leads within 3 months and increased conversion rates by 65% through consistent, personalized follow-up.
                </p>
                <div className="flex justify-center gap-8 bg-primary-50 p-4 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-navy-700">100%</div>
                    <div className="text-sm text-gray-600">Lead Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-navy-700">65%</div>
                    <div className="text-sm text-gray-600">Higher Conversion</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="case-study-card">
              <div className="bg-gradient-to-r from-navy-700 to-primary-500 text-white p-6">
                <h3 className="text-xl font-semibold mb-2">Digital Agency Saves 10+ Hours Weekly</h3>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                  Digital Services • Efficiency
                </span>
              </div>
              <div className="p-6">
                <p className="mb-4">
                  <strong>Challenge:</strong> A growing digital marketing agency was overwhelmed with repetitive tasks and client reporting, limiting their ability to take on new clients.
                </p>
                <p className="mb-4">
                  <strong>Solution:</strong> Deployed custom automation tools for client reporting, social media scheduling, and project management workflows.
                </p>
                <p className="mb-6">
                  <strong>Result:</strong> Freed up 10+ hours per week, allowing the team to focus on strategy and acquire 40% more clients without additional staff.
                </p>
                <div className="flex justify-center gap-8 bg-primary-50 p-4 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-navy-700">10+</div>
                    <div className="text-sm text-gray-600">Hours Saved Weekly</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-navy-700">40%</div>
                    <div className="text-sm text-gray-600">More Clients</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="case-study-card">
              <div className="bg-gradient-to-r from-navy-700 to-primary-500 text-white p-6">
                <h3 className="text-xl font-semibold mb-2">Restaurant Boosts Reservations 40%</h3>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                  Food Service • Customer Service
                </span>
              </div>
              <div className="p-6">
                <p className="mb-4">
                  <strong>Challenge:</strong> A family-owned restaurant was losing potential customers due to limited phone availability and booking complications during busy hours.
                </p>
                <p className="mb-4">
                  <strong>Solution:</strong> Implemented a 24/7 AI-powered customer service channel with intelligent booking system and automated confirmation processes.
                </p>
                <p className="mb-6">
                  <strong>Result:</strong> Increased reservations by 40% and improved customer satisfaction scores while reducing staff workload on routine inquiries.
                </p>
                <div className="flex justify-center gap-8 bg-primary-50 p-4 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-navy-700">40%</div>
                    <div className="text-sm text-gray-600">More Reservations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-navy-700">24/7</div>
                    <div className="text-sm text-gray-600">Customer Service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a href="#contact" className="cta-button">
              Start Your Success Story
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="section-header">
            <h2 className="section-title">Get Started Today</h2>
            <p className="section-subtitle">Ready to transform your business with AI? Let's talk.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h3 className="text-2xl font-semibold text-navy-900 mb-6">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-8">
                Take the first step towards AI-powered growth. Schedule your free strategy session and discover how we can help transform your business operations and drive meaningful results.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <strong className="text-navy-900 w-20">Email:</strong>
                  <a href="mailto:info@kingkconsulting.com" className="text-navy-700 hover:underline">
                    info@kingkconsulting.com
                  </a>
                </div>
                <div className="flex items-center">
                  <strong className="text-navy-900 w-20">Phone:</strong>
                  <a href="tel:+19253157663" className="text-navy-700 hover:underline">
                    (925) 315-7663
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-navy-700 mb-4">What to Expect:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Free 30-minute strategy consultation</li>
                  <li>• Custom AI roadmap for your business</li>
                  <li>• No-obligation assessment of your needs</li>
                  <li>• Clear next steps and timeline</li>
                </ul>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default HomePage