function print (min, max) {
    let  res = min;
    for (let i = 0; i < max - 1;  i++) {
            res = res + 1;
        document.write(res);
    }
}
print(1, 5);

document.write("<hr/>");

function sum (a, b, c) {
    let sum = a + b + c;
    document.write(sum);
}

sum(1,2,3);

document.write("<hr/>");

const message = (msg = "Empty message", numb = 1) => {
    let msge = msg;
    let number = numb;
    document.write(msge);
    document.write(number);
}
// message(null,null); //або
message();

document.write("<hr/>");

//калькулятор
document.write("калькулятор");
const add = function (a = 0, b = 0) {
    return a + b;
}

const minus = (a = 0, b = 0) => {
    return a - b;
}

const multiple = (a = 0, b = 0) => {
    return a * b;
}

const divide =  (a, b) => {
    return a / b;
}

// const calc = (...other) => {
//     console.log(other[0]);
//     document.write("<p>" + result + "</p>");
//         if (other.length != 3)
//             // console.log(other.length)
//             alert('ошибка');    
//  
// }

const calc = (callBackFunction, a, b) => {
    const result = callBackFunction(a, b);
    document.write("<p>" + result + "</p>");
};

calc(minus, 10, 10);
calc(multiple, 2, 3);
calc(minus, 5, 3);
calc(divide, 6, 3);
