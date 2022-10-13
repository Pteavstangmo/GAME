import React, { useEffect, useState } from "react";
import "./css/index.css";

function Timer() {
	const [timer, setTimer] = useState(120);

	const timealert = {
		color: "red",
		fontSize: "30px",
		fontWeight: "800",
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setTimer((prevState) => prevState - 1);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	const endtimer = new Promise(function (resolve, reject) {
		if (timer <= 0) {
			setTimeout(() => {
				window.location.reload();
			}, 900);
		}
	});

	return (
		<h2 class="Timer" style={timer <= 30 ? timealert : null}>
			Timer left : {timer}
		</h2>
	);
}

export default Timer;
