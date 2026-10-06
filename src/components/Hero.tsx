export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f6f8fa]">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#1f6feb]/10 to-[#58a6ff]/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#238636]/10 to-[#3fb950]/5 blur-3xl" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-[#24292f] leading-tight">
            Let's build from here
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#57606a] max-w-2xl mx-auto leading-relaxed">
            The world's leading AI-powered developer platform. Build, scale, and deliver secure software faster with GitHub.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-[#24292f] hover:bg-[#32383f] text-white font-semibold px-8 py-3 rounded-md text-base transition-colors">
              Start a free trial
            </button>
            <button className="w-full sm:w-auto bg-white hover:bg-[#f6f8fa] text-[#24292f] font-semibold px-8 py-3 rounded-md text-base border border-[#d0d7de] transition-colors">
              Sign up for GitHub
            </button>
          </div>

          <p className="mt-4 text-sm text-[#57606a]">
            Free for open source. Plans starting at $4/month.
          </p>
        </div>

        {/* Code preview card */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-[#24292f] rounded-lg shadow-2xl overflow-hidden border border-[#30363d]">
            <div className="flex items-center px-4 py-3 border-b border-[#30363d]">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <span className="ml-4 text-xs text-[#8b949e] font-mono">main.ts</span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
              <div><span className="text-[#ff7b72]">import</span> <span className="text-[#79c0ff]">{'{ Octokit }'}</span> <span className="text-[#ff7b72]">from</span> <span className="text-[#a5d6ff]">'@octokit/rest'</span>;</div>
              <div className="mt-2"><span className="text-[#ff7b72]">const</span> <span className="text-[#79c0ff]">octokit</span> = <span className="text-[#ff7b72]">new</span> <span className="text-[#d2a8ff]">Octokit</span>({'{'} <span className="text-[#79c0ff]">auth</span>: process.env.<span className="text-[#79c0ff]">GITHUB_TOKEN</span> {'}'});</div>
              <div className="mt-4"><span className="text-[#8b949e]">{'// Create a new repository'}</span></div>
              <div><span className="text-[#ff7b72]">const</span> {'{'} <span className="text-[#79c0ff]">data</span> {'}'} = <span className="text-[#ff7b72]">await</span> octokit.rest.repos.<span className="text-[#d2a8ff]">createForAuthenticatedUser</span>({'{'}</div>
              <div className="pl-4"><span className="text-[#79c0ff]">name</span>: <span className="text-[#a5d6ff]">'my-awesome-project'</span>,</div>
              <div className="pl-4"><span className="text-[#79c0ff]">description</span>: <span className="text-[#a5d6ff]">'Built with GitHub ✨'</span>,</div>
              <div className="pl-4"><span className="text-[#79c0ff]">private</span>: <span className="text-[#79c0ff]">false</span>,</div>
              <div>{'}'});</div>
              <div className="mt-4"><span className="text-[#79c0ff]">console</span>.<span className="text-[#d2a8ff]">log</span>(<span className="text-[#a5d6ff]">`Repository created: ${'{'}data.html_url{'}'}`</span>);</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
