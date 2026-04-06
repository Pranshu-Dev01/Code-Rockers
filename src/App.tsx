import React, { useState } from 'react'
import { 
  LayoutDashboard, 
  BrainCircuit, 
  Target, 
  MessageSquare, 
  User, 
  Menu, 
  X,
  Bell
} from 'lucide-react'
import Dashboard from './pages/Dashboard'
import DecisionAnalyzer from './pages/DecisionAnalyzer'
import AIChat from './pages/AIChat'
import GoalPlanner from './pages/GoalPlanner'
import LifeSimulator from './pages/LifeSimulator'
import Sidebar from './components/Sidebar'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />
      case 'decisions': return <DecisionAnalyzer />
      case 'goals': return <GoalPlanner />
      case 'chat': return <AIChat />
      case 'simulation': return <LifeSimulator />
      default: return <Dashboard />
    }
  }

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      {/* Sidebar - Desktop */}
      <div className="hidden lg:flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-6 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent-gradient flex items-center justify-center shadow-lg">
            <BrainCircuit className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight title-font text-primary">Astra</span>
        </div>
        <button onClick={() => setIsSidebarOpen(true)} className="p-2 text-primary hover:bg-gray-100 rounded-xl transition-colors">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-white">
            <Sidebar activeTab={activeTab} setActiveTab={(tab) => { setActiveTab(tab); setIsSidebarOpen(false); }} />
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-primary transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-0 overflow-x-hidden pt-20 lg:pt-0 pb-10">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Top Bar - Desktop */}
          <div className="hidden lg:flex items-center justify-between mb-10">
            <h1 className="text-2xl font-semibold title-font text-primary">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1).replace('-', ' ')}
            </h1>
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-400 hover:text-primary hover:bg-gray-100 rounded-xl transition-all duration-200 relative">
                <Bell className="w-6 h-6" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                <div className="text-right">
                  <p className="text-sm font-medium text-primary">Pranshu</p>
                  <p className="text-xs text-gray-400">Premium Member</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-gray-200 flex items-center justify-center border-2 border-white shadow-sm overflow-hidden">
                  <User className="w-6 h-6 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {renderContent()}
        </div>
      </main>
    </div>
  )
}

export default App
