import React, { useState, useEffect } from 'react';

export default function FullPowerSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#001a2c] relative overflow-hidden">
     
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#001a2c]">
          <div className="absolute inset-0" 
               style={{
                 background: `linear-gradient(135deg, 
                   rgba(0,38,66,0.95) 0%,
                   rgba(0,26,44,0.95) 100%)`
               }} />
        </div>
        
        
        <div className="absolute inset-0 opacity-20"
             style={{
               backgroundImage: `
                 linear-gradient(to right, #0e4366 1px, transparent 1px),
                 linear-gradient(to bottom, #0e4366 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }} />
      </div>

    
      <div className="absolute right-0 top-0 h-full w-1/2 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#001a2c] via-[#001a2c]/50 to-transparent z-10" />
        <img 
          src="https://th.bing.com/th/id/R.45b600aa606e03e470dec5f9adcd3248?rik=NxSsDRRowb8cGw&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fngPEfyE.jpg&ehk=H8cSGsfjlgPQaG1%2f3Ozt2CphyeUbP7kRRn7Dc8mef9s%3d&risl=&pid=ImgRaw&r=0"
          alt="Futuristic City Landscape" 
          className="h-full w-full object-cover object-center opacity-80"
        />
      </div>

     
      <div className="relative z-10 w-full max-w-6xl mx-auto p-8 flex flex-col justify-center min-h-screen">
        <div className="w-full lg:w-3/5">
        
          <div className={`mb-16 transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="inline-flex items-center">
              <span className="text-2xl font-bold text-white">Full</span>
              <span className="text-2xl font-bold text-white">Power</span>
            </div>
          </div>

        
          <div className={`mb-12 transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="inline-block px-4 py-1 rounded-full bg-[#002a3d] text-sm text-white mb-4">
              Phase 3
            </div>
            <h2 className="text-4xl font-bold text-white">
              Unleashing Potential
            </h2>
          </div>

        
          <div className="space-y-6">
            {[
              "Advanced AI Integration",
              "Ecosystem Expansion",
              "Global Partnership Network",
              "Revolutionary User Experience"
            ].map((item, index) => (
              <div 
                key={index}
                className={`flex items-start gap-4 transition-all duration-500 ${
                  isVisible 
                    ? 'translate-x-0 opacity-100' 
                    : '-translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative pt-1.5">
                  <div className="w-4 h-4 rounded-full border-2 border-[#00e6ff] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00e6ff]" />
                  </div>
                  {index !== 3 && (
                    <div className="absolute top-6 left-1/2 w-0.5 h-12 bg-[#00e6ff]/20 -translate-x-1/2" />
                  )}
                </div>
                
                <div className="flex-1 text-[#00e6ff] text-lg font-light">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}