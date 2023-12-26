import React from 'react'

const Contact = () => {
  return (
    <div className=' pt-[200px]'>
      <div className='flex flex-col'>
      <div className=" flex items-center gap-5 ml-40">
          <div className=" w-1 rounded-3xl h-16 bg-[#FDB714]" />
          <h1 className=" text-[80px] font-[750] text-[#9A0002]">
            CONTACT US
          </h1>
      </div>
      <p className=' ml-[12%] text-[#FDB714] tracking-widest'>any queries , we are happy to help ...</p>
    </div>

    <h3 className=' text-gray-500 text-[30px] font-semibold relative ml-[40%] mt-10'>Apply By Filling This Form</h3>

    <form action="" className=' flex flex-col items-center gap-10 mt-10'>
      <input type="text" className=' h-[80px] w-[754px] border  rounded-2xl border-gray-400 p-10 font-thin tracking-wider' placeholder='your name ( required ) ' />
      <input type="eamil" className=' h-[80px] w-[754px] border rounded-2xl border-gray-400 p-10 font-thin tracking-wider' placeholder='your email ( required )' />
      <input type="text" className=' h-[80px] w-[754px] border  rounded-2xl border-gray-400 p-10 font-thin tracking-wider' placeholder='your subject' />
      <textarea className='border w-[754px] h-[200px] border-gray-400 rounded-2xl p-10 font-thin tracking-wider' placeholder='your messages'></textarea>
    </form>

    <p className=' text-gray-400 tracking-widest font-thin text-[16px] text-center mt-20'>Please type the code: To use CAPTCHA, you need Really Simple CAPTCHA plugin installed.</p>
    <input type="text" className=' h-[80px] w-[754px] border rounded-2xl border-gray-400 p-10 font-thin tracking-wider ml-[27%] mt-5' placeholder='your subject' />

    <p className=' text-gray-400 tracking-widest font-thin text-[16px] text-center mt-2'>(to show us you are human, not a spam program)</p>

    <button className=' h-[80px] w-[200px] bg-[#9A0002] rounded-3xl text-white ml-[45%] text-[30px] mt-10' >Send</button>

    <div>
    <h1 className=' text-gray-500 text-[30px] font-semibold relative ml-[40%] mt-10'>Apply By Filling This Form</h1>
    <p className=' tracking-widest font-thin text-[16px] text-center mt-2'>Mysore Road, Hejjala PostBidadi Hobli Ramanagar Distt.Bangalore -562 109, INDIA</p>
    <p className=' tracking-widest font-thin text-[16px] text-center mt-2'>Email: communication-outreach@dalailamainstitute.edu.in, </p>
    <p className=' tracking-widest font-thin text-[16px] text-center mt-2'>secretary@dalailamainstitute.edu.in </p>
    <p className=' tracking-widest font-thin text-[16px] text-center mt-2'>Cell: +91-9611655599</p>
    </div>
    
    </div>
  )
}

export default Contact