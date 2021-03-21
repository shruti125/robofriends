import React from 'react';

const SearchBox = (props) => {
    return (
        <React.Fragment>
            <div className='pa2'>
                <input 
                className='pa3 ba b-green bg-lightest-blue' 
                type='search' 
                placeholder='Search robots' 
                onChange={props.searchChange}/>
            </div>
        </React.Fragment>
    )
}
export default SearchBox;