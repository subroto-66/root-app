import Image from "next/image";
function cardtwo({
	title = "App and mobile development",
	imgPath = "/resource/software-application.png",
	bgImagePath = "/resource/services_1.png",
	content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy when an unknown printer took a galley of type and scrambled book.",
}) {
	return (
		<>
			<div className="w-full hover:shadow-2xl hover:shadow-red-200 max-w-[351px] min-h-80 flex flex-row md:flex-col flex-wrap justify-center items-center gap-4 py-5 px-4 hover:bg-[#FDFEFF]">
				<div>
					<div
						style={{ backgroundImage: `url(${bgImagePath})` }}
						className="bg-contain bg-center bg-no-repeat w-20"
					>
						<Image
							className="max-w-14 max-h-[95px] py-4 m-auto"
							height={100}
							width={100}
							src={imgPath}
							alt=""
						/>
					</div>
				</div>
				<div className="text-center">
					<h4 className="text-black text-lg font-extrabold capitalize mb-4">
						{title}
					</h4>
					<p className="font-medium text-base text-[#6c6b6b] leading-7 ">
						{content}
					</p>
				</div>
			</div>
		</>
	);
}

export default cardtwo;
