import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Input from "@/components/Input";
import Link from "next/link";

const Signup = () => {
	const navMenu = [
		{ path: "/", menu: "Hompage" },
		{ path: "/aboutus", menu: "About us" },
		{ path: "/contactus", menu: "Contact us" },
		{ path: "/Login", menu: "Login Now" },
	];

	const [data, setData] = useState({
		firatName: "",
		lastName: "",
		email: "",
		phone: "",
		password: "",
	});

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<Navbar navMenu={navMenu} />
			<section className="flex justify-center flex-col items-center  min-h-[90vh]">
				<form
					onSubmit={handleSubmit}
					className="relative w-full sm:w-9/12 py-9 flex justify-center items-center"
				>
					<div className="w-[80%] sm:w-[60%] sm:mt-3 flex justify-center items-center flex-col">
						<Input
							onChange={handleChange}
							name="firstName"
							label="First name"
							type="text"
						/>
						<Input
							onChange={handleChange}
							name="lastName"
							label="Last name"
							type="text"
						/>
						<Input
							onChange={handleChange}
							name="email"
							label="E-mail"
							type="email"
						/>
						<Input
							onChange={handleChange}
							name="phone"
							label="Phone"
							type="text"
						/>
						<Input
							onChange={handleChange}
							name="password"
							label="Password"
							type="password"
						/>
					</div>
					<button className="absolute bottom-0 left-[10%] sm:left-[20%] border-2 border-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-500 px-2 rounded-full">
						Submit
					</button>
				</form>
				<p>
					Already Registerd{" "}
					<Link href={"/Login"}>
						{" "}
						<span className="text-blue-700">Login now</span>{" "}
					</Link>
				</p>
			</section>
		</>
	);
};

export default Signup;
