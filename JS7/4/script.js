'use strict';

// Задание 4
function oplata (){
    let a = +prompt ('Стоимость покупки:','');
    let b = +prompt ('Внесите ваши средства:','');
    if (a>=b){
        alert(`Недостаточная сумма для оплаты`)}
    else{
        alert(`Ваша сдача: ${b-a}`);}
}
oplata ();


// С колбэками что-то не получилось:(
function oplata (price, yes, no){
    let a = +prompt ('Стоимость покупки:','');
    let b = +prompt ('Внесите ваши средства:','');
    price =  b>=a;
    if (confirm(price)) yes();
    else no();}

    function showOk(){
        alert(`Ваша сдача: ${b-a}`);} 
        
    function showCancel(){
        alert(`Недостаточная сумма для оплаты`);}  
      
oplata ('Итого', showOk, showCancel);



