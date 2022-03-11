import React, { useEffect } from 'react'
import whoMe from '../../../assets/whome.png'
const Metarials = () => {
  
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.pageYOffset > 850) {
  //       const moveRight = document.querySelector('.moveRight')
  //       moveRight.classList.add('animate-bounce-right')
  //     }
  //   });
  // }, []);

  return (
    <div className='py-32 moveRight'>
      <div className="flex md:flex-row flex-col items-center justify-evenly container mx-auto ">
        <div className="w-5/6 sm:w-[44%] ">
          <div className="text-slate-700 text-center font-semibold text-2xl py-10 px-3 ml-10 w-full leading-10 ">
            دلوقتي هتلاقي كل الماتيريال الي هتحتاجها
            <p className='leading-loose text-lg my-6 '>
              كل الي عليك انك تختار المحاضرة او السكشن في المادة الي انت عايزها زي 
              Programming, Algorithms, automata..... 
            </p>
            <button type="button" className="inline-block px-8 py-2 hover:-translate-y-1 bg-[#1e3a8a] text-white font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:bg-blue-500  hover:shadow-lg focus:bg-purple-700 active:bg-sky-800  focus:shadow-lg focus:outline-none focus:ring-0active:shadow-lg transition-all duration-150 ease-in-out">وديني للماتيريال</button>
          </div>
        </div>
        <div className="w-full sm:w-[46%]">
          <img src={whoMe} className="w-full " alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Metarials