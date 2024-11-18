// import Header from "../components/Header"

// const HomePage = () => {
//     return (
//         <div className="w-full overflow-hidden">
//             <div className="bg-[url('https://cmogujarat.gov.in/sites/default/files/2024-08/cm-fellowship.jpg')] w-full h-screen ">
//                 <Header />
//             </div>

//             {/* cards */}

//             <div className="flex max-md:flex-col max-md:justify-center max-md:items-center justify-between items-start max-w-[92.3%] gap-6  mx-auto relative -top-[400px]">
//                 <div className="max-w-[90%] rounded-40">
//                     <div className="bg-[#D9DACA] rounded-14">
//                         <div className="flex gap-5 items-center py-5 ps-5">
//                             <div className="w-5 h-5 rounded-full bg-black" />
//                             <p className="text-black">Lorem ipsum dolor sit.</p>
//                         </div>
//                         <div className="w-full h-[1px] bg-black" />
//                         <h1 className="text-3xl text-black py-5 ps-5">
//                             Over 90% of plastics worldwide are not recycled. This needs to change!
//                             Lorem ipsum dolor sit amet Lorem ipsum dolor sit. Lorem ipsum dolor sit.
//                         </h1>
//                     </div>

//                     <div className="relative top-5 bg-[#D9DACA] rounded-14">
//                         <div className="flex gap-5 items-center py-5 ps-5">
//                             <div className="w-5 h-5 rounded-full bg-black" />
//                             <p className="text-black">Lorem ipsum dolor sit.</p>
//                         </div>
//                         <div className="w-full h-[1px] bg-black" />
//                         <h1 className="text-3xl text-black py-5 ps-5">
//                             Over 90% of plastics worldwide are not recycled. This needs to change!
//                             Lorem ipsum dolor sit amet Lorem ipsum dolor sit. Lorem ipsum dolor sit.
//                         </h1>
//                     </div>

//                     <div className="relative top-10 bg-[#F2FEBC] rounded-14 h-full">
//                         <div className="flex gap-5 items-center py-5 ps-5">
//                             <div className="w-5 h-5 rounded-full bg-black" />
//                             <p className="text-black">Our Solution.</p>
//                         </div>
//                         <div className="w-full h-[1px] bg-black" />
//                         <div>
//                             <img src="https://cdn.prod.website-files.com/65fc1876777e6eaf167fad43/66365cd39573e7c024b1bf6e_01-facility-002%202.webp" alt="" />
//                         </div>
//                         <div className="max-w-[90%] bg-[#CACFBB] absolute top-[400px]">
//                             <h1 className="py-10 px-10 text-5xl text-black">DePoly has developed a novel, clean technology to recycle PET and Polyester</h1>
//                         </div>
//                     </div>


//                 </div>

//                 <div className="max-w-[90%] bg-yellow-400 rounded-40">
//                     <div>
//                         <div className="flex gap-5 items-center py-5 ps-5">
//                             <div className="w-5 h-5 rounded-full bg-black" />
//                             <p className="text-black">Lorem ipsum dolor sit.</p>
//                         </div>
//                         <div className="w-full h-[1px] bg-black" />
//                         <h1 className="text-3xl text-black py-5 ps-5">
//                             Over 90% of plastics worldwide are not recycled. This needs to change!
//                             Lorem ipsum dolor sit amet Lorem ipsum dolor sit. Lorem ipsum dolor sit.
//                         </h1>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default HomePage


import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import AboutUs from "../components/AboutUs"
import FAQsPage from "./FAQsPage"
import Hero from "../components/Hero"
const HomePage = () => {
    return (
        <>
            <div className="relative w-full h-screen">
                {/* Video Background */}
                <video
                    className="absolute top-0 left-0 w-full h-screen object-cover"
                    src="video\video.webm" // Replace with your video URL
                    autoPlay
                    muted
                    loop
                />

                {/* Navbar */}
                <Navbar />

                {/* Page Content */}
                <div className="absolute z-10 top-[500px] text-center text-white">
                    <h1 className="text-4xl font-bold">Sardar Patel Good Governance CM Fellowship</h1>
                    <p className="mt-4 text-lg">Explore our programs, career opportunities, and more!</p>
                </div>
            </div>
            {/* <Hero /> */}
            <AboutUs />
            <FAQsPage />
            <Footer />
        </>
    )
}

export default HomePage