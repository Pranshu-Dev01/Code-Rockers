import React, { useState } from 'react'
import { 
  Mic, 
  Upload, 
  Search, 
  ArrowRight,
  TrendingDown,
  Info,
  CheckCircle2,
  AlertTriangle,
  History,
  X
} from 'lucide-react'

const DecisionAnalyzer: React.FC = () => {
  const [analyzing, setAnalyzing] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const handleAnalyze = () => {
    setAnalyzing(true)
    setTimeout(() => {
      setAnalyzing(false)
      setShowResult(true)
    }, 2000)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Input Section */}
      <div className="glass-card rounded-[40px] p-10 text-center space-y-8 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-accent-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        
        <div className="max-w-xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold title-font text-primary">What's on your mind?</h2>
          <p className="text-gray-500 font-medium">Astra analyzes the risk and impact of your next big move.</p>
        </div>

        <div className="relative group/input">
          <textarea 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="e.g., 'I want to take a ₹2 lakh loan for a bike'"
            className="w-full h-40 p-8 pt-10 rounded-3xl bg-gray-50 border-2 border-gray-100 text-lg text-primary placeholder:text-gray-300 focus:outline-none focus:border-accent focus:bg-white transition-all duration-300 resize-none font-medium"
          ></textarea>
          
          <div className="absolute top-6 left-8 flex items-center gap-2">
            <Mic className="w-4 h-4 text-gray-400 group-focus-within/input:text-accent transition-colors" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-focus-within/input:text-accent transition-colors">Voice Active</span>
          </div>

          <div className="absolute bottom-6 right-6 flex items-center gap-4">
            <button className="p-3 text-gray-400 hover:text-primary hover:bg-gray-100 rounded-2xl transition-all duration-200">
              <Upload className="w-5 h-5" />
            </button>
            <button 
              onClick={handleAnalyze}
              disabled={!inputValue.trim() || analyzing}
              className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-xl
              ${!inputValue.trim() || analyzing 
                ? 'bg-gray-100 text-gray-400' 
                : 'bg-primary text-white hover:shadow-slate-900/20 active:scale-95'}`}
            >
              {analyzing ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Analyzing...</span>
                </>
              ) : (
                <>
                  <span>Analyze</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <span className="text-sm font-semibold text-gray-400">Suggest:</span>
          {["Buying a car", "New Credit Card", "Higher Studies Loan", "Switching Job"].map(tag => (
            <button 
              key={tag}
              onClick={() => setInputValue(`I am thinking about ${tag.toLowerCase()}...`)}
              className="px-4 py-2 rounded-xl bg-gray-50 text-gray-500 text-sm font-medium hover:bg-gray-100 hover:text-primary transition-all duration-200 border border-gray-100"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Analysis Result */}
      {showResult && (
        <div className="space-y-8 animate-in slide-in-from-top-4 fade-in duration-700">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold title-font text-primary">Astra Analysis Result</h3>
            <button 
              onClick={() => setShowResult(false)} 
              className="p-2 hover:bg-gray-100 rounded-xl text-gray-400 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card rounded-[32px] p-8 border-l-8 border-amber-400">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-bold text-primary">Medium Risk</span>
                </div>
                <button className="p-2 text-gray-300 hover:text-primary transition-colors"><Info className="w-5 h-5" /></button>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Why?</p>
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-primary font-medium">
                      <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div></div>
                      <span>EMI will take 25% of your monthly income.</span>
                    </li>
                    <li className="flex gap-3 text-primary font-medium">
                      <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div></div>
                      <span>Total interest of ₹40,000 over 2 years.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-2 pt-4">
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Impact</p>
                  <p className="font-bold text-primary leading-relaxed">
                    This decision will delay your "Home Apartment" goal by <span className="text-amber-600 underline underline-offset-4 decoration-2">5 months.</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-[32px] p-8 space-y-8 bg-primary/5 border-none">
              <h4 className="text-lg font-bold text-primary">Astra Recommendation</h4>
              
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 bottom-0 w-2 bg-accent opacity-20"></div>
                <p className="text-primary font-bold mb-2">Increase Downpayment</p>
                <p className="text-sm text-gray-500 font-medium">Adding ₹50,000 upfront will lower the risk to 'Safe' and save ₹12,000 in interest.</p>
              </div>

              <button className="w-full py-5 bg-accent-gradient text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-emerald-500/20 hover:scale-[1.02] active:scale-95 transition-all duration-300">
                <TrendingDown className="w-6 h-6" />
                <span>Run "What If?" Simulation</span>
              </button>

              <div className="flex items-center justify-center gap-2 pt-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Powered by Astra AI-5 Core</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* History */}
      {!showResult && (
        <div className="space-y-6 pt-10">
          <div className="flex items-center gap-2">
            <History className="w-5 h-5 text-gray-400" />
            <h3 className="text-lg font-bold title-font text-primary">Recent Analyses</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${i === 2 ? 'bg-emerald-50 text-emerald-500' : 'bg-gray-100 text-gray-400'}`}>
                    {i === 2 ? <CheckCircle2 className="w-5 h-5" /> : <Search className="w-5 h-5" />}
                  </div>
                  <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Mar 28</p>
                </div>
                <p className="font-bold text-primary text-sm line-clamp-2 mb-4 group-hover:text-accent transition-colors">
                  {i === 1 ? "Buying HDFC Mutual Fund Units" : i === 2 ? "MacBook Pro Purchase Plan" : "European Vacation Analysis"}
                </p>
                <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${i === 2 ? 'bg-emerald-500 w-full' : 'bg-primary/20 w-1/2'}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default DecisionAnalyzer
