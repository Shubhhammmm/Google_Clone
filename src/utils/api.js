import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key : 'f4f35a30a8mshc251b32922a74bep18d893jsn60a258327c97',
    cx : "8614d901bf87749df",
}


export const fetchDataFromApi = async (payload) => {
     const {data} = await axios.get(BASE_URL,{
      params : {...params, ...payload}   
    })
    return data;
};
