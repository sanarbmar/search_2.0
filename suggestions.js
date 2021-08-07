/* const searchUrl = "https://api.giphy.com/v1/gifs/search?api_key=bYQ1Vfn6G2NKpWha0cAgVmdsArrnZiSz&limit=12&offset=0&rating=g&lang=en&q=";

let searchSuggestions =[];


async function getFrames() {
    let response = await fetch(searchUrl);
    let responseJson = await response.json();
    let data = responseJson.data;
    
    data.forEach(e => {
       
        searchSuggestions.push(e.title)
    });
    console.log(searchSuggestions);
    return searchSuggestions;
}
console.log(searchSuggestions);
getFrames(); */

/* let sugestions = [
    "FUCK YOU BITCH",
    "FUCK HOE",
    "FUCK BOY",
    "FUCK BOYFRIENDS",
    "FUCK BOYFRIENDSGIRLFIREMNS",
    "FUCK SOFKA",
    "fuck la gente",
    "fuck la gente",
    "ruck la gente",
    "fuck la gente",
    "fuck la gente",
    "fuck la gente",
    "fuck la gente",
    "fuck la gente",

]; */