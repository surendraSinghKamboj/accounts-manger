import Navbar from "@/components/Navbar";
import React from "react";

const contactus = () => {
	const navMenu = [
		{ path: "/", menu: "Hompage" },
		{ path: "/aboutus", menu: "About us" },
		{ path: "/contactus", menu: "Contact us" },
		{ path: "/Login", menu: "Login Now" },
	];
	return (
		<>
			<Navbar navMenu={navMenu} />
		</>
	);
};

export default contactus;
