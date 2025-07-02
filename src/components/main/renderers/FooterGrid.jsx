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



			<div className="md:px-6">
			</div>
		</>
	);
}
