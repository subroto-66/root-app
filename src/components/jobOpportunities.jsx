import { FaHourglassEnd } from "react-icons/fa";
import { FaLocationDot, FaMoneyBill1Wave } from "react-icons/fa6";
import { ImCalendar } from "react-icons/im";
import { MdSettingsVoice } from "react-icons/md";

function jobopportunities({ title = " " }) {
	return (
		// <div className="grid place-content-center">
		// 	<div className="bg-slate-500 w-full max-w-7xl p-3 lg:p-12">
		// 		<div>
		// 			<h1>be a part of our team </h1>
		// 		</div>
		<div className="w-full bg-white h-auto grid grid-flow-row text-center p-8 lg:px-10 lg:py-8 rounded-2xl lg:text-start lg:grid-flow-col lg:gap-12 items-center">
			<div className="grid grid-flow-row gap-5 lg:gap-6">
				<h2 className="text-xl lg:text-2xl text-[var(--primary-color)] font-semibold capitalize ">
					{title}
				</h2>
				<ul className="flex justify-center flex-wrap gap-4 md:gap-6 text-sm pb-8 lg:pb-0 lg:justify-start lg:gap-8 lg:text-base capitalize font-medium">
					<li className="flex flex-row gap-2 lg:gap-3 ">
						<FaLocationDot className="text-[var(--primary-color)] text-2xl font-semibold" />
						asad ave, mohammadpur, dhaka
					</li>
					<li className="flex flex-row gap-2 lg:gap-3 justify-center items-center">
						<FaHourglassEnd className="text-[var(--primary-color)] text-2xl font-semibold" />
						full time
					</li>
					<li className="flex flex-row gap-2 lg:gap-3 justify-center items-center">
						<FaMoneyBill1Wave className="text-[var(--primary-color)] text-2xl font-semibold" />
						35k
					</li>
					<li className="flex flex-row gap-2 lg:gap-3 justify-center items-center">
						<ImCalendar className="text-[var(--primary-color)] text-2xl font-semibold" />
						31 Dec 2024
					</li>
					<li className="flex flex-row gap-2 lg:gap-3 justify-center items-center">
						<MdSettingsVoice className="text-[var(--primary-color)] text-2xl font-semibold" />
						3 vacancy
					</li>
				</ul>
			</div>
			<div>
				<button className="bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-white text-lg lg:text-xl font-medium capitalize px-4 py-2 lg:px-8 lg:py-4 rounded-xl">
					apply now
				</button>
			</div>
		</div>

		// </div>
		//</div>
	);
}

export default jobopportunities;
