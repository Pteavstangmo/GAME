import React, { useEffect, useState } from "react";
import Data from "./secret.json";
import "./css/index.css";
import { ReactComponent as Toto } from "../../assets/secret/toto1.svg";

function Secret() {
	const [timer, setTimer] = useState(50);
	const [text, setText] = useState(null);

	const switchTimer = (time) => {
		if (timer === 50) {
			setText(Data[1].text);
		} else if (timer === 40) {
			setText(Data[2].text);
		} else if (timer === 30) {
			setText(Data[3].text);
		} else if (timer === 20) {
			setText(Data[4].text);
		} else if (timer === 10) {
			setText(Data[5].text);
		} else if (timer === -20) {
			setText(Data[6].text);
		}
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setTimer((prevState) => prevState - 1);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		switchTimer(timer);
	}, [timer]);

	//console.log(Data[1].text);

	return (
		<>
			<div class="main-secret">
				<div class="secret-section">
					<Toto />
				</div>
				<div class="secret-section">
					<h1>โตโต้</h1>
					{text}
				</div>
			</div>
		</>
	);
}

export default Secret;
