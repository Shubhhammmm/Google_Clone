import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key : 'AIzaSyBOycGDnVA5ZXGfquiADd6iFV66zEKM-1M',
    cx : "8614d901bf87749df",
}


export const fetchDataFromApi = async (payload) => {
     const {data} = await axios.get(BASE_URL,{
      params : {...params, ...payload}   
    })
    return data;
};
