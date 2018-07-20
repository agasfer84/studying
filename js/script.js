"use strict";

function myAlert(){
    alert("Я – JavaScript!");
}

//myAlert();

function variables() {
    var admin, name;
    name = "Василий";
    admin = name;
    alert(admin);
}

//variables();

function declareVariables() {
    var earthName = "Земля"; //var ourPlanetName
    var userName = "Петя";
}

function types() {
    var obj = {};
    var arr = [];
    console.log(obj, arr);
    console.log(typeof obj, typeof arr);// object, object
}

//types();

function operatorsTest() {
    var a = 2;
    var x = 1 + (a *= 2);
    var iThinkX = 5;
    console.log(x == iThinkX);
}
//operatorsTest();

function askName() {
    var ask = prompt("What is your name?",'');
    alert(ask);
}
//askName();
function jsOfficialName(){
    var question = prompt('Каково "официальное" название JavaScript?', "");
    if(question == "ECMAScript"){
        alert("Верно!");
    }
    else {
        alert('Не знаете? "ECMAScript"!');
    }
}

//jsOfficialName();

function sign(){
    var getNumber = prompt('Введите число','');
    var result = false;
    if (getNumber > 0){result = 1;}
    else if (getNumber < 0){result = -1;}
    else if (getNumber == 0){result = 0;}
    alert(result);
}

//sign();

function whoAreYou() {
    var loginForm = prompt('Кто пришел?','');
    if (loginForm == "Админ"){
        var passwordform = prompt('Пароль?','');
        if (passwordform ==  "Чёрный Властелин"){
            alert("Добро пожаловать!");
        }
        else if(passwordform == null){
            alert("Вход отменен");
        }
        else {
            alert("Пароль неверен");
        }
    }
    else if (loginForm == null){
        alert("Вход отменен");
    }
    else {
        alert("Я вас не знаю");
    }
}

//whoAreYou();

function toTernarRewriteTest(){
    function usual(a, b){
        var result;
        if (a + b < 4) {
            result = 'Мало';
        } else {
            result = 'Много';
        }
        return result
    }

    function ternar(a, b){
        var result;
        result = (a + b < 4) ? 'Мало' : 'Много';
        return result;
    }

    console.log(usual(1, 2), ternar(1, 2));
    console.log(usual(1, 2)==ternar(1, 2));
}

//toTernarRewriteTest();

function toTernarRewrite2() {
    var message;
    var login = prompt("Логин","");
    message = (login == 'Вася') ? 'Привет' : (login == 'Директор') ? 'Здравствуйте' : (login == '' || login == null) ? 'Нет логина' : '';
    alert(message);
}
//toTernarRewrite2();

function inDiapason() {
var age=91;
    console.log(age<=90&&age>=14);
}

//inDiapason();

function outDiapason(){
    var age=14;
    // if(!(age>=14&&age<=90)){console.log("вне диапазона");}
    // else {console.log("в диапазное");}

    if((age<14||age>90)){console.log("вне диапазона");}
    else {console.log("в диапазное");}
}

//outDiapason();

function primitiveConversionsTest(){
    console.log(
        ("" + 1 + 0),//10
        ("" - 1 + 0),//-1
        (true + false),//1
        6 / "3",//2
        "2" * "3",//6
        4 + 5 + "px",//9px
        "$" + 4 + 5, //$45
        "4" - 2,//2
        "4px" - 2,//NaN отбрасываются пробелы и переводы строк но не символы
        7 / 0,//Infinity
        "  -9\n" + 5,//-9 5 строка + число = строка
        "  -9\n" - 5,//-14
        5 && 2,//2 т.к. 5 это true, то возвращается значение 2
        2 && 5, //5
        5 || 0,//5 || до первого true
        0 || 5,//5
        null + 1,//1 null в 0
        undefined + 1,//NaN undefined в NaN
        null == "\n0\n",//false "null == undefined и только
        +null == +"\n0\n"//true
    );
}

//primitiveConversionsTest();

function evenNumbers(){
    for(var i=2; i<=10; i++){
        if(i%2){continue;}
        alert(i);
    }
}
//evenNumbers();

function forToWhile(){
    var i = 0;
    while(i < 3){
        alert( "номер " + i + "!" );
        i++;
    }
}

//forToWhile();
function checkNumberValue()
{
    while(true){
        var numberValue = +prompt("Введите число больше 100","");//+ приводим возвращаемую строку к числу
        if(numberValue>100||!numberValue){break;}
    }
}

//checkNumberValue();

function listPrimes(f,l){
    // for(var i=f; i<=l; i++){
    //     var checker = 1;
    //     for(var j=2; j<=i-1&&i!=j; j++) {
    //         checker = checker * i%j;
    //         }
    //     if(checker){alert(i);}
    // } //мое решение - тоже верное

    nextPrime: for (var i = f; i <= l; i++) {

        for (var j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }

        alert(i); // простое
    }
}
//listPrimes(2,10);

function switchToIf(browser){

    if(browser == 'IE'){
        alert( 'О, да у вас IE!' );
    }
    else if(browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
        alert( 'Да, и эти браузеры мы поддерживаем' );
    }
    else {
        alert( 'Мы надеемся, что и в вашем браузере все ок!' );
    }
}

//switchToIf('Firefox');

function ifToSwith(){
    var a = +prompt('a?', '');
    switch(a){
        case 0:alert( 0 );
            break;
        case 1:alert( 1 );
            break;
        case 2:
        case 3:
            alert( '2,3' );
            break;
    }
}

//ifToSwith();

function checkAge(age) {
    // if (age > 18) {
    //     return true;
    // } else {
    //     return confirm('Родители разрешили?');
    // }
    //return (age > 18) ? true: confirm('Родители разрешили?');
    return (age > 18)||confirm('Родители разрешили?');
}

//console.log(checkAge(19));

function min(a, b){
    return (a < b ) ? a : b;
}
//console.log(min(1, 1));

function pow(){
    var x = prompt("Введите число", "");
    var n = prompt("Введите степень", "");
    if(n<1||n%1!=0){return "Введите натуральное число";}
    var i = 1;
    var result = x;
    while(i < n){
        result = result*x;
        i++;
    }
    return result;
}

//alert(pow());

function sumToLoop(n){
    var sum = 0;
    for(var i = 1;i <= n;i++){
        sum += i;
    }
    alert(sum);
}

//sumToLoop(100);

function sumToRecursion(n){
    var sum =0;
    if (n > 1) {
        sum = n + sumToRecursion(n - 1);
    }
    else if(n ==1 ){return 1;}
    return sum;
}

//alert(sumToRecursion(100));

function sumToFormula(n){
return ((1 + n)/2)*n;
}
//alert(sumToFormula(100));
function factorial(n){
    if(n>=1){
        var result;
        if(n ==1 ){return 1;}
        result = n*factorial(n-1);
        return result;
    }
}

//alert(factorial(5));

function fib(n){
    
}