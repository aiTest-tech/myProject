import { useState } from 'react'

const Header = () => {
    const [isHover, setisHover] = useState(false);
    const [ishamburgarClick, setIshamburgarClick] = useState(false);
    return (
        <header className='fixed top-0 left-0 w-full z-50'>
            <div className='flex justify-between items-center max-md:max-w-[95%] mx-auto max-md:py-3 max-lg:py-5 max-lg:max-w-[90%]  container py-2 bg-white mt-5 max-md:mt-2'>
                {/* left part logo */}
                <div>
                    <img src="https://cdn.prod.website-files.com/65fc1876777e6eaf167fad43/660c16e63dc8e9d9633cd098_logo-horizontal.svg" alt="" width={155} height={100} className='cursor-pointer' />
                </div>
                {/* middle part links */}
                <div className='lg:block hidden'>
                    <ul className='flex justify-between px-2 gap-5'>
                        <li className='text-xl text-[#aab6b6] capitalize cursor-pointer'>Technology</li>
                        <li className='text-xl text-[#aab6b6] capitalize cursor-pointer'>Offering</li>
                        <li className='text-xl text-[#aab6b6] capitalize cursor-pointer'>About Us</li>
                        <li className='text-xl text-[#aab6b6] capitalize cursor-pointer'>Careers</li>
                        <li className='text-xl text-[#aab6b6] capitalize cursor-pointer'>News</li>
                        <li className='text-xl text-[#aab6b6] capitalize cursor-pointer'>Contact</li>
                    </ul>
                </div>
                {/* right part Get in Touch */}
                <div className='lg:block hidden'>
                    <button className='bg-slate-800 py-5 px-5 text-white text-xl'>
                        Get In Touch
                    </button>
                </div>
                <div className='lg:hidden flex justify-center items-center cursor-pointer' onMouseEnter={() => setisHover(!isHover)} onMouseLeave={() => setisHover(!isHover)} onClick={() => setIshamburgarClick(!ishamburgarClick)}>
                    <img src={isHover ? "https://cdn.prod.website-files.com/65fc1876777e6eaf167fad43/666c540586bce6f112e46ac1_Group%201461.svg" : 'https://cdn.prod.website-files.com/65fc1876777e6eaf167fad43/666c530fcc1527326993c433_Vector.svg'} alt="" width={20} height={20} />
                </div>
            </div>
            <div className={`${ishamburgarClick && 'max-md:max-w-[95%] max-lg:max-w-[90%] mx-auto w-full h-[1px] bg-gray-300'}`} />
            <div className={`${ishamburgarClick ? 'block' : 'hidden'}`}>
                <ul className='flex flex-col max-md:max-w-[95%] max-lg:max-w-[90%] mx-auto max-md:h-full py-10 px-10 bg-white gap-5 rounded'>
                    <li className='text-xl text-[#aab6b6] capitalize cursor-pointer'>Technology</li>
                    <li className='text-xl text-[#aab6b6] capitalize cursor-pointer'>Offering</li>
                    <li className='text-xl text-[#aab6b6] capitalize cursor-pointer'>About Us</li>
                    <li className='text-xl text-[#aab6b6] capitalize cursor-pointer'>Careers</li>
                    <li className='text-xl text-[#aab6b6] capitalize cursor-pointer'>News</li>
                    <li className='text-xl text-[#aab6b6] capitalize cursor-pointer'>Contact</li>
                </ul>
            </div>
        </header>
    )
}

export default Header