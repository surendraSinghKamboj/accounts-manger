import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { CiSettings } from "react-icons/ci";

const Notfound = () => {
	const navMenu = [
		{ path: "/", menu: "Hompage" },
		{ path: "/aboutus", menu: "About us" },
		{ path: "/contactus", menu: "Contact us" },
	];
	return (
		<>
			<Head>
				<title>Error 404 || Account Manager</title>
			</Head>
			<Navbar navMenu={navMenu} />

			<main className="flex min-h-[90vh] flex-col justify-center items-center">
				<div className="flex">
					<CiSettings className="text-8xl mr-[-32px] text-red-700 error" />
					<CiSettings className="text-8xl rotate-[20deg] error error2" />
				</div>
				<h3 className="text-3xl">Error 404</h3>
				<p>Page not found</p>
				<Link href={"/"}>
					<button className="border-2 border-green-300 rounded-lg px-2 py-1 mt-2">
						Homepage
					</button>
				</Link>
			</main>

			<Footer />
		</>
	);
};

export default Notfound;
