import React, {useState} from 'react';

export default function Login( {onLogin, handleAllowed} ) {
    const [username, setUsername] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({username: username})
        })
        .then(response => response.json())
        .then(json => {
            if (!json.error) {
                onLogin(json);
                handleAllowed(true);
            }
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => {setUsername(e.target.value)}} value={username} placeholder="Enter username" />

            <input type="submit" value="Login" />
        </form>
    )
}