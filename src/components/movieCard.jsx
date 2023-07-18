import styled from "styled-components"
import defaultPoster from "../assets/defaultPoster.jpeg"

const Figure = styled.figure`
    & h4 {
        text-align: center;
        max-width: 300px;
    }

    & figcaption {
        max-width: 100%;
    }

    & img {
        width: 300px;
    }
`

const MovieCard = ({ title, poster }) => {




    return (
        <Figure>
            <img src={poster != "N/A" ? poster : defaultPoster} alt={`Poster ${title}`} />
            <figcaption>
                <h4>{title}</h4>
            </figcaption>
        </Figure>
    )
}


export default MovieCard