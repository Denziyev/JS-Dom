const a=document.getElementById("inputname");
const b=document.getElementById("inputpassword");
const c=document.getElementById("inputconfirm");
const d=document.getElementById("inputname1")
const e=document.getElementById("inputpassword1");
 let arr=[];
document.querySelectorAll("button")[0].addEventListener("click",()=>{
    if(a.value.trim() && b.value.trim() && c.value.trim() &&(b.value.trim()===c.value.trim())){
           arr.push(
            {name : a.value.trim(),password : b.value.trim()
            });
           
            const newtr=document.createElement("tr");
             const newtd=document.createElement("td");
             newtd.textContent=arr[arr.length-1].name;
             const newtd2=document.createElement("td");
             newtd2.textContent=arr[arr.length-1].password;
             newtr.append(newtd,newtd2);
             document.querySelector("tbody").append(newtr);
             a.value="";
             b.value="";
             c.value="";
                   
    }    
})
console.log(arr);

document.querySelectorAll("button")[1].addEventListener("click",()=>{
  for(const element of arr){
    if(element.name==d.value.trim() && element.password==e.value.trim() ){
        document.querySelector("div").innerHTML='';
        const newh5=document.createElement("h5");
        newh5.textContent="Logged in";
        document.querySelector("div").append(newh5);
        return;
    }
    else{
        document.querySelector("div").innerHTML='';
        const newh5=document.createElement("h5");
        newh5.textContent="Not logged in";
        document.querySelector("div").append(newh5);
    }
 };

})