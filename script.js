//getting all requiered elemnts
const searchWrapper = document.querySelector(".search-input");
const inputBox = document.querySelector("input");
const suggBox = document.querySelector(".autocom-box");


// if user press any key and release
inputBox.onkeyup = (e) => {
    let userData = e.target.value;//user entred data
    let emptyArray = [];
    if(userData){
        emptyArray = sugestions.filter((data)=>{
            //filtering array value and user char to lowercase and return only those word sentc which are stars with user entered  word
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
            //console.log(emptyArray);
        });
        emptyArray = emptyArray.map((data)=>{
            return data = `<li>${data}</li>`;
        });
        console.log(emptyArray);
        searchWrapper.classList.add("active");//show autocomplete div
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //ADDING ONCLICK ATTRIBUTE  IN ALL LI TAG 
            allList[i].setAttribute("onclick","select(this)");
            
        }
    }else{
        searchWrapper.classList.remove("active");//hide autocomplete div
    }
    

    /* console.log(e.target.value); */
}

function select(element) {
    let selectUserData = element.textContent;
    inputBox.value = selectUserData;//passing the user selected list data in textfield
    searchWrapper.classList.remove("active");
    console.log(selectUserData);//el que escoje
}

function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
