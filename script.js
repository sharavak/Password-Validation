const input = document.querySelector('.user');
const checking = document.querySelectorAll('input');

const check = [];
let numbers = [];
let upper = [];
let userValue = 0;
let lower = [];
let specChar = [];

const specialCharaters='!@#$%^&*()_-=+|}]{[;:.?>,<`!'
for (let i of checking) {
    if (i.id === '') {
    }
    else {
        check.push(i);
    }
}

for (let i of check) {
    i.addEventListener('click', function () {
        alert('Hey! Only for result!');;
        i.checked = false;
    })
}

input.addEventListener('input', function () {
    lower = [];
    numbers = [];
    upper = [];
    specChar = [];
    userValue = input.value;
    validation(userValue);
})

function validation(userValue){
    let val = userValue.split('');

    val.filter(num => {
        if (isNaN(parseInt(num)) === true) {
            const lowe = num.toLowerCase();
            if (lowe === num) {
                if (specialCharaters.includes(lowe) === true) {
                    specChar.push(num);
                }
                else {
                    lower.push(num);
                }
            }
            else if(lowe !== num) {
                upper.push(num);
            }
            else {
                specChar.push(num);
            }
        }
        else {
            numbers.push(parseInt(num));
        }
    })

    if (numbers.length >= check[2].value) {
        check[2].checked = true;
    }
    else {
        check[2].checked = false;
    }
    if (lower.length >= check[1].value) {
        check[1].checked = true;
    }
    else {
        check[1].checked = false;
    }
    if (specChar.length >= check[3].value) {
        check[3].checked = true;
    }
    else {
        check[3].checked = false;

    }
    if (upper.length >= check[0].value) {
        check[0].checked = true;
    }
    else {
        check[0].checked = false;
    }
    if (userValue.length >= check[4].value) {
        check[4].checked = true;
    }
    else {
        check[4].checked = false;
    }
}
