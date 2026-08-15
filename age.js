const input=document.getElementById('dob');
const get=document.getElementById('age');
const r=document.getElementById('r');
const dis=document.getElementById('dis');
const dis1=document.getElementById('u');

get.addEventListener('click',async()=>{  
    const dob=input.value;
    if(!dob){
        dis.textContent="⚠️ Please select your Date Of Birth";
        dis.style.color="red";
        setTimeout(()=>{
            dis.textContent="";
        },1000);
        return;
    } 
       const responce=await fetch("http://localhost:3000/age",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            dob:dob
        })
       });
       const data=await responce.json();
       dis1.textContent=`Your age is ${data.age} year`;
       dis1.style.fontSize="25px";
       dis1.style.backgroundColor="green";

});
r.addEventListener('click',async()=>{
            const responce=await fetch("http://localhost:3000/age",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            dob:dob
        })
       });
       const data=await responce.json();
       dis1.textContent=``;
       dis1.style.fontSize="";
       dis1.style.backgroundColor=" "; 
       });
