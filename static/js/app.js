/**
 * AI Image Classifier - Main JavaScript File
 * Handles all interactive functionality for the image upload and classification
 */

// ========================================
// DOM Element References
// ========================================
const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('fileInput');
const imagePreview = document.getElementById('imagePreview');
const submitBtn = document.getElementById('submitBtn');
const loading = document.getElementById('loading');
const errorMessage = document.getElementById('errorMessage');
const uploadForm = document.getElementById('uploadForm');

// ========================================
// Drag and Drop Functionality
// ========================================

/**
 * Handles the dragover event - prevents default and adds visual feedback
 */
uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('dragover');
});

/**
 * Handles the dragleave event - removes visual feedback
 */
uploadArea.addEventListener('dragleave', () => {
    uploadArea.classList.remove('dragover');
});

/**
 * Handles the drop event - processes dropped files
 */
uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        fileInput.files = files;
        handleFileSelect(files[0]);
    }
});

// ========================================
// File Input Handling
// ========================================

/**
 * Opens file picker when upload area is clicked
 */
uploadArea.addEventListener('click', () => {
    fileInput.click();
});

/**
 * Handles file selection from file input
 */
fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
        handleFileSelect(e.target.files[0]);
    }
});

// ========================================
// File Processing Functions
// ========================================

/**
 * Processes the selected file and displays preview
 * @param {File} file - The selected file object
 */
function handleFileSelect(file) {
    // Validate file type
    if (!file.type.startsWith('image/')) {
        showError('Please select a valid image file.');
        return;
    }

    // Validate file size (10MB limit)
    if (file.size > 10 * 1024 * 1024) {
        showError('File size must be less than 10MB.');
        return;
    }

    // Create file reader to display preview
    const reader = new FileReader();
    reader.onload = (e) => {
        imagePreview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
        imagePreview.classList.remove('placeholder');
        submitBtn.disabled = false;
        hideError();
    };
    reader.readAsDataURL(file);
}

// ========================================
// Error Handling Functions
// ========================================

/**
 * Displays error message to user
 * @param {string} message - Error message to display
 */
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

/**
 * Hides error message
 */
function hideError() {
    errorMessage.style.display = 'none';
}

// ========================================
// Form Submission Handling
// ========================================

uploadForm.addEventListener('submit', () => {
    loading.style.display = 'block';
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
});

// ========================================
// Utility Functions
// ========================================

/**
 * Formats file size for display
 * @param {number} bytes - File size in bytes
 * @returns {string} Formatted file size
 */
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * Validates if file is an image
 * @param {File} file - File to validate
 * @returns {boolean} True if file is an image
 */
function isValidImageFile(file) {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    return validTypes.includes(file.type);
}

// ========================================
// Initialization
// ========================================

/**
 * Initialize the application when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    // Disable submit button initially
    submitBtn.disabled = true;
    
    // Show results section if results exist (for page reloads)
    const resultsSection = document.getElementById('resultsSection');
    if (resultsSection && resultsSection.style.display !== 'none') {
        resultsSection.style.display = 'block';
    }
    
    console.log('AI Image Classifier initialized successfully');
});