import React, { useState, useEffect } from "react";
import "../page/css/index.css";

import { ReactComponent as Page1 } from "../../../../assets/tutorial/1.svg";
import { ReactComponent as Page2 } from "../../../../assets/tutorial/2.svg";
import { ReactComponent as Page3 } from "../../../../assets/tutorial/3.svg";
import { ReactComponent as Page4 } from "../../../../assets/tutorial/4.svg";
import { ReactComponent as Page5 } from "../../../../assets/tutorial/5.svg";

function Page({ number }) {
	const page = number;

	useEffect(() => {}, [page]);

	//400*600

	return (
		<>
			<div className="main-parent">
				{page === 1 && <Page1 width={400} />}
				{page === 2 && <Page2 width={400} />}
				{page === 3 && <Page3 width={400} />}
				{page === 4 && <Page4 width={400} />}
				{page === 5 && <Page5 width={400} />}
			</div>
		</>
	);
}

export default Page;
