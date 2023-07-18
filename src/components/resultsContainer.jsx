import NotResults from "./noResults"
import styled from "styled-components"
import MoviesGrid from "./moviesGrid"

const Main = styled.main`
    margin: auto;
    max-width: 1200px;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    
`


const ResultsContainer = ({ data }) => {
    if (data.Response === "True") {
        return (
            <Main>
                <MoviesGrid movies={data.Search} />
            </Main>
        )
    } else {
        return (
            <Main>
                <NotResults />
            </Main>
        )
    }
}




export default ResultsContainer