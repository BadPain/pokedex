function createPokemonHTML(pokemon) {
  const imageUrl = pokemon?.sprites?.front_default || 'path/to/default/image.png';
  const name = pokemon?.name || 'Unknown Pokémon';
  const typesHtml = pokemon.types.map(typeInfo => `<p>${typeInfo.type?.name || 'Unknown Type'}</p>`).join('');
  const primaryTypeClass = pokemon.types[0]?.type?.name || 'unknown';
  return `
    <div onclick="openOverlay(${pokemon.id})">
        <div class="pokemon ${primaryTypeClass}">
            <div class="pokemonName">${name}</div>
                <img src="${imageUrl}" alt="${name} sprite">
            <div class="pokemonPTag">
                ${typesHtml}
            </div>
        </div>
    </div>
    `;
}

function getOpenOverlayTemplate({ imageUrl, name, typesHtml, primaryTypeClass, stats }) {
  return `
<div class="overlay_order ${primaryTypeClass}">
  <div class="overlay_new">
    <div class="pokemon_overlay ${primaryTypeClass}">
      <div class="pokemonName_overlay">${name}</div>
      <div class="pokemonSorting_overlay">
        <img class="pokemonImage_overlay" src="${imageUrl}" alt="${name} sprite">
        <div class="pokemonPTag_overlay">
          ${typesHtml}
        </div>
      </div>
      <div class="pokemonStats_overlay">
        ${stats}
      </div>
    </div>
  </div>
  <div class="button_order btn-group" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-primary" onclick="back_pokemon()">Preview</button>
    <button type="button" class="btn btn-primary" onclick="closeOverlay()">X</button>
    <button type="button" class="btn btn-primary" onclick="go_pokemon()">Next</button>
  </div>
</div>
    `;
}

function getDataSortingTemplate(pokemon) {
  const imageUrl = pokemon?.sprites?.front_default || "path/to/default/image.png";
  const name = pokemon?.name || "Unknown Pokémon";
  const typesHtml = pokemon.types.map((typeInfo) => `<p>${typeInfo.type?.name || "Unknown Type"}</p>`).join("");
  const statsHtml = pokemon.stats.map((statInfo) => `<p>${statInfo.stat?.name}: ${statInfo.base_stat}</p>`).join("");

  return {
    imageUrl,
    name,
    typesHtml,
    statsHtml
  };
}