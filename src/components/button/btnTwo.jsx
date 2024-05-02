import { HiMiniArrowUpRight } from "react-icons/hi2";

function btnTwo({ title = "view case studies" }) {
	return (
		<>
			<button className=" flex justify-center items-center gap-2 bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-xl font-sans font-normal tracking-wider px-5 py-[10px]  rounded-full transition-all ease-in-out duration-300 text-white capitalize">
				{title}
				<HiMiniArrowUpRight />
			</button>
		</>
	);
}

export default btnTwo;
