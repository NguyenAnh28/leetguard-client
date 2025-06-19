'use client';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-white mb-6">
          Simple. Free. Effective.
        </h2>
        <p className="text-xl text-neutral-300 dark:text-neutral-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          LeetGuard is 100% free — no signups, no paywalls, just better focus.
        </p>
        
        <div className="bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-12 max-w-lg mx-auto">
          <div className="mb-8">
            <div className="text-6xl font-bold text-[#FFA116] mb-2">$0</div>
            <div className="text-neutral-300 dark:text-neutral-300 text-lg">Forever free</div>
          </div>
          
          <ul className="text-left space-y-4 mb-10">
            <li className="flex items-center text-white dark:text-white">
              <span className="text-[#FFA116] mr-3">✓</span>
              Unlimited problem tracking
            </li>
            <li className="flex items-center text-white dark:text-white">
              <span className="text-[#FFA116] mr-3">✓</span>
              Custom site blocking
            </li>
            <li className="flex items-center text-white dark:text-white">
              <span className="text-[#FFA116] mr-3">✓</span>
              Real-time sync
            </li>
            <li className="flex items-center text-white dark:text-white">
              <span className="text-[#FFA116] mr-3">✓</span>
              No data collection
            </li>
          </ul>
          
          <button className="w-full bg-[#FFA116] text-black px-8 py-4 rounded-xl font-semibold text-lg hover:underline transition-colors duration-200">
            Get Started for Free
          </button>
        </div>
      </div>
    </section>
  );
}