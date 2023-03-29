import React, { useId, useState } from "react";

const Input = ({ type, label, name, onChange }) => {
	const [isInputFocused, setIsInputFocused] = useState(false);

	const handleInputFocus = () => {
		setIsInputFocused(true);
	};

	const handleInputBlur = (e) => {
		if (!e.target.value) {
			setIsInputFocused(false);
		}
	};

	return (
		<div className="relative flex justify-center w-full mt-6" key={useId()}>
			<span
				className={`absolute px-2 text-sm mt-[4px] transition-all duration-500 left-2 label ${
					isInputFocused
						? "translate-y-[-20px] px-2 border-l-2 border-r-2 border-r-green-500 rounded-full border-l-green-500 bg-white "
						: "translate-y-0"
				}`}
			>
				{label}
			</span>
			<input
				type={type}
				className="w-full h-8 px-1 py-1 focus:outline-green-500 shadow-md rounded-full focus:rounded-full text-xl border-2 border-blue-400"
				onFocus={handleInputFocus}
				onBlur={handleInputBlur}
				name={name}
				onChange={onChange}
			/>
		</div>
	);
};

export default Input;
