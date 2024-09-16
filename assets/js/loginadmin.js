
import {adminUser} from '../data/userdata.js';

const loginForm = document.getElementById('loginForm-admin');

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const adminEmail = document.getElementById('adminEmail').value;
    const adminPassword = document.getElementById('adminPassword').value;

    // Try fetching the adminUser array from the API endpoint
    try {
        const response = await fetch('https://your-api-endpoint.com/admin-users'); // Replace with your actual API endpoint
        const data = await response.json();
        adminUser = data; // Update the adminUser array with the fetched data
    } catch (error) {
        console.error('Error fetching admin users from API:', error);
    }

    // Validate user against the adminUser array
    const isValidUser = adminUser.some(user => {
        return user.username === adminEmail && user.password === adminPassword;
    });

    if (isValidUser) {
        // User is valid, redirect to admin.html
        window.location.href = 'admin.html';
    } else {
        alert('Invalid credentials');
    }
});     


