
let kajal;
function submit(e){

    //alert//

    kajal=setInterval(callback,0);
    kajal2=setInterval(callback2,3000);
    kajal3=setInterval(callback3,8000);
    kajal4=setInterval(callback4,10000);
    kajal5=setInterval(callback5,12000);
}
//     //0 seconds : Your order is accepted 
// 3 seconds : Your order is being Prepared 
// 8 seconds : Your order is being packed  
// 10 seconds : Your order is out for delivery 
// 12 seconds : Order delivered
// }
function callback(){
    alert("your order is accepted");
    clearInterval(kajal);
}
function callback2(){
    alert("your order is being prepared");
    clearInterval(kajal2);
}
function callback3(){
    alert("your order is being packed");
    clearInterval(kajal3);
}
function callback4(){
    alert("your order is out for delivery");
    clearInterval(kajal4);
}
function callback5(){
    alert("order delivered");
    clearInterval(kajal5);
}


