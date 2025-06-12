import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <Image
              src="/attached_assets/KingKConsulting-logo-old_1749670686873.png"
              alt="King K Consulting"
              width={120}
              height={48}
              className="h-10 w-auto filter brightness-0 invert"
            />
          </div>
          
          <div className="text-center lg:text-right">
            <p className="text-gray-300 text-sm mb-1">
              © {new Date().getFullYear()} King K Consulting. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs">
              AI Consulting and Workflow That Works
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer