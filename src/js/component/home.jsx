import React, { useState, useEffect } from "react";
import Button from "./button.jsx";

//include images into your bundle
import SimpleCounter from "./counter.jsx"

//create your first component
const Home = () => {

	const [numberOfSeconds, setNumberOfSeconds] = useState(0);
	const [initialState, setInitialState] = useState(0);

	const ending = () => {
		setNumberOfSeconds(new Date(+new Date () - initialState))
	}
	const starting = () => {
		setInitialState(+new Date())
	} 
	useEffect(() => {
		if (numberOfSeconds) {
			requestAnimationFrame(ending);
		}
	}, [numberOfSeconds]);
	useEffect( () => {
		if (initialState) {
			requestAnimationFrame(ending)
		}
	}, [initialState])

	const stopping = () => {
		let atTime = (new Date() - initialState)
		// let mm = atTime.getUTCMinutes();
		// let ss = atTime.getSeconds();
		// let cs = Math.round(atTime.getMilliseconds() / 10);
		console.log(atTime)

	}

	

	return (
		<>
		{/* <div className="appli" onClick={starting}>
			<h1 className="timers">{timeFormat(numberOfSeconds)}</h1>
		</div> */}
		<div className="container-fluid">
		
		<SimpleCounter numOfSeconds={timeFormat(numberOfSeconds)} />
		<Button onClickFunc={starting} buttonName="Start to count" />
		<Button onClickFunc={stopping} buttonName="Show ms at console"/>
		
		</div>
		</>
		
	);
};
const timeFormat = (date) => {
	if (!date) {
		return "00:00:00"
	}

	let mm = date.getUTCMinutes();
	let ss = date.getSeconds();
	let cs = Math.round(date.getMilliseconds() / 10);

	mm = mm<10 ? "0" + mm : mm ;
	ss = ss<10 ? "0" + ss : ss ;
	cs = cs<10 ? "0" + cs : cs ;

	return `${mm}:${ss}:${cs}`


}
export default Home;
