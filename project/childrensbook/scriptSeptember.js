// Leaf class to manage position, velocity, and rotation
class Leaf {
    constructor(imgSrc, x, y) {
        this.element = document.createElement('img');
        this.element.src = imgSrc;
        this.element.className = 'leaf';
        this.element.style.width = `${Math.random() * 30 + 20}px`; // Random size between 20px and 50px
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2; // Random initial horizontal velocity
        this.vy = 0; // Initial vertical velocity
        this.rotation = Math.random() * 360; // Random initial rotation
        this.rotationSpeed = (Math.random() - 0.5) * 5; // Random rotation speed
        document.querySelector('.container').appendChild(this.element);
        this.updatePosition();
    }

    updatePosition() {
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
        this.element.style.transform = `rotate(${this.rotation}deg)`;
    }

    applyForce(fx, fy) {
        this.vx += fx;
        this.vy += fy;
    }
}

// Initialize leaves
const leaves = [];
const leafImages = [
    'leaf1.png', 'leaf2.png', 'leaf3.png', 'leaf4.png', 'leaf5.png',
    'leaf6.png', 'leaf7.png', 'leaf8.png', 'leaf9.png'
];

for (let i = 0; i < 10; i++) {
    const leafImg = leafImages[Math.floor(Math.random() * leafImages.length)];
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    leaves.push(new Leaf(leafImg, x, y));
}

// Physics constants
const GRAVITY = 0.2;
const FRICTION = 0.98;
let tiltX = 0;
let tiltY = 0;
let hasGyroscopeAccess = false;

// Check if the device is iOS (for permission request)
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

// Request gyroscope permission on iOS
if (isIOS && typeof DeviceOrientationEvent.requestPermission === 'function') {
    const permissionButton = document.createElement('button');
    permissionButton.innerText = 'Enable Gyroscope';
    permissionButton.className = 'nav-button gyro-button';
    permissionButton.style.bottom = '80px'; // Position above the navigation buttons
    permissionButton.style.left = '50%';
    permissionButton.style.transform = 'translateX(-50%)';
    document.querySelector('.container').appendChild(permissionButton);

    permissionButton.addEventListener('click', () => {
        DeviceOrientationEvent.requestPermission()
            .then(response => {
                if (response === 'granted') {
                    hasGyroscopeAccess = true;
                    permissionButton.style.display = 'none'; // Hide button after permission is granted
                    window.addEventListener('deviceorientation', handleDeviceOrientation);
                } else {
                    console.log('Gyroscope permission denied');
                }
            })
            .catch(error => {
                console.error('Error requesting gyroscope permission:', error);
            });
    });
} else {
    // Non-iOS devices or devices that don't require permission
    hasGyroscopeAccess = true;
    window.addEventListener('deviceorientation', handleDeviceOrientation);
}

// Handle device orientation
function handleDeviceOrientation(event) {
    if (!hasGyroscopeAccess) return;
    // Map device tilt to acceleration
    tiltX = (event.gamma || 0) / 90; // Left-right tilt (-1 to 1)
    tiltY = (event.beta || 0) / 45;  // Forward-back tilt (adjusted for sensitivity)

    // Log tilt values for debugging (optional)
    console.log('Beta (forward-back tilt):', event.beta, 'Mapped tiltY:', tiltY);
}

// Swipe handling for devices without gyroscope or as a fallback
let touchStartY = 0;
document.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
});

document.addEventListener('touchend', (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    if (touchStartY - touchEndY > 50) { // Swipe up
        leaves.forEach(leaf => {
            leaf.applyForce((Math.random() - 0.5) * 6, -15); // Strong upward impulse with random horizontal scatter
        });
    }
});

// Animation loop
function animate() {
    leaves.forEach(leaf => {
        // Apply gravity (always downward)
        leaf.vy += GRAVITY;

        // Apply tilt forces (from gyroscope)
        if (hasGyroscopeAccess) {
            // Horizontal movement based on left-right tilt (gamma)
            leaf.vx += tiltX * 0.1;

            // Vertical movement based on forward-back tilt (beta)
            // When beta = 0 (flat), no additional vertical force from tilt
            // When beta < 0 (tilted back), apply upward force (negative vy)
            // When beta > 0 (tilted toward user), apply downward force (positive vy)
            if (tiltY < 0) {
                // Tilted backward: leaves "fall upward" slowly
                leaf.vy += tiltY * -0.05; // Smaller multiplier for slower upward movement
            } else if (tiltY > 0) {
                // Tilted toward user: leaves fall downward, faster with more tilt
                leaf.vy += tiltY * 0.2; // Larger multiplier for faster downward movement
            }
        }

        // Apply friction
        leaf.vx *= FRICTION;
        leaf.vy *= FRICTION;

        // Update position
        leaf.x += leaf.vx;
        leaf.y += leaf.vy;

        // Update rotation
        leaf.rotation += leaf.rotationSpeed;

        // Boundary checks (wrap around screen)
        if (leaf.x > window.innerWidth) leaf.x = -leaf.element.offsetWidth;
        if (leaf.x < -leaf.element.offsetWidth) leaf.x = window.innerWidth;
        if (leaf.y > window.innerHeight) leaf.y = -leaf.element.offsetHeight;
        if (leaf.y < -leaf.element.offsetHeight) leaf.y = window.innerHeight;

        // Update leaf element position
        leaf.updatePosition();
    });

    requestAnimationFrame(animate);
}

// Start animation
animate();

// Navigation functions (placeholders for now)
function goToPreviousMonth() {
    // Replace with actual navigation logic (e.g., redirect to August page)
    alert('Go to previous month (August)');
}

function goToNextMonth() {
    // Replace with actual navigation logic (e.g., redirect to October page)
    alert('Go to next month (October)');
}