import { useState } from "react"


function Hero() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='relative min-h-screen'>
            <div className='bg-[#EF2A82] min-h-[798px] [clip-path:polygon(0%_0%,100%_0%,100%_85%,0%_100%)] md:[clip-path:polygon(0%_0%,100%_0%,100%_75%,0%_100%)] border-b'>
                <div className='bg-[#172755] min-h-[798px] [clip-path:polygon(0%_0%,100%_0%,100%_85%,0%_100%)] md:[clip-path:polygon(0%_0%,100%_0%,100%_75%,0%_100%)] mb-6'>
                    <div className={`${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} block md:hidden transition duration-300 bg-[#0f1a3d] fixed left-0 right-0 h-auto`}>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="absolute right-4 top-4 cursor-pointer">
                            <svg className="w-4 h-4 text-[#8794BA] hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path>
                            </svg>
                        </button>
                        <ul className='flex flex-col items-center justify-center py-10 gap-9 text-[#8794BA]  text-[16px] leading-[18px] font-normal'>
                            <li className="hover:text-white cursor-pointer">
                                <h3>Products</h3>
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                <h3>Pricing</h3>
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                <h3>FAQ</h3>
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                <h3>Blog</h3>
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                <h3>Contact</h3>
                            </li>
                            <li className='px-[43px] sm:px-[53px] py-[5px] sm:py-[10px] rounded-[68px] border border-[#465B95] cursor-pointer group hover:border-white flex items-center justify-center'>
                                <button className='whitespace-nowrap group-hover:text-white'>Sign Up</button>
                            </li>
                        </ul>
                    </div>
                    <div className='px-[24px] sm:px-[60px] 2xl:px-[210px] mx-auto pt-[50px]'>
                        <div className='flex items-center justify-between'>
                            <div className='flex'>
                                <ul >
                                    <li className='inline-flex items-center'>
                                        <img src="logo.png" alt="logo" />
                                    </li>
                                </ul>
                                <ul className='hidden lg:flex items-center ml-[82px] gap-9 text-[#8794BA] text-[16px] leading-[18px] font-normal'>
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
                                        <h3>Contact</h3>
                                    </li>
                                </ul>
                            </div>
                            <ul className='hidden md:flex items-center text-[#8794BA] gap-[40px] text-[16px] '>
                                <li className='hidden md:block'>
                                    <h3>Sign in</h3>
                                </li>
                                <li className='px-[43px] sm:px-[53px] py-[5px] sm:py-[10px] rounded-[68px] border border-[#465B95] flex items-center justify-center'>
                                    <button className='whitespace-nowrap'>Sign Up</button>
                                </li>
                            </ul>
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="block md:hidden cursor-pointer">
                                <svg className="w-6 h-6 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                        </div>
                        <div className='inline-flex text-center xl:text-start flex-col 2xl:justify-start mt-[80px] xl:mt-[152px]'>
                            <h1 className='font-semibold text-[36px] sm:text-[50px] leading-[60px] text-white xl:max-w-[570px]'>
                                Monitor your business on real-time dashboard
                            </h1>
                            <h3 className='font-normal text-[18px] leading-[27px] text-[#8794BA] mt-4 xl:max-w-[550px]'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam.
                            </h3>
                            <div>
                                <button type="button" className='mt-[20px] sm:mt-[50px] px-[80px] w-[238px] rounded-[68px] py-[16px] bg-[#EF2A82] inline-flex text-white text-[16px] leading-[18px] font-normal'>
                                    Try for free
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden md:block absolute top-0'>
                <img src="/Subtract.svg" />
            </div>
            <div className='absolute top-0 right-0 hidden 2xl:block'>
                <img src="/Subtract.png" />
            </div>
            <div className='absolute bottom-36 right-0 hidden xl:block'>
                <img
                    src='/dashboard.png'
                    className='xl:max-w-[600px] 2xl:max-w-full 3xl:max-w-[800px]'
                />
                <div className='absolute top-32 -left-20'>
                    <img src="/hero_chart.png" />
                </div>
            </div>
        </div>
    )
}

export default Hero