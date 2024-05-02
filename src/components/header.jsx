import ButtonOne from "@/components/button/btnOne";
import Image from "next/image";
import Link from "next/link";
function header() {
	return (
		<>
			<div className="navbar py-5 max-w-7xl m-auto">
				<div className="">
					{/* <a className="text-xl lg:text-3xl font-bold uppercase">rootdevs.</a> */}
					<Link href="/"></Link>
					
					<Image         
						className="max-w-48 max-h-16 z-10"
						width={200}
						height={100}
						src="/resource/logo.png"
						alt=""
					/>
				</div>

				<div className="navbar-end w-full ">
					<div className="hidden lg:block">
						<ul className="menu menu-horizontal px-1 text-base font-medium capitalize ">
							<li>
								<Link href="/">about us</Link>
							</li>
							<li>
								<Link href="#">case studies</Link>
							</li>

							<li>
								<details>
									<summary>
										{" "}
										<Link href="/our-services">our services</Link>{" "}
									</summary>
									<ul className="p-2">
										<li>
											<Link href="/">menu item</Link>
										</li>
										<li>
											<Link href="/">menu item</Link>
										</li>
									</ul>
								</details>
							</li>
							<li>
								<Link href="/what-we-work">how we work</Link>
							</li>
							<li>
								<Link href="/career">career</Link>
							</li>
						</ul>
					</div>
					<div className="hidden lg:block px-4">
						<Link href="/contact">
							<ButtonOne />
						</Link>
					</div>
					<div className="dropdown  lg:hidden ">
						<div className="drawer z-10">
							<input id="my-drawer" type="checkbox" className="drawer-toggle" />
							<div className="drawer-content">
								{/* Page content here */}
								<label
									htmlFor="my-drawer"
									className="btn text-white bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] drawer-button"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h7"
										/>
									</svg>
								</label>
							</div>
							<div className="drawer-side">
								<label
									htmlFor="my-drawer"
									aria-label="close sidebar"
									className="drawer-overlay"
								></label>
								<ul className="menu p-4 w-80 min-h-full bg-base-200 text-base font-medium capitalize">
									{/* Sidebar content here */}
									<li>
										<Link className="hover:bg-none" href="/">
											about us
										</Link>
									</li>
									<li>
										<Link href="#">case studies</Link>
									</li>

									<li>
										<details>
											<summary>
												<Link href="/our-services">our services</Link>
											</summary>
											<ul className="p-2">
												<li>
													<Link href="/">menu item</Link>
												</li>
												<li>
													<Link href="/">menu item</Link>
												</li>
											</ul>
										</details>
									</li>
									<li>
										<Link href="/what-we-work">how we work</Link>
									</li>
									<li>
										<Link href="/career">career</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					{/* <div className=" lg:block">
						<div className="dropdown dropdown-end">
							<div
								tabIndex={0}
								role="button"
								className="btn btn-ghost btn-circle"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h7"
									/>
								</svg>
							</div>
							<ul
								tabIndex={0}
								className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box max-w"
							>
								<li>
									<a className="justify-between">
										Profile
										<span className="badge">New</span>
									</a>
								</li>
								<li>
									<a>Settings</a>
								</li>
								<li>
									<a>Logout</a>
								</li>
							</ul>
						</div>
					</div> */}
				</div>
			</div>
		</>
	);
}

export default header;
