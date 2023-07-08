import styled, { css } from "styled-components"


const StyledMain = styled.main`
    background-color: #f16868;
    transition: all 500ms ease-in-out;

    ${props => !props.$isData && css`
        
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

    `}

    ${props => props.$isData && css`
        
        display: flex;
        justify-content: space-around;
        height: 70px;
        padding: 0.5rem;
        
        
        
        & form div{
            display: flex;
            justify-content: space-evenly;
            width: 100vw;
            max-width: 1024px;
            align-items: center;
            margin: auto;
            height: 100%;
        }
        
        & button{
            width: 5rem;
        }

        & input{
            width: 15rem;
        }
    
        &   h1{
            display: none;

        }
    `}


`



const Welcome = ({ data, setQuery, handleSubmit }) => {

    const handleChange = (e) => {
        setQuery(e.target.value)
    }


    if (data === null) {
        return (
            <StyledMain>
                <h1>Bievenido</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="movieQuery">Busca tu pelicula</label>
                        <input type="text" name="movieQuery" onChange={(e) => { handleChange(e) }} />
                        <button type="submit">Buscar</button>
                    </div>
                </form>
            </StyledMain>
        )
    } else {
        return (
            <StyledMain $isData>
                <h1>Bievenido</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="movieQuery">Busca tu pelicula</label>
                        <input type="text" name="movieQuery" onChange={(e) => { handleChange(e) }} />
                        <button type="submit">Buscar</button>
                    </div>
                </form>
            </StyledMain>
        )
    }

}

export default Welcome
