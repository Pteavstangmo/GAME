import React, { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

import "./css/index.css";

import { ReactComponent as Logoicons } from "../../assets/Asset 1.svg";

//js modules import
import {
	RandomEquation,
	RandomEquationAnswer,
} from "./Components/RandomNumber.module";
import { AnswerChecker } from "./Components/AnswerChecker.module";

//jsx components import
import Message from "./Components/Message";
import OperationField from "./Components/Input";
import Calculated from "./Components/Calculate/Calculated";
import Timer from "./Components/timer/timer";

export const UserContext = createContext(null);

function Play() {
	//Constructor
	const [equation, setEquation] = useState(null);
	const [ansequation, setAnsequation] = useState(null);
	const [userAnswer, setUserAnswer] = useState(null);

	const Navigate = useNavigate();

	//const HANDLE_SETSTATE1 = (e) =>{
	//    setUserAnswer(e);
	//}

	useEffect(() => {
		if (
			userAnswer === null ||
			ansequation === null ||
			userAnswer === null
		) {
		} else {
			//operated the answerchecker
			AnswerChecker(userAnswer, ansequation, equation);
		}
	}, [equation, userAnswer, ansequation]);

	//first time for check
	useEffect(() => {
		//const HANDLE_STATE1 = (e) => {
		//    setEquation(e);
		//}

		//const HANDLE_STATE2 = (e) => {
		//    setAnsequation(e);
		//}

		RandomEquation({
			setEQ: setEquation,
		});

		RandomEquationAnswer({
			setANSEQ: setAnsequation,
		});
	}, []);

	const howtohandler = () => {
		Navigate("/tutorial");
	};

	return (
		<div class="body">
			<div class="play-main">
				<div class="sub-card-1">
					<div class="logohandler">
						<Logoicons />
						<div class="fullname">Faster Than You Think</div>
					</div>
				</div>
				<section class="card-main">
					<Timer />
					<UserContext.Provider
						value={{ equation, ansequation, userAnswer }}
					>
						<Message />
						<div class="userInput">
							<Calculated userAnswer={userAnswer} />
						</div>
						<OperationField setUserAnswer={setUserAnswer} />
					</UserContext.Provider>
				</section>
				<div class="sub-card-2">
					<div class="fb-parent">
						<div>
							<a
								class="fb"
								href="https://forms.gle/9pkHUcD2p17SHmcT6"
							>
								Feedback here!
							</a>
						</div>
						<div class="fb-parent2">
							<a
								class="fb-small"
								href="https://sites.google.com/pcccr.ac.th/testingkub/"
							>
								Site
							</a>
							<a
								class="fb-small"
								href="https://github.com/Bermlnwza/Faster-than-you-think"
							>
								Github
							</a>
						</div>
						<button class="fb" onClick={howtohandler}>
							How to play!
						</button>
					</div>

					{/* 
                    <div class='help-parent'>
                        <div class='button-main suggestbutton'>need some help? click me!</div>
                        <button class='button-main button-logo'>!</button>
                    </div>
                    */}
				</div>
			</div>
		</div>
	);
}

export default Play;
