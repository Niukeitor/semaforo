import React, { useState } from "react";

export function Semaforo() {
	const [color, setColor] = useState("red");

	return (
		<div className="contenedor">
			<div
				className={`rojo ${color == "rojo" ? "encendido" : ""}`}
				onClick={() => {
					setColor("rojo");
				}}></div>
			<div
				className={`amarillo ${color == "amarillo" ? "encendido" : ""}`}
				onClick={() => {
					setColor("amarillo");
				}}></div>
			<div
				className={`verde ${color == "verde" ? "encendido" : ""}`}
				onClick={() => {
					setColor("verde");
				}}></div>
		</div>
	);
}
