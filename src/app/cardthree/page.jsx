import TextSadow from "@/components/TextSadow";
import CardThree from "@/components/cardthree";
export default function page() {
	return (
		<div className="bg-red-50 grid place-items-center px-8 min-h-screen">
			<div>
				<h1 className="text-5xl font-medium capitalize text-[#F92251] ">
					what our <TextSadow title="clients think" />
				</h1>
			</div>
			<div>
				<h1 className="text-5xl font-medium capitalize text-[#F92251] ">
					we use <TextSadow title="technologies" /> in our project
				</h1>
			</div>
			<div>
				<h1 className="text-5xl font-medium capitalize text-[#F92251] ">
					our <TextSadow title="achievements" />
				</h1>
			</div>
			<div className="grid gap-4 grid-cols-3">
				<CardThree />
				<CardThree />
				<CardThree />
			</div>
		</div>
	);
}
