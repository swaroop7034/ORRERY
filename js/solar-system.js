document.querySelectorAll('.planet').forEach(planet => {
    planet.addEventListener('click', () => {
        const name = planet.getAttribute('data-name');
        const description = planet.getAttribute('data-description');
        
        // Set modal content
        document.getElementById('planet-name').textContent = name;
        document.getElementById('planet-description').textContent = description;

        // Show modal
        document.getElementById('planet-info-modal').style.display = 'block';
    });
});

// Close modal button
document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('planet-info-modal').style.display = 'none';
});
