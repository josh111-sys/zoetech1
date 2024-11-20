document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Please fill in both fields.');
    } else {
        // Example login check (in real applications, you would validate server-side)
        if (username === 'admin' && password === 'password') {
            alert('Login successful!');
        } else {
            alert('Invalid username or password.');
        }
    }
});


// 2nd css of webpage
let images = ['hospital1.jpg', 'hospital2.jpg', 'hospital3.jpg'];
let currentIndex = 0;

function changeBackground() {
    const heroSection = document.querySelector('.hero-section');
    heroSection.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 5000); // Change background every 5 seconds

//  form
// Form Validation and Payment Logic

// Form submission handler
document.getElementById('patient-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expDate = document.getElementById('expDate').value;
    const cvv = document.getElementById('cvv').value;
    const uploadPic = document.getElementById('uploadPic').files[0]; // Get uploaded file

    // Validate form fields
    if (fullName && email && phone && cardNumber && expDate && cvv && uploadPic) {
        document.getElementById('form-message').innerHTML = `
            <div class="alert alert-success">
                Payment successful! Thank you, ${fullName}, for submitting your form.
            </div>
        `;
        document.getElementById('patient-form').reset(); // Reset form after submission
    } else {
        document.getElementById('form-message').innerHTML = `
            <div class="alert alert-danger">
                Please fill out all the fields and upload your picture.
            </div>
        `;
    }
});
  // For demonstration, we will assume the payment and upload are successful
    if (fullName && email && phone && hospitalBill && imageUpload) {
        // Show success message
        document.getElementById('patient-form').classList.remove('d-none');
    }

