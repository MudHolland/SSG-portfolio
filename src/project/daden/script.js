document.addEventListener('DOMContentLoaded', () => {
    const blobs = document.querySelectorAll('.blob');
    const hero = document.querySelector('.hero');
    const sensitivity = 0.15; // Adjust this value to change mouse sensitivity
    let isTransitioning = false;

    hero.addEventListener('mousemove', (e) => {
        if (isTransitioning) return;

        const rect = hero.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        blobs.forEach((blob, index) => {
            const blobRect = blob.getBoundingClientRect();
            const blobCenterX = blobRect.left + blobRect.width / 2;
            const blobCenterY = blobRect.top + blobRect.height / 2;

            // Calculate distance between mouse and blob center
            const deltaX = mouseX - blobCenterX;
            const deltaY = mouseY - blobCenterY;

            // Move blob away from mouse
            const translateX = deltaX * sensitivity * (index + 1);
            const translateY = deltaY * sensitivity * (index + 1);

            // Apply transformation
            blob.style.transform = `translate(calc(-50% + ${translateX}px), calc(-50% + ${translateY}px))`;
        });
    });

    // Reset blob positions when mouse leaves
    hero.addEventListener('mouseleave', () => {
        isTransitioning = true;
        blobs.forEach(blob => {
            blob.style.transform = 'translate(-50%, -50%)';
        });

        // Wait for transition to complete before allowing new movements
        setTimeout(() => {
            isTransitioning = false;
        }, 1500); // Match this with CSS transition duration
    });
});
