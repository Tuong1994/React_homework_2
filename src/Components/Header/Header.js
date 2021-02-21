import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="p-5 mb-4" style={{background: 'rgba(0,0,0,0.5)'}}>
                <h3 className="text-center text-white display-5">TRY GLASSES APP ONLINE</h3>
            </div>
        );
    }
}

export default Header;