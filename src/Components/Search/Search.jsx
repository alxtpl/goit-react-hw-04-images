import React, { Component } from 'react';
import s from './Search.module.scss'
class Search extends Component {
    state = {
        input: '',
    };
    handleChange = e => {
        this.setState({ input: e.target.value });
    };

    hendleSubmit = e => {
        e.preventDefault();
        this.props.changeSearch(this.state.input);
    };

    render() {
        return (
            <form className={s.search} onSubmit={this.hendleSubmit}>

                <input
                    className={s.inp}
                    type="text"
                    autoComplete="off"
                    value={this.state.input}
                    autoFocus
                    placeholder="Search"
                    onChange={this.handleChange}
                />
                <button type="submit" className={s.btn}>
                    <span className={""}>&#128269;</span>
                </button>
            </form>
        );
    }
}

export default Search;