const encoded_key = "MTAwMTAwMTgzOjU3NDA0MWZkNzc1ODhjNTNiNDQ5ZGFiYjM5NWExODg1OWRjYjJiYzg5YzdiMDNhMW NhY2VlZWI0OTdjNzU5NTE1MzU2MzIwZWYwZTUzYzE2N2IyMmYyZDBiYzMyNTg4ODVhODAwNzQ4OGE3 MDUwMWY5ZDgwYjc5NDQ1OWQwNzE1"
const Auth = "Basic " + encoded_key;

export const API_CONFIG= {
        method: "POST", 
  

    
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : Auth,
            "Accept" : "application/json",
           
           
        }
    }