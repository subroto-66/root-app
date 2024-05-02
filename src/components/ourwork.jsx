import Image from "next/image";
function ourwork({ ImgPath }) {
	return (
		<>
			<span className=" flex justify-center items-center bg-[#FDFEFF] shadow-lg shadow-red-100 w-24 h-24 rounded-t-full rounded-l-full">
				<Image
					className="w-16 h-16 rounded-sm "
					width={400}
					height={400}
					src={ImgPath}
					alt=""
				/>
			</span>
		</>
	);
}

export default ourwork;
