// document.getElementById("btn").addEventListener("click", function() {
// 	console.log(this);
// });
//console.log(this); // window
// document.getElementById("btn").addEventListener("click", () => {
// 	console.log(this);
// });

const studenteSamuele = {
	nome: "Samuele",
	cognome: "Madrigali",
	amici: [
		'federico',
		'maurizio'
	],
	presentazione: function() {
		// console.log(this)
		// const nome = "franco";
		// const cognome = "rossi";
		console.log(`Ciao a tutti mi chiamo ${this.nome} ${this.cognome}`);
	},
	stampaUnAmico: function() {
		console.log(this.amici[0]);
		//this.presentazione();
	}
};
