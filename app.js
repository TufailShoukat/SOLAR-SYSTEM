
document.addEventListener('DOMContentLoaded', () => {
    const planets = document.querySelectorAll('.planet');
    planets.forEach(planet => {
        planet.addEventListener('animationiteration', () => {
            console.log(`${planet.classList[1]} completed an orbit.`);
        });
    });
});

