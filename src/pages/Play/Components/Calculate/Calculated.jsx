import "./index.css";
import React from "react";
import { evalhandler } from "../AnswerChecker.module";

function Calculated(userAnswer) {
	const post_value = evalhandler(Object.values(userAnswer)[0]);

	if (post_value !== null) {
		return <div class="messages">User input : {post_value}</div>;
	}
}

export default Calculated;
