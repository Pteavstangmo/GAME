import React, { useEffect, useState, useContext } from "react";
import Secret from "../../../Secret";
import { UserContext } from "../..";
import "./css/index.css";

function OperationField({ setUserAnswer }) {
	const { ansequation } = useContext(UserContext);
	const [value, setValue] = useState("");
	const [secret1, setSecret1] = useState(false);

	useEffect(() => {
		try {
			var fieldArray = value.split("");
		} catch (err) {
			fieldArray = [];
		}

		secretActive();
	}, [value]);

	const onclickHandler = async () => {
		setUserAnswer(value);
	};

	const clearHandler = () => {
		setValue("");
	};

	const numpadHandler = async (e) => {
		let inputValue = e.target.innerHTML;
		setValue((prev) => prev + inputValue);
	};

	const delHandler = async () => {
		setValue((prev) => prev.slice(0, -1));
	};

	const secretActive = async () => {
		if (value === "123") {
			setSecret1(true);
		}
	};

	const confirmHandler = async () => {
		console.log(ansequation);
	};

	const onEnterHandler = (e) => {
		if (e.key === "Enter") {
			onclickHandler();
		}
	};

	return (
		<>
			<div class="big">
				{secret1 && <Secret />}
				<div class="parent-inside">
					<div class="parent-input">
						<input
							class="inputfield"
							type="text"
							value={value}
							onChange={(e) => {
								setValue(e.target.value);
							}}
							onKeyDown={(e) => {
								onEnterHandler(e);
							}}
						/>
						<button
							class="button-main button-logo reset"
							onClick={clearHandler}
						>
							{" "}
							X{" "}
						</button>
					</div>

					<div class="numpad">
						<section>
							<button
								onClick={(e) => {
									numpadHandler(e);
								}}
							>
								1
							</button>
							<button
								onClick={(e) => {
									numpadHandler(e);
								}}
							>
								2
							</button>
							<button
								onClick={(e) => {
									numpadHandler(e);
								}}
							>
								3
							</button>
							<button
								onClick={(e) => {
									numpadHandler(e);
								}}
							>
								+
							</button>
							<button
								class="delbtn"
								onClick={(e) => {
									delHandler(e);
								}}
							>
								DEL
							</button>
						</section>

						<section>
							<button
								onClick={(e) => {
									numpadHandler(e);
								}}
							>
								4
							</button>
							<button
								onClick={(e) => {
									numpadHandler(e);
								}}
							>
								5
							</button>
							<button
								onClick={(e) => {
									numpadHandler(e);
								}}
							>
								6
							</button>

							<button
								onClick={(e) => {
									numpadHandler(e);
								}}
							>
								-
							</button>
							<button
								onClick={(e) => {
									clearHandler();
								}}
							>
								C
							</button>
						</section>

						<section>
							<button
								onClick={(e) => {
									numpadHandler(e);
								}}
							>
								7
							</button>
							<button
								onClick={(e) => {
									numpadHandler(e);
								}}
							>
								8
							</button>
							<button
								onClick={(e) => {
									numpadHandler(e);
								}}
							>
								9
							</button>
							<button
								onClick={(e) => {
									numpadHandler(e);
								}}
							>
								*
							</button>
						</section>

						<section>
							<button
								onClick={(e) => {
									numpadHandler(e);
								}}
							>
								(
							</button>
							<button
								onClick={(e) => {
									numpadHandler(e);
								}}
							>
								0
							</button>
							<button
								onClick={(e) => {
									numpadHandler(e);
								}}
							>
								)
							</button>
							<button
								onClick={(e) => {
									numpadHandler(e);
								}}
							>
								/
							</button>
						</section>
					</div>
				</div>

				<div class="parentbutton">
					<button class="button-main submit" onClick={onclickHandler}>
						Submit!
					</button>
				</div>
			</div>
		</>
	);
}

export default OperationField;
