import { useState, useEffect } from "react";
import { NAV_URLS } from "../../../config/urls";
import axios from "axios";

export default function FooterGrid() {
	const [category, setCategory] = useState([]);

	useEffect(() => {
		axios.get(NAV_URLS + '108')
			.then((response) => {
				setCategory(response.data);
				console.log(response.data);
			})
			.catch((error) => {
				console.error('Failed to fetch category:', error);
			});
	}, []);

	return (
		<>
			{category?.map((Menu, index) => (
				<div key={index} className="md:px-6">
					<p className="text-[20px] font-[600] text-[#191d27] py-6">
						{Menu.label}
					</p>
					{Menu?.children?.map((subMenu, subIndex) => (
						<a
							key={subIndex}
							className="text-[16px] font-[500] text-[#616670] hover:text-[#050607] block pb-2"
							href={subMenu.url || '#'}
						>
							{subMenu.label}
						</a>
					))}
				</div>
			))}



			{/* <div className="md:px-6">
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
						fill="currentColor"
					>
						<path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.54.57 1 1 0 011 1v3.61a1 1 0 01-1 1A16 16 0 013 5a1 1 0 011-1h3.6a1 1 0 011 1 11.36 11.36 0 00.57 3.54 1 1 0 01-.21 1.11l-2.34 2.34z" />
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
						<path d="M0.155602 7.8336C0.132397 8.15455 0.0142219 8.0917 4.21057 10.0517C6.34763 11.049 8.10825 11.8795 8.12687 11.8983C8.14239 11.9139 8.95143 13.6754 9.92407 15.8085C10.8967 17.9416 11.7306 19.7281 11.7802 19.7782C11.9013 19.9003 12.1818 19.8953 12.3632 19.7651C12.482 19.6846 12.529 19.6069 12.6173 19.3704C12.6804 19.2086 14.2473 15.0978 16.1073 10.2309C17.9673 5.37018 19.5122 1.30608 19.5438 1.20647C19.6575 0.864091 19.4654 0.601435 19.0914 0.593586C18.8794 0.586437 17.8836 0.946823 10.397 3.73224C5.74523 5.4639 1.5961 7.00759 1.1715 7.16783C0.322319 7.4821 0.175407 7.57809 0.155602 7.8336ZM9.41548 5.10259C13.5584 3.55888 17.0269 2.27407 17.1174 2.24641C17.2797 2.19724 17.1764 2.29966 12.8408 6.60419L8.39565 11.0111L5.16982 9.51037C1.76666 7.93095 1.83199 7.95928 1.8633 7.92825C1.87582 7.91584 5.27258 6.64631 9.41548 5.10259ZM17.856 2.99144C17.7328 3.38677 12.0552 18.1897 12.0271 18.1927C12.0115 18.1895 11.3259 16.7154 10.5077 14.9133L9.01634 11.6372L13.4615 7.23026C17.8033 2.93199 17.9066 2.82958 17.856 2.99144Z"
							fill="#1962F2" />
					</svg>
					info@demanzo.com
				</a>

				<div className="flex gap-4">
					{[...Array(4)].map((_, idx) => (
						<a
							key={idx}
							href="#"
							className="w-8 h-8 border flex items-center justify-center text-[#2d89bf] border-[#2d89bf] rounded-full border-dashed"
						>
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
			</div> */}
		</>
	);
}
