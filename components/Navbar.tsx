
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e5e8eb] dark:border-[#2a383a] bg-surface-light/80 dark:bg-surface-dark/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-content">
            <span className="material-symbols-outlined text-white">weekend</span>
          </div>
          <h1 className="hidden text-lg font-bold tracking-tight text-text-main dark:text-white md:block font-display">周末去哪儿</h1>
        </Link>

        <div className="flex max-w-md flex-1 px-4 md:px-8">
          <div className="relative w-full group">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="material-symbols-outlined text-text-muted group-focus-within:text-primary">search</span>
            </div>
            <input
              className="block w-full rounded-full border-0 bg-[#f0f4f4] dark:bg-[#233335] py-2 pl-10 pr-4 text-sm text-text-main placeholder-text-muted focus:ring-2 focus:ring-primary dark:text-white transition-all outline-none"
              placeholder="搜索目的地 / 景点 / 笔记"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center gap-1 md:gap-6">
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-text-main hover:text-primary dark:text-white transition-colors">首页</Link>
            <a href="#" className="text-sm font-medium text-text-muted hover:text-primary dark:text-gray-400 transition-colors">发现</a>
            <a href="#" className="text-sm font-medium text-text-muted hover:text-primary dark:text-gray-400 transition-colors">购票</a>
          </nav>
          <div className="flex items-center gap-3 pl-2 md:border-l md:border-gray-200 md:pl-6 md:dark:border-gray-700">
            <button className="hidden md:flex h-9 items-center justify-center rounded-full bg-primary px-4 text-sm font-bold text-white hover:opacity-90 transition-opacity">
              <span className="material-symbols-outlined mr-1 text-[20px]">add</span>
              发布
            </button>
            <button className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-transparent hover:ring-primary transition-all">
              <img 
                src="https://picsum.photos/100/100?random=10" 
                alt="Profile" 
                className="h-full w-full object-cover"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
