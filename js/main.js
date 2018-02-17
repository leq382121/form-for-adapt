var wowContainer = document.getElementById("wows");
let title = document.createElement("h5");

//cleaning after yourself
function clearStuff(){
    while (wowContainer.firstChild) {
        wowContainer.removeChild(wowContainer.firstChild);
    }
}

//making sure email is valid.
function checkEmail(){
    clearStuff()
    let email = document.getElementsByName("email")[0].value;
    if (email.indexOf("@") == -1 ){
        title.innerHTML = "Whoa, check your email. It's incorrect.";
        wowContainer.appendChild(title).setAttribute("class", "wowtxt");
    } else {
        console.log("Email is allright! :)")
    }
}

// do cool stuff with name
function useName(){
    clearStuff()

    let name = document.getElementsByName("name")[0].value;
    let splittedNameArray = name.split(" ");

    let symbolscount = [];

    //you may never know how many words full name can have, right? :)
    for (i=0;i<splittedNameArray.length;i++){
        symbolscount.push(splittedNameArray[i].length);
    }

    title.innerHTML = "Nice to meet you, " + splittedNameArray[0] + ". A cool fact for you! Your full name consist of " + symbolscount.reduce((a, b) => a + b, 0) + " symbols. Maybe this is your lucky number?" ;
    wowContainer.appendChild(title).setAttribute("class", "wowtxt");

}

function useDate(){
    clearStuff()
    let bday = document.getElementsByName("birthday")[0].value;
    let splittedbdayArray = bday.split("-");
    let dateNow = (new Date()).getFullYear()
    let sentence;

    console.log(splittedbdayArray);

    if (splittedbdayArray[1] == "01" || splittedbdayArray[1] == "02" || splittedbdayArray[1] == "12" ) {
        sentence = "Brrr, you have cold winter-weather outside while celebrating. ";
        console.log("winter");  
    } 
    
    else if (splittedbdayArray[1] == "03" || splittedbdayArray[1] == "04" || splittedbdayArray[1] == "05" ) {
        sentence = "Fascinating. A birthday in spring with all the birds back home..";
        console.log("spring");
    } 
    
    else if (splittedbdayArray[1] == "06" || splittedbdayArray[1] == "07" || splittedbdayArray[1] == "08" ) {
        sentence = "Whew, I guess it's really hot on your birthday in summer.";
        console.log("summer");
    }
    
    else if (splittedbdayArray[1] == "09" || splittedbdayArray[1] == "10" || splittedbdayArray[1] == "11" ) {
        sentence = "Autumn leaves are celebrating birthday with you falling slowly..";
        console.log("autumn");
    } else {
        sentence = "I dare you to make this text appear without changing a code. If so, will get u a free coffee ;)";
    }

    title.innerHTML = sentence + " Are you " + ( dateNow - splittedbdayArray[0]) + " or " + (( dateNow - splittedbdayArray[0])-1) + " Years old?";
    wowContainer.appendChild(title).setAttribute("class", "wowtxt");

}

function submitting(){

    title.innerHTML = "Thank you for submitting your story. See you soon :)";
    wowContainer.appendChild(title).setAttribute("class", "wowtxt");
    return false;

    //this is still hard candy. I guess php would be better than js. But it's of course, an opinion.
}

