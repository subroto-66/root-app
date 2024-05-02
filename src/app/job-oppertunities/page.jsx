import ButtonOne from "@/components/button/btnOne";
import ButtonTwo from "@/components/button/btnTwo";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import JobOppertunites from "@/components/jobOpportunities";
import Member from "@/components/member";
import OurAchievementsCard from "@/components/ourAchievementsCard";
import Technologies from "@/components/technologies";
import ImageBackground from "../../../public/assets/images/office.jpg";

function page() {
	return (
		<div className=" place-content-center max-w-7xl pt-10 m-auto">
			<div
				className=" w-full max-w-7xl grid grid-flow-row gap-6 rounded-2xl  p-6 lg:px-10 lg:pb-11"
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
			<br />
			<ButtonOne />
			<br />
			<ButtonTwo />
			<br />
			<br />
			<br />

			<Technologies />
			<br />
			<br />
			<div className="flex justify-around flex-wrap gap-8">
				<Member
					name="md elias khan"
					position="founder & CEO"
					socialIconPosition="left"
					imgPath="https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg"
				/>
				<Member
					name="abdullah al mamun"
					position="co-founder"
					socialIconPosition="right"
					imgPath="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
				/>
				<Member
					name="abdullah al mamun"
					position="co-founder"
					socialIconPosition="right"
					imgPath="https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg"
				/>
				<Member
					name="abdullah al mamun"
					position="co-founder"
					socialIconPosition="right"
					imgPath="https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg"
				/>
			</div>
			<br />
			<br />
			<div className="flex justify-around flex-wrap gap-8">
				<OurAchievementsCard
					ImgPath="/assets/users.png"
					number="3.5"
					title="years of experience"
				/>
				<OurAchievementsCard
					ImgPath="/assets/users.png"
					number="147"
					title="happy customers"
				/>
			</div>
			<br />
			<br />
			<br />
			<Header />
			<br />
			<br />
			<br />
			<Footer />
			<br />
			<br />
			<br />
			<Contact />
			<br />
			<br />
			<br />
			<div class="relative mx-10">
				<div class=" h-0 w-0 border-red-500 border-b-[100px] border-l-[100px] border-l-transparent datTest"></div>
			</div>
			<br />
			<br />
			<br />
			<br />
		</div>
	);
}

export default page;
