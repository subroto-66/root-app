import TextSadow from "@/components/TextSadow";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import JobOppertunites from "@/components/jobOpportunities";
import ImageBackground from "../../../public/assets/images/office.jpg";
export default function Home() {
	return (
		<main className="flex min-h-screen bg-[var(--webpage-bg-color)] flex-col items-center justify-between">
			{/* header part */}
			<Header />
			{/*** job opportunities **/}
			<div className="w-full h-auto pt-20 bg-gradient-to-b from-[var(--primary-bg-color)] mb-32">
				<div className="max-w-7xl m-auto">
					<h1 className=" text-center text-2xl md:text-3xl font-bold capitalize text-[var(--primary-color)] mb-11 px-4 lg:px-1">
						<TextSadow title="job opportunities" />
					</h1>
					<div
						className=" w-full grid grid-flow-row gap-6 rounded-2xl  p-6 lg:px-10 lg:pb-11"
						style={{
							backgroundImage: `url(${ImageBackground.src})`,
							backgroundSize: "cover",
							backgroundColor: "rgba(0, 0, 0, 0.5)",
						}}
					>
						<div className="text-center">
							<h1 className="text-white border-b-2 border-dashed border-spacing-3 inline-block text-2xl font-medium capitalize">
								be a part of our team{" "}
							</h1>
						</div>
						<JobOppertunites title="senior software engineer(laravel)" />
						<JobOppertunites title="software engineer(react)" />
						<JobOppertunites title="junior software engineer(flutter)" />
					</div>
				</div>
			</div>
			{/* contact us */}
			<div className="w-full h-auto pb-20 md:pb-32">
				<div className="max-w-7xl m-auto">
					<h1 className="text-2xl md:text-3xl font-bold capitalize text-[var(--primary-color)] mb-5 px-4 lg:px-1">
						get <TextSadow title="in touch" />
					</h1>
					<Contact />
				</div>
			</div>

			{/* footer part */}
			<Footer />
		</main>
	);
}
