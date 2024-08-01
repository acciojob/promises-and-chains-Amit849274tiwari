//your JS code here. If required.
document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const age = document.getElementById('age').value;
    const name = document.getElementById('name').value;

    // Validate inputs
    if (age === '' || name === '') {
        alert('Both fields are required.');
        return;
    }

    // Create a promise that resolves or rejects based on age
    const validateAge = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000);
    });

    // Handle the promise
    validateAge
        .then(message => {
            alert(message);
        })
        .catch(errorMessage => {
            alert(errorMessage);
        });
});