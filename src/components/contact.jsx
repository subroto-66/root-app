import ButtonTwo from "@/components/button/btnTwo";
import Input from "@/components/field/input";
import Textarea from "@/components/field/textarea";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { PiPhoneCallFill } from "react-icons/pi";
function contact() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 w-full justify-items-center gap-8 px-4 lg:px-1">
			<div className="flex flex-col gap-10 w-full">
				<p className="text-lg font-medium">
					Roots in a piece of classical Latin literature from making it over.
					<br />
					Contrary to popular belief, Lorem Ipsum is not text.
				</p>
				<div className="flex items-center gap-6">
					<span className=" flex justify-center items-center bg-[#FDFEFF] shadow-lg shadow-red-100 w-14 h-14 rounded-t-full rounded-l-full">
						<IoLocationSharp className="text-[var(--primary-color)] text-3xl" />
					</span>
					<ul>
						<li className="text-xl font-bold capitalize mb-1">visit us:</li>
						<li className="text-lg font-medium">
							59/C & 61/C,Asad Ave,Mohammadpur, Dhaka
						</li>
					</ul>
				</div>
				<div className="flex items-center gap-6">
					<span className=" flex justify-center items-center bg-[#FDFEFF] shadow-lg shadow-red-100 w-14 h-14 rounded-t-full rounded-l-full">
						<IoMdMail className="text-[var(--primary-color)] text-2xl" />
					</span>
					<ul>
						<li className="text-xl font-bold capitalize mb-1">mail us:</li>
						<li className="text-lg font-medium">rootdevs@rootdevs.com</li>
					</ul>
				</div>
				<div className="flex items-center gap-6">
					<span className=" flex justify-center items-center bg-[#FDFEFF] shadow-lg shadow-red-100 w-14 h-14 rounded-t-full rounded-l-full">
						<PiPhoneCallFill className="text-[var(--primary-color)] text-3xl" />
					</span>
					<ul>
						<li className="text-xl font-bold capitalize mb-1">phone us:</li>
						<li className="text-lg font-medium">+880 1234567890</li>
					</ul>
				</div>
			</div>
			<div className=" grid grid-flow-row gap-6 w-full mt-2 md:mt-0 md:px-12">
				<h2 className="text-3xl font-semibold text-center lg:text-left">
					Drop us a line
				</h2>
				<Input placeholder="Your Name *" />
				<Input placeholder="Your Email *" />
				<Textarea />
				<div className="mt-2">
					<ButtonTwo title="send a message" />
				</div>
			</div>
		</div>
	);
}

export default contact;
