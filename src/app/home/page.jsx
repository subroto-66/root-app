import TextSadow from "@/components/TextSadow";
import Card from "@/components/card";
import CardThree from "@/components/cardthree";
import CardTwo from "@/components/cardtwo";
function page() {
	return (
		<>
			<div className=" grid place-items-center px-8 min-h-screen">
				<div className="p-16">
					<h1 className="text-2xl md:text-5xl font-medium capitalize text-[#F92251] ">
						what our <TextSadow title="clients think" />
					</h1>
				</div>

				<div className="flex flex-col md:flex-row flax-wrap w-full justify-center items-center gap-4 mb-20">
					<CardTwo />
					<CardTwo title="Web development" />
					<CardTwo title="Custom Software" />
				</div>

				<div className="p-16">
					<h1 className=" text-2xl md:text-5xl font-medium capitalize text-[#F92251] ">
						what our <TextSadow title="clients think" />
					</h1>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
					<Card title="hello Bangladesh jfjhf jfhf jfhf fjfjhf jf" />
					<Card />
					<Card />
					<Card />
				</div>

				<div className="p-16">
					<h1 className="text-2xl md:text-5xl font-medium capitalize text-[#F92251] ">
						what our <TextSadow title="clients think" />
					</h1>
				</div>

				{/* <div className="w-full lg:w-auto bg-gradient-to-b from-red-100 origin-center -rotate-2"> */}

				<div className="grid gap-12  grid-flow-row mb-20 place-content-center p-16 lg:grid-cols-2 xl:grid-cols-3 lg:text-center">
					<CardThree />
					<CardThree />
					<CardThree />
				</div>
			</div>
		</>
	);
}

export default page;
