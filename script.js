document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const pages = document.querySelectorAll('.page');

    // Navigation Logic
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-target');

            // Toggle Active Nav
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Toggle Active Page
            pages.forEach(page => {
                page.classList.remove('active');
                if (page.id === target) {
                    page.classList.add('active');
                }
            });
        });
    });

    // Form Submissions
    const forms = ['leaveForm', 'ticketForm'];
    forms.forEach(formId => {
        const f = document.getElementById(formId);
        if (f) {
            f.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Request has been securely transmitted to the Warden Office.');
                // Return to dashboard
                document.querySelector('[data-target="home"]').click();
            });
        }
    });
});

// QR Scanner Simulation
function simulateScan() {
    const scanner = document.querySelector('.qr-scanner');
    scanner.innerHTML = "<p>✅ Scanned: Wing B - Room 402</p>";
    scanner.style.borderColor = "#10b981";
    scanner.style.color = "#10b981";
    
    // Auto-update a field if needed
    const select = document.getElementById('roomInfo');
    if(select) select.value = "Electrical (Fan, Lights)";
}
