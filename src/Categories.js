import React from 'react'

const Categories = (props) => {
    return (
        <a to={`/anuncios/categoria/`} className="btn btn-secondary h-100 m-2 col-sm">
            <i className={`fa  fa-4x`} aria-hidden="true"></i><br />
            categoria
        </a>
    )
}

export default Categories