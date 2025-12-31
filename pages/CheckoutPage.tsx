
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CheckoutPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-sans text-text-main dark:text-white">
      <header className="sticky top-0 z-50 bg-white dark:bg-surface-dark border-b border-[#f0f4f4] dark:border-white/10 px-4 md:px-10 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="flex items-center justify-center size-8 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <h2 className="text-lg font-bold">确认订单</h2>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-10 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-6">
            {/* Event Summary */}
            <section className="bg-white dark:bg-surface-dark rounded-xl p-5 shadow-sm border border-transparent dark:border-white/5 flex gap-5">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-lg overflow-hidden relative bg-gray-100">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUUSLfjv1Yl8gvIbi5J0fpRUMQFiE2H2DF_hDZeNrxSUVHvS4zQzJLSLEDvyUr9NKFS9XoNuURRFjwQCyJzXDJrUIbQtxHtelw-KdhTmuNrfsCy1ZDVdqHBFctZ3RqoXRoInD3ekIdctxEdNFVU-Ehnf07dgpuyJsFwHy-tI5VsVt5q-IqnusC9_CCsD2FJdLjZzOdhA3lxEN6HJgLqn8WHEI_KtgYdMAksetdPBxaVhk4gcSv-NS-ZVkvXUWkxetusFXiuPnO6g" className="w-full h-full object-cover" alt="" />
                <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-0.5 rounded">展览</div>
              </div>
              <div className="flex flex-col justify-between py-1 flex-1">
                <div>
                  <h1 className="text-xl md:text-2xl font-bold mb-2">沉浸式艺术展：光影迷宫</h1>
                  <div className="flex items-center gap-1 text-[#618689] dark:text-gray-400 text-sm mb-1">
                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                    <span>上海当代艺术博物馆 | 黄浦区苗江路678号</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-bold rounded">热门推荐</span>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 text-xs font-medium rounded">周末可用</span>
                </div>
              </div>
            </section>

            {/* Ticket Selection */}
            <section className="bg-white dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-transparent dark:border-white/5">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-primary rounded-full"></span>
                选择票种
              </h2>
              <div className="space-y-4">
                <div className="relative flex items-center justify-between p-4 rounded-xl border-2 border-primary bg-primary/5 cursor-pointer">
                  <div className="absolute -top-3 -right-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">check</span> 已选
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-lg">单人早鸟票</span>
                      <span className="text-xs border border-primary text-primary px-1.5 rounded">限时优惠</span>
                    </div>
                    <p className="text-sm text-[#618689] dark:text-gray-400">含光影迷宫入场券 x1 + 纪念明信片</p>
                  </div>
                  <div className="flex flex-col items-end gap-3 ml-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs text-gray-400 line-through">¥168</span>
                      <span className="text-2xl font-bold text-primary">¥128</span>
                    </div>
                    <div className="flex items-center bg-white dark:bg-black/20 rounded-lg p-1 shadow-sm border border-gray-100 dark:border-white/10">
                      <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="size-7 flex items-center justify-center hover:bg-gray-100 rounded text-gray-500">
                        <span className="material-symbols-outlined text-sm">remove</span>
                      </button>
                      <span className="w-8 text-center font-bold text-sm">{quantity}</span>
                      <button onClick={() => setQuantity(quantity + 1)} className="size-7 flex items-center justify-center hover:bg-gray-100 rounded text-primary">
                        <span className="material-symbols-outlined text-sm">add</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Info */}
            <section className="bg-white dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-transparent dark:border-white/5">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-primary rounded-full"></span>
                联系人信息
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-[#618689] dark:text-gray-400">真实姓名</label>
                  <input className="w-full h-11 px-4 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400 text-sm" placeholder="请输入取票人姓名" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-[#618689] dark:text-gray-400">手机号码</label>
                  <input className="w-full h-11 px-4 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400 text-sm" placeholder="请输入11位手机号" />
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-24 bg-white dark:bg-surface-dark rounded-xl p-6 shadow-xl border border-transparent dark:border-white/5">
              <h2 className="text-xl font-bold mb-5 pb-4 border-b border-dashed border-gray-200 dark:border-white/10">订单详情</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-start text-sm">
                  <span className="text-[#618689] dark:text-gray-400">商品名称</span>
                  <span className="font-medium text-right max-w-[180px]">单人早鸟票 (光影迷宫)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#618689] dark:text-gray-400">数量</span>
                  <span className="font-medium">x {quantity}</span>
                </div>
              </div>
              <div className="flex justify-between items-end mb-6 pt-4 border-t border-dashed border-gray-200 dark:border-white/10">
                <span className="text-base font-bold">合计</span>
                <div className="text-right">
                  <span className="text-3xl font-black text-primary tracking-tight">¥{128 * quantity}</span>
                </div>
              </div>
              <button 
                onClick={() => alert('支付功能开发中')}
                className="w-full flex items-center justify-center gap-2 h-12 rounded-lg bg-primary hover:bg-primary-hover text-white font-bold text-lg shadow-lg shadow-primary/20 transition-all active:scale-95"
              >
                <span>立即支付</span>
                <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;
