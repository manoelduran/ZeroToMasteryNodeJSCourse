import http from 'http';
const PORT = 4000;

const server = http.createServer();

const friends = [
    {
        id: 0,
        name: 'Manoel'
    },
    {
        id: 1,
        name: 'Luiz'
    },
    {
        id: 2,
        name: 'Pedro'
    }
]

server.on('request', (req, res) => {
    const items = req.url.split('/') // /friends/2 => ['', 'friends', '2']
    if (req.method === 'POST' && items[1] === 'friends') {
        req.on('data', (data) => {
            const friend = data.toString();
            console.log('friend', friend)
            const parsedFriend = JSON.parse(friend)
            friends.push(parsedFriend);
        })
        req.pipe(res);
    } else if (req.method === 'GET' && items[1] === 'friends') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        if (items.length === 3) {
            const friendIndex = Number(items[2]);
            res.end(JSON.stringify(friends[friendIndex]));
        } else {
            res.end(JSON.stringify(friends))
        }

    } else if (req.method === 'GET' && items[1] === '/messages') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li> Hello Manoel</li>');
        res.write('<li> What are your thoughts on astronomy?</li>');
        res.write('</body>');
        res.write('</html>');
        res.end()
    } else {
        res.statusCode = 404;
        res.end()
    }
})

server.listen(PORT, () => {
    console.log('Listening on port 4000')
})