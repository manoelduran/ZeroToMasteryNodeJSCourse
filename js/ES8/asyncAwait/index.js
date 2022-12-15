
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const getData = async () => {
    try {
        const [users, posts, albums] = await Promise.all(urls.map(url => 
            fetch(url).then(response => response.json())
        ))
        console.log('users', users)
        console.log('posts', posts)
        console.log('albums', albums)
    } catch (e) {
        console.log('erou', e)
    }
}

getData()