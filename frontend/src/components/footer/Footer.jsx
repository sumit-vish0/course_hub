
import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Course<span className="text-indigo-400">Hub</span>
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Learn. Grow. Succeed.
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Courses
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
          © 2026 CourseHub. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
