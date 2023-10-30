import * as React from 'react'

function App() {
    // you can do something in between
    const title = 'React';

    const welcome = {
        greeting: 'Hey',
        title: 'React',
    }

    function getTitle(title) {
        return "Get Title: " + title;
    }

    return (
        <div>
            <h1>{welcome.greeting} {getTitle(welcome.title)}</h1>

            <label htmlFor="search">Search: </label>
            <input id="search" type="text"/>
        </div>
    )
}

export default App
