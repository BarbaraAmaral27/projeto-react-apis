export const goToPokedexPage = (navigate) => {
    navigate("/")
}

export const goToPokemonListPage = (navigate) => {
    navigate("/list")
}

export const goToPokemonDetailPage = (navigate, name) => {
    navigate(`/detail/${name}`)
}

