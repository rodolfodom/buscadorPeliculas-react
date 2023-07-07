import { styled } from "styled-components"


const StyledMain = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h1{
        font-size: 3rem;
        margin: 0.5rem;
    }


    & div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }


    & input{
        margin: 0.2rem;
        max-width: 300px;
        min-width: 100px;
        width: 300px;
    }
`


const Welcome = () => {


    return (
        <StyledMain>
            <h1>Bievenido</h1>
            <form>
                <div>
                    <label htmlFor="movieQuery">Busca tu pelicula</label>
                    <input type="text" name="movieQuery" />
                    <button type="submit">Buscar</button>
                </div>
            </form>
        </StyledMain>
    )
}

export default Welcome
