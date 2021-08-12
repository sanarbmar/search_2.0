//getting all requiered elemnts
const searchWrapper = document.querySelector(".search-input");
const inputBox = document.querySelector("input");
const suggBox = document.querySelector(".autocom-box");
let searchUrl = "https://api.giphy.com/v1/gifs/search?api_key=bYQ1Vfn6G2NKpWha0cAgVmdsArrnZiSz&limit=12&offset=0&rating=g&lang=en&q=";
let catchResultSearch;
// if user press any key and release
inputBox.onkeyup = (e) => {
    let userData = e.target.value;//user entred data
    let emptyArray = [];
    let searchSuggestions = [];
    let url = searchUrl + userData;
    console.log();
    async function getWords() {
        let response = await fetch(url);
        let responseJson = await response.json();
        let data = responseJson.data;

        data.forEach(e => {

            searchSuggestions.push(e.title)
        });
        console.log(searchSuggestions);
        //return searchSuggestions;

        if (userData) {
            emptyArray = searchSuggestions.filter((data) => {
                //filtering array value and user char to lowercase and return only those word sentc which are stars with user entered  word
                return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
                //console.log(emptyArray);
            });
            emptyArray = emptyArray.map((data) => {
                return data = `<li>${data}</li>`;
            });
            console.log(emptyArray);
            searchWrapper.classList.add("active");//show autocomplete div
            showSuggestions(emptyArray);
            let allList = suggBox.querySelectorAll("li");
            for (let i = 0; i < allList.length; i++) {
                //ADDING ONCLICK ATTRIBUTE  IN ALL LI TAG 
                // setAttribute toma nombres de funciones como strings y las ejecuta 
                allList[i].setAttribute("onclick", "select(this)");
                //catchResultSearch = allList[i].setAttribute("onclick", "ejemp(this)");
            }
            console.log(allList)
        } else {
            searchWrapper.classList.remove("active");//hide autocomplete div
        }
    }
    getWords();


    /* console.log(e.target.value); */
}

function select(element) {
    let selectUserData = element.textContent;
    inputBox.value = selectUserData;//passing the user selected list data in textfield
    searchWrapper.classList.remove("active");
    console.log(selectUserData);//el que escoje
    return selectUserData;
}


function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    } else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
/* function ejemp(catchResultSearch) {
    console.log(catchResultSearch);
    return catchResultSearch;
}
console.log(catchResultSearch); */