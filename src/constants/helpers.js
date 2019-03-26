
// function that makes the api request and returns a Promise for response
export const apiFetchCall = (url) => fetch( url).then(response =>  response.json());

export  function decompose_response(response){
   try{

      let category = response.category;
      console.log("checking category", category);
      return response;
   }
   catch(error){
   console.log("there was an error in decompose_response", error);
   }
}
