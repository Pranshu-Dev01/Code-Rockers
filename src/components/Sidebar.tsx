import React from 'react'
import { 
  LayoutDashboard, 
  BrainCircuit, 
  Target, 
  MessageSquare,
  HelpCircle,
  Settings,
  LogOut,
  LineChart
} from 'lucide-react'

interface SidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'decisions', label: 'Decisions', icon: BrainCircuit },
    { id: 'goals', label: 'Goals', icon: Target },
    { id: 'simulation', label: 'Life Simulation', icon: LineChart },
    { id: 'chat', label: 'AI Assistant', icon: MessageSquare },
  ]

  const secondaryItems = [
    { id: 'help', label: 'Help', icon: HelpCircle },
    { id: 'settings', label: 'Settings', icon: Settings },
  ]

  return (
    <div className="w-72 h-full flex flex-col bg-white border-r border-gray-100 p-8 shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-12 px-2">
        <div className="w-10 h-10 rounded-xl bg-accent-gradient flex items-center justify-center shadow-lg shadow-emerald-500/20">
          <BrainCircuit className="w-6 h-6 text-white" />
        </div>
        <span className="font-bold text-2xl tracking-tight title-font text-[#1E293B]">Astra</span>
      </div>

      {/* Primary Menu */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 group
              ${activeTab === item.id 
                ? 'bg-primary text-white shadow-xl shadow-slate-900/10' 
                : 'text-gray-400 hover:text-primary hover:bg-gray-50'}`}
          >
            <item.icon className={`w-5 h-5 transition-transform duration-300 ${activeTab === item.id ? 'scale-110' : 'group-hover:scale-110'}`} />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Secondary Menu */}
      <div className="pt-8 mt-8 border-t border-gray-100 space-y-2">
        {secondaryItems.map((item) => (
          <button
            key={item.id}
            className="w-full flex items-center gap-4 px-4 py-3 rounded-2xl text-gray-400 hover:text-primary hover:bg-gray-50 transition-all duration-200"
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
        <button className="w-full flex items-center gap-4 px-4 py-3 rounded-2xl text-red-400 hover:text-red-500 hover:bg-red-50 transition-all duration-200">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Sign Out</span>
        </button>
      </div>

      {/* Trust Badge */}
      <div className="mt-12 p-4 rounded-3xl bg-gray-50 border border-gray-100">
        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold mb-2">Privacy Check</p>
        <p className="text-xs text-gray-600 leading-relaxed">
          Your data is encrypted and stays private.
        </p>
        <div className="flex gap-1 mt-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
          <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
          <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
