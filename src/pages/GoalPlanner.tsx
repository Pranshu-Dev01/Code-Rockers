import React, { useState } from 'react'
import { 
  Trash2, 
  Calendar, 
  TrendingUp, 
  Wallet,
  Building,
  GraduationCap,
  Car,
  Heart,
  Plus
} from 'lucide-react'

const GoalPlanner: React.FC = () => {
  const [goals] = useState([
    { id: 1, name: 'New Apartment', target: 2000000, current: 1300000, deadline: '2025-12-01', icon: Building, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { id: 2, name: 'Emergency Fund', target: 500000, current: 440000, deadline: '2024-08-15', icon: Wallet, color: 'text-amber-500', bg: 'bg-amber-50' },
  ])

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold title-font text-primary mb-2">Build your future.</h2>
          <p className="text-gray-500 font-medium">Astra calculates exactly how much you need to save to reach your dreams.</p>
        </div>
        <button className="flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl shadow-xl shadow-slate-900/10 hover:shadow-2xl transition-all duration-300 font-bold active:scale-95 group">
          <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
          <span>New Goal</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          {goals.map(goal => (
            <div key={goal.id} className="glass-card rounded-[40px] p-8 border-none group hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl ${goal.bg} ${goal.color} flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm`}>
                    <goal.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold title-font text-primary">{goal.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Calendar className="w-3.5 h-3.5 text-gray-300" />
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Ends {new Date(goal.deadline).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-2xl font-bold text-primary">₹{(goal.current / 1000).toLocaleString()}k <span className="text-sm font-medium text-gray-400">/ ₹{(goal.target / 100000).toLocaleString()}L</span></p>
                  <p className="text-xs font-bold text-emerald-500 uppercase tracking-widest mt-1">+₹7,500 this month</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="h-4 w-full bg-gray-50 rounded-full overflow-hidden p-1 border border-gray-100">
                  <div 
                    className="h-full bg-accent rounded-full shadow-[0_0_12px_rgba(16,185,129,0.2)] transition-all duration-1000 ease-out" 
                    style={{ width: `${(goal.current / goal.target) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between items-center text-xs font-bold text-gray-400 uppercase tracking-widest px-2">
                  <span>{Math.round((goal.current / goal.target) * 100)}% Complete</span>
                  <span>₹{(goal.target - goal.current).toLocaleString()} Remaining</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-50 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-1 leading-none">Required / Month</span>
                    <span className="text-lg font-bold text-primary">₹12,400</span>
                  </div>
                  <div className="w-px h-8 bg-gray-100"></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-1 leading-none">On Track</span>
                    <span className="text-lg font-bold text-emerald-500">YES</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-3 text-gray-300 hover:text-red-400 transition-colors"><Trash2 className="w-5 h-5" /></button>
                  <button className="px-6 py-3 bg-gray-50 text-primary font-bold rounded-2xl hover:bg-gray-100 transition-all duration-200">Manage</button>
                </div>
              </div>
            </div>
          ))}

          {/* Quick Add Form */}
          <div className="bg-white/40 border-2 border-dashed border-gray-200 rounded-[40px] p-10 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-accent hover:bg-accent/5 transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
              <Plus className="w-8 h-8 text-gray-300 group-hover:text-white" />
            </div>
            <h4 className="text-lg font-bold text-primary mb-2">Create a New Reality</h4>
            <p className="text-gray-400 text-sm font-medium tracking-wide">Add a goal and Astra will help you navigate the path to reach it.</p>
          </div>
        </div>

        {/* Action Sidebar */}
        <div className="space-y-10">
          <div className="glass-card rounded-[32px] p-8 bg-accent-gradient text-white border-none shadow-2xl shadow-emerald-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold title-font leading-none">Astra Insight</h3>
            </div>
            <p className="text-emerald-50/80 mb-8 font-medium leading-relaxed">
              If you increase your monthly savings by just ₹2,500, you'll reach your "New Apartment" goal <span className="text-white font-bold underline">2 months early.</span>
            </p>
            <button className="w-full py-4 bg-white text-emerald-700 font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95">
              Apply Suggestion
            </button>
          </div>

          <div className="glass-card rounded-[32px] p-8 space-y-8">
            <h3 className="text-lg font-bold text-primary">Goal Categories</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Building, label: 'Real Estate' },
                { icon: GraduationCap, label: 'Education' },
                { icon: Car, label: 'Automobile' },
                { icon: Heart, label: 'Lifestyle' }
              ].map(cat => (
                <button key={cat.label} className="flex flex-col items-center gap-3 p-4 rounded-2xl border border-gray-50 bg-gray-50/50 hover:bg-white hover:shadow-md hover:border-gray-100 transition-all duration-200">
                  <cat.icon className="w-5 h-5 text-gray-400" />
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{cat.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GoalPlanner
