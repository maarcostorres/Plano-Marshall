const transactions = [
    { id: 1, type: 'PG', description: 'Pagamento', date: '01/04/2024', amount: 750 },
    { id: 2, type: 'CM', description: 'Compra', date: '29/03/2024', amount: -9.9 },
    { id: 3, type: 'CM', description: 'Compra', date: '26/03/2024', amount: -19.9 },
    { id: 4, type: 'PG', description: 'Pagamento', date: '12/03/2024', amount: 400 },
    { id: 5, type: 'CM', description: 'Compra', date: '04/03/2024', amount: -64.33 },
    { id: 6, type: 'CM', description: 'Compra', date: '27/02/2024', amount: -147.9 },
    { id: 7, type: 'CM', description: 'Compra', date: '15/02/2024', amount: -57.98 },
];

function renderTransactions() {
    const tbody = document.getElementById('transactions-body');
    tbody.innerHTML = '';
    transactions.forEach(transaction => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${transaction.type} ${transaction.description}</td>
            <td>${transaction.date}</td>
            <td class="${transaction.amount > 0 ? 'text-green' : 'text-red'}">
                ${transaction.amount > 0 ? '+' : ''}${transaction.amount.toFixed(2)}
            </td>
            <td>
                <div class="dropdown">
                    <button onclick="toggleDropdown(${transaction.id})" class="button">...</button>
                    <div id="dropdown-${transaction.id}" class="dropdown-content">
                        <a href="#">View details</a>
                        <a href="#">Download receipt</a>
                    </div>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function toggleDropdown(id) {
    document.getElementById(`dropdown-${id}`).classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    renderTransactions();

    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            // Here you would typically filter transactions based on the selected tab
            // For this example, we're just re-rendering all transactions
            renderTransactions();
        });
    });
});