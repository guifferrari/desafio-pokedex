/*
quando clicar no pokemon da listagem, temos que esconder o cartao aberto e mostrar o cartão correspondente ao pokemon selecionado na listagem

pra isso vamos precisar trabalhar com dois elementos:
1 - listagem
2 - cartao do pokemon

precisamos criar duas variáveis no JS, para trabalhar com os elementos da tela

vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons

- remover a classe aberto só do cartão que está aberto
- ao clicar em pokemon da listagem pegamos o id desse pokemon pra saber qual cartão mostrar
-remover a classe ativa que marca o pokemon selecionado
- adicionar a classe ativo no item da lista selecionado
*/

// precisamos criar duas variaveis no JS para trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')


listaSelecaoPokemons.forEach(pokemon => {
    // vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons

    pokemon.addEventListener('click', () => {
        //- remover a classe aberto só do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')


        //- ao clicar em pokemon da listagem pegamos o id desse pokemon pra saber qual cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        //- adicionar a classe aberto no cartão que será aberto ao click
        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //-remover a classe ativa que marca o pokemon selecionado
        const corDoPokemonAtivo = document.querySelector('.ativo')
        corDoPokemonAtivo.classList.remove('ativo')

        //- adicionar a classe ativo no item da lista selecionado
        const pokemonClicadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonClicadoNaListagem.classList.add('ativo')
    })
})