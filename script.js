const moveButton = document.getElementById('moveButton');

function getRandomPosition() {
    const maxX = window.innerWidth - moveButton.clientWidth;
    const maxY = window.innerHeight - moveButton.clientHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    return { x: randomX, y: randomY };
}

function moveButtonRandomly() {
    const newPosition = getRandomPosition();
    moveButton.style.left = `${newPosition.x}px`;
    moveButton.style.top = `${newPosition.y}px`;
}

moveButton.addEventListener('mouseover', moveButtonRandomly);