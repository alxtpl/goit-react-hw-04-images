import React, { useState } from 'react';
import s from './Search.module.scss'



const Search = ({ changeSearch})=> {
    const [input, setInput] = useState("");
    
    const handleChange = e => {
        const { value } = e.target;
    setInput(value)
    };

  const handleSubmit = e => {
        e.preventDefault();
        changeSearch(input);
    };

    
        return (
            <form className={s.search} onSubmit={handleSubmit}>

                <input
                    className={s.inp}
                    type="text"
                    autoComplete="off"
                    value={input}
                    autoFocus
                    placeholder="Search"
                    onChange={handleChange}
                />
                <button type="submit" className={s.btn}>
                    <span className={""}>&#128269;</span>
                </button>
            </form>
        );
    
}

export default Search;