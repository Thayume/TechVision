// JavaScript code can be added here to handle dynamic interactions
// For example, adding functionality to update values in the table

document.addEventListener('DOMContentLoaded', () => {
    // Example function to update values
    const updateValues = () => {
        const values = document.querySelectorAll('.valores div');
        values.forEach((value, index) => {
            value.textContent = Math.floor(Math.random() * 200); // Random values for demonstration
        });
    };

    // Call updateValues function as an example
    updateValues();
});
