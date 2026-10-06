const footerLinks = {
  'Product': ['Features', 'Enterprise', 'Copilot', 'Security', 'Pricing', 'Team', 'Resources'],
  'Platform': ['Developer API', 'Partners', 'Education', 'CLI', 'GitHub Desktop', 'GitHub Mobile'],
  'Support': ['Docs', 'Community Forum', 'Training', 'Status', 'Contact GitHub'],
  'Company': ['About', 'Customer stories', 'Blog', 'Careers', 'Press', 'Shop'],
};

export default function Footer() {
  return (
    <footer className="bg-[#24292f] text-[#8b949e] border-t border-[#30363d]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            <a href="#" className="inline-block">
              <svg height="40" viewBox="0 0 16 16" width="40" fill="#8b949e">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
            <div className="mt-4 flex items-center gap-2 text-xs">
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full border border-[#30363d] hover:border-[#58a6ff] hover:text-[#58a6ff] cursor-pointer transition-colors">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M1.679 7.932c.418-.605 1.047-1.083 1.75-1.37l-.075-.176a.5.5 0 01.916.392l-.075.176c.418-.075.852-.075 1.27 0l-.075-.176a.5.5 0 01.916-.392l.075.176c.703.287 1.332.765 1.75 1.37l.176-.075a.5.5 0 01.392.916l-.176.075c.075.418.075.852 0 1.27l.176-.075a.5.5 0 01-.392.916l-.176-.075a3.75 3.75 0 01-1.37 1.75l.075.176a.5.5 0 01-.916.392l-.075-.176a3.75 3.75 0 01-1.27 0l.075.176a.5.5 0 01-.916-.392l-.075-.176a3.75 3.75 0 01-1.37-1.75l-.176.075a.5.5 0 01-.392-.916l.176-.075a3.75 3.75 0 010-1.27l-.176.075a.5.5 0 01.392-.916l.176.075z" />
                </svg>
                🌐 English
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-[#8b949e] mb-3">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[#8b949e] hover:text-[#58a6ff] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#30363d] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#8b949e]">
            © 2024 GitHub, Inc.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <a href="#" className="text-[#8b949e] hover:text-[#58a6ff] transition-colors">Terms</a>
            <a href="#" className="text-[#8b949e] hover:text-[#58a6ff] transition-colors">Privacy</a>
            <a href="#" className="text-[#8b949e] hover:text-[#58a6ff] transition-colors">Sitemap</a>
            <a href="#" className="text-[#8b949e] hover:text-[#58a6ff] transition-colors">What is Git?</a>
          </div>
          <div className="flex items-center gap-3">
            {/* Social icons */}
            <a href="#" className="text-[#8b949e] hover:text-[#58a6ff] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="#" className="text-[#8b949e] hover:text-[#58a6ff] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="#" className="text-[#8b949e] hover:text-[#58a6ff] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
