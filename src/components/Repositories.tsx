import { useState } from 'react';

const repos = [
  {
    name: 'react',
    owner: 'facebook',
    description: 'The library for web and native user interfaces.',
    language: 'JavaScript',
    languageColor: '#f1e05a',
    stars: '220k',
    forks: '45.5k',
    updated: '2 hours ago',
    topics: ['javascript', 'ui', 'frontend', 'react'],
  },
  {
    name: 'vscode',
    owner: 'microsoft',
    description: 'Visual Studio Code - Open Source IDE',
    language: 'TypeScript',
    languageColor: '#3178c6',
    stars: '158k',
    forks: '27.8k',
    updated: '45 minutes ago',
    topics: ['typescript', 'editor', 'ide'],
  },
  {
    name: 'tensorflow',
    owner: 'tensorflow',
    description: 'An Open Source Machine Learning Framework for Everyone',
    language: 'Python',
    languageColor: '#3572A5',
    stars: '182k',
    forks: '74.1k',
    updated: '1 hour ago',
    topics: ['machine-learning', 'deep-learning', 'neural-network'],
  },
  {
    name: 'next.js',
    owner: 'vercel',
    description: 'The React Framework for the Web',
    language: 'JavaScript',
    languageColor: '#f1e05a',
    stars: '119k',
    forks: '25.6k',
    updated: '30 minutes ago',
    topics: ['nextjs', 'react', 'framework'],
  },
  {
    name: 'rust',
    owner: 'rust-lang',
    description: 'Empowering everyone to build reliable and efficient software.',
    language: 'Rust',
    languageColor: '#dea584',
    stars: '92k',
    forks: '12k',
    updated: '3 hours ago',
    topics: ['rust', 'compiler', 'programming-language'],
  },
  {
    name: 'linux',
    owner: 'torvalds',
    description: 'Linux kernel source tree',
    language: 'C',
    languageColor: '#555555',
    stars: '172k',
    forks: '52.4k',
    updated: '15 minutes ago',
    topics: ['kernel', 'operating-system', 'c'],
  },
];

export default function Repositories() {
  const [filter, setFilter] = useState('All');
  const languages = ['All', 'JavaScript', 'TypeScript', 'Python', 'Rust', 'C'];

  const filteredRepos = filter === 'All'
    ? repos
    : repos.filter(r => r.language === filter);

  return (
    <section className="py-20 md:py-28 bg-[#f6f8fa]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-[#24292f]">
              Trending repositories
            </h2>
            <p className="mt-2 text-[#57606a]">
              See what the GitHub community is most excited about.
            </p>
          </div>
        </div>

        {/* Language filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setFilter(lang)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                filter === lang
                  ? 'bg-[#0969da] text-white border-[#0969da]'
                  : 'bg-white text-[#24292f] border-[#d0d7de] hover:border-[#1f6feb] hover:text-[#1f6feb]'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Repository list */}
        <div className="space-y-4">
          {filteredRepos.map((repo, index) => (
            <div
              key={index}
              className="bg-white border border-[#d0d7de] rounded-lg p-6 hover:border-[#1f6feb] transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <svg className="w-4 h-4 text-[#57606a]" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z" />
                    </svg>
                    <a href="#" className="text-xl font-semibold text-[#0969da] hover:underline">
                      {repo.owner}/{repo.name}
                    </a>
                    <span className="px-2 py-0.5 text-xs border border-[#d0d7de] rounded-full text-[#57606a]">
                      Public
                    </span>
                  </div>
                  <p className="mt-2 text-[#57606a] text-sm">
                    {repo.description}
                  </p>
                  {/* Topics */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {repo.topics.map((topic, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 text-xs font-medium bg-[#ddf4ff] text-[#0969da] rounded-full hover:bg-[#0969da] hover:text-white transition-colors cursor-pointer"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Star button */}
                <button className="flex items-center gap-1.5 px-3 py-1 border border-[#d0d7de] rounded-md text-xs font-medium text-[#24292f] hover:bg-[#f6f8fa] transition-colors self-start">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  Star
                </button>
              </div>

              {/* Footer stats */}
              <div className="mt-4 flex items-center gap-4 text-xs text-[#57606a]">
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: repo.languageColor }} />
                  {repo.language}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-.878a2.25 2.25 0 111.5 0v.878a2.25 2.25 0 01-2.25 2.25h-1.5v2.128a2.251 2.251 0 11-1.5 0V8.5h-1.5A2.25 2.25 0 015 6.25v-.878a2.25 2.25 0 111.5 0zM5 3.25a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm6.75.75a.75.75 0 10-1.5 0 .75.75 0 001.5 0zM8 12.75a.75.75 0 10-1.5 0 .75.75 0 001.5 0z" />
                  </svg>
                  {repo.forks}
                </span>
                <span>Updated {repo.updated}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredRepos.length === 0 && (
          <div className="text-center py-12 text-[#57606a]">
            <p className="text-lg">No repositories found for this language.</p>
          </div>
        )}
      </div>
    </section>
  );
}
