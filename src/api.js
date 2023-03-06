import axios from "axios";

const searchImage= async (term)=>{
   const response=await axios.get("https://api.unsplash.com/search/photos",{
    headers:{
      Authorization:"Client-ID v8DQTyy1UCzYMnPX9Rz9XD-QWG76nZ2Fq1Gt5DS3ymw"
    },
    params:{
     query:term
    }
  });
  return response.data.results;
};

export default searchImage;