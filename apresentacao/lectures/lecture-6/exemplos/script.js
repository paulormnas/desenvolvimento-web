// 1. Selecionando os elementos do DOM
const inputField = document.querySelector('#pokemonInput');
const searchBtn = document.querySelector('#searchBtn');
const resultCard = document.querySelector('#resultCard');
const errorMessage = document.querySelector('#errorMessage');

// Elementos do Card
const pokeName = document.querySelector('#pokeName');
const pokeId = document.querySelector('#pokeId');
const pokeImg = document.querySelector('#pokeImg');
const pokeTypes = document.querySelector('#pokeTypes');
const pokeWeight = document.querySelector('#pokeWeight');
const pokeHeight = document.querySelector('#pokeHeight');

// 2. Função assíncrona para buscar o Pokémon
async function fetchPokemon(name) {
    try {
        // Esconde card e erro antes de começar
        resultCard.classList.add('hidden');
        errorMessage.classList.add('hidden');

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
        
        if (!response.ok) {
            throw new Error('Pokémon não encontrado');
        }

        const data = await response.json();
        
        // 3. Manipulando o DOM com os dados recebidos
        displayPokemon(data);
    } catch (error) {
        console.error(error);
        errorMessage.classList.remove('hidden');
    }
}

// 4. Função para exibir os dados na tela
function displayPokemon(data) {
    pokeName.textContent = data.name;
    pokeId.textContent = `#${data.id.toString().padStart(3, '0')}`;
    pokeImg.src = data.sprites.other['official-artwork'].front_default;
    
    // Limpa tipos anteriores
    pokeTypes.innerHTML = '';
    
    // Adiciona os tipos dinamicamente
    data.types.forEach(typeInfo => {
        const span = document.createElement('span');
        span.classList.add('type-badge');
        span.classList.add(`type-${typeInfo.type.name}`);
        span.textContent = typeInfo.type.name;
        pokeTypes.appendChild(span);
    });

    pokeWeight.textContent = `${data.weight / 10} kg`;
    pokeHeight.textContent = `${data.height / 10} m`;

    // Mostra o card com o resultado
    resultCard.classList.remove('hidden');
}

// 5. Adicionando ouvintes de eventos (Event Listeners)
searchBtn.addEventListener('click', () => {
    const value = inputField.value.trim();
    if (value) {
        fetchPokemon(value);
    }
});

// Busca ao apertar Enter
inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const value = inputField.value.trim();
        if (value) {
            fetchPokemon(value);
        }
    }
});
