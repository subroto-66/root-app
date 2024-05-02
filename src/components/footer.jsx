import Image from "next/image";
import { IoLogoWhatsapp } from "react-icons/io";
function footer() {
	return (
		<div className="w-full h-auto bg-[var(--primary-bg-color)]">
			<div className="max-w-7xl grid md:grid-cols-2 lg:grid-cols-4 place-content-center gap-8 p-4 lg:py-8 m-auto">
				<div className=" flex flex-col gap-6 items-start">
					<h1 className="text-2xl text-[var(--primary-color)] capitalize font-bold">
						Get in Touch
					</h1>
					<h2 className="text-xl uppercase">
						<Image
							className="max-w-48 max-h-16"
							width={100}
							height={100}
							src="https://rootdevs.com/public/uploads/images/logo.png"
							alt=""
						/>
					</h2>
					<p className="text-lg font-medium">
						Amigo 14 Square, 59/C & 61/C, Asad Avenue,Mohammadpur, Dhaka 1207
					</p>
					<p className="text-lg font-medium">
						<strong className="text-[var(--primary-color)]">Open:</strong>
						Lorem ipsum dolor, sit amet consectetur Tempore voluptas et veniam
						quisquam iusto sed error dolore dolores
					</p>
				</div>
				<div className=" flex flex-col gap-6 items-start">
					<h1 className="text-2xl text-[var(--primary-color)] capitalize font-bold">
						quick links
					</h1>
					<ul className="capitalize text-lg font-medium flex flex-col gap-2">
						<li>home</li>
						<li>about</li>
						<li>case study</li>
						<li>our team</li>
						<li>how we work</li>
						<li>our team</li>
					</ul>
				</div>

				<div className=" flex flex-col gap-6 items-start">
					<h1 className="text-2xl text-[var(--primary-color)] capitalize font-bold">
						our services
					</h1>
					<ul className="capitalize text-lg font-medium flex flex-col gap-2">
						<li>web app development</li>
						<li>web development</li>
						<li>custom software</li>
					</ul>
				</div>

				<div className=" flex flex-col gap-6 items-start">
					<h1 className="text-2xl text-[var(--primary-color)] capitalize font-bold">
						follow us
					</h1>
					<ul className="capitalize text-lg font-medium flex flex-row flex-wrap gap-2">
						<span
							className={`bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] transition-all ease-in-out duration-300 p-2 rounded-full cursor-pointer`}
						>
							<IoLogoWhatsapp className=" text-white text-xl font-semibold rounded-full" />
						</span>
						<span
							className={`bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] transition-all ease-in-out duration-300 p-2 rounded-full cursor-pointer`}
						>
							<IoLogoWhatsapp className=" text-white text-xl font-semibold rounded-full" />
						</span>
						<span
							className={`bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] transition-all ease-in-out duration-300 p-2 rounded-full cursor-pointer`}
						>
							<IoLogoWhatsapp className=" text-white text-xl font-semibold rounded-full" />
						</span>
						<span
							className={`bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] transition-all ease-in-out duration-300 p-2 rounded-full cursor-pointer`}
						>
							<IoLogoWhatsapp className=" text-white text-xl font-semibold rounded-full" />
						</span>
						<span
							className={`bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] transition-all ease-in-out duration-300 p-2 rounded-full cursor-pointer`}
						>
							<IoLogoWhatsapp className=" text-white text-xl font-semibold rounded-full" />
						</span>
						<span
							className={`bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] transition-all ease-in-out duration-300 p-2 rounded-full cursor-pointer`}
						>
							<IoLogoWhatsapp className=" text-white text-xl font-semibold rounded-full" />
						</span>
						<span
							className={`bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] transition-all ease-in-out duration-300 p-2 rounded-full cursor-pointer`}
						>
							<IoLogoWhatsapp className=" text-white text-xl font-semibold rounded-full" />
						</span>
					</ul>
				</div>
			</div>
			<div className="text-center text-base lg:text-lg font-medium p-5 border-t-2 border-red-100 capitalize text-[#797475]">
				&copy; copyright 2024 RootDevs all right reserved
			</div>
		</div>
	);
}

export default footer;
