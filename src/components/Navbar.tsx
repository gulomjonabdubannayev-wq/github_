import { useState } from 'react';

interface NavbarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Navbar({ mobileMenuOpen, setMobileMenuOpen }: NavbarProps) {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <nav className="bg-[#24292f] text-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side */}
          <div className="flex items-center space-x-4">
            {/* GitHub Logo */}
            <a href="#" className="flex items-center">
              <svg height="32" viewBox="0 0 16 16" width="32" fill="white">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>

            {/* Search */}
            <div className="hidden md:block relative">
              <input
                type="text"
                placeholder="Search or jump to..."
                className={`bg-[#24292f] border border-[#57606a] rounded-md px-3 py-1 text-sm text-white placeholder-[#57606a] w-72 focus:outline-none focus:border-[#1f6feb] focus:bg-[#0d1117] transition-all ${searchFocused ? 'w-96 bg-[#0d1117] border-[#1f6feb]' : ''}`}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
              <span className="absolute right-2 top-1/2 -translate-y-1/2 border border-[#57606a] rounded px-1.5 text-xs text-[#57606a]">/</span>
            </div>

            {/* Nav links */}
            <div className="hidden lg:flex items-center space-x-4 text-sm font-medium">
              <a href="#" className="hover:text-[#58a6ff] transition-colors">Pull requests</a>
              <a href="#" className="hover:text-[#58a6ff] transition-colors">Issues</a>
              <a href="#" className="hover:text-[#58a6ff] transition-colors">Marketplace</a>
              <a href="#" className="hover:text-[#58a6ff] transition-colors">Explore</a>
            </div>
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-sm hover:text-[#58a6ff] transition-colors">
              <svg className="w-5 h-5 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </a>
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                <path d="M7.75 0a.75.75 0 01.75.75V3h3.634c.417 0 .816.186 1.071.47l1.108 1.231a.25.25 0 01-.184.419H8.5v2.5h4.884a1.25 1.25 0 011.245 1.383l-.536 4.286a1.25 1.25 0 01-1.244 1.096H8.5v1.875a.75.75 0 01-1.5 0V13H2.744a1.25 1.25 0 01-1.245-1.096l-.536-4.286A1.25 1.25 0 012.216 6.5H7V4.119H2.871a.25.25 0 01-.184-.419L3.795 2.47A1.25 1.25 0 014.611 2H7V.75A.75.75 0 017.75 0z" />
              </svg>
              <span className="text-sm">+</span>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z" />
              </svg>
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-xs font-bold cursor-pointer">
              U
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#57606a] px-4 py-4 space-y-3">
          <input
            type="text"
            placeholder="Search GitHub"
            className="w-full bg-[#0d1117] border border-[#57606a] rounded-md px-3 py-2 text-sm text-white placeholder-[#57606a]"
          />
          <a href="#" className="block text-sm py-2 hover:text-[#58a6ff]">Pull requests</a>
          <a href="#" className="block text-sm py-2 hover:text-[#58a6ff]">Issues</a>
          <a href="#" className="block text-sm py-2 hover:text-[#58a6ff]">Marketplace</a>
          <a href="#" className="block text-sm py-2 hover:text-[#58a6ff]">Explore</a>
        </div>
      )}
    </nav>
  );
}
