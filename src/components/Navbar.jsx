"use Client";
import Link from "next/link";
import React, { useId, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = ({ navMenu }) => {
	const [open, setOpen] = useState(false);
	return (
		<header className="sticky flex justify-center z-10 top-0 items-center p-3 bg-blue-100">
			<div className="flex-grow">
				<h1 className="cursor-pinter">
					<Link href={"/"}>Ac manager</Link>
				</h1>
			</div>
			<nav>
				<ul
					className={`sm:flex z-20 transition-all duration-500 ${
						open
							? "block bg-blue-100 opacity-100 absolute top-10 sm:top-[10px] right-1"
							: "hidden opacity-0 sm:opacity-100"
					} justify-center items-center`}
				>
					{navMenu &&
						navMenu.map((item) => (
							<Link href={item.path} key={useId()}>
								<li className={`w-36 hover:bg-gray-700 hover:text-slate-50 text-center sm:w-32 ${open ? "h-8 text-center" : ""}`}>
									{item.menu}
								</li>
							</Link>
						))}
				</ul>
				<div className="sm:hidden">
					{open ? (
						<AiOutlineClose onClick={() => setOpen(!open)} />
					) : (
						<AiOutlineMenu onClick={() => setOpen(!open)} />
					)}
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
