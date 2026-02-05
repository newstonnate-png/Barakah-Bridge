import React, { useState } from 'react';
import { SOUK_PRODUCTS } from '../constants';
import { Icons } from '../components/Icons';
import { Product } from '../types';

const TheSouk: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = [
    { name: 'All', icon: Icons.Souk },
    { name: 'Clothing', icon: Icons.Souk },
    { name: 'Food', icon: Icons.Souk },
    { name: 'Books', icon: Icons.Majlis },
    { name: 'Art', icon: Icons.Star },
  ];

  // Render Product Detail Modal/View
  if (selectedProduct) {
    return (
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => setSelectedProduct(null)}
          className="flex items-center text-gray-500 hover:text-emerald-700 font-medium text-sm transition-colors mb-6"
        >
          <Icons.Close className="mr-2 rotate-45" size={16} /> Back to Souk
        </button>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden grid grid-cols-1 md:grid-cols-2">
          {/* Image Side */}
          <div className="relative h-96 md:h-auto bg-gray-100">
            <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
            <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md text-gray-400 hover:text-red-500 transition-colors">
              <Icons.Like size={20} />
            </button>
          </div>

          {/* Details Side */}
          <div className="p-8 flex flex-col">
            <div className="flex items-center space-x-2 mb-2">
              <span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded uppercase tracking-wide">
                {selectedProduct.category}
              </span>
              {selectedProduct.isBarakahPurchase && (
                <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded flex items-center">
                  <Icons.Heart size={10} className="mr-1 fill-amber-800" /> Barakah Item
                </span>
              )}
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-2">{selectedProduct.name}</h1>
            <div className="flex items-center space-x-4 mb-6 text-sm">
              <span className="text-gray-500">Sold by <strong className="text-gray-900">{selectedProduct.seller}</strong></span>
              <div className="flex items-center text-amber-500">
                <Icons.Star size={14} className="fill-current" />
                <span className="ml-1 font-bold">{selectedProduct.rating}</span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8 flex-1">
              {selectedProduct.description}
            </p>

            <div className="border-t border-gray-100 pt-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                   <p className="text-xs text-gray-500 uppercase font-semibold">Total Price</p>
                   <p className="text-3xl font-bold text-emerald-900">${selectedProduct.price.toFixed(2)}</p>
                </div>
                <div className="text-right">
                   <p className="text-xs text-gray-500 uppercase font-semibold">Delivery</p>
                   <p className="text-sm font-bold text-gray-900">2-4 Days</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="w-full py-3.5 border-2 border-emerald-900 text-emerald-900 font-bold rounded-xl hover:bg-emerald-50 transition-colors">
                  Add to Cart
                </button>
                <button className="w-full py-3.5 bg-emerald-900 text-white font-bold rounded-xl hover:bg-emerald-950 shadow-lg shadow-emerald-900/20 transition-all transform active:scale-95">
                  Buy Now
                </button>
              </div>
              <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center">
                <Icons.Shield size={12} className="mr-1" />
                Secure Shariah-compliant transaction
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Regular Grid View
  return (
    <div className="space-y-8">
       {/* Hero Section */}
       <div className="relative rounded-2xl overflow-hidden bg-emerald-900 h-64 shadow-xl">
         <div className="absolute inset-0 bg-black/30 z-10"></div>
         <img src="https://picsum.photos/id/43/1200/400" alt="Souk Bazaar" className="w-full h-full object-cover" />
         <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center p-4">
            <h2 className="text-4xl font-serif font-bold text-white mb-2 tracking-wide">The Souk</h2>
            <p className="text-amber-300 font-medium text-lg">Trade with Trust. Buy with Barakah.</p>
            <button className="mt-6 bg-white text-emerald-900 px-6 py-2 rounded-full font-bold text-sm hover:bg-amber-400 transition-colors shadow-lg">
              Open Your Shop
            </button>
         </div>
       </div>

       {/* Categories */}
       <div className="flex justify-center space-x-8 border-b border-gray-200 pb-4">
         {categories.map((cat) => (
           <button 
            key={cat.name}
            onClick={() => setActiveCategory(cat.name)}
            className={`flex flex-col items-center space-y-2 group ${activeCategory === cat.name ? 'text-emerald-800' : 'text-gray-400'}`}
           >
             <div className={`p-3 rounded-full transition-all ${activeCategory === cat.name ? 'bg-emerald-100' : 'bg-gray-50 group-hover:bg-gray-100'}`}>
               <cat.icon size={24} className={activeCategory === cat.name ? 'text-emerald-800' : 'text-gray-400'} />
             </div>
             <span className="text-sm font-medium">{cat.name}</span>
           </button>
         ))}
       </div>

       {/* Products Grid */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
         {SOUK_PRODUCTS.map(product => (
           <div 
             key={product.id} 
             onClick={() => setSelectedProduct(product)}
             className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group cursor-pointer"
           >
             <div className="relative aspect-square overflow-hidden rounded-t-xl">
               <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               {product.isBarakahPurchase && (
                 <div className="absolute top-2 left-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded shadow-sm flex items-center">
                   <Icons.Heart size={10} className="mr-1 fill-white" />
                   Barakah Purchase
                 </div>
               )}
               <div className="absolute top-2 right-2 bg-white/90 p-1.5 rounded-full shadow-sm text-gray-500 hover:text-red-500">
                 <Icons.Like size={16} />
               </div>
             </div>
             
             <div className="p-4">
               <div className="flex justify-between items-start mb-2">
                 <h3 className="font-semibold text-gray-900 line-clamp-1">{product.name}</h3>
               </div>
               <p className="text-xs text-gray-500 mb-3">{product.seller}</p>
               
               <div className="flex justify-between items-end">
                 <div>
                   <p className="text-emerald-800 font-bold text-lg">${product.price.toFixed(2)}</p>
                   <div className="flex items-center text-amber-400 text-xs">
                     <Icons.Star size={12} className="fill-current" />
                     <span className="ml-1 text-gray-400">{product.rating}</span>
                   </div>
                 </div>
                 <button className="bg-emerald-800 text-white p-2 rounded-lg hover:bg-emerald-900 transition-colors">
                   <Icons.Souk size={18} />
                 </button>
               </div>
             </div>
           </div>
         ))}
       </div>
    </div>
  );
};

export default TheSouk;
