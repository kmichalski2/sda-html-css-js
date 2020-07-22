const buttonAdd = document.querySelector('#buttonAdd');

const $buttonAdd = $('#buttonAdd');

const formControls = document.querySelectorAll('.form-control');

const paragraphs = document.querySelectorAll('p');

const orderList = document.querySelector('#orderList');

const meals = [];

const foodNameInput = document.querySelector('#foodName');

// buttonAdd.addEventListener('click', function() {
//     const foodName = foodNameInput.value;
//
//     if (meals.includes(foodName.toLowerCase()) || foodName === '') {
//         alert('Wprowwadz poprawny posilek!');
//     } else {
//         const li = document.createElement('li'); // <li></li>
//         li.innerHTML = foodName; // <li>Pizzza</li>
//
//         orderList.appendChild(li);
//         meals.push(foodName.toLowerCase());
//     }
// });

$buttonAdd.on('click', function () {
    const foodName = $('#foodName').val();

   $('#orderList').append(`<li>${foodName}</li>`)
    meals.push(foodName.toLowerCase());
});

foodNameInput.addEventListener('keyup', function(event) {
    const input = event.target;
    const inputText = input.value;

    if (inputText.length === 0) {
        input.classList.add('error');
    } else {
        input.classList.remove('error');
    }
});

$('#orderButton').on('click', function() {
    const data = {
        order: meals
    }

    $.post("http://localhost:8200/order", data, function(responseData) {
       alert('Twoje zamówienie zostało pryjęte!');
    }).fail(function() {
        console.error('Nie udało się złożyć zamówienia!');
    })
});
