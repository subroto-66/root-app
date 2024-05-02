import Card from "../../components/card";

export default function page() {
	return (
		<div className="bg-neutral-50 grid place-items-center px-8 h-screen">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
				<Card title="hello Bangladesh jfjhf jfhf jfhf fjfjhf jf" />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
}

// w-full flex flex-col md:flex-row  justify-center flex-nowrap items-center gap-8
