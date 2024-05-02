function TextSadow({ title = "" }) {
	return (
		<>
			<span className="TextShadowTitle ">
				<strong className="text-[var(--primary-color)] text-[2rem] md:text-4xl font-extrabold ">
					{title}
				</strong>
				<span className=" hidden sm:block TextShadow absolute text-[38px] md:text-[46px] text-[#fff] opacity-15 font-bold min-w-max bottom-5 -right-6">
					{title}
				</span>
			</span>
		</>
	);
}

export default TextSadow;
