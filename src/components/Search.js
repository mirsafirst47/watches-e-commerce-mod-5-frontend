import React from 'react'


// Any time that you define a function in a functional component
    // You need variable declaration

function Search(props){

    const handleInput = (evt) => {
        props.changeSearchTerm(evt.target.value)
    }

    return(
        <>
            <form className="form-inline my-2 my-lg-0" align="center">
                Search:<input className="form-control"
                    type="text"
                    placeholder="Search by name..."
                    value={props.searchTerm}
                    onChange={handleInput}
                />
            </form>
        </>
    )




}

export default Search