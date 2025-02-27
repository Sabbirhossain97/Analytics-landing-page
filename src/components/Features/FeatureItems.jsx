import React from 'react'

function FeatureItems() {
  return (
    <div className='mx-[210px] pt-[38px]'>
      <div className='flex flex-col'>
        <h1 className='text-center font-bold text-[40px] leading-[47px] text-[#172755]'>Main Features</h1>
        <div className='mt-[30px]'>
          <h3 className='text-center font-normal text-[18px] leading-[27px] text-[#8794BA]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam <br/> vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet. Id vel in nam malesuada.
          </h3>
        </div>
        {/* feature items */}
        <div className='grid grid-cols-3 gap-5 mt-[80px]'>
          <div className='flex flex-col items-center'>
            <img src="/features-item-1.svg" />
            <h2 className='mt-[26px] font-bold text-[16px] leading-[18.75px] text-[#172755]'>Monitoring 24/7</h2>
            <h3 className='text-center mt-4 text-[#8794BA] font-normal leading-[22px]'>
              Lorem ipsum dolor sit amet, consectetur adipis <br/> cing elit. Elementum nisi aliquet volutpat.
            </h3>
          </div>
          <div className='flex flex-col items-center'>
            <img src="/features-item-2.svg" />
            <h2 className='mt-[26px] font-bold text-[16px] leading-[18.75px] text-[#172755]'>Widget System</h2>
            <h3 className='text-center mt-4 text-[#8794BA] font-normal leading-[22px]'>
              Sapien in etiam vitae nibh nunc mattis imperdiet <br/> sed nullam. Vitae et, tortor pulvinar risus pulvinar.
            </h3>
          </div>
          <div className='flex flex-col items-center'>
            <img src="/features-item-3.svg" />
            <h2 className='mt-[26px] font-bold text-[16px] leading-[18.75px] text-[#172755]'>Best Performance</h2>
            <h3 className='text-center mt-4 text-[#8794BA] font-normal leading-[22px]'>
              Lorem ipsum dolor sit amet, consectetur adipis <br/> cing elit. Elementum nisi aliquet volutpat.
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureItems