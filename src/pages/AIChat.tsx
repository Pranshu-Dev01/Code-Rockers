import React, { useState, useRef, useEffect } from 'react'
import { 
  Send, 
  Smile, 
  Paperclip, 
  MoreHorizontal, 
  BrainCircuit,
  User,
  Sparkles
} from 'lucide-react'

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: "Hello Pranshu! I'm Astra, your financial decision engine. How can I assist you today?", time: '09:41 AM' },
    { id: 2, type: 'user', text: "Can I afford the new iPhone 15 Pro?", time: '09:42 AM' },
    { id: 3, type: 'bot', text: "To help you decide, let me check your current savings and upcoming expenses... Based on your ₹75,000 monthly income, buying it outright would take 1.2x of your monthly savings capability. Would you like me to simulate a monthly EMI plan or wait for 3 more months?", time: '09:42 AM' },
  ])
  const [inputValue, setInputValue] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)

  const suggestedPrompts = [
    "Should I take this loan?",
    "How to save 20% more?",
    "Impact of buying a car",
    "Switching to a new credit card"
  ]

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = () => {
    if (!inputValue.trim()) return
    const newMsg = { id: Date.now(), type: 'user', text: inputValue, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
    setMessages([...messages, newMsg])
    setInputValue('')
    
    // Fake response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        type: 'bot', 
        text: "That's a great question. Let me analyze that for you. I'm looking at your historical spending patterns and current goals... Give me a second.", 
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
      }])
    }, 1000)
  }

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-200px)] flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex items-center justify-between p-6 bg-white border border-gray-100 rounded-t-[32px] shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-accent-gradient flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <BrainCircuit className="w-7 h-7 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-primary text-xl title-font">Astra Assistant</h3>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest">Active Insight Engine</span>
            </div>
          </div>
        </div>
        <button className="p-2 text-gray-400 hover:text-primary transition-colors hover:bg-gray-50 rounded-xl">
          <MoreHorizontal className="w-6 h-6" />
        </button>
      </div>

      {/* Messages Area */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-10 space-y-8 bg-white/40 border-x border-gray-100 scroll-smooth"
      >
        {messages.map((msg) => (
          <div key={msg.id} className={`flex gap-4 ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center shadow-sm 
              ${msg.type === 'bot' 
                ? 'bg-accent-gradient text-white ring-4 ring-emerald-50' 
                : 'bg-primary text-white'}`}
            >
              {msg.type === 'bot' ? <BrainCircuit className="w-5 h-5" /> : <User className="w-5 h-5" />}
            </div>
            
            <div className={`max-w-[70%] space-y-2 ${msg.type === 'user' ? 'items-end flex flex-col' : ''}`}>
              <div 
                className={`p-6 rounded-[32px] font-medium leading-relaxed shadow-sm
                  ${msg.type === 'bot' 
                    ? 'bg-white text-primary rounded-tl-lg border border-gray-100' 
                    : 'bg-primary text-white rounded-tr-lg'}`}
              >
                {msg.text}
              </div>
              <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest px-2">{msg.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-8 bg-white border border-gray-100 rounded-b-[40px] shadow-[0_-8px_32px_-12px_rgba(31,38,135,0.07)]">
        {/* Suggested Prompts */}
        <div className="flex flex-wrap gap-3 mb-6">
          {suggestedPrompts.map(prompt => (
            <button 
              key={prompt}
              onClick={() => setInputValue(prompt)}
              className="px-4 py-2 bg-gray-50 text-gray-500 rounded-2xl text-sm font-bold border border-gray-100 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-all duration-300 flex items-center gap-2 group"
            >
              <Sparkles className="w-3.5 h-3.5 text-gray-300 group-hover:text-emerald-500" />
              <span>{prompt}</span>
            </button>
          ))}
        </div>

        <div className="relative">
          <input 
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask anything... e.g., 'How can I save for a house?'"
            className="w-full pl-6 pr-32 py-5 rounded-3xl bg-gray-50 border-2 border-gray-100 text-primary font-medium focus:outline-none focus:border-accent focus:bg-white transition-all duration-300 shadow-inner"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <button className="p-2 text-gray-300 hover:text-primary transition-colors"><Smile className="w-6 h-6" /></button>
            <button className="p-2 text-gray-300 hover:text-primary transition-colors"><Paperclip className="w-6 h-6" /></button>
            <button 
              onClick={handleSend}
              className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg 
              ${inputValue.trim() ? 'bg-primary text-white shadow-slate-900/10' : 'bg-gray-100 text-gray-300 cursor-not-allowed'}`}
            >
              <Send className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-4 mt-6">
          <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em] flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-gray-300"></div>
            Private Instance
            <div className="w-1 h-1 rounded-full bg-gray-300"></div>
          </p>
        </div>
      </div>
    </div>
  )
}

export default AIChat
