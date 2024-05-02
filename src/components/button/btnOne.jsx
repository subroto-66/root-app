import { FaPaperPlane } from "react-icons/fa6";
function btnOne({ title = "contact us" }) {
	return (
		<>
			<button className=" text-nowrap flex justify-center items-center gap-3 bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-xl font-sans font-normal px-5 py-[10px] rounded-full transition-all ease-in-out duration-300 text-white capitalize">
				<FaPaperPlane className="text-white" />
				{title}
			</button>
		</>
	);
}

export default btnOne;
