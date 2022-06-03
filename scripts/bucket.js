// On clicking remove button the item should be removed from DOM as well as localstorage.
let cartArr=JSON.parse(localStorage.getItem("bucket"));
// console.log(cartArr);
displayCartItems(cartArr);
function displayCartItems(cartArr){
    document.querySelector("#bucket").innerHTML=null;
    cartArr.map(function (element,i){
        let box=document.createElement("div");
        box.id="box";
    
        let type_of_coffee=document.createElement("h1");
        type_of_coffee.innerText=element.title;

        let image=document.createElement("img");
        image.src=element.image;
        image.id="imgg"
        let price=document.createElement("p");
        price.textContent="$ "+element.price;
    price.id="price";

        let remove=document.createElement("button");
        remove.setAttribute("id","remove");
        remove.textContent="Remove Me";
        
        remove.addEventListener("click",function(){
removeMe(i);
        });
        box.append(type_of_coffee,image,price,remove);
        document.querySelector("#bucket").append(box);
        
    });
}

totalPrice(cartArr)
    function removeMe(i){
cartArr.splice(i,1);
displayCartItems(cartArr);
localStorage.setItem("cart",JSON.stringify(cartArr));
totalPrice(cartArr);
console.log("cartArr:",cartArr);
console.log("cartArr:","Its working");


    }
    function totalPrice(arr){
        let totalPrice=0;
        for(let i=0;i<arr.length;i++){
            totalPrice +=arr[i].price;
        }
document.querySelector("#total-amount").textContent="Total Bill:"+totalPrice;
        
    }




    // modals

    



