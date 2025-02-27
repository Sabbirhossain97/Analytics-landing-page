import React from 'react'

function Hero() {
    return (
        <div className='relative min-h-screen'>
            <div className='bg-[#EF2A82] min-h-[798px] [clip-path:polygon(0%_0%,100%_0%,100%_75%,0%_100%)] border-b'>
                <div className='bg-[#172755] min-h-[798px] [clip-path:polygon(0%_0%,100%_0%,100%_75%,0%_100%)] mb-6'>
                    <div className='px-[210px] mx-auto pt-[50px]'>
                        <div className='flex justify-between'>
                            <div className='flex'>
                                <ul >
                                    <li className='inline-flex items-center'>
                                        <img src="logo.png" alt="logo" />
                                    </li>
                                </ul>
                                <ul className='flex items-center ml-[82px] gap-9 text-[#8794BA] text-[16px] leading-[18px] font-normal'>
                                    <li >
                                        <h3>Products</h3>
                                    </li>
                                    <li>
                                        <h3>Pricing</h3>
                                    </li>
                                    <li>
                                        <h3>FAQ</h3>
                                    </li>
                                    <li>
                                        <h3>Blog</h3>
                                    </li>
                                    <li>
                                        <h3>Blog</h3>
                                    </li>
                                </ul>
                            </div>
                            <ul className='flex items-center text-[#8794BA] gap-[40px] text-[16px]'>
                                <li>
                                    <h3>Sign in</h3>
                                </li>
                                <li className='px-[53px] py-[10px] rounded-[68px] border border-[#465B95] flex items-center justify-center'>
                                    <button >Sign Up</button>
                                </li>
                            </ul>
                        </div>
                        <div className='inline-flex flex-col justify-start mt-[152px]'>
                            <h1 className='font-semibold text-[50px] leading-[60px] text-white max-w-[570px]'>
                                Monitor your business on real-time dashboard
                            </h1>
                            <h3 className='font-normal text-[18px] leading-[27px] text-[#8794BA] mt-4 max-w-[550px]'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam.
                            </h3>
                            <button type="button" className='mt-[50px] px-[80px] w-[238px] rounded-[68px] py-[16px] bg-[#EF2A82] inline-flex text-white text-[16px] leading-[18px] font-normal'>
                                Try for free
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute top-0'>
                <img src="/Subtract.svg" />
            </div>
            <div className='absolute top-0 right-0'>
                <img src="/Subtract.png" />
            </div>
            <div className='absolute bottom-36 right-0'>
                <img src='/dashboard.png' />
                <div className='absolute top-32 -left-20'>
                    <img src="/hero_chart.png" />
                </div>
            </div>
        </div>
    )
}

export default Hero