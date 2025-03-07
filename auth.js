// Auth State Management
let currentUser = null;

// Auth UI Elements
const authModal = document.getElementById('auth-modal');
const authForm = document.getElementById('auth-form');
const authTitle = document.getElementById('auth-title');
const authSwitchText = document.getElementById('auth-switch-text');
const authSwitchBtn = document.getElementById('auth-switch-btn');
const signUpFields = document.querySelector('.sign-up-fields');

// Auth State
let isSignUp = false;

// Toggle Auth Mode
function toggleAuthMode() {
    isSignUp = !isSignUp;
    authTitle.textContent = isSignUp ? 'Sign Up' : 'Sign In';
    authSwitchText.textContent = isSignUp ? 'Already have an account?' : "Don't have an account?";
    authSwitchBtn.textContent = isSignUp ? 'Sign In' : 'Sign Up';
    signUpFields.classList.toggle('hidden');
    authForm.querySelector('button[type="submit"]').textContent = isSignUp ? 'Sign Up' : 'Sign In';
}

// Show Auth Modal
function showAuthModal() {
    authModal.classList.remove('hidden');
}

// Hide Auth Modal
function hideAuthModal() {
    authModal.classList.add('hidden');
    // Reset form
    authForm.reset();
    if (isSignUp) {
        toggleAuthMode();
    }
}

// Handle Auth Form Submit
async function handleAuthSubmit(e) {
    e.preventDefault();
    
    const email = authForm.querySelector('input[type="email"]').value;
    const password = authForm.querySelector('input[type="password"]').value;
    
    try {
        if (isSignUp) {
            const name = authForm.querySelector('input[type="text"]').value;
            // Create user
            const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
            // Update profile
            await userCredential.user.updateProfile({
                displayName: name
            });
            showNotification('Account created successfully!', 'success');
        } else {
            // Sign in user
            await firebase.auth().signInWithEmailAndPassword(email, password);
            showNotification('Signed in successfully!', 'success');
        }
        hideAuthModal();
    } catch (error) {
        showNotification(error.message, 'error');
    }
}

// Auth State Observer
firebase.auth().onAuthStateChanged((user) => {
    currentUser = user;
    updateUIForUser(user);
});

// Update UI based on auth state
function updateUIForUser(user) {
    const userBtn = document.getElementById('user-btn');
    const userDropdown = document.querySelector('.user-dropdown');
    
    if (user) {
        // User is signed in
        userBtn.innerHTML = `
            <img src="${user.photoURL || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(user.displayName)}" 
                 alt="Profile" 
                 class="w-8 h-8 rounded-full">
        `;
        userDropdown.innerHTML = `
            <div class="px-4 py-2 text-sm text-gray-700 border-b">
                <div class="font-medium">${user.displayName}</div>
                <div class="text-gray-500">${user.email}</div>
            </div>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Orders</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Favorites</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Addresses</a>
            <button onclick="signOut()" class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                Sign Out
            </button>
        `;
    } else {
        // No user is signed in
        userBtn.innerHTML = '<i class="fas fa-user-circle text-2xl"></i>';
        userDropdown.innerHTML = `
            <a href="#" onclick="showAuthModal(); return false;" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Sign In</a>
            <a href="#" onclick="showAuthModal(); toggleAuthMode(); return false;" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Sign Up</a>
        `;
    }
}

// Sign Out
async function signOut() {
    try {
        await firebase.auth().signOut();
        showNotification('Signed out successfully!', 'success');
    } catch (error) {
        showNotification(error.message, 'error');
    }
}

// Show Notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `fixed bottom-4 left-4 px-6 py-3 rounded-lg text-white ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
    } transition-opacity duration-300`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Fade out and remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Auth modal close buttons
    document.querySelectorAll('.close-auth').forEach(btn => {
        btn.addEventListener('click', hideAuthModal);
    });
    
    // Auth mode switch
    authSwitchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleAuthMode();
    });
    
    // Auth form submit
    authForm.addEventListener('submit', handleAuthSubmit);
    
    // Close modal on outside click
    authModal.addEventListener('click', (e) => {
        if (e.target === authModal) {
            hideAuthModal();
        }
    });
});
