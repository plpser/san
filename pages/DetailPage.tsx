
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const DetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate(`/checkout/${id}`);
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Navbar />
      
      <main className="mx-auto max-w-[1200px] px-4 md:px-8 py-6">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap gap-2 pb-6 text-sm">
          <a className="text-[#618689] font-medium hover:text-primary transition-colors" href="/">首页</a>
          <span className="text-[#618689] font-medium">/</span>
          <a className="text-[#618689] font-medium hover:text-primary transition-colors" href="#">浙江</a>
          <span className="text-[#618689] font-medium">/</span>
          <span className="text-[#111718] dark:text-gray-200 font-medium">莫干山景区</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Content */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div className="flex flex-col gap-2">
                  <h1 className="text-3xl md:text-4xl font-extrabold text-[#111718] dark:text-white tracking-tight">莫干山隐世庄园</h1>
                  <div className="flex items-center gap-2 text-[#618689] dark:text-gray-400 text-sm md:text-base">
                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                    <p>浙江省湖州市德清县莫干山镇</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center justify-center gap-2 px-4 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-bold shadow-sm hover:bg-gray-50 transition-colors">
                    <span className="material-symbols-outlined text-[18px]">favorite</span>
                    <span>收藏</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-bold shadow-sm hover:bg-gray-50 transition-colors">
                    <span className="material-symbols-outlined text-[18px]">share</span>
                    <span>分享</span>
                  </button>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                <div className="flex h-7 items-center justify-center px-3 rounded-full bg-primary/10 text-primary border border-primary/20">
                  <span className="text-xs font-bold">4.9 分</span>
                </div>
                {['亲子友好', '户外徒步', '摄影圣地', '避暑胜地'].map(tag => (
                  <div key={tag} className="flex h-7 items-center justify-center px-3 rounded-full bg-[#f0f4f4] dark:bg-gray-800 text-[#618689] dark:text-gray-300">
                    <span className="text-xs font-medium">{tag}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-3 h-[400px] md:h-[500px] overflow-hidden rounded-2xl">
              <div className="md:col-span-2 md:row-span-2 relative group cursor-pointer overflow-hidden">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkcSC6ibVnKZeRTZyC2st3xMm--IS7NAxRu-XFfbpqUVgw8JKzrX1SNaAQqK-2Gql2udFyZU-ELpBCltd00smCW1zxmoQrtaqF0CqQRwX9iYWs6qLyI8Bi2wQvAv2tSe6xbwi26U8_61nuhC6xPrVKxaNn8ILNYDcRKToDM86qPv1W8t04trHoMkMH_MzgVhD11pw8llS1dVUF5hXEa2WIVMXob_zHEy5nZHje6RxsnarXSHN1JZzs92Gk6MuQeZJl6zNq-pVx1g" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
              </div>
              <div className="md:col-span-1 md:row-span-1 relative group cursor-pointer overflow-hidden">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtrkjfMLBML0j9L8Xy7VVPUh0j3YlCN0fqLLcmZ6EEz04ZysOaD48UbiILdbj58HL_g_Lq8SunkYwMaHfS3ZWAahg2b0iU2tSpUCEz6VtGNc2mf70GjhiVaa7ccHZo2woo_q7xWvexiedwGyJSRl1qo454stVadi7_hGQTegtJqPL53Ove-piew8vknOEd-JlEQe32uV1ZZDzh9UZuNIugOMyVHbrmARTk4JCGPnsrdPt1zuC1tCId3bkXl0N_XSypVg_tDBCNRg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
              </div>
              <div className="md:col-span-1 md:row-span-1 relative group cursor-pointer overflow-hidden">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBXIVNPMBYN2BHtpoUUhOFT33laYWp5WApSEDCx3WJ74IuTYwek370wq8o3k2Dkar8aBw6FZSARwEGvwXNBay07suEnGXrA_vrfGj_g6VurNI4WZNgK9f6uGyz_tqdSL3_Dm8fSdGS0815Au1LAsoi2ovLCV_AKHHqCKRBssmmv-w_qfJ23DI-DWuBIqfdnEOVAtQ-SF_uYLsd-L7a1w3J3oD5FVdEWD-We7V-0F55ixmgt1AqXrDyWvelPHwSzzIOsF2fxrhE2Q" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
              </div>
              <div className="md:col-span-2 md:row-span-1 relative group cursor-pointer overflow-hidden">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVsMwgXl1A3X2gqV2NKQNYr0Olwp3QRzf_bBuJABXuOGVQ4kp8xJ-Vqv4jS9v4ESE_gbbikus4mZT5LsvWiiNKMNRk_QQxa3sdGMS-_8bEbgj1x0adDNEeIFja5gRmBGyYrzyjMExAfTaAo48MHX_5o3Ai2z0KFTB5JVHAto2iNiKMM_M2kGCm4LhcD9GA-3LHvL8hmUa0sxz_oDallm04lscgTMBNL6teIjB41NgeievzRpGSzHOzqll_FlkpWRx5lSCFqzUhPg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
                <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">grid_view</span>
                  <span>查看全部 24 张图片</span>
                </div>
              </div>
            </div>

            <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-relaxed">
              <h3 className="text-lg font-bold text-text-main dark:text-white mb-3">景点介绍</h3>
              <p className="mb-4">
                莫干山，位于浙江省湖州市德清县境内，美丽富饶的沪、宁、杭金三角的中心。它是中国著名的度假休闲旅游及避暑胜地。因春秋末年，吴王阖闾派干将、莫邪在此铸成举世无双的雌雄双剑而得名。
              </p>
              <p className="mb-4">
                景区内群山连绵，修竹如海，山泉清澈，别墅成群。这里不仅有深厚的历史文化底蕴，更有让人心旷神怡的自然风光。无论是漫步在竹林小径，还是探访百年前的异国别墅，都能让你忘却城市的喧嚣，找回内心的宁静。
              </p>
            </div>
          </div>

          {/* Right Sidebar (Sticky Booking) */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-24 flex flex-col gap-5 rounded-2xl bg-surface-light dark:bg-surface-dark p-6 shadow-xl border border-gray-100 dark:border-gray-800">
              <div className="flex items-end gap-2 pb-4 border-b border-gray-100 dark:border-gray-800">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 mb-1">早鸟优惠价</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-primary font-display">¥128</span>
                    <span className="text-sm text-gray-400">/人起</span>
                  </div>
                </div>
                <div className="ml-auto">
                  <div className="bg-red-50 text-red-500 text-xs font-bold px-2 py-1 rounded">限时9折</div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-sm font-bold">选择出行日期</label>
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
                  <button className="shrink-0 flex flex-col items-center justify-center w-14 h-14 rounded-lg bg-primary text-white font-bold shadow-sm">
                    <span className="text-xs opacity-80">今天</span>
                    <span className="text-sm">28</span>
                  </button>
                  {[29, 30, 31].map(d => (
                    <button key={d} className="shrink-0 flex flex-col items-center justify-center w-14 h-14 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-500 hover:border-primary hover:text-primary transition-all">
                      <span className="text-xs">周{d % 7 === 1 ? '一' : d % 7 === 2 ? '二' : '六'}</span>
                      <span className="text-sm font-bold">{d}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={handleBooking}
                className="w-full h-12 rounded-lg bg-primary text-white text-base font-bold shadow-lg shadow-primary/20 hover:bg-primary-hover transition-all active:scale-[0.98]"
              >
                立即预订
              </button>
              
              <div className="grid grid-cols-2 gap-2 pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500 text-[16px]">check_circle</span>
                  <span className="text-xs text-gray-500">随时退</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500 text-[16px]">check_circle</span>
                  <span className="text-xs text-gray-500">极速出票</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DetailPage;
