import Navbar from "@/components/Navbar";
import Head from "next/head";
import Link from "next/link";
import { GiWhiteBook } from "react-icons/gi";

export default function Home() {
	const navMenu = [
		{ path: "/", menu: "Hompage" },
		{ path: "/aboutus", menu: "About us" },
		{ path: "/contactus", menu: "Contact us" },
		{ path: "/Login", menu: "Login Now" },
	];

	return (
		<>
			<Head>
				<title>Account Manager || Homepage</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar navMenu={navMenu} />
			<section className="min-h-[90vh] flex flex-col">
				<div className="flex flex-col sm:flex-row">
					<div className="h-[50vh] sm:h-[90vh] flex items-center justify-center w-[100%] sm:w-[50%]">
						<GiWhiteBook className="text-[30rem] text-blue-400 pop transition-all duration-500 hover:drop-shadow-2xl" />
					</div>
					<div className="flex flex-col h-[50vh] sm:h-[90vh] items-center justify-center w-[100%] sm:w-[50%]">
						<h3>Now manage your transactions online simply.</h3>
						<Link href={"/Signup"}>
							<button className="px-2 py-1 border-2 mt-2 rounded-3xl hover:bg-blue-400 border-blue-400 transition-all duration-500 hover:text-white">
								Get Started
							</button>
						</Link>
					</div>
				</div>
			</section>

		</>
	);
}
