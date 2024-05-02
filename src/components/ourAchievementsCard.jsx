"use client";
import Image from "next/image";
import CountUp from "react-countup";
function ourAchievementsCard({
	title = "team member",
	ImgPath = "/assets/users.png",
	number = "15",
}) {
	return (
		<>
			<div className="max-w-60 sm:min-w-[180px] bg-[#ffffff] rounded-3xl py-3 px-2 shadow-xl shadow-red-100 text-center flex flex-col justify-center items-center gap-1 ">
				<Image
					className="w-20 h-20 p-1 object-fill"
					width={100}
					height={100}
					src={ImgPath}
					alt=""
				/>
				<h4 className="text-2xl md:text-3xl font-extrabold text-black pt-2">
					<CountUp end={number} />+
				</h4>
				<h4 className="text-base font-semibold capitalize text-[var(--text-color)] opacity-80">
					{title}
				</h4>
			</div>
		</>
	);
}

export default ourAchievementsCard;
