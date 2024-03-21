document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('flowerCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Draw sky
    ctx.fillStyle = 'skyblue';
    ctx.fillRect(0, 0, canvas.width, canvas.height / 2);

    // Draw grass
    ctx.fillStyle = 'green';
    ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2);

    // Draw the sun
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, Math.PI * 2);
    ctx.fill();

    function drawFlower(x, y) {
        // Draw stem
        ctx.fillStyle = 'green';
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + 100);
        ctx.stroke();

        // Draw leaves
        ctx.fillStyle = 'green';
        ctx.beginPath();
        ctx.ellipse(x - 10, y + 30, 20, 10, Math.PI / 2, 0, Math.PI * 2);
        ctx.ellipse(x + 10, y + 60, 20, 10, -Math.PI / 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw the center of the flower
        ctx.fillStyle = 'purple';
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, Math.PI * 2);
        ctx.fill();

        // Draw petals
        ctx.fillStyle = 'yellow';
        let petalRadius = 30;
        for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 4) {
            let petalX = x + Math.cos(angle) * petalRadius;
            let petalY = y + Math.sin(angle) * petalRadius;
            ctx.beginPath();
            ctx.ellipse(petalX, petalY, 15, 10, angle, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Draw the flower slightly off-center to leave space for the sun
    const centerX = canvas.width / 2;
    const centerY = (canvas.height / 3) * 2;
    drawFlower(centerX, centerY - 50);
});
