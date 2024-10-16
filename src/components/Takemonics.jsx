import React, { useEffect, useState } from 'react';

const Tokenomics = () => {
  const [isVisible, setIsVisible] = useState(false);

  const tokenInfo = [
    { label: "Name", value: "EthAi" },
    { label: "Token Name", value: "$EthAi" },
    { label: "Token standard", value: "ERC20" },
    { label: "Blockchain", value: "Ethereum" },
    { label: "Total Supply", value: "100 Million" },
    { label: "Tax", value: "5%/5%" }
  ];

  const distribution = [
    { label: "Team", value: "35%", color: "#005766", dashArray: "47.1 314", dashOffset: "-266.9" },
    { label: "Marketing", value: "5%", color: "#007a88", dashArray: "15.7 314", dashOffset: "-251.2" },
    { label: "Liquidity Pool", value: "90%", color: "#00e6ff", dashArray: "251.2 314", dashOffset: "0" }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#001a2c] to-[#003a5c] text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-cyan-500">
            Tokenomics
          </h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <svg viewBox="0 0 100 100" className="transform transition-transform duration-1000 hover:scale-105">
                {distribution.map((item, index) => (
                  <circle
                    key={index}
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke={item.color}
                    strokeWidth="20"
                    strokeDasharray={item.dashArray}
                    strokeDashoffset={item.dashOffset}
                    transform="rotate(-90 50 50)"
                    className={`transition-all duration-1000 ${isVisible ? 'opacity-90' : 'opacity-0'}`}
                    style={{
                      animation: `stroke-animation 1.5s ease-out ${index * 0.3}s forwards`,
                    }}
                  />
                ))}
              </svg>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2">
                  {distribution.map((item, index) => (
                    <div 
                      key={index}
                      className={`flex items-center space-x-2 transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className={`bg-[#001a2c]/80 backdrop-blur-sm rounded-lg p-6 border border-cyan-900/30 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              {tokenInfo.map((item, index) => (
                <div 
                  key={index} 
                  className="flex justify-between py-2 hover:bg-cyan-900/20 px-2 rounded transition-colors duration-300"
                >
                  <span className="text-gray-300">{item.label}</span>
                  <span className="text-cyan-300">: {item.value}</span>
                </div>
              ))}
            </div>
            
            <div className={`bg-[#001a2c]/80 backdrop-blur-sm rounded-lg p-6 border border-cyan-900/30 transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              {distribution.map((item, index) => (
                <div 
                  key={index}
                  className="relative mb-4"
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">{item.label}</span>
                    <span className="text-cyan-300">{item.value}</span>
                  </div>
                  <div className="w-full bg-gray-700/30 rounded-full h-2">
                    <div 
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? item.value : '0%',
                        backgroundColor: item.color,
                        transitionDelay: `${index * 200}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes stroke-animation {
          from {
            stroke-dashoffset: 314;
          }
          to {
            stroke-dashoffset: ${props => props.dashOffset || 0};
          }
        }
      `}</style>
    </div>
  );
};

export default Tokenomics;