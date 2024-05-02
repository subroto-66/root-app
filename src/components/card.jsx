import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

function card({
	title = "Art of living mediation app ",
	imgPath = "resource/featurework_1.jpg",
	firstIconImagePath = "/resource/laravel.png",
	secondIconImagePath = "/resource/apple.png",
	thirdIconImagePath = "/resource/react.png",
}) {
	return (
		<div className="w-full h-auto max-w-lg rounded-3xl">
			<div className="grid grid-flow-row h-full">
				<div className="w-full h-auto md:h-[350px] overflow-hidden">
					<Image
						className="w-full h-full rounded-t-3xl object-cover hover:scale-105 transition ease-out duration-300"
						width={600}
						height={1000}
						src={imgPath}
						alt=""
					/>
				</div>
				<div className=" -mt-3 w-full h-auto relative shadow-lg shadow-rose-200 flex flex-col items-center justify-center rounded-2xl bg-white p-3">
					<h1 className="font-bold text-base md:text-xl text-[#F91E4E] mb-2 sm:mb-4">
						{title}
					</h1>
					<div>
						<ul className="flex gap-3 sm:gap-6 ">
							<li className="bg-[#FEF3F4] rounded-full p-2 md:p-3 cursor-pointer hover:bg-red-100 hover:scale-110 transition-all ease-in-out duration-500">
								<Image
									className="w-6 h-6"
									width={600}
									height={600}
									src={firstIconImagePath}
									alt=""
								/>
							</li>
							<li className="bg-[#FEF3F4] rounded-full p-2 md:p-3 cursor-pointer hover:bg-red-100 hover:scale-110 transition-all ease-in-out duration-500">
								<Image
									className="w-6 h-6"
									width={300}
									height={300}
									src={secondIconImagePath}
									alt=""
								/>
							</li>

							<li className="bg-[#FEF3F4] rounded-full p-2 md:p-3 cursor-pointer hover:bg-red-100 hover:scale-110 transition-all ease-in-out duration-500">
								<Image
									className="w-6 h-6"
									width={300}
									height={300}
									src={thirdIconImagePath}
									alt=""
								/>
							</li>
						</ul>
					</div>
					<div className="absolute rounded-full bg-red-50 p-3 bottom-[28%] right-[-6%]">
						<button className="bg-[#F91E4E] p-2 sm:p-3 text-base font-bold rounded-full hover:scale-110 text-white transition-all ease-in-out duration-300">
							<GoArrowUpRight className="text-[20px] md:text-[22px] font-bold  " />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default card;
