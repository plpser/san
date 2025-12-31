
import React from 'react';
import { Attraction } from '../types';
import { useNavigate } from 'react-router-dom';

interface CardProps {
  data: Attraction;
}

const Card: React.FC<CardProps> = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${data.id}`);
  };

  return (
    <article 
      onClick={handleClick}
      className="masonry-item rounded-xl bg-surface-light dark:bg-surface-dark overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
    >
      <div className="relative w-full overflow-hidden">
        <img 
          src={data.image} 
          alt={data.title}
          className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {data.tags && data.tags[0] && (
          <div className="absolute top-2 left-2 rounded-md bg-white/90 px-2 py-0.5 text-[10px] font-bold text-black backdrop-blur-sm">
            {data.tags[0]}
          </div>
        )}
        {data.location && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 pt-8">
            <div className="flex items-center gap-1 text-white/90">
              <span className="material-symbols-outlined text-[14px]">location_on</span>
              <span className="text-xs font-medium">{data.location}</span>
            </div>
          </div>
        )}
      </div>
      <div className="p-3">
        <h3 className="mb-2 text-sm font-bold leading-snug text-text-main dark:text-white line-clamp-2">
          {data.title}
        </h3>
        
        {data.type === 'ugc' ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 overflow-hidden">
              <img src={data.author?.avatar} className="h-5 w-5 rounded-full object-cover" alt="" />
              <span className="truncate text-xs text-text-muted">{data.author?.name}</span>
            </div>
            <div className="flex items-center gap-1 text-text-muted">
              <span className="material-symbols-outlined text-[16px] group-hover:text-red-500 transition-colors">favorite</span>
              <span className="text-xs">{data.likes}</span>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between mt-2">
            <span className="text-base font-bold text-primary">¥{data.price} <span className="text-xs font-normal text-text-muted">起</span></span>
            <button className="rounded-lg bg-primary/10 px-3 py-1 text-xs font-bold text-primary">购票</button>
          </div>
        )}
      </div>
    </article>
  );
};

export default Card;
