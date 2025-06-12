import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="text-white py-12" style={{backgroundColor: '#212629'}}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col items-center lg:items-start">
            <Image
              src="/flowgenix-ai-logo-sm.png"
              alt="Flowgenix AI"
              width={180}
              height={72}
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-300 text-sm text-center lg:text-left">
              Transforming businesses through intelligent automation and AI-powered workflows.
            </p>
          </div>
          
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-semibold text-primary-400 mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Workflow Automation</li>
              <li>AI Integration</li>
              <li>Data Analytics</li>
              <li>Process Optimization</li>
            </ul>
          </div>
          
          <div className="text-center lg:text-right">
            <h4 className="text-lg font-semibold text-primary-400 mb-4">Contact</h4>
            <p className="text-gray-300 text-sm mb-2">
              Ready to transform your business?
            </p>
            <a href="#contact" className="text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium">
              Get Started Today
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Flowgenix AI. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Intelligent Automation • Strategic AI Solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer