let elemento = document.createElement("div");
elemento.setAttribute("id", "red");
document.body.appendChild(elemento);



let elemento2 = document.createElement("div");
elemento2.setAttribute("id", "green");
document.body.appendChild(elemento2);

let myNumbers = [1,2,3,4,5,6,7,8,9];

for(let i=0; i< myNumbers.length; i++ ){
    if(myNumbers[i]%2 == 0){
        
        document.querySelector("#red").innerHTML += myNumbers[i] +" ";

    }else{
        document.querySelector("#green").innerHTML += myNumbers[i] +" ";

    }

};