import React from 'react'
import CaptchaImg from '../../assets/Captcha.png'
import BackGroundImg from '../../assets/Background-SEO-Traffic.jpg'
import rocketImg from '../../assets/rocket.png'
import skyImg from '../../assets/sky2.png'
export default function DownloadReport({ pageData }) {
    return (
        <div
            className="flex items-center justify-center px-4 py-16 bg-cover bg-center"
            style={{ backgroundImage: `url(${BackGroundImg.src})` }}
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl w-full overflow-hidden p-8 lg:p-14">

                <div className="flex flex-col items-center justify-center text-center gap-6 px-4">
                    <img src={rocketImg.src} alt="" className="hover:-translate-y-4 transition-all duration-500" />
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#ffffff]">{pageData?.paragraphs[0]}!</h2>
                    <p className="text-[#979ba3] leading-8">
                       {pageData?.paragraphs[1]}!</p>
                    <img src={skyImg.src} alt="" className="hover:-translate-y-4 transition-all duration-500 mt-6" />
                </div>

                <div className="relative bg-white rounded-2xl shadow-lg p-6 lg:p-10 mb-30">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 gap-6">
                            <input type="text" placeholder="Your Name" required
                                className="border border-[#e7e7e7] hover:border-black focus:border-black focus:outline-none px-4 py-3 text-[16px] text-[#050607]" />
                            <input type="email" placeholder="Email" required
                                className="border border-[#e7e7e7] hover:border-black focus:border-black focus:outline-none px-4 py-3 text-[16px] text-[#050607]" />
                        </div>
                        <img src="" alt="Captcha" />
                        <input type="text" placeholder=""
                            className="w-full border border-[#e7e7e7] hover:border-black focus:border-black focus:outline-none px-4 py-3 text-[16px] text-[#050607]" />

                        <div className="flex flex-col items-center gap-4">
                            <button
                                type="submit"
                                className=" absolute right-10 lg:w-auto text-white bg-blue-600 px-6 py-3 rounded-full hover:bg-[#f5a31c] transition"
                            >
                                Download Now
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>)
}
