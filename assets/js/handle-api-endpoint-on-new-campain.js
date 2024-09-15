

// function handleSubmit(event) {
//     event.preventDefault();
  
//     // Get form data
//     const formData = new FormData(document.getElementById('contact-form'));
  
//     // Create a new cause object
//     const newCause = {
//       image: formData.get('image'),
//       title: formData.get('title'),
//       description: formData.get('description'),
//       progress: formData.get('progress'),
//       goal: formData.get('goal'),
//       raised: formData.get('raised')
//     };
  
//     // Call the loadAndUpdateCauses function with the new cause object
//     loadAndUpdateCauses(newCause);
//   }
  
//   async function loadAndUpdateCauses(newCause) {
//     try {
//       const response = await fetch('assets/data/campains.json');
//       const data = await response.json();
  
//       // Access the causes array
//       const causes = data.causes;
  
//       // Add the new cause to the array
//       causes.push(newCause);
  
//       // Update the file
//       fs.writeFileSync('assets/data/campains.js', JSON.stringify({ causes }));
  
//       console.log('Updated causes:', causes);
//     } catch (error) {
//       console.error('Error loading or updating causes:', error);
//     }
//   }


function handleSubmit(event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(document.getElementById('contact-form'));

    // Create a new cause object
    const newCause = {
      image: formData.get('image'),
      title: formData.get('title'),
      description: formData.get('description'),
      progress: formData.get('progress'),
      goal: formData.get('goal'),
      raised: formData.get('raised')
    };

    // Store the data in localStorage
    localStorage.setItem('newCause', JSON.stringify(newCause));

    // Call the loadAndUpdateCauses function to update the causes array if needed
     loadAndUpdateCauses(newCause);
}
async function loadAndUpdateCauses(newCause) {
    try {
      // Add the new cause to the array
      causes.push(newCause);
      console.log('Updated causes:', causes);
    } catch (error) {
      console.error('Error loading or updating causes:', error);
    }}