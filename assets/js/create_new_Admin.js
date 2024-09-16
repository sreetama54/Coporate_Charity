const loginForm = document.getElementById('newadminUser');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(loginForm);

    const data = {
        firstName: formData.get('fname'),
        lastName: formData.get('lname'),
        phoneNumber: formData.get('phnumber'),
        emailAddress: formData.get('newademail'),
        uid:"uniquie"+Math.random().toString(10)
    };

    // Store the data in localStorage
    localStorage.setItem('newAdminData', JSON.stringify(data));
    const newAdmindata=localStorage.getItem(newAdminData)
    console.log('New Admindata',newAdmindata);
    
     fetch('https://your-api-endpoint.com/submit-data', {
      method: 'POST',
    headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify(data)
     })
    .then(response => response.json())
     .then(data => {
        console.log('Response from API:', data);
 })
     .catch(error => {
    console.error('Error sending data:', error);
     });

    console.log('Data saved to localStorage:', data);
});