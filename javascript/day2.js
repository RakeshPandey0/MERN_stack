// let age_1 = prompt("What is your age?")


// if(age_1 > 0) 
// console.log(1)
// else if (age_1 < 0) 
// console.log(-1)
// else
// console.log(0)

// let a=undefined
// let b=null
// let c=1
// result = (a+b < 4)? 'Below':'Over'
// console.log(result

// let result = a || b || c
// let result_and = a && b && c
// console.log(result)
// console.log(result_and)

// let value = null;
// const test = "" || 'default value';
// console.log(test)
// const result_1 = 0 ?? 'default value';
// console.log(result_1)

// //while loop
// let i=1;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// //do while loop
// i=1;
// do{
//     console.log(i);
//     i++;
// }while(i<=10);

// // for loop
// for(let i=1; i<=10; i++){
//     console.log(i);
// }

// let switch_val = +prompt('a?', '')

// switch(switch_val){
//     case 0:
//         alert(0);
//         break;
//     case 1:
//         alert(1);
//         break;
//     case 2:
//         alert(2);
//         break;
//     case 3:
//         alert(3);
//         break;
//     case 4:
//         alert(4);
//         break;
//     case 5:
//         alert(5);
//         break;
//     case 6:
//         alert(6);
//         break;
//     case 7:
//         alert(7);
//         break;
//     case 8:
//         alert(8);
//         break;
//     case 9:
//         alert(9);
//         break;
//     default:
//         alert('die');
// }

function getDayName(dayNumber)
{

    switch(dayNumber){
    case 1:
        alert('Sunday');
        break;
    case 2:
        alert('Monday');
        break;
    case 3:
        alert('Tuesday');
        break;
    case 4:
        alert('Wednesday');
        break;
    case 5:
        alert('Thursday');
        break;
    case 6:
        alert('Friday');
        break;
    case 7:
        alert('Saturday');
        break;
    default:
        alert('die');   
    }
}

let dayNum = +prompt('Enter day number');
getDayName(dayNum);
