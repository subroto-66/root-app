export default function cardthree({
	name = "Dread La",
	position = "Md,Goal Mob",
	content = "Lorem Ipsum is simply dummy text of the printing and typesettin industry Lorem Ipsum has been the industry standard dummy text",
}) {
	return (
		<div className="max-w-96 flex flex-col justify-center items-center gap-4">
			<div className="text-center">
				<h4 className="text-2xl font-bold text-[var(--primary-color)] mb-2 capitalize">
					{name}
				</h4>
				<p className="text-[#7E7C7C] text-base font-medium capitalize">
					{position}
				</p>
			</div>
			<div className=" flex shadow-2xl bg-[#FFFFFF] shadow-red-100 border bg_data px-3 ">
				<p className=" text-center text-lg pt-4 lg:pt-6 pb-4 px-4 lg:px-6">
					{content}
				</p>
			</div>
		</div>
	);
}
