const App = () => {
    const welcome = {
        greeting: 'Hey',
        title: 'React',
    }

    const listObj = [
        { title: 'Item 1', url: 'https://google.com', author: 'Author 1', num_comments: 10, points: 100, objectID: 1 },
        { title: 'Item 2', url: 'https://google.com', author: 'Author 2', num_comments: 20, points: 200, objectID: 2 },
        { title: 'Item 3', url: 'https://google.com', author: 'Author 3', num_comments: 30, points: 300, objectID: 3 },
        { title: 'Item 4', url: 'https://google.com', author: 'Author 4', num_comments: 40, points: 400, objectID: 4 },
    ]

    const getTitle = (title) => "Get Title: " + title;

    const Search = () => (
        <div>
            <label htmlFor="search">Search: </label>
            <input id="search" type="text"/>
        </div>
    )

    const List = () => (
        <ul>
            {listObj.map((item) => (
                <li key={item.objectID}>
                    <span>
                        <a href={item.url}>{item.title}</a>
                    </span>
                    <span>{item.author}</span>
                    <span>{item.num_comments}</span>
                    <span>{item.points}</span>
                </li>
            ))}
        </ul>
    )

    return (
        <div>
            <h1>{welcome.greeting} {getTitle(welcome.title)}</h1>

            <Search />

            <hr/>

            <List />
            <List />
            <List />
        </div>
    )
}

export default App
