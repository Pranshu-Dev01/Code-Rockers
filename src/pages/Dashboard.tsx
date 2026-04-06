import React from 'react'
import { 
  Zap,
  CheckCircle2,
  AlertCircle,
  Plus,
  BrainCircuit
} from 'lucide-react'

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Greeting & Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold title-font text-primary mb-2">Good evening, Pranshu 👋</h2>
          <p className="text-gray-500 font-medium">Your financial engine is running smoothly today.</p>
        </div>
        <div className="flex bg-white p-1 rounded-2xl border border-gray-100 shadow-sm">
          <button className="px-4 py-2 bg-gray-50 text-primary font-semibold rounded-xl text-sm transition-all duration-200">Daily</button>
          <button className="px-4 py-2 text-gray-400 font-medium rounded-xl text-sm transition-all duration-200 hover:text-primary">Weekly</button>
          <button className="px-4 py-2 text-gray-400 font-medium rounded-xl text-sm transition-all duration-200 hover:text-primary">Monthly</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Financial Health Card */}
        <div className="lg:col-span-1 glass-card rounded-[32px] p-8 flex flex-col items-center text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-110"></div>
          <h3 className="text-lg font-semibold text-primary mb-8 self-start">Financial Health</h3>
          
          <div className="relative w-48 h-48 mb-8">
            {/* SVG Progress Ring */}
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="currentColor"
                strokeWidth="10"
                fill="transparent"
                className="text-gray-100"
              />
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="currentColor"
                strokeWidth="10"
                fill="transparent"
                strokeDasharray={552.92}
                strokeDashoffset={552.92 * (1 - 84 / 100)}
                strokeLinecap="round"
                className="text-accent transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-bold title-font text-primary">84</span>
              <span className="text-sm font-medium text-gray-400 uppercase tracking-widest mt-1">Optimal</span>
            </div>
          </div>
          
          <p className="text-gray-600 leading-relaxed mb-6 font-medium">
            "You're in the top 5% of savers this month. Keep it up!"
          </p>
          
          <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/20 active:scale-95">
            Boost Your Score
          </button>
        </div>

        {/* AI Insight & Decisions */}
        <div className="lg:col-span-2 space-y-8">
          {/* AI Insight Card */}
          <div className="bg-accent-gradient rounded-[32px] p-8 text-white relative overflow-hidden shadow-2xl shadow-emerald-500/20">
            <Zap className="absolute top-8 right-8 w-12 h-12 text-white/20" />
            <div className="relative z-10">
              <div className="bg-white/20 backdrop-blur-md rounded-full px-4 py-1.5 inline-flex items-center gap-2 mb-6 border border-white/20">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                <span className="text-xs font-bold uppercase tracking-wider">Astra Insight</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 max-w-md title-font leading-tight">
                You're spending 22% more than usual on subscriptions.
              </h3>
              <p className="text-emerald-50/80 mb-8 max-w-sm font-medium">
                Reducing ₹3,000 this month will keep your home-downpayment goal on track.
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-white text-emerald-700 font-bold rounded-2xl hover:bg-emerald-50 transition-all duration-200 shadow-lg">
                  See Suggestions
                </button>
                <button className="px-6 py-3 bg-white/10 text-white font-bold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-200">
                  Dismiss
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Recent Decisions */}
            <div className="glass-card rounded-[32px] p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-semibold text-primary">Recent Decisions</h3>
                <button className="text-sm font-bold text-accent hover:underline">View All</button>
              </div>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center">
                      <AlertCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-primary">Bike Loan</p>
                      <p className="text-xs text-gray-400 font-medium">Yesterday</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-amber-50 text-amber-600 text-xs font-bold rounded-full border border-amber-100">Medium Risk</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-primary">MacBook Pro</p>
                      <p className="text-xs text-gray-400 font-medium">3 days ago</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-bold rounded-full border border-emerald-100">Safe</span>
                </div>
              </div>
            </div>

            {/* Active Goals */}
            <div className="glass-card rounded-[32px] p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-semibold text-primary">Active Goals</h3>
                <button className="p-1.5 bg-gray-50 rounded-lg text-primary hover:bg-gray-100 transition-colors">
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <p className="font-bold text-primary text-sm">New Apartment</p>
                    <p className="text-xs text-gray-400 font-medium">65%</p>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-accent w-[65%] rounded-full shadow-[0_0_8px_rgba(16,185,129,0.3)]"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <p className="font-bold text-primary text-sm">Emergency Fund</p>
                    <p className="text-xs text-gray-400 font-medium">88%</p>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-300 w-[88%] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ask AI Floating Button */}
      <button className="fixed bottom-10 right-10 flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-full shadow-2xl shadow-slate-900/40 hover:scale-105 active:scale-95 transition-all duration-300 group z-40">
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-12 transition-transform">
          <BrainCircuit className="w-5 h-5" />
        </div>
        <span className="font-bold title-font">Ask AI Before You Decide</span>
      </button>
    </div>
  )
}

export default Dashboard
