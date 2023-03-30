import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Input from "@/components/Input";

const Login = () => {
	const navMenu = [
		{ path: "/", menu: "Hompage" },
		{ path: "/aboutus", menu: "About us" },
		{ path: "/contactus", menu: "Contact us" },
		{ path: "/Login", menu: "Login Now" },
	];

	const [data, setData] = useState({
		email: "",
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
			<section className="flex justify-center">
				<form
					onSubmit={handleSubmit}
					className="relative w-full sm:w-9/12 py-9 flex justify-center items-center"
				>
					<div className="w-[80%] sm:w-[60%] sm:mt-3 flex justify-center items-center flex-col">
						<Input
							onChange={handleChange}
							name="email"
							label="E-mail"
							type="email"
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
			</section>
		</>
	);
};

export default Login;
