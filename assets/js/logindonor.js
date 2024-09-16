import {donorUser} from '../data/userdonor.js';

const loginForm_donor = document.getElementById('loginForm-donor');

loginForm_donor.addEventListener('submit', async (event) => {
    event.preventDefault();

    const login_donor_username = document.getElementById('donorEmail').value;
    const login_donor_password = document.getElementById('donorPassword').value;

    // Try fetching the donorUser array from the API endpoint
    try {
        const response = await fetch('https://your-api-endpoint.com/donor-users'); // Replace with your actual API endpoint
        const data = await response.json();
        donorUser = data; // Update the donorUser array with the fetched data
    } catch (error) {
        console.error('Error fetching donor users from API:', error);
    }

    // Validate user against the donorUser array
    const isValidUser = donorUser.some(user => {
        return user.username === login_donor_username && user.password === login_donor_password;
    });

    if (isValidUser) {
        // User is valid, redirect to index.html
        window.location.href = 'index.html';
    } else {
        alert('Invalid credentials');
    }
});