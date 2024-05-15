document.addEventListener('DOMContentLoaded', function() {
    const members = ['Ruyuf', 'Shahad', 'Waad'];
    members.sort(() => 0.5 - Math.random());
    const list = document.getElementById('member-list');
    list.innerHTML = members.map(member => <li>${member}</li>).join('');
});