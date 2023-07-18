import styled, { css } from "styled-components"


const StyledHeader = styled.header`
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



const Welcome = ({ data, handleSubmit }) => {



    if (data === null) {
        return (
            <StyledHeader>
                <h1>Bievenido</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="movieQuery">Busca tu pelicula</label>
                        <input type="text" name="movieQuery" />
                        <button type="submit">Buscar</button>
                    </div>
                </form>
            </StyledHeader>
        )
    } else {
        return (
            <StyledHeader $isData>
                <h1>Bievenido</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="movieQuery">Busca tu pelicula</label>
                        <input type="text" name="movieQuery" id="textInput" />
                        <button type="submit">Buscar</button>
                    </div>
                </form>
            </StyledHeader>
        )
    }

}

export default Welcome
