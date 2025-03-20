import React from 'react'

function Card() {
  
    return (
      
      <div className="max-w-xs rounded overflow-hidden shadow-lg bg-zinc-100 cursor-pointer hover:shadow-2xl">
        <img 
          className="w-full" 
          src="https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-587439221666468647/original/77da70c3-2c53-4fdf-a674-93687f2ec508.jpeg?im_w=1200" 
          alt="Restaurant" 
        />
        <div className="px-4 py-2 text-zinc-900">
          <div className="font-bold text-xl mb-2 ">Lettuce Eat Bistro </div>
          <p className="text-gray-700 text-base">
            Mountain and valley views
          </p>
          <p className="text-gray-700 text-sm mt-2">
            13–18 Apr
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-between items-center">
          <span className="text-green-600 font-bold text-xl">₹1,17,000</span>
          <span className="text-yellow-500 font-bold">★ 4.89</span>
        </div>
        <div className="px-6 pb-4">
          <span className="text-gray-500 text-sm">for 5 nights</span>
        </div>
      </div>
  )
}

export default Card