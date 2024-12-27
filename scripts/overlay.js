function grey_background() {
  document.getElementById("overlay_id").style.display = "none";
}

// function updateOverlayImage() {
//     const overlayImage = document.querySelector('.overlay_new');
//     if (overlayImage) {
//         overlayImage.src = images[currentIndex];
//     }
// }

function back_pokemon() {
  changeImage(-1);
}

function go_pokemon() {
  changeImage(1);
}
function closeOverlay() {
  let overlayRef = document.getElementById("overlay_id");
  let content = document.getElementById("content");
  overlayRef.style.display = "none";
  content.classList.remove("d_transparent");
  document.getElementById("overlay_id").innerHTML = "";
}

function openOverlay(pokemon) {
  currentIndex = pokemon;
  let overlayRef = document.getElementById("overlay_id");
  let content = document.getElementById("content");
  content.classList.toggle("d_transparent");
  document.getElementById("overlay_id").style.removeProperty("display");

  // Testweise eingefplegt - beginnt hier
  const imageUrl = pokemon?.sprites?.front_default || "path/to/default/image.png";
  const name = pokemon?.name || "Unknown Pokémon";
  const typesHtml = pokemon.types
    .map((typeInfo) => `<p>${typeInfo.type?.name || "Unknown Type"}</p>`)
    .join("");
  const primaryTypeClass = pokemon.types[0]?.type?.name || "unknown";
  // Testweise eingefplegt - endet hier

  overlayRef.innerHTML += `
<div class="overlay_order">
    <div class="overlay_new">
    // Testweise eingefplegt - beginnt hier
    <div class="pokemon ${primaryTypeClass}">
            <div class="pokemonName">${name}</div>
                <img src="${imageUrl}" alt="${name} sprite">
            <div class="pokemonPTag">
                ${typesHtml}
            </div>
        </div>
        </div>
    </div>
    // Testweise eingefplegt - endet hier
    <div class="button_order">
    <button class="button_style" onclick="back_pokemon()">Back</button>
    <button class="button_style" onclick="closeOverlay()">X</button>
    <button class="button_style" onclick="go_pokemon()">Go</button>
    </div>
</div>
    `;
}