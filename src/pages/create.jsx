import Clients from "@/components/Clients";
import Sellers from "@/components/Sellers";
import React, { useState } from "react";

const create = () => {
	const [client, setClient] = useState(true);

	return (
		<>
			<div className="flex justify-around items-center w-90 sm:w-3/5 m-auto">
				<button onClick={() => setClient(!client)}>Client</button>
				<button onClick={() => setClient(!client)}>Seller</button>
			</div>
			<div className="h-1 m-auto w-[90] sm:w-3/5 relative">
				<div
					className={`w-[50%] transition-all duration-300 absolute h-1 top-0 ${
						client ? "left-0" : "left-1/2"
					} bg-slate-800`}
				></div>
			</div>
			<div className="min-h-[90vh]">
				{client ? <Clients></Clients> : <Sellers></Sellers>}
			</div>
		</>
	);
};

export default create;
