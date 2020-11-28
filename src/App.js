import Axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
	const [recepie, setRecepie] = useState([]);
	const APP_ID = "08cec6cf";
	const APP_KEY = "444816a1b9e214f3c0654e05d03cbb70";

	const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

	//useEffect(()=> {
	//    let url1 = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
	//    fetch(url).then(response =>{
	//        return response.json();
	//    }).then(res=>{
	//        console.log(res);
	//    })

	//    .catch(err => {
	//        console.log(err);
	//    })

	// },[]);

	const getRecepie = async () => {
		console.log("Seccond");
		const result = await Axios.get(url);
		console.log("Third");
		const json = result.data.hits;
		console.log(json);
		setRecepie(json);
	};

	return (
		<div>
			<h1 onClick={getRecepie}>List </h1>
			{recepie.map((rec) => (
				<h3>{rec.recipe.label}</h3>
			))}
		</div>
	);
}

export default App;
