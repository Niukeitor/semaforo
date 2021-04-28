import React, { useState, useEffect } from "react";
import { Semaforo } from "./semaforo";
export function Home() {
	//      variable , funciona que va actualizar
	const [followers, setFollowers] = useState(0);
	console.log(followers);
	useEffect(() => {
		//PEDIR INFORMACIÓN EXTERNA PARA MOSTRAR EN NUESTRO SITIO.
		console.log("El componente se ha dibujado");
	});

	const updateFollowers = () => setFollowers(followers + 1);
	return (
		<div className="d-flex justify-content-center">
			<Semaforo />
		</div>
	);
}
