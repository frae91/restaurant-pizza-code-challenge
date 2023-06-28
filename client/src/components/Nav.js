import React from 'react';

export default function Nav( {onLogout} ) {

    function handleLogout() {
        fetch('/logout', {
            method: "DELETE"
        })
        .then( () => onLogout() )
    }
    return (
        <header>
            <button onClick={handleLogout}>Logout</button>
        </header>
    )
}