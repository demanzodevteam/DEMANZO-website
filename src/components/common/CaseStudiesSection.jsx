import cs1 from '../../assets/cs1.webp'
import { MEDIA_URL } from "../../config/urls";

export default function CaseStudiesSection() {
  return (
<div class="py-20 px-4 lg:px-8 bg-gradient-to-b from-[#f8f8f8] to-white">
    <p class="demanzo-h1 text-center pt-10">Case Studies</p>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 lg:px-8 py-10">
    <div class="w-full rounded h-[380px] relative hover:scale-105 transition-all duration-500 group">
        <div class="absolute inset-0 bg-black/40 group-hover:bg-gradient-to-r from-[#ff9966]/40 to-[#ff5e62]/40 z-10 rounded"></div>
        <p class="absolute text-[20px] font-[600] text-white bottom-8 px-10 z-20">SEO IoT</p>
        <img class="w-full h-full rounded object-cover"src={MEDIA_URL + "2025/07/On-SERP-SEO.webp"}/>
    </div>
    
</div>
<div class="flex justify-center">
    <a href="#" class="bg-[#0a6aad] text-white rounded-full px-8 py-3 text-[17px] font-[400] cursor-pointer">
        View All
    </a>
</div>
</div>  )
}
