

function total() {
    let budget = document.getElementById('inputBudget');
    let firstNumber = document.getElementById('firstZero');
    let b = budget.value;
    firstNumber.innerText = b
};

function addList() {
    let names = document.getElementById('inputName').value;
    let price = document.getElementById('inputPrice').value;

    if (names.length === 0 || price.length === 0) {
        alert('Please enter a value for both name and price.');
    } else {
        let list = document.getElementById('list');
        let totalPrice = 0;
        let newRow = document.createElement('tr');
        newRow.className = 'jslist';
        let nameCell = document.createElement('td');
        nameCell.textContent = names;
        newRow.appendChild(nameCell)

        let priceElements = document.getElementsByClassName('jslist');
        for (let i = 0; i < priceElements.length; i++) {
            let currentPrice = parseInt(priceElements[i].querySelector('td:nth-child(2)').textContent);
            totalPrice += currentPrice;
        }

        let totalElement = document.getElementById('secondZero');
        totalElement.innerText = totalPrice;

    }
    let b = document.getElementById('firstZero').value;
    let list = document.getElementById('list');
    let totalPrice = 0;
    let newRow = document.createElement('tr');
    newRow.className = 'jslist';
    let nameCell = document.createElement('td');
    nameCell.textContent = names;
    newRow.appendChild(nameCell);
    let priceCell = document.createElement('td');
    priceCell.textContent = price;
    newRow.appendChild(priceCell);
    list.appendChild(newRow);

    let priceElements = document.getElementsByClassName('jslist');
    for (let i = 0; i < priceElements.length; i++) {
        let currentPrice = parseInt(priceElements[i].querySelector('td:nth-child(2)').textContent);
        totalPrice += currentPrice;
    }

    // let totalElement = document.getElementById('secondZero');
    // totalElement.innerText = totalPrice;
    // let a = b - totalPrice;
    // let zero = document.getElementById('thirdZero');
    // zero === a;
}







