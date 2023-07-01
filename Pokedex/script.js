const screen = document.querySelector(".screen_img");
const typeName = document.querySelector(".type_name");
const weight = document.querySelector(".weight");
const height = document.querySelector(".height");
const extra = document.querySelector(".extra");
const yellowLight = document.querySelector(".yellow-light");
const greenDisplay = document.querySelector(".green_display");
const pokedexUndertitle = document.querySelector(".pokedex_undertitle");

const fetchPokemon = function () {
	fetch(`https://pokeapi.co/api/v2/pokemon/${typeName.value}`)
		.then((response) => {
			if (response.status === 404) {
				throw new Error("Not a valid pokemon");
			} else if (!typeName.value) {
				throw new Error("Type in a pokemon to show its stats");
			}
			return response.json();
		})
		.then((data) => {
			screen.src = data.sprites.other["official-artwork"].front_default;
			greenDisplay.textContent = data.types[0].type.name;
			screen.style.opacity = 1;
			height.textContent = `Height: ${data.height}`;
			weight.textContent = `Weight: ${data.weight}`;
			pokedexUndertitle.textContent = `✅${data.name}`
		})
		.catch((err) => {
			screen.style.height = "90%";
			screen.style.width = "90%";
			screen.src = "red cross.png";
			pokedexUndertitle.textContent = `⛔${err.message}`;
			height.textContent = "";
			weight.textContent = "";
			greenDisplay.textContent = "";
		});
};

typeName.addEventListener("keydown", function (e) {
	if (e.key === "Enter") {
		fetchPokemon();
	}
});

// const fetchPokemon = function () {
// 	fetch(`https://pokeapi.co/api/v2/pokemon/${choosePoke.value}`)
// 		.then((response) => {
//          console.log(response);
// 			if (response.status === 404) {
// 				throw new Error("cannot find pokemon");
//          }
//          else if (!choosePoke.value) {
//             throw new Error("Type a pokemon name")
//          }
//          return response.json();
// 		})
// 		.then((data) => {
// 			extra.style.opacity = 1;
// 			// pokeName.textContent = data.name;
// 			pokeImg.src = data.sprites.other["official-artwork"].front_default;
// 			pokeType.textContent = `Pokemon type: ${data.types[0].type.name}`;
// 			weight.textContent = `weight: ${data.weight}`;
// 			for (let i = 0; i < data.stats.length; i++) {
// 				stats.insertAdjacentHTML(
// 					"beforeend",
// 					`${data.stats[i].stat.name}: ${data.stats[i].base_stat}` + "<br>"
// 				);
// 			}
// 			for (let i = 0; i < data.moves.length; i++) {
// 				moves.insertAdjacentHTML(
// 					"beforeend",
// 					`${[i + 1]}. ${data.moves[i].move.name}` + "<br>"
// 				);
// 			}
// 		})
// 		.catch((err) => {
// 			console.error(err.message);
// 			pokeName.textContent = err.message;
// 			extra.style.opacity = 0;
// 			pokeImg.src = "";
// 		});
// };

// fetchPokemon("squirtle")

// button.addEventListener("click", fetchPokemon);

// choosePoke.addEventListener("keydown", function (e) {
// 	if (e.key === "Enter") {
// 		fetchPokemon();
// 	}
// });

// const request = function (pokemon) {
// 	fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
// 		.then((response) => {
// 			if (response.status === 404) throw new Error("cannot find pokemon");
// 			return response.json();
// 		})
// 		.then((data) => {
// 			extra.style.opacity = 1;
// 			pokeName.textContent = data.name;
// 			pokeImg.src = data.sprites.other["official-artwork"].front_default;
// 			weight.textContent = `weight: ${data.weight}`;
//          console.log(data.types[0].type.name);
//          pokeType.textContent = `Pokemon type: ${data.types[0].type.name}`;
// 			for (let i = 0; i < data.stats.length; i++) {
// 				stats.insertAdjacentHTML(
// 					"beforeend",
// 					`${data.stats[i].stat.name}: ${data.stats[i].base_stat}` + "<br>"
// 				);
// 			}
// 			for (let i = 0; i < data.moves.length; i++) {
// 				moves.insertAdjacentHTML(
// 					"beforeend",
// 					`${[i + 1]}. ${data.moves[i].move.name}` + "<br>"
// 				);
// 			}
// 		})
// 		.catch((err) => {
// 			console.error(err.message);
// 			pokeName.textContent = err.message;
// 			extra.style.opacity = 0;
// 			pokeImg.src = "";
// 		});
// };

// request("squirtle");
