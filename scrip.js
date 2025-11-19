
cdocument.getElementById("userForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Fill modal with form data
    document.getElementById("modalName").textContent = document.getElementById("name").value;
    document.getElementById("modalEmail").textContent = document.getElementById("email").value;
    document.getElementById("modalGender").textContent = document.getElementById("gender").value;
    document.getElementById("modalContact").textContent = document.getElementById("contact").value;
    document.getElementById("modalUsername").textContent = document.getElementById("username").value;

    // Show modal
    const confirmModal = new bootstrap.Modal(document.getElementById("confirmModal"));
    confirmModal.show();
});

// Confirm submission
document.getElementById("confirmSubmit").addEventListener("click", function () {
    alert("Form Submitted Successfully!");
    document.getElementById("userForm").reset();
    bootstrap.Modal.getInstance(document.getElementById("confirmModal")).hide();
});
