const output=document.querySelector(".top");
const buttons=Array.from(document.querySelectorAll(".button"));
const clear=document.querySelector(".reset");


clear.addEventListener("click",(e)=>{
    string="";
    output.innerText=string
})

let string="";
let extra="";


buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
    
        if(button.innerText=="="){
            let curr=eval(string);
            output.innerText=curr.toString();
            string=curr.toString();
        }
        else{
            string+=button.innerText;
        }
        
        output.innerText=string;
    })
})



