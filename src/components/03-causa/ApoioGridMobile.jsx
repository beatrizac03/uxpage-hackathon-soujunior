  // src/components/sections/ApoioGridMobile.jsx
  import React, { useState } from 'react';

  export default function ApoioGridMobile({ apoiadoresData }) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
      <div className="w-full">
        
        {/* ================= DESKTOP: Layout "Espalhado" Organizado ================= */}
        <div className="hidden lg:grid grid-cols-2 gap-8 items-center max-w-xl mx-auto relative py-6">
          {apoiadoresData.map((item, index) => (
            <div 
              key={index}
              className={`relative w-full h-[320px] rounded-3xl overflow-hidden shadow-2xl border border-white/20 group cursor-pointer transition-all duration-300 hover:scale-105 hover:border-cyan-400/50 ${
                index === 0 ? '-translate-y-6' : 
                index === 1 ? 'translate-y-6' : 
                index === 2 ? '-translate-y-4' : 'translate-y-8'
              }`}
            >
              {/* Imagem de Fundo */}
              <img 
                src={item.image} 
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover brightness-75 group-hover:brightness-90 transition-all duration-300"
              />
              {/* Gradiente de leitura */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80" />

              {/* Conteúdo do Card */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <h3 className="text-2xl font-display font-bold text-cyan-400 lowercase tracking-wide drop-shadow-md">
                  {item.title}
                </h3>
                <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/70 backdrop-blur-md p-3 rounded-xl border border-white/10">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ================= MOBILE / TABLET: Carrossel Horizontal ================= */}
        <div className="lg:hidden w-full">
          <div 
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-6 px-4 -mx-4"
            onScroll={(e) => {
              const scrollLeft = e.currentTarget.scrollLeft;
              const cardWidth = e.currentTarget.offsetWidth * 0.75;
              const index = Math.round(scrollLeft / cardWidth);
              setActiveIndex(index);
            }}
          >
            {apoiadoresData.map((item, index) => (
              <div 
                key={index} 
                className="snap-center shrink-0 w-[280px] sm:w-[320px] h-[360px] rounded-3xl overflow-hidden shadow-2xl border border-white/20 relative group first:ml-4 last:mr-4"
              >
                {/* Imagem de Fundo */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover brightness-75"
                />
                {/* Gradiente */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80" />

                {/* Conteúdo do Card */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <h3 className="text-2xl font-display font-bold text-cyan-400 lowercase tracking-wide drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/90 bg-slate-950/70 backdrop-blur-md p-3 rounded-xl border border-white/10">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Indicadores de Página (Dots) para o Carrossel Mobile */}
          <div className="flex justify-center items-center gap-2 mt-2">
            {apoiadoresData.map((_, index) => (
              <span
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'w-6 bg-amber-400' : 'w-2 bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    );
  }