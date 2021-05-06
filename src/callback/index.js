function sum(num1,num2){
    return num1+num2;
}

//llamado  al callback por lo general esta es la notacion
function calc(num1,num2,callback){
    return callback(num1,num2);
}

console.log(calc(5,9,sum));

// otro ejemplo

function date(callback){
    console.log(new Date);
    setTimeout(function (){
        let date=new Date;
        callback(date);
    },4000);
}

function printDate(dateNow){
    console.log(dateNow);
}

date(printDate);