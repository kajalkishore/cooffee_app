// Add the coffee to local storage with key "coffee"

//this function catc data from api

async function item(){
    let url= "https://masai-mock-api.herokuapp.com/coffee/menu";
    let res=await fetch(url)
    let data=await res.json();
displayCoffee(data.menu.data)
// console.log(data.menu.data);
}
item()
//this function will display the coffe data to the dom
function displayCoffee(data){
    data.forEach(function(element,i){
        let box=document.createElement("div");
        box.id="box1";
    
        let type_of_coffee=document.createElement("h3");
        type_of_coffee.innerText=element.title;

        let image=document.createElement("img");
        image.src=element.image;
        let price=document.createElement("p");
        price.textContent="Price:"+" $"+ element.price;

        let addToBucket=document.createElement("button");
        addToBucket.setAttribute("id","addtobucket");
        addToBucket.textContent="Add To bucket";
    
        addToBucket.addEventListener("click",function(){
addMe(element,i);
        });
        box.append(type_of_coffee,image,price,addToBucket);
        document.querySelector("#menu").append(box);
        
    });
}
let cartArr=JSON.parse(localStorage.getItem("bucket")) || [];
function addMe(element){
    cartArr.push(element);
    localStorage.setItem("bucket",JSON.stringify(cartArr));
    let count=documentgetElementById("coffee_count");
    let counting=cartArr.length;
    count.textContent=counting++;
    console.log(counting);
}