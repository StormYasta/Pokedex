const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number')
const pokemonImage = document.querySelector('.pokemon_image')
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')

const form = document.querySelector('.form')
const input = document.querySelector('.input_search')


const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    if(APIResponse.status=== 200){
        const data = await APIResponse.json();
        return data;
    }
}

const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);

    if(data){
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    input.value = ''
} else{
        pokemonName.innerHTML = 'Not Found';
        pokemonNumber.innerHTML = '';
        pokemonImage.src = "https://thumbs.gfycat.com/DampSpanishCleanerwrasse-size_restricted.gif"
        input.value = ''

    }
}


form.addEventListener('submit', (event) => {

    event.preventDefault();
    renderPokemon(input.value.toLowerCase())
})

btnNext.addEventListener('click', (event) => {
    event.preventDefault();
    renderPokemon(Number(pokemonNumber.innerHTML)+1)
})

btnPrev.addEventListener('click', (event) => {
    event.preventDefault();
    renderPokemon(Number(pokemonNumber.innerHTML)-1)
})