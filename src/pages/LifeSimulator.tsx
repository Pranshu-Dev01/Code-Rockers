import React, { useState } from 'react'
import { 
  ArrowRight, 
  Home, 
  GraduationCap, 
  Heart, 
  Briefcase,
  Play,
  TrendingDown,
  TrendingUp,
  AlertCircle,
  Clock,
  Sparkles
} from 'lucide-react'

const LifeSimulator: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState('Home')
  const [timelineValue, setTimelineValue] = useState(5) // years

  const events = [
    { id: 'Home', icon: Home, label: 'Buying a House', color: 'bg-emerald-500', text: 'text-emerald-500' },
    { id: 'Education', icon: GraduationCap, label: 'Higher Studies', color: 'bg-indigo-500', text: 'text-indigo-500' },
    { id: 'Marriage', icon: Heart, label: 'Early Retirement', color: 'bg-rose-500', text: 'text-rose-500' },
    { id: 'Business', icon: Briefcase, label: 'Starting a Business', color: 'bg-amber-500', text: 'text-amber-500' },
  ]

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold title-font text-primary mb-2">Simulate your potential.</h2>
          <p className="text-gray-500 font-medium">Visualize the long-term impact of your life decisions before you make them.</p>
        </div>
        <div className="flex bg-white p-2 rounded-2xl border border-gray-100 shadow-sm">
          <button className="px-6 py-2 bg-primary text-white font-bold rounded-xl text-sm transition-all duration-300">New Simulation</button>
          <button className="px-6 py-2 text-gray-400 font-bold rounded-xl text-sm transition-all duration-200">Load Save</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          {/* Main Simulation View */}
          <div className="glass-card rounded-[40px] p-10 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg">
                  <Play className="w-6 h-6 fill-current" />
                </div>
                <h3 className="text-xl font-bold title-font text-primary">Live Projection</h3>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl border border-gray-100">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-bold text-gray-600 uppercase tracking-widest">{timelineValue} Year View</span>
              </div>
            </div>

            {/* Visualization Placeholder */}
            <div className="h-64 mb-10 relative flex items-end gap-1 px-4">
              <div className="absolute inset-x-0 top-0 border-t border-dashed border-gray-100"></div>
              <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-gray-100"></div>
              
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i}
                  className={`flex-1 rounded-t-lg transition-all duration-1000 ease-out delay-[${i * 50}ms]
                    ${i > 12 ? 'bg-primary/20' : 'bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]'}
                  `}
                  style={{ height: `${20 + (i * (4 + (i/2)))}%` }}
                ></div>
              ))}
              
              {/* Floating Tooltip */}
              <div className="absolute left-[65%] top-[20%] glass-morphism p-4 rounded-2xl shadow-xl border-emerald-200/50 group-hover:scale-110 transition-transform duration-500">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Decision Point</p>
                <p className="text-lg font-bold text-primary">₹3.5M Net Worth</p>
              </div>
            </div>

            {/* Timeline Slider */}
            <div className="space-y-6">
              <div className="flex justify-between items-center px-2">
                <span className="text-sm font-bold text-gray-300 uppercase tracking-widest">Now</span>
                <span className="text-sm font-bold text-gray-300 uppercase tracking-widest">10 Years</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="10" 
                step="1"
                value={timelineValue}
                onChange={(e) => setTimelineValue(Number(e.target.value))}
                className="w-full h-3 bg-gray-100 rounded-full appearance-none cursor-pointer accent-primary" 
              />
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-sm text-gray-400 font-medium tracking-wide">
                  Showing 
                  <span className="text-primary font-bold mx-1">{timelineValue} years</span> 
                  of impact from 
                  <span className="text-accent font-bold mx-1">{events.find(e => e.id === selectedEvent)?.label}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Event Selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {events.map((event) => (
              <button 
                key={event.id}
                onClick={() => setSelectedEvent(event.id)}
                className={`p-6 rounded-[32px] flex flex-col items-center gap-4 transition-all duration-300 border-2
                  ${selectedEvent === event.id 
                    ? 'bg-white border-primary shadow-xl shadow-slate-200' 
                    : 'bg-white border-transparent hover:border-gray-100'}`}
              >
                <div className={`w-12 h-12 rounded-2xl ${event.color} text-white flex items-center justify-center shadow-md`}>
                  <event.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-gray-600 uppercase tracking-widest text-center whitespace-nowrap">{event.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Side */}
        <div className="space-y-8">
          <div className="glass-card rounded-[32px] p-8 space-y-8">
            <h3 className="text-lg font-bold text-primary">Simulation Factors</h3>
            <div className="space-y-6">
              {[
                { label: 'Inflation rate', val: '4.5%', change: 0, icon: TrendingUp },
                { label: 'Annual Income Growth', val: '8.0%', change: 1, icon: ArrowRight },
                { label: 'Expected Savings', val: '20%', change: -1, icon: TrendingDown },
              ].map(factor => (
                <div key={factor.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center">
                      <factor.icon className="w-4 h-4 text-gray-400" />
                    </div>
                    <span className="text-sm font-bold text-gray-500 tracking-wide">{factor.label}</span>
                  </div>
                  <span className="font-bold text-primary">{factor.val}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-[32px] p-10 bg-primary shadow-2xl shadow-slate-900/10 relative overflow-hidden">
            <Sparkles className="absolute top-4 right-4 w-10 h-10 text-white/10" />
            <h4 className="text-white text-xl font-bold mb-4 title-font">Simulation Discovery</h4>
            <div className="flex items-start gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-orange-400/20 text-orange-400 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6" />
              </div>
              <p className="text-white/80 font-medium leading-relaxed italic">
                "Wait 2 years for the house purchase, and your retirement fund will grow by an extra ₹22L over 30 years."
              </p>
            </div>
            <button className="w-full py-4 bg-white text-primary rounded-2xl font-bold shadow-lg hover:bg-gray-50 hover:scale-[1.02] active:scale-95 transition-all duration-300">
              Apply to Goals
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LifeSimulator
