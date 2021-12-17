let elemento = document.createElement("div");
elemento.setAttribute("id", "red");
document.body.appendChild(elemento);



let elemento2 = document.createElement("div");
elemento2.setAttribute("id", "green");
document.body.appendChild(elemento2);

let myNumbers = [1,2,3,4,5,6,7,8,9];

for(let i=0; i< myNumbers.length; i++ ){ //i è uguale a 0 ma alla fine del ciclo è uguale a 2.
    if(myNumbers[i]%2 == 0){             //quindi dire myNumbers[i] è come dire tutti i numeri dell'array.
         
        document.querySelector("#red").innerHTML += myNumbers[i] +" ";  //inserisvco uno spazio per vedere i numeri distanziati

    }else{
        document.querySelector("#green").innerHTML += myNumbers[i] +" ";

    }

};