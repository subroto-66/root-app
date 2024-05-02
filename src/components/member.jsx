import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiLinkedinFill } from "react-icons/ri";
function member({ name, position, imgPath, socialIconPosition = null }) {
	return (
		<div className="text-center max-w-96">
			<div className="relative">
				<Image
					width={100}
					height={100}
					className="w-56 h-56 m-auto rounded-full object-fill p-7 shadow-[inset_0px_10px_5px_0px] bg-gradient-to-t from-[#FDF8FA] shadow-[#F8D9E3] border-t-2 border-red-200"
					src={imgPath}
					alt=""
				/>
				<span
					style={{ display: socialIconPosition == null ? "none" : "block" }}
				>
					<span
						className={`absolute ${
							socialIconPosition === "right" ? "right-0" : "left-0"
						} top-10 bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] transition-all ease-in-out duration-300 p-2 rounded-full cursor-pointer`}
					>
						<FaTwitter className="text-white text-xl font-semibold rounded-full" />
					</span>
					<span
						className={`absolute ${
							socialIconPosition === "right" ? "-right-[15px]" : "-left-[15px]"
						} bottom-[43%] bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] transition-all ease-in-out duration-300 p-2 rounded-full cursor-pointer`}
					>
						<IoLogoWhatsapp className=" text-white text-xl font-semibold rounded-full" />
					</span>
					<span
						className={`absolute ${
							socialIconPosition === "right" ? "right-0" : "left-0"
						} bottom-11 bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] transition-all ease-in-out duration-300 p-2 rounded-full cursor-pointer`}
					>
						<RiLinkedinFill className=" text-white  text-xl font-semibold rounded-full" />
					</span>
				</span>
			</div>

			<h1 className="text-lg font-bold text-[var(--primary-color)] capitalize">
				{name}
			</h1>
			<p className="text-base text-[#686868] font-medium capitalize pt-1">
				{position}
			</p>
		</div>
	);
}

export default member;
