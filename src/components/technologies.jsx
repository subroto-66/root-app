"use client";
import Image from "next/image";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
function technologies() {
	return (
		<Tabs className="grid py-6 px-2 md:p-4 grid-flow-row lg:grid-cols-4 w-full">
			<TabList className="flex flex-col">
				<Tab
					id="controlled-tabs"
					selectedTabClassName="bg-white"
					className="border-0 pl-10  py-4 text-base  lg:text-xl rounded-full font-semibold cursor-pointer"
				>
					All Technologies
				</Tab>
				<Tab className="border-0 pl-10 py-4  text-base lg:text-xl rounded-full font-semibold cursor-pointer">
					Frontend
				</Tab>
				<Tab className="border-0 pl-10 py-4  text-base lg:text-xl rounded-full font-semibold cursor-pointer">
					Backend
				</Tab>
				<Tab className="border-0 pl-10 py-4  text-base lg:text-xl rounded-full font-semibold cursor-pointer">
					Mobile Application
				</Tab>
				<Tab className="border-0 pl-10 py-4  text-base lg:text-xl rounded-full font-semibold cursor-pointer">
					Database
				</Tab>
			</TabList>
			<div className="py-7 lg:col-span-3 md:px-10 lg:px-20">
				<TabPanel>
					<ul className="flex flex-wrap gap-6 sm:gap-16 justify-center items-center">
						<li className="bg-red-50 rounded-full p-4 sm:p-3 cursor-pointer hover:bg-red-100 hover:scale-110 transition-all ease-in-out duration-500">
							<img
								className="w-8 lg:w-11 h-8 lg:h-11"
								width="100"
								hight="100"
								src="https://static-00.iconduck.com/assets.00/laravel-icon-497x512-uwybstke.png"
								alt=""
							/>
						</li>
						<li className="bg-red-50 rounded-full p-4 sm:p-3 cursor-pointer hover:bg-red-100 hover:scale-110 transition-all ease-in-out duration-500">
							<img
								className="w-8 lg:w-11 h-8 lg:h-11"
								width="100"
								height="100"
								src="https://static-00.iconduck.com/assets.00/swift-icon-2048x1835-n6v4a22o.png"
								alt=""
							/>
						</li>

						<li className="bg-red-50 rounded-full p-4 sm:p-3 cursor-pointer hover:bg-red-100 hover:scale-110 transition-all ease-in-out duration-500">
							<img
								className="w-8 lg:w-11 h-8 lg:h-11"
								width="100"
								height="100"
								src="https://www.svgrepo.com/show/452092/react.svg"
								alt=""
							/>
						</li>
						<li className="bg-red-50 rounded-full p-4 sm:p-3 cursor-pointer hover:bg-red-100 hover:scale-110 transition-all ease-in-out duration-500">
							<img
								className="w-8 lg:w-11 h-8 lg:h-11"
								width="100"
								hight="100"
								src="https://vuejs.org/images/logo.png"
								alt=""
							/>
						</li>

						<li className="bg-red-50 rounded-full p-4 sm:p-3 cursor-pointer hover:bg-red-100 hover:scale-110 transition-all ease-in-out duration-500">
							<img
								className="w-8 lg:w-11 h-8 lg:h-11"
								width="100"
								hight="100"
								src="https://static-00.iconduck.com/assets.00/laravel-icon-497x512-uwybstke.png"
								alt=""
							/>
						</li>
						<li className="bg-red-50 rounded-full p-4 sm:p-3 cursor-pointer hover:bg-red-100 hover:scale-110 transition-all ease-in-out duration-500">
							<img
								className="w-8 lg:w-11 h-8 lg:h-11"
								width="100"
								height="100"
								src="https://static-00.iconduck.com/assets.00/swift-icon-2048x1835-n6v4a22o.png"
								alt=""
							/>
						</li>

						<li className="bg-red-50 rounded-full p-4 sm:p-3 cursor-pointer hover:bg-red-100 hover:scale-110 transition-all ease-in-out duration-500">
							<img
								className="w-8 lg:w-11 h-8 lg:h-11"
								width="100"
								height="100"
								src="https://www.svgrepo.com/show/452092/react.svg"
								alt=""
							/>
						</li>
						<li className="bg-red-50 rounded-full p-4 sm:p-3 cursor-pointer hover:bg-red-100 hover:scale-110 transition-all ease-in-out duration-500">
							<img
								className="w-8 lg:w-11 h-8 lg:h-11"
								width="100"
								hight="100"
								src="https://vuejs.org/images/logo.png"
								alt=""
							/>
						</li>
						<li className="bg-red-50 rounded-full p-4 sm:p-3 cursor-pointer hover:bg-red-100 hover:scale-110 transition-all ease-in-out duration-500">
							<img
								className="w-8 lg:w-11 h-8 lg:h-11"
								width="100"
								hight="100"
								src="https://static-00.iconduck.com/assets.00/laravel-icon-497x512-uwybstke.png"
								alt=""
							/>
						</li>
						<li className="bg-red-50 rounded-full p-4 sm:p-3 cursor-pointer hover:bg-red-100 hover:scale-110 transition-all ease-in-out duration-500">
							<img
								className="w-8 lg:w-11 h-8 lg:h-11"
								width="100"
								height="100"
								src="https://static-00.iconduck.com/assets.00/swift-icon-2048x1835-n6v4a22o.png"
								alt=""
							/>
						</li>

						<li className="bg-red-50 rounded-full p-4 sm:p-3 cursor-pointer hover:bg-red-100 hover:scale-110 transition-all ease-in-out duration-500">
							<img
								className="w-8 lg:w-11 h-8 lg:h-11"
								width="100"
								height="100"
								src="https://www.svgrepo.com/show/452092/react.svg"
								alt=""
							/>
						</li>
					</ul>
				</TabPanel>
				<TabPanel>
					<ul className="flex gap-6 sm:gap-16 justify-center items-center">
						<li className="bg-red-50 rounded-full p-4 sm:p-3 cursor-pointer hover:bg-red-100 hover:scale-110 transition-all ease-in-out duration-500">
							<img
								className="w-8 lg:w-11 h-8 lg:h-11"
								width="100"
								hight="100"
								src="https://vuejs.org/images/logo.png"
								alt=""
							/>
						</li>
						<li className="bg-red-50 rounded-full p-4 sm:p-3 cursor-pointer hover:bg-red-100 hover:scale-110 transition-all ease-in-out duration-500">
							<img
								className="w-8 lg:w-11 h-8 lg:h-11"
								width="100"
								height="100"
								src="https://static-00.iconduck.com/assets.00/swift-icon-2048x1835-n6v4a22o.png"
								alt=""
							/>
						</li>
						<li className="bg-red-50 rounded-full p-4 sm:p-3 cursor-pointer hover:bg-red-100 hover:scale-110 transition-all ease-in-out duration-500">
							<img
								className="w-8 lg:w-11 h-8 lg:h-11"
								width="100"
								height="100"
								src="https://www.svgrepo.com/show/452092/react.svg"
								alt=""
							/>
						</li>
					</ul>
				</TabPanel>
				<TabPanel>
					<ul className="flex flex-wrap gap-6 sm:gap-16 justify-center items-center">
						<li className="bg-red-50 rounded-full p-4 sm:p-3 cursor-pointer hover:bg-red-100 hover:scale-110 transition-all ease-in-out duration-500">
							<img
								className="w-8 lg:w-11 h-8 lg:h-11"
								width="100"
								hight="100"
								src="https://static-00.iconduck.com/assets.00/laravel-icon-497x512-uwybstke.png"
								alt=""
							/>
						</li>
						<li className="bg-red-50 rounded-full p-4 sm:p-3 cursor-pointer hover:bg-red-100 hover:scale-110 transition-all ease-in-out duration-500">
							<img
								className="w-8 lg:w-11 h-8 lg:h-11"
								width="100"
								height="100"
								src="https://static-00.iconduck.com/assets.00/swift-icon-2048x1835-n6v4a22o.png"
								alt=""
							/>
						</li>

						<li className="bg-red-50 rounded-full p-4 sm:p-3 cursor-pointer hover:bg-red-100 hover:scale-110 transition-all ease-in-out duration-500">
							<img
								className="w-8 lg:w-11 h-8 lg:h-11"
								width="100"
								height="100"
								src="https://www.svgrepo.com/show/452092/react.svg"
								alt=""
							/>
						</li>
						<li className="bg-red-50 rounded-full p-4 sm:p-3 cursor-pointer hover:bg-red-100 hover:scale-110 transition-all ease-in-out duration-500">
							<img
								className="w-8 lg:w-11 h-8 lg:h-11"
								width="100"
								hight="100"
								src="https://vuejs.org/images/logo.png"
								alt=""
							/>
						</li>

						<li className="bg-red-50 rounded-full p-4 sm:p-3 cursor-pointer hover:bg-red-100 hover:scale-110 transition-all ease-in-out duration-500">
							<img
								className="w-8 lg:w-11 h-8 lg:h-11"
								width="100"
								hight="100"
								src="https://static-00.iconduck.com/assets.00/laravel-icon-497x512-uwybstke.png"
								alt=""
							/>
						</li>
						<li className="bg-red-50 rounded-full p-4 sm:p-3 cursor-pointer hover:bg-red-100 hover:scale-110 transition-all ease-in-out duration-500">
							<img
								className="w-8 lg:w-11 h-8 lg:h-11"
								width="100"
								height="100"
								src="https://static-00.iconduck.com/assets.00/swift-icon-2048x1835-n6v4a22o.png"
								alt=""
							/>
						</li>

						<li className="bg-red-50 rounded-full p-4 sm:p-3 cursor-pointer hover:bg-red-100 hover:scale-110 transition-all ease-in-out duration-500">
							<img
								className="w-8 lg:w-11 h-8 lg:h-11"
								width="100"
								height="100"
								src="https://www.svgrepo.com/show/452092/react.svg"
								alt=""
							/>
						</li>
						<li className="bg-red-50 rounded-full p-4 sm:p-3 cursor-pointer hover:bg-red-100 hover:scale-110 transition-all ease-in-out duration-500">
							<img
								className="w-8 lg:w-11 h-8 lg:h-11"
								width="100"
								hight="100"
								src="https://vuejs.org/images/logo.png"
								alt=""
							/>
						</li>
						<li className="bg-red-50 rounded-full p-4 sm:p-3 cursor-pointer hover:bg-red-100 hover:scale-110 transition-all ease-in-out duration-500">
							<img
								className="w-8 lg:w-11 h-8 lg:h-11"
								width="100"
								hight="100"
								src="https://static-00.iconduck.com/assets.00/laravel-icon-497x512-uwybstke.png"
								alt=""
							/>
						</li>
						<li className="bg-red-50 rounded-full p-4 sm:p-3 cursor-pointer hover:bg-red-100 hover:scale-110 transition-all ease-in-out duration-500">
							<img
								className="w-8 lg:w-11 h-8 lg:h-11"
								width="100"
								height="100"
								src="https://static-00.iconduck.com/assets.00/swift-icon-2048x1835-n6v4a22o.png"
								alt=""
							/>
						</li>

						<li className="bg-red-50 rounded-full p-4 sm:p-3 cursor-pointer hover:bg-red-100 hover:scale-110 transition-all ease-in-out duration-500">
							<img
								className="w-8 lg:w-11 h-8 lg:h-11"
								width="100"
								height="100"
								src="https://www.svgrepo.com/show/452092/react.svg"
								alt=""
							/>
						</li>
					</ul>
				</TabPanel>
				<TabPanel>
					<ul className="flex flex-wrap gap-6 sm:gap-16 justify-center items-center">
						<li className="bg-red-50 rounded-full p-4 sm:p-3 cursor-pointer hover:bg-red-100 hover:scale-110 transition-all ease-in-out duration-500">
							<img
								className="w-8 lg:w-11 h-8 lg:h-11"
								width="100"
								hight="100"
								src="https://static-00.iconduck.com/assets.00/laravel-icon-497x512-uwybstke.png"
								alt=""
							/>
						</li>
						<li className="bg-red-50 rounded-full p-4 sm:p-3 cursor-pointer hover:bg-red-100 hover:scale-110 transition-all ease-in-out duration-500">
							<img
								className="w-8 lg:w-11 h-8 lg:h-11"
								width="100"
								height="100"
								src="https://static-00.iconduck.com/assets.00/swift-icon-2048x1835-n6v4a22o.png"
								alt=""
							/>
						</li>

						<li className="bg-red-50 rounded-full p-4 sm:p-3 cursor-pointer hover:bg-red-100 hover:scale-110 transition-all ease-in-out duration-500">
							<img
								className="w-8 lg:w-11 h-8 lg:h-11"
								width="100"
								height="100"
								src="https://www.svgrepo.com/show/452092/react.svg"
								alt=""
							/>
						</li>
						<li className="bg-red-50 rounded-full p-4 sm:p-3 cursor-pointer hover:bg-red-100 hover:scale-110 transition-all ease-in-out duration-500">
							<img
								className="w-8 lg:w-11 h-8 lg:h-11"
								width="100"
								hight="100"
								src="https://vuejs.org/images/logo.png"
								alt=""
							/>
						</li>

						<li className="bg-red-50 rounded-full p-4 sm:p-3 cursor-pointer hover:bg-red-100 hover:scale-110 transition-all ease-in-out duration-500">
							<img
								className="w-8 lg:w-11 h-8 lg:h-11"
								width="100"
								height="100"
								src="https://www.svgrepo.com/show/452092/react.svg"
								alt=""
							/>
						</li>
						<li className="bg-red-50 rounded-full p-4 sm:p-3 cursor-pointer hover:bg-red-100 hover:scale-110 transition-all ease-in-out duration-500">
							<img
								className="w-8 lg:w-11 h-8 lg:h-11"
								width="100"
								hight="100"
								src="https://vuejs.org/images/logo.png"
								alt=""
							/>
						</li>
						<li className="bg-red-50 rounded-full p-4 sm:p-3 cursor-pointer hover:bg-red-100 hover:scale-110 transition-all ease-in-out duration-500">
							<img
								className="w-8 lg:w-11 h-8 lg:h-11"
								width="100"
								hight="100"
								src="https://static-00.iconduck.com/assets.00/laravel-icon-497x512-uwybstke.png"
								alt=""
							/>
						</li>
					</ul>
				</TabPanel>
				<TabPanel>
					<ul className="flex flex-wrap gap-6 sm:gap-16 justify-center items-center">
						<li className="bg-red-50 rounded-full p-4 sm:p-3 cursor-pointer hover:bg-red-100 hover:scale-110 transition-all ease-in-out duration-500">
							<img
								className="w-8 lg:w-11 h-8 lg:h-11"
								width="100"
								height="100"
								src="https://www.svgrepo.com/show/452092/react.svg"
								alt=""
							/>
							<Image alt="" />
						</li>
						<li className="bg-red-50 rounded-full p-4 sm:p-3 cursor-pointer hover:bg-red-100 hover:scale-110 transition-all ease-in-out duration-500">
							<img
								className="w-8 lg:w-11 h-8 lg:h-11"
								width="100"
								hight="100"
								src="https://vuejs.org/images/logo.png"
								alt=""
							/>
						</li>

						<li className="bg-red-50 rounded-full p-4 sm:p-3 cursor-pointer hover:bg-red-100 hover:scale-110 transition-all ease-in-out duration-500">
							<img
								className="w-8 lg:w-11 h-8 lg:h-11"
								width="100"
								hight="100"
								src="https://static-00.iconduck.com/assets.00/laravel-icon-497x512-uwybstke.png"
								alt=""
							/>
						</li>
						<li className="bg-red-50 rounded-full p-4 sm:p-3 cursor-pointer hover:bg-red-100 hover:scale-110 transition-all ease-in-out duration-500">
							<img
								className="w-8 lg:w-11 h-8 lg:h-11"
								width="100"
								height="100"
								src="https://static-00.iconduck.com/assets.00/swift-icon-2048x1835-n6v4a22o.png"
								alt=""
							/>
						</li>
					</ul>
				</TabPanel>
			</div>
		</Tabs>
	);
}

export default technologies;
