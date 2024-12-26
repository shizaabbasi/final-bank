document.addEventListener('DOMContentLoaded', () => {
    const balanceElement = document.getElementById('balance');
    const creditButton = document.getElementById('creditButton');
    const debitButton = document.getElementById('debitButton');

    let balance = 0;

    creditButton.addEventListener('click', () => {
        const amount = parseFloat(prompt('Enter amount to credit:'));
        if (!isNaN(amount) && amount > 0) {
            balance += amount;
            updateBalance();
        } else {
            alert('Please enter a valid amount.');
        }
    });

    debitButton.addEventListener('click', () => {
        const amount = parseFloat(prompt('Enter amount to debit:'));
        if (!isNaN(amount) && amount > 0) {
            if (amount <= balance) {
                balance -= amount;
                updateBalance();
            } else {
                alert('Insufficient balance.');
            }
        } else {
            alert('Please enter a valid amount.');
        }
    });

    function updateBalance() {
        balanceElement.textContent = balance.toFixed(2);
    }
});
