import React from 'react'

const Categories = ({category}) => {
    return (
        <a to={`/anuncios/categoria/`} className="btn btn-secondary h-100 m-2 col-sm">
            <i className={`fa ${category.icon} fa-4x`} aria-hidden="true"></i><br />
            {category.name}
        </a>
    )
}

export default Categories