import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'

const HomePage = () => {
  return (
    <Layout>
      <Head>
        <title>Flowgenix AI - AI Consulting for Business Growth</title>
        <meta name="description" content="Unlock AI-powered growth for your business with practical, hands-on AI consulting and automation tailored for small and midsize businesses." />
        <meta name="keywords" content="AI consulting, business automation, workflow optimization, AI strategy, small business AI" />
      </Head>

      {/* Hero Section */}
      <section id="home" className="gradient-bg pt-32 lg:pt-40 pb-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-secondary-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left animate-in">
              <h1 className="text-5xl lg:text-7xl font-bold text-charcoal-900 mb-6 leading-tight">
                <span className="text-gradient">Transform</span> Your Business with AI
              </h1>
              <p className="text-xl lg:text-2xl text-charcoal-700 font-medium mb-8">
                Unlock intelligent workflows and automation that drive real growth for modern businesses.
              </p>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                At Flowgenix AI, we specialize in creating seamless AI solutions that integrate naturally into your operations, boosting efficiency and unlocking new opportunities for sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#contact" className="cta-button">
                  Start Your AI Journey
                </a>
                <a href="#services" className="cta-button secondary">
                  Explore Solutions
                </a>
              </div>
            </div>
            <div className="flex justify-center animate-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-2xl blur-3xl opacity-20 scale-110"></div>
                <Image
                  src="/attached_assets/Unlock AI-power_1749671416488.png"
                  alt="AI Business Growth Illustration"
                  width={500}
                  height={400}
                  className="w-full max-w-lg h-auto rounded-2xl shadow-2xl relative z-10 border border-primary-200/50"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="section-header">
            <h2 className="section-title">About Flowgenix AI</h2>
            <p className="section-subtitle">Your trusted partner in intelligent automation</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-in">
              <h3 className="text-2xl font-semibold text-primary-700 mb-6">Intelligent Workflows for Modern Business</h3>
              <p className="mb-6">
                Flowgenix AI was founded on the principle that intelligent automation should enhance human potential, not replace it. We specialize in creating AI-powered workflows that seamlessly integrate with your existing operations, amplifying your team's capabilities and driving sustainable growth.
              </p>
              
              <p className="mb-8">
                Our approach combines cutting-edge AI technology with deep business understanding, ensuring that every solution we implement delivers measurable value. We work closely with forward-thinking businesses to identify optimization opportunities and deploy intelligent systems that evolve with your needs.
              </p>
              
              <h3 className="text-2xl font-semibold text-primary-700 mb-6">Our Vision</h3>
              <p className="mb-8">
                We envision a future where every business, regardless of size, has access to enterprise-grade AI capabilities. Through our innovative flow-based approach, we make advanced automation accessible, practical, and immediately impactful for organizations ready to embrace the next generation of business intelligence.
              </p>
              
              <a href="#contact" className="cta-button secondary">
                Discover Our Methodology
              </a>
            </div>
            <div className="animate-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-2xl blur-2xl"></div>
                <Image
                  src="/attached_assets/AI-Workflow-bkground_1749671840367.jpg"
                  alt="AI Workflow Network"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl shadow-xl relative z-10 border border-primary-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="section-header">
            <h2 className="section-title">Our Solutions</h2>
            <p className="section-subtitle">Intelligent automation that transforms how you work</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Service 1 */}
            <div className="service-card group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal-900 mb-4">Intelligent Workflow Design</h3>
              <p className="text-gray-600 mb-6">
                We analyze your business processes and design AI-powered workflows that eliminate bottlenecks, reduce manual tasks, and create seamless operations that scale with your growth.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-primary-600">
                  <span className="mr-2">✓</span> Process mapping and optimization
                </li>
                <li className="flex items-center text-primary-600">
                  <span className="mr-2">✓</span> Custom automation implementation
                </li>
                <li className="flex items-center text-primary-600">
                  <span className="mr-2">✓</span> Performance monitoring and scaling
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="service-card group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal-900 mb-4">Smart Integration & Automation</h3>
              <p className="text-gray-600 mb-6">
                Connect your existing tools and systems with intelligent automation that learns from your patterns, making your entire tech stack work together seamlessly and efficiently.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-primary-600">
                  <span className="mr-2">✓</span> API integrations and data flows
                </li>
                <li className="flex items-center text-primary-600">
                  <span className="mr-2">✓</span> Intelligent trigger-based automation
                </li>
                <li className="flex items-center text-primary-600">
                  <span className="mr-2">✓</span> Real-time monitoring and alerts
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="service-card group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal-900 mb-4">AI-Powered Content Generation</h3>
              <p className="text-gray-600 mb-6">
                Generate high-quality content, personalized communications, and dynamic media that adapts to your audience while maintaining your brand voice and consistency.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-primary-600">
                  <span className="mr-2">✓</span> Dynamic content creation
                </li>
                <li className="flex items-center text-primary-600">
                  <span className="mr-2">✓</span> Personalized messaging systems
                </li>
                <li className="flex items-center text-primary-600">
                  <span className="mr-2">✓</span> Brand-consistent media generation
                </li>
              </ul>
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