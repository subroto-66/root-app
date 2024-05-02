import CardTwo from "../../components/cardtwo";

export default function page() {
	return (
		<div className="bg-red-50 grid place-items-center px-8 min-h-screen">
			<div className="flex flex-col md:flex-row flax-wrap w-full justify-center items-center gap-4">
				<CardTwo />
				<CardTwo title="Web development" />
				<CardTwo title="Custom Software" />
			</div>
		</div>
	);
}
