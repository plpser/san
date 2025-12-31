
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import { FEATURED_CARDS, MASONRY_CARDS, CATEGORIES } from '../constants';

const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('推荐');

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="mx-auto flex w-full max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        {/* Featured Slider */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-text-main dark:text-white">本周精选</h2>
            <a href="#" className="flex items-center text-sm font-medium text-text-muted hover:text-primary transition-colors">
              查看更多 <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </a>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory">
            {FEATURED_CARDS.map(card => (
              <div 
                key={card.id} 
                className="min-w-[85%] md:min-w-[45%] lg:min-w-[32%] snap-center rounded-2xl bg-surface-light dark:bg-surface-dark shadow-sm hover:shadow-md transition-all group cursor-pointer overflow-hidden border border-transparent dark:border-gray-800"
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <img src={card.image} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" alt="" />
                  <div className="absolute top-3 left-3 rounded-md bg-white/90 px-2 py-1 text-xs font-bold text-black backdrop-blur-sm">
                    {card.tags?.[0]}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-base font-bold text-text-main dark:text-white">{card.title}</h3>
                      <p className="text-sm text-text-muted mt-1">{card.description}</p>
                    </div>
                    <button className="rounded-full bg-primary/10 p-2 text-primary hover:bg-primary hover:text-white transition-colors">
                      <span className="material-symbols-outlined block text-[20px]">confirmation_number</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories / Filters */}
        <section className="sticky top-16 z-40 -mx-4 mb-6 bg-background-light/95 px-4 py-3 backdrop-blur dark:bg-background-dark/95 sm:mx-0 sm:px-0">
          <div className="flex gap-3 overflow-x-auto no-scrollbar">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-all shadow-sm ${
                  activeTab === cat 
                    ? 'bg-text-main text-white dark:bg-primary dark:text-white' 
                    : 'bg-surface-light text-text-main hover:bg-gray-100 dark:bg-surface-dark dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Masonry Feed */}
        <section className="masonry-grid">
          {MASONRY_CARDS.map(card => (
            <Card key={card.id} data={card} />
          ))}
        </section>
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform hover:scale-110 active:scale-95 group">
          <span className="material-symbols-outlined text-[28px]">edit</span>
          <span className="absolute right-full mr-4 hidden whitespace-nowrap rounded-lg bg-surface-dark px-3 py-1 text-sm font-medium text-white opacity-0 transition-opacity group-hover:block group-hover:opacity-100">
            发布笔记
          </span>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
