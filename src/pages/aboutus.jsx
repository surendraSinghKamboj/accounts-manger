import Navbar from "@/components/Navbar";
import React, { useId } from "react";

const aboutus = () => {
	const navMenu = [
		{ path: "/", menu: "Hompage" },
		{ path: "/aboutus", menu: "About us" },
		{ path: "/contactus", menu: "Contact us" },
		{ path: "/Login", menu: "Login Now" },
	];

	const aboutData = [
		"Welcome to our Accounts Manager web app! We are excited to provide you with a comprehensive solution to manage all of your sales and purchases in one place.",
		"Our app is designed with ease of use in mind, so whether you are a seasoned accounting professional or new to managing your own finances, you will find our platform intuitive and straightforward.",
		"With our app, you can easily track your sales and purchases, generate invoices and receipts, and manage your accounts payable and accounts receivable. You can also generate financial reports to help you make informed business decisions.",
		"We understand the importance of security when it comes to your financial information, which is why our app utilizes the latest encryption technologies to ensure your data is always safe and secure.",
		"Thank you for choosing our Accounts Manager web app. We are dedicated to providing you with the best possible experience, and we are always here to help if you have any questions or feedback.",
	];

	return (
		<>
			<Navbar navMenu={navMenu} />
			<section className="flex justify-center m-auto items-center flex-col sm:w-10/12 w-[94%]">
				<h3>About Us</h3>
				{aboutData.map((item) => (
					<div key={useId()}>
						<p>{item}</p>
					</div>
				))}
			</section>
		</>
	);
};

export default aboutus;
