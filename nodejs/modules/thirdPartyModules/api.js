import axios from "axios";

const getGoogle = async () => {
   const response = await axios.get('https://www.google.com')
   const data = response.data;
   console.log('data', data)
   return data;
}

getGoogle();


