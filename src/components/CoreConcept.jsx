import React from 'react'

const CoreConcepts = ({title, description, image}) => {
    return (
        <li>
            <img src={image} alt={title} />
            <p>{title}</p>
            <p>{description}</p>
        </li>



    )
}

export default CoreConcepts