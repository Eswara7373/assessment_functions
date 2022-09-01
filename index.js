
function hello(){
    console.log("hello")
}
hello();


function add(a,b){
    console.log(a+b);
}
add(3,4);



let arrow=()=>{
    console.log("arrow")
}
arrow();

function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      console.log(answer);
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      console.log(answer);
    }  
  }
   factorial(4);






