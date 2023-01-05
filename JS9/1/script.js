'use strict';

//Задание 1
const person = {
    surname:'Пульман',
    name: 'Герман', 
    middleName: 'Георгиевич',
    yearBorn: +'1989',
    profession: 'FrontEnd developer',
    position: 'Junior specialist',
    experiene: +'6 месяцев',
    };


    delete person.middleName;
    console.log('middleName' in person);


    for (let key in person){
        alert (key);
    }


    let number=0;
    for (let chisla in person){
        if (typeof person[chisla]==='number'){
           number++;}
            }
            console.log (number);


