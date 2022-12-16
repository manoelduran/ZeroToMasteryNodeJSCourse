import { send } from "./request.js";
import { read } from "./response.js";
const request = (url, data) => {
    send(url, data);
    read()
}
request('https://google.com', 'hello')


export { request }