import notResult from "../assets/noResults.png"
import styled from "styled-components"


const Figure = styled.figure`
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h2 {
        text-align: center; 
    }

    & img{
        max-width: 100%;
        min-width: 300px;
    }
`

const NotResults = () => {

    return (
        <Figure>
            <img src={notResult} alt="No se encontraron coincidencias" />
            <figcaption>
                <h2>No se encontraron coincidencias</h2>
            </figcaption>
        </Figure>
    )

}


export default NotResults