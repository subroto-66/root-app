import TextSadow from "@/components/TextSadow";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
export default function Home() {
	return (
		<main className="flex min-h-screen bg-[var(--webpage-bg-color)] flex-col items-center justify-between">
			{/* header part */}
			<Header />
			{/* contact us */}
			<div className="w-full h-auto bg-gradient-to-b from-[var(--primary-bg-color)] pb-20 md:pb-32">
				<div className="max-w-7xl m-auto">
					<div className="py-20 px-4">
						<h1 className="text-2xl text-center md:text-3xl font-extrabold capitalize">
							would you like to{" "}
							<span className="text-[var(--primary-color)]">
								Use our services ?
							</span>
						</h1>
					</div>
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
