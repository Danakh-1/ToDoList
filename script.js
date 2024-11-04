document.addEventListener('DOMContentLoaded', () => {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Show welcome section by default and make its nav link active
    document.getElementById('welcome').classList.remove('hidden');
    document.querySelector('[data-section="welcome"]').classList.add('active');
    
    // Add click handler to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Add active class to clicked link
            e.target.classList.add('active');
            
            // Get the section to show
            const sectionId = e.target.getAttribute('data-section');
            
            // Hide all sections
            document.querySelectorAll('section').forEach(section => {
                section.classList.add('hidden');
            });
            
            // Show the selected section
            document.getElementById(sectionId).classList.remove('hidden');
        });
    });
});



