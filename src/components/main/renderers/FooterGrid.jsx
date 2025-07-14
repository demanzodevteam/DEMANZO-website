export default function FooterGrid({ category }) {
	return (
		<>
			{category?.map((Menu, index) => (
				<div key={Menu.id || index} className="md:px-6">
					<p className="text-[20px] font-[600] text-[#191d27] py-6">
						{Menu.label}
					</p>

					{Menu?.children?.map((subMenu, subIndex) => (
						<div key={subMenu.id || subIndex}>
							<a
								className="text-[16px] font-[500] text-[#616670] hover:text-[#050607] block pb-2"
								href={subMenu.url || "#"}
							>
								{subMenu.label}
							</a>

							{subMenu.label === "info@demanzo.com" && (
								<div className="flex gap-4">
									<a
										href="https://www.facebook.com/demanzomarketing"
										className="w-8 h-8 border flex items-center justify-center text-[#2d89bf] border-[#2d89bf] rounded-full border-dashed"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
										><path
											fill="currentColor"
											d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5Z"
										></path></svg>
									</a>
									<a
										href="https://x.com/demanzo_info"
										className="w-8 h-8 border flex items-center justify-center text-[#2d89bf] border-[#2d89bf] rounded-full border-dashed"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
										><path
											fill="currentColor"
											d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"
										></path></svg>
									</a>
									<a
										href="https://www.instagram.com/demanzo.digital/"
										className="w-8 h-8 border flex items-center justify-center text-[#2d89bf] border-[#2d89bf] rounded-full border-dashed"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
										><g
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.5"
											color="currentColor"
										><path
											d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"
										></path><path
											d="M16.5 12a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m1.008-5.5h-.01"
										></path></g></svg>
									</a>
									<a
										href="https://www.linkedin.com/company/demanzo"
										className="w-8 h-8 border flex items-center justify-center text-[#2d89bf] border-[#2d89bf] rounded-full border-dashed"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
										><path
											fill="currentColor"
											d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
										></path></svg>
									</a>
								</div>
							)}
						</div>
					))}
				</div>
			))}
		</>
	);
}
