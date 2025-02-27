import React from 'react'

function FeatureDescriptions() {
    return (
        <div className='mx-[210px] mt-[130px]'>
            <div className='flex gap-[100px] px-10'>
                <div className='w-1/2 flex flex-col items-center justify-center'>
                    <div>
                        <h1 className='font-bold text-[40px] leading-[47px] text-[#172755]'>
                            Automated Reports <br/> & Widget Alerts
                        </h1>
                        <h3 className='mt-[30px] font-normal text-[18px] leading-[27px] text-[#8794BA]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.
                        </h3>
                    </div>
                </div>
                <div className='w-1/2 '>
                    <img src="/features-chart-1.png" className='w-full h-auto' />
                </div>
            </div>
            <div className='flex gap-[100px] px-10 mt-[120px]'>
                <div className='w-1/2 order-2 flex flex-col items-center justify-center'>
                    <div>
                        <h1 className='font-bold text-[40px] leading-[47px] text-[#172755]'>
                            Fully customizable to <br/> address your needs
                        </h1>
                        <h3 className='mt-[30px] font-normal text-[18px] leading-[27px] text-[#8794BA]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.
                        </h3>
                    </div>
                </div>
                <div className='w-1/2 order-1'>
                    <img src="/features-chart-2.png" className='w-full h-auto' />
                </div>
            </div>
            <div className='flex gap-[100px] px-10'>
                <div className='w-1/2 flex flex-col items-center justify-center'>
                    <div>
                        <h1 className='font-bold text-[40px] leading-[47px] text-[#172755]'>
                            Pre-built Dashboard <br/> Templates
                        </h1>
                        <h3 className='mt-[30px] font-normal text-[18px] leading-[27px] text-[#8794BA]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.
                        </h3>
                    </div>
                </div>
                <div className='w-1/2 '>
                    <img src="/features-chart-3.png" className='w-full h-auto' />
                </div>
            </div>
        </div>
    )
}

export default FeatureDescriptions