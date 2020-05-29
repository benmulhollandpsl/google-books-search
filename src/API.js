import axios from "axios"

export default {
    // Get book from google search 
    getGoogleBooksKey: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    },

    setResults: function () {
        return axios.get("/api/books");
    },

    setResult: function (id) {
        return axios.get("/api/books/" + id);
    },

  
}
 