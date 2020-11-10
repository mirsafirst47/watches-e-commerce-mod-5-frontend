import React from 'react'

// Any time that you define a function in a functional component
    // You need variable declaration

function Search(props){

    const handleInput = (evt) => {
        props.changeSearchTerm(evt.target.value)
    }

    return(
        <div className="form-inline my-2 my-lg-0" align="center">
            <form className="form-inline my-2 my-lg-0" >
                <i className="fa fa-search" aria-hidden="true"></i>Search :<input className="form-control"
                    type="text"
                    placeholder="Search by name..."
                    value={props.searchTerm}
                    onChange={handleInput}
                />
            </form>
        </div>
    )
}

export default Search