let currentIndex = 0;

function grey_background() {
  document.getElementById("overlay_id").style.display = "none";
}

function changePokemon(step) {
  currentIndex = (currentIndex + step + pokemons.length) % pokemons.length;
  updateOverlayImage();
}

function updateOverlayImage() {
  const pokemon = pokemons[currentIndex];
  const imageUrl = pokemon?.sprites?.front_default || "path/to/default/image.png";
  const name = pokemon?.name || "Unknown Pokémon";
  const typesHtml = pokemon.types.map((typeInfo) => `<p>${typeInfo.type?.name || "Unknown Type"}</p>`).join("");
  const statsHtml = pokemon.stats.map((statInfo) => `<p>${statInfo.stat?.name}: ${statInfo.base_stat}</p>`).join("");

  document.querySelector('.pokemonName_overlay').textContent = name;
  const imageElement = document.querySelector('.pokemonImage_overlay');
  if (imageElement) {
      imageElement.src = imageUrl;
      imageElement.alt = `${name} sprite`;
  }
  const typesElement = document.querySelector('.pokemonPTag_overlay');
  if (typesElement) {
      typesElement.innerHTML = typesHtml;
  }
  const statsElement = document.querySelector('.pokemonStats_overlay');
  if (statsElement) {
      statsElement.innerHTML = statsHtml;
  }
}

function back_pokemon() {
  changePokemon(-1);
}

function go_pokemon() {
  changePokemon(1);
}

function closeOverlay() {
  let overlayRef = document.getElementById("overlay_id");
  let content = document.getElementById("content");
  let body = document.getElementById("body");
  body.style.overflow = "hidden";
  overlayRef.style.display = "none";
  content.classList.remove("d_transparent");
  document.getElementById("overlay_id").innerHTML = "";
}

function openOverlay(pokemonId) {
  let pokemonIndex = pokemonId -1;
  currentIndex = pokemonIndex;
  let overlayRef = document.getElementById("overlay_id");
  let content = document.getElementById("content");
  let body = document.getElementById("body");
  body.style.overflow = "show";
  content.classList.toggle("d_transparent");
  document.getElementById("overlay_id").style.removeProperty("display");
  const pokemon = pokemons[pokemonIndex];
  const imageUrl = pokemon?.sprites?.front_default || "path/to/default/image.png";
  const name = pokemon?.name || "Unknown Pokémon";
  const typesHtml = pokemon.types.map((typeInfo) => `<p>${typeInfo.type?.name || "Unknown Type"}</p>`).join("");
  const primaryTypeClass = pokemon.types[0]?.type?.name || "unknown";
  const stats = pokemon.stats.map((statInfo) => `<p>${statInfo.stat?.name}: ${statInfo.base_stat}</p>`).join("");
  overlayRef.innerHTML = getOpenOverlayTemplate({imageUrl, name, typesHtml, primaryTypeClass, stats});
}