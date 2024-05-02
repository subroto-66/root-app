import TextSadow from "@/components/TextSadow";
import ButtonTwo from "@/components/button/btnTwo";
import ClientThink from "@/components/cardthree";
import CardTwo from "@/components/cardtwo";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Technologies from "@/components/technologies";
export default function page() {
	return (
		<main className="flex min-h-screen bg-[var(--webpage-bg-color)] flex-col items-center justify-between">
			{/* header part */}
			<Header />
			{/* way we work */}
			<div className="w-full h-auto pt-16 mb-32 bg-gradient-to-b from-[var(--primary-bg-color)]">
				<div className="max-w-7xl m-auto ">
					<div className="pb-6 px-4 ">
						<h1 className="text-2xl md:text-3xl font-bold capitalize text-[var(--primary-color)] ">
							way we <TextSadow title="work" />
						</h1>
						<p className="text-lg font-medium py-4 leading-7">
							Lorem Ipsum is simply dummy text of the printing . <br></br> Lorem
							Ipsum Ipsum has been the industry has been the industry standard.
						</p>
					</div>
					<div className="flex justify-around flex-wrap gap-10 lg:gap-4 px-3">
						<CardTwo title="App and mobile development" />
						<CardTwo
							title="web development"
							imgPath="https://cdn-icons-png.flaticon.com/512/7075/7075373.png"
							content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Ipsum has been the industry has been the industry standard dummy when an unknown printer took a galley"
						/>
						<CardTwo title="custom software" />
					</div>
				</div>
			</div>
			{/* What We Offer */}
			<div className="w-full h-auto  pb-32">
				<div className="max-w-7xl m-auto ">
					<div className="pb-6 px-4">
						<h1 className="text-2xl md:text-3xl font-bold capitalize text-[var(--primary-color)] ">
							we offers <TextSadow title="services" />
						</h1>
						<p className="text-lg font-medium text-left py-4 leading-7">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. <br></br> Lorem Ipsum Ipsum has been the industry has
							been the industry standard.
						</p>
					</div>
					<div className=" flex justify-around flex-wrap gap-10 lg:gap-4 px-1">
						<CardTwo title="App and mobile development" />
						<CardTwo
							title="web development"
							imgPath="https://cdn-icons-png.flaticon.com/512/7075/7075373.png"
							content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Ipsum has been the industry has been the industry standard dummy when an unknown printer took a galley"
						/>
						<CardTwo title="custom software" />
					</div>
				</div>
			</div>

			{/* our featured work */}
			<div className="w-full h-auto pb-32">
				<div className="max-w-7xl m-auto">
					<div className="pb-10 px-4">
						<h1 className="text-2xl md:text-3xl font-bold capitalize text-[var(--primary-color)] ">
							take a look at our <TextSadow title="featured works" />
						</h1>
						<p className="text-lg font-medium text-left py-4 leading-7">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. <br></br> Lorem Ipsum Ipsum has been the industry has
							been the industry standard.
						</p>
					</div>
					<div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-3 lg:p-1">
						<FeaturedWork
							title="Art of leving meditation app "
							imgPath="https://images.pexels.com/photos/19869392/pexels-photo-19869392/free-photo-of-church-in-mountain-valley.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						/>
						<FeaturedWork
							title="Art of leving meditation app "
							imgPath="https://images.pexels.com/photos/1194760/pexels-photo-1194760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						/>
						<FeaturedWork
							title="Art of leving meditation app "
							imgPath="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						/>
						<FeaturedWork
							title="Art of leving meditation app "
							imgPath="https://images.pexels.com/photos/19869392/pexels-photo-19869392/free-photo-of-church-in-mountain-valley.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						/>
					</div>
					<div
						style={{ "text-align": "-webkit-center" }}
						className="text-center pt-10"
					>
						<ButtonTwo title="view case studies" />
					</div>
				</div>
			</div>
			{/* what client think */}
			<div className="w-full h-auto  pb-32">
				<div className="max-w-7xl m-auto">
					<div className="pb-12 px-4 ">
						<h1 className="text-2xl md:text-3xl font-bold capitalize text-[var(--primary-color)] ">
							what our <TextSadow title="clients think" />
						</h1>
					</div>

					<div className=" flex justify-around flex-wrap gap-10 lg:gap-4  px-3">
						<ClientThink />
						<ClientThink
							name="robin thapa"
							position="CEO, of football rocker"
						/>
						<ClientThink name="da mailar" position="CEO, of SnapZee" />
					</div>
				</div>
			</div>
			{/* our uses technologies  */}
			<div className="w-full h-auto  pb-32">
				<div className="max-w-7xl m-auto">
					<div className="pb-10 px-4">
						<h1 className="text-2xl md:text-3xl font-bold capitalize text-[var(--primary-color)] ">
							we use <TextSadow title="technologies" /> in our project
						</h1>
						<p className="text-lg font-medium text-left py-4 leading-7">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. <br></br> Lorem Ipsum Ipsum has been the industry has
							been the industry standard.
						</p>
					</div>
					<Technologies />
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
