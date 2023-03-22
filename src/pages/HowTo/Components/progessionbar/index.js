import "./css/index.css";

function Progress({ set, number }) {
	const pageset = set;
	const page = number;

	const dotAdd = {
		backgroundColor: "#FDB90E",
		borderRadius: "50%",
	};

	return (
		<div class="dot-parent">
			<button class="dot" style={page === 1 ? dotAdd : null} />
			<button class="dot" style={page === 2 ? dotAdd : null} />
			<button class="dot" style={page === 3 ? dotAdd : null} />
			<button class="dot" style={page === 4 ? dotAdd : null} />
			<button class="dot" style={page === 5 ? dotAdd : null} />
		</div>
	);
}

export default Progress;
