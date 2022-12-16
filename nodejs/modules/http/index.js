import { get } from 'https';


get('https://www.google.com', (response) => {
    response.on('data', (chunk) => {
        console.log(`Data chunk ${chunk}`);
    });
    response.on('end', () => {
        console.log('No more data');
    });
});

