import React from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
	// const [questions, setQuestions] = useState(data);
	// console.log(data);
	return (
		<main>
			<div className="container">
				<h3>Questions and Answers</h3>
				<section className="info">
					{data.map((data) => {
						return <SingleQuestion key={data.id} {...data} />;
					})}
				</section>
			</div>
		</main>
	);
}

export default App;
