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