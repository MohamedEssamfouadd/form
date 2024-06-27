const Name=document.querySelector("#prodect_name")
const age=document.querySelector("#prodect_age")
const price=document.querySelector("#prodect_price")
const phone=document.querySelector("#prodect_phone")
const select=document.querySelector("#select_one")
const btn=document.querySelector(".btn")
const btnn=document.querySelector(".btnn")
let contain_prodect=[]
if(localStorage.getItem("pro")){
    contain_prodect=JSON.parse(localStorage.getItem("pro"))
    toadd(contain_prodect)


 }
btn.addEventListener("click",(e)=>{
    e.preventDefault()
    const prodect={
        name:Name.value,
        age:age.value,
        price:price.value,
        phone:phone.value,
        select:select.value

    };
   contain_prodect.push(prodect)
   localStorage.setItem("pro",JSON.stringify(contain_prodect))
   toadd(contain_prodect)
   clear()
   
  
    
   
})
function toadd(tasks) {
    let data=``
    tasks.forEach((element,index)=> {
        data +=`<tr>
        <td>${element.name}</td>
        <td>${element.age}</td>
        <td>${element.price}</td>
        <td>${element.phone}</td>
        <td>${element.select=="1"?"front end":element.select=="2"?"back end":element.select=="3"?"full stack":"null"}</td>
        <td><button onclick="ediet(${index})" class="bttn_one"><i class="fa-solid fa-pen-to-square"></i></button></td>
        <td><button onclick="deleteInput(${index})" class="bttn_two"><i class="fa-solid fa-trash"></i></button></td>
    </tr>`
        
    });
    document.getElementById("show").innerHTML=data;
   
  
}
let Dk=0;
function ediet(id){
    Dk=id;

    Name.value=contain_prodect[id].name
    age.value=contain_prodect[id].age
    price.value=contain_prodect[id].price
    phone.value=contain_prodect[id].phone
    select.value=contain_prodect[id].select
    btn.classList.add("active")
    btnn.classList.remove("active")

}
btnn.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log("hello");
    contain_prodect[Dk].name=Name.value
    contain_prodect[Dk].age=age.value
    contain_prodect[Dk].price=price.value
    contain_prodect[Dk].phone=phone.value
    contain_prodect[Dk].select=select.value
    toadd(contain_prodect)
    btn.classList.remove("active")
    btnn.classList.add("active")
    clear()
    localStorage.setItem("pro",JSON.stringify(contain_prodect))
    

})



function deleteInput(id){
     contain_prodect=contain_prodect.filter((data,index)=>id!=index)
     localStorage.setItem("pro",JSON.stringify(contain_prodect))
     toadd(contain_prodect)
    
   
     

}
function clear(){
    Name.value="";
   age.value="";
   price.value="";
    phone.value="";
    select.value="0"
   
}

   
