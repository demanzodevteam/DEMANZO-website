import { useState, useEffect } from "react";
import { API_URL } from "../../../config/urls";
import axios from "axios";

export default function FooterGrid() {
    const [category, setCategory] = useState({
        name: '',
        slug: '',
        description: '',
        button: '',
        posts: [],
        image: '',
    });

    useEffect(() => {
        axios.get(API_URL + 'category/7')
            .then((response) => {
                setCategory(response.data);
            })
            .catch((error) => {
                console.error('Failed to fetch category:', error);
            });
    }, []);

    return (
        <>
            <div className="md:px-6">
                <p className="text-[20px] font-[600] text-[#191d27] py-6">
                    Marketing Services
                </p>
                <a
                    className="text-[16px] font-[500] text-[#616670] hover:text-[#050607] block pb-2"
                    href="#"
                >
                    Content Writing Services
                </a>
                <a
                    className="text-[16px] font-[500] text-[#616670] hover:text-[#050607] block pb-2"
                    href="#"
                >
                    Content Writing Services
                </a>
                <a
                    className="text-[16px] font-[500] text-[#616670] hover:text-[#050607] block pb-2"
                    href="#"
                >
                    Content Writing Services
                </a>
                <a
                    className="text-[16px] font-[500] text-[#616670] hover:text-[#050607] block pb-2"
                    href="#"
                >
                    Content Writing Services
                </a>
            </div>

			 <div className="md:px-6">
                <p className="text-[20px] font-[600] text-[#191d27] py-6">
                    Quick Links
                </p>
                <a
                    className="text-[16px] font-[500] text-[#616670] hover:text-[#050607] block pb-2"
                    href="#"
                >
                    Content Writing Services
                </a>
                <a
                    className="text-[16px] font-[500] text-[#616670] hover:text-[#050607] block pb-2"
                    href="#"
                >
                    Content Writing Services
                </a>
                <a
                    className="text-[16px] font-[500] text-[#616670] hover:text-[#050607] block pb-2"
                    href="#"
                >
                    Content Writing Services
                </a>
                <a
                    className="text-[16px] font-[500] text-[#616670] hover:text-[#050607] block pb-2"
                    href="#"
                >
                    Content Writing Services
                </a>
            </div>

            <div className="md:px-6">
                <p className="text-[20px] font-[600] text-[#191d27] py-6">
                    Get In Touch
                </p>
                <a
                    href="tel:+919751840872"
                    className="text-[16px] font-[500] text-[#616670] hover:text-[#050607] block pb-2"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline text-[#2d89bf] pr-1"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            d="M16.1 13.359l-.528-.532z..."
                        />
                    </svg>
                    +91-9751840872
                </a>

                <a
                    href="mailto:info@demanzo.com"
                    className="text-[16px] font-[500] text-[#616670] hover:text-[#050607] block pb-2"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline text-[#2d89bf] pr-1"
                        width="24"
                        height="24"
                        viewBox="0 0 20 20"
                        fill="none"
                    >
                        <path
                            d="M0.155602 7.8336C0.132397 8.15455..."
                            fill="#1962F2"
                        />
                    </svg>
                    info@demanzo.com
                </a>

                <div className="flex gap-4">
                    {/* Social icons (Facebook, Twitter, Instagram, LinkedIn) */}
                    {[...Array(4)].map((_, idx) => (
                        <a
                            key={idx}
                            href="#"
                            className="w-8 h-8 border flex items-center justify-center text-[#2d89bf] border-[#2d89bf] rounded-full border-dashed"
                        >
                            {/* SVG placeholders for brevity */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                            >
                                <path fill="currentColor" d="..." />
                            </svg>
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}
