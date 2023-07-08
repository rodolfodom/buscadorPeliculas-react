const MoviesGrid = ({ data }) => {
    if (data.Response === "True") {
        <h1>Mostrar resultados</h1>
    } else {
        <h1>Sin coincidencias</h1>
    }
}




export default MoviesGrid