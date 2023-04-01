import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className="flex w-full bg-blue-100 sm:flex px-3 justify-center">
			<div className="w-full sm:w-36 flex-grow">
				<h3>Accounts manager</h3>
			</div>
			<ul className="flex-col">
				<Link href={"/"}>
					<li>Homepage</li>
				</Link>
				<Link href={"/aboutus"}>
					<li>About Us</li>
				</Link>
				<Link href={"/contactus"}>
					<li>Contact Us</li>
				</Link>
			</ul>
		</footer>
	);
};

export default Footer;
