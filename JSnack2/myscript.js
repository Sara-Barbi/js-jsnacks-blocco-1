let N = parseInt(prompt("inserisci un numero"));


for(let i=0; i<N; i++){
    let myArr= []; 
    
    for(let index = 0; index <10; index++ ){
        myArr.push(Math.floor(Math.random()*100)+1);

        console.log(myArr);
    }

};