import React from 'react'
import { Link } from 'react-router-dom'

const Categories = ({categoria}) => {
    return (
        <Link to={`/categorias/${categoria.url}`} className="btn btn-secondary h-100 m-2 col-sm">
            <i className={`fa ${categoria.icon} fa-4x`} aria-hidden="true"></i><br />
            {categoria.categoria}
        </Link>
    )
}

export default Categories