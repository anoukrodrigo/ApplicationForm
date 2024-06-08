document.getElementById('select-btn').addEventListener('click', function() {
    document.getElementById('dropdown-list').classList.toggle('show');
});

document.querySelectorAll('.option').forEach(item => {
    item.addEventListener('click', function() {
        const selectedText = this.querySelector('.option-text').innerText;
        const selectedValue = this.getAttribute('data-value');
        document.getElementById('text').innerText = selectedText;
        const admissionNumberField = document.getElementById('admission-number');
        admissionNumberField.value = selectedValue;
        admissionNumberField.dataset.value = selectedValue; // Store the original data-value in dataset
        document.getElementById('dropdown-list').classList.remove('show');
    });
});

window.addEventListener('click', function(e) {
    if (!document.querySelector('.select-menu').contains(e.target)) {
        document.getElementById('dropdown-list').classList.remove('show');
    }
});

document.getElementById('admission-number').addEventListener('input', function() {
    const inputValue = this.value.trim(); // Get the current value of the input
    const dataValue = this.dataset.value; // Get the original data-value

    if (!inputValue.startsWith(dataValue)) {
        // If the input value does not start with the data-value, prepend it
        this.value = dataValue + inputValue;
    }
});

document.getElementById('name-input').addEventListener('input', function() {
    const name = this.value.trim();
    const initialsAndSurname = getInitialsAndSurname(name);
    document.getElementById('initials-output').value = initialsAndSurname;
});

function getInitialsAndSurname(name) {
    const nameParts = name.split(' ').filter(part => part !== '');
    if (nameParts.length < 2) {
        return name; // Return the name as is if there's no surname
    }

    const initials = nameParts.slice(0, -1).map(part => part[0].toUpperCase()).join('');
    const surname = nameParts[nameParts.length - 1];
    
    return `${initials} ${surname}`;
}
