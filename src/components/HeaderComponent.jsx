import React, { Component } from 'react';

class HeaderComponent extends Component {

    constructor(props){
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-darh bg-dark">
                    <div><a href="https://javaguides.net" className="navbar-brand">DEMO DE LA TIENDA "LA GENERICA"</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;