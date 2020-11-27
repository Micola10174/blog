import React from 'react';
import {Close} from "@material-ui/icons";
import './Search.scss';

const Search = ({open, close}) => {
    return (    
        <div className={open ? "wrapper-search show-search" : "wrapper-search" }>
            <input className="search-input" id="search" name="q" placeholder="Search..." type="search"  />
            <Close onClick={close} />
        </div>
    );
}

export default Search;
