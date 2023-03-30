import Navbar from "@/components/Navbar";
import React, { useId } from "react";

const contactus = () => {
	const navMenu = [
		{ path: "/", menu: "Hompage" },
		{ path: "/aboutus", menu: "About us" },
		{ path: "/contactus", menu: "Contact us" },
		{ path: "/Login", menu: "Login Now" },
	];

	const contactData = [
		"Welcome to our Accounts Manager web app! We're excited to help you streamline your sales and purchase processes. If you have any questions, concerns, or feedback, please don't hesitate to reach out to us. Our team of experienced account managers is ready to assist you with any issues you may encounter.",
		"To get in touch, you can use the contact form below or email us at surendra.singh.kamboj@hotmail.com. We will get back to you as soon as possible.",
		"Thank you for choosing our Accounts Manager web app. We appreciate your business and look forward to helping you manage your sales and purchase with ease!",
	];

	return (
		<>
			<Navbar navMenu={navMenu} />

			<section className="flex justify-center m-auto items-center flex-col sm:w-10/12 w-[94%]">
				<h3>Contact Us</h3>
				{contactData.map((item) => (
					<div key={useId()}>
						<p>{item}</p>
					</div>
				))}
			</section>
		</>
	);
};

export default contactus;
