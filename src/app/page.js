"use client";
import TextSadow from "@/components/TextSadow";
import ButtonTwo from "@/components/button/btnTwo";
import FeaturedWork from "@/components/card";
import ClientThink from "@/components/cardthree";
import CardTwo from "@/components/cardtwo";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Member from "@/components/member";
import OurAchievementsCard from "@/components/ourAchievementsCard";
import OurWork from "@/components/ourwork";
import Technologies from "@/components/technologies";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
export default function Home() {
	const [isSticky, setSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY;
			if (offset > 100) {
				setSticky(true);
			} else {
				setSticky(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<main className="flex min-h-screen bg-[var(--webpage-bg-color)] flex-col items-center overflow-hidden justify-between">
			{/* Hero section */}
			<div
				style={{ position: "relative" }}
				className="w-full relative min-h-[900px] z-10"
			>
				<div className="absolute inset-0 bg-[#000] opacity-85 z-10"></div>
				<div className="absolute inset-0 bg-[url('/resource/hero_1.jpg')] bg-center bg-cover bg-no-repeat"></div>
				<div className="absolute right-0 top-52 lg:w-[40%] h-96 bg-[url('/resource/hero_2.png')] bg-cover bg-center bg-no-repeat z-20"></div>
				{/* header part */}
				<div
					className={`w-full border-b-[1px] border-b-slate-700 bg-transparent  z-40 text-white `}
				>
					<Header />
				</div>

				<div className="max-w-7xl m-auto relative z-20">
					<div className="w-full h-full absolute top-44 lg:top-52 grid grid-flow-row gap-6 px-4 lg:px-1">
						<h1 className="text-3xl lg:text-5xl capitalize font-bold text-[#fff]">
							we create{" "}
							<strong className="text-[--primary-color]"> software</strong>{" "}
						</h1>
						<h1 className="text-3xl lg:text-5xl capitalize font-bold text-[#fff]">
							{" "}
							for a sustainable feature
						</h1>
						<h2 className="text-[#9D9D9A] text-xl lg:text-2xl capitalize font-semibold">
							we execute your ideas from the start to finish
						</h2>
						<div className="flex gap-6">
							<button className=" flex justify-center items-center gap-2 text-base lg:text-lg font-medium px-4 py-1 bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] rounded-full opacity-85 transition-all ease-in-out duration-300 text-white capitalize">
								get in touch
								<HiMiniArrowUpRight />
							</button>
							<button
								type="button"
								className="border  px-5 py-1 border-white rounded-full text-white text-base lg:text-lg font-normal hover:border-[var(--primary-hover-color)]  hover:bg-[var(--primary-hover-color)] transition-all ease-in-out duration-300 opacity-85 capitalize"
							>
								{" "}
								view our work
							</button>
						</div>
					</div>
				</div>
				<div className="w-full lg:w-[40%] h-[130px] bg-white z-30 absolute right-0 bottom-0 lg:rounded-tl-3xl ">
					<div className="grid grid-cols-3 h-full w-full items-center justify-items-center gap-0 ">
						<div className="relative w-full text-center ">
							<div className="absolute bg-black h-12 w-[2px] right-0 top-[20%] opacity-45"></div>
							<h2 className="font-bold text-3xl lg:text-5xl text-[var(--primary-color)]">
								<CountUp end={180} />+
							</h2>
							<p className="text-sm lg:text-xl font-semibold text-[var(--primary-color)] capitalize lg:mt-2 mt-1">
								project completed
							</p>
						</div>
						<div className="relative w-full text-center ">
							<div className="absolute bg-black h-12 w-[2px] right-0 top-[20%] opacity-45"></div>
							<h2 className="font-extrabold text-3xl lg:text-5xl text-[var(--primary-color)]">
								<CountUp end={15} />+
							</h2>
							<p className=" text-sm lg:text-xl font-semibold text-[var(--primary-color)] capitalize lg:mt-2 mt-1">
								experience staff
							</p>
						</div>
						<div className="w-full text-center ">
							<h2 className="font-extrabold text-3xl lg:text-5xl text-[var(--primary-color)]">
								<CountUp end={7} />+
							</h2>
							<p className=" text-sm lg:text-xl font-semibold text-[var(--primary-color)] capitalize lg:mt-2 mt-1">
								on going project
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* What We Offer */}
			<div className="w-full h-auto pt-24 pb-32 rotate-2 bg-gradient-to-b from-[var(--primary-bg-color)] mt-6">
				<div className="max-w-7xl m-auto -rotate-2 ">
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
					<div className=" flex justify-around flex-wrap gap-10 lg:gap-4 px-6 py-4">
						<CardTwo
							title="App and mobile development"
							imgPath="/resource/mobile-development.png"
							bgImagePath="/resource/services_1.png"
						/>
						<CardTwo
							title="web development"
							imgPath="/resource/coding.png"
							bgImagePath="/resource/services_2.png"
							content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Ipsum has been the industry has been the industry standard dummy when an unknown printer took a galley"
						/>
						<CardTwo
							title="custom software"
							imgPath="/resource/software.png"
							bgImagePath="/resource/services_3.png"
						/>
					</div>
				</div>
			</div>
			{/* way we operate */}
			<div className="w-full h-auto py-24 -rotate-2 bg-gradient-to-b from-[var(--primary-bg-color)]">
				<div className="max-w-7xl m-auto rotate-2">
					<div className="pb-6 px-4 ">
						<h1 className="text-2xl md:text-3xl font-bold capitalize text-[var(--primary-color)] ">
							way we <TextSadow title="operate" />
						</h1>
						<p className="text-lg font-medium py-4 leading-7">
							Lorem Ipsum is simply dummy text of the printing . <br></br> Lorem
							Ipsum Ipsum has been the industry has been the industry standard.
						</p>
					</div>
					<div className="flex justify-around flex-wrap gap-10 lg:gap-4 px-6 py-4">
						<CardTwo
							title="dedicated team"
							imgPath="/resource/software-application.png"
							bgImagePath="/resource/operate_1.png"
						/>
						<CardTwo
							title="MVP As Service"
							imgPath="/resource/group.png"
							bgImagePath="/resource/operate_2.png"
							content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Ipsum has been the industry has been the industry standard dummy when an unknown printer took a galley"
						/>
						<CardTwo
							title="project based"
							imgPath="/resource/rocket.png"
							bgImagePath="/resource/operate_3.png"
						/>
					</div>
				</div>
			</div>
			{/* our featured work */}
			<div className="w-full h-auto pt-24 md:pb-32 rotate-2 bg-gradient-to-b from-[var(--primary-bg-color)]">
				<div className="max-w-7xl m-auto -rotate-2">
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
					<div className="grid grid-cols-1 justify-items-center md:px-20 lg:grid-cols-2 gap-10 md:gap-y-20 px-4 lg:px-1">
						<FeaturedWork
							title="Art of leving meditation app "
							imgPath="/resource/featurework_1.png"
							firstIconImagePath="/resource/laravel.png"
							secondIconImagePath="/resource/apple.png"
							thirdIconImagePath="/resource/react.png"
						/>
						<FeaturedWork
							title="Art of leving meditation app "
							imgPath="/resource/featurework_2.png"
							firstIconImagePath="/resource/laravel.png"
							secondIconImagePath="/resource/apple.png"
							thirdIconImagePath="/resource/react.png"
						/>
						<FeaturedWork
							title="Art of leving meditation app "
							imgPath="/resource/featurework_3.png"
							firstIconImagePath="/resource/laravel.png"
							secondIconImagePath="/resource/apple.png"
							thirdIconImagePath="/resource/react.png"
						/>
						<FeaturedWork
							title="Art of leving meditation app "
							imgPath="/resource/featurework_4.png"
							firstIconImagePath="/resource/laravel.png"
							secondIconImagePath="/resource/apple.png"
							thirdIconImagePath="/resource/react.png"
						/>
					</div>
					<div
						style={{ "text-align": "-webkit-center" }}
						className="text-center pt-16 "
					>
						<ButtonTwo title="view case studies" />
					</div>
				</div>
			</div>
			{/* what client think */}
			<div className="w-full h-auto  py-24 md:pb-32 rotate-2 bg-gradient-to-b from-[var(--primary-bg-color)]">
				<div className="max-w-7xl m-auto -rotate-2">
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
			<div className="w-full h-auto  pt-24 pb-20 -rotate-2 bg-gradient-to-b from-[var(--primary-bg-color)]">
				<div className="max-w-7xl m-auto rotate-2">
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
			{/* our achievemens part  */}

			<div className="w-full h-auto  py-32 md:pb-32 bg-gradient-to-b from-[var(--primary-bg-color)]">
				<div className="max-w-7xl m-auto grid grid-cols-1 md:grid-cols-2 justify-items-center ">
					<div className="pb-10 px-4 grid place-content-center">
						<h1 className="text-2xl md:text-3xl font-bold capitalize text-[var(--primary-color)] ">
							our <TextSadow title="achievements" />
						</h1>
						<p className="text-lg font-medium text-left py-5 leading-7">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry.lorem Ipsum Ipsum has been the industry has been the
							industry standard.lorem Ipsum Ipsum has been the industry has been
							the industry standard
						</p>
					</div>
					<div className="flex flex-row gap-x-6 md:gap-x-11">
						<div className="flex flex-col gap-y-6 md:gap-y-10">
							<OurAchievementsCard
								ImgPath="/resource/team.png"
								title="team members"
								number="15"
							/>
							<OurAchievementsCard
								ImgPath="/resource/customer.png"
								title="happy customers"
								number="147"
							/>
						</div>

						<div className="flex flex-col gap-y-6 md:gap-y-10 md:-mt-10">
							<OurAchievementsCard
								ImgPath="/resource/idea.png"
								title="completed project"
								number="180"
							/>
							<OurAchievementsCard
								ImgPath="/resource/milestones.png"
								title="years of experience"
								number="3.5"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* our professionals part */}
			<div className="w-full h-auto py-24 md:pb-32 -rotate-1 bg-gradient-to-b from-[var(--primary-bg-color)]">
				<div className="max-w-7xl m-auto rotate-1">
					<div className="pb-10 px-4">
						<h1 className="text-2xl md:text-3xl font-bold capitalize text-[var(--primary-color)] ">
							our highly <TextSadow title="professionals" />
						</h1>
						<p className="text-lg font-medium text-left py-4 leading-7">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry Ipsum has. <br></br> Lorem Ipsum Ipsum has been the
							industry has been the industry standard.
						</p>
					</div>
					<div className="flex justify-around flex-wrap gap-8 lg:gap-4 ">
						<Member
							name="md elias khan"
							position="founder & CEO"
							// socialIconPosition="left"
							imgPath="/resource/profesonal_1.png"
						/>
						<Member
							name="abdullah al mamun"
							position="co-founder"
							// socialIconPosition="right"
							imgPath="/resource/profesonal_2.png"
						/>
						<Member
							name="anthony probal gomez"
							position="senior software engineer"
							//socialIconPosition="right"
							imgPath="/resource/profesonal_3.png"
						/>
						<Member
							name="rafiqul islam khan"
							position="software engineer"
							//socialIconPosition="right"
							imgPath="/resource/profesonal_4.png"
						/>
					</div>
				</div>
			</div>
			{/* How dose we work */}
			<div className="w-full h-auto py-24 md:pb-32 rotate-2 bg-gradient-to-b from-[var(--primary-bg-color)]">
				<div className="max-w-7xl -rotate-2 m-auto">
					<div className="pb-12 px-4 ">
						<h1 className="text-2xl md:text-3xl font-bold capitalize text-[var(--primary-color)] ">
							how does <TextSadow title="we work" />
						</h1>
					</div>
					<div className="flex justify-around flex-wrap items-start px-4 py-16 gap-4">
						<div className="text-center flex flex-col gap-6">
							<OurWork ImgPath="/resource/analysis.png" />
							<h1 className="text-[22px] font-bold text-[var(--primary-color)] capitalize">
								analysis
							</h1>
						</div>

						<div className="relative mt-9">
							<hr className=" w-28 h-5 mr-2 border-t-0 border-dashed border-b-[2px] border-[#FB859F] rotate-6"></hr>
							<IoIosArrowForward className="absolute right-0 top-[12px] h-auto w-6 text-slate-500" />
						</div>
						<div className="text-center flex flex-col gap-6">
							<OurWork ImgPath="/resource/web-design.png" />
							<h1 className="text-[22px] font-bold text-[var(--primary-color)] capitalize">
								design
							</h1>
						</div>

						<div className="relative mt-9">
							<hr className=" w-28 h-5 mr-2 border-t-0 border-dashed border-b-[2px] border-[#FB859F] -rotate-6"></hr>
							<IoIosArrowForward className="absolute right-[-2px] top-[2px] h-auto w-6 text-slate-500" />
						</div>
						<div className="text-center flex flex-col gap-6">
							<div className="text-center flex flex-col gap-6">
								<OurWork ImgPath="/resource/programming.png" />
								<h1 className="text-[22px] font-bold text-[var(--primary-color)] capitalize">
									implementation
								</h1>
							</div>
						</div>
						<div className="relative mt-9">
							<hr className=" w-28 h-5 mr-2 border-t-0 border-dashed border-b-[2px] border-[#FB859F] rotate-6"></hr>
							<IoIosArrowForward className="absolute right-0 top-[12px] h-auto w-6 text-slate-500" />
							{/* <Image
								className="absolute right-0 top-[17px] h-auto w-[9px] text-slate-500"
								width={500}
								height={500}
								src="/resource/rightArow.png"
								alt=""
							/> */}
						</div>
						<div className="text-center flex flex-col gap-6">
							<OurWork ImgPath="/resource/software_icon.png" />
							<h1 className="text-[22px] font-bold text-[var(--primary-color)] capitalize">
								testing
							</h1>
						</div>
						<div className="relative mt-9">
							<hr className=" w-28 h-5 mr-2 border-t-0 border-dashed border-b-[2px] border-[#FB859F] -rotate-6"></hr>
							<IoIosArrowForward className="absolute right-[-3px] top-[2px] h-auto w-6 text-slate-500" />
						</div>
						<div className="text-center flex flex-col gap-6">
							<OurWork ImgPath="/resource/evolution.png" />
							<h1 className="text-[22px] font-bold text-[var(--primary-color)] capitalize">
								evolution
							</h1>
						</div>
					</div>
				</div>
			</div>
			{/* contact us */}
			<div className="w-full h-auto py-24 md:pb-32 -rotate-2 bg-gradient-to-b from-[var(--primary-bg-color)]">
				<div className="max-w-7xl rotate-2 m-auto">
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
