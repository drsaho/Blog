document.getElementById('blogForm').addEventListener('submit', function(event) {
// Prevent default form submission
    event.preventDefault(); 
    
    // Process form data 
    var formData = {
        username: document.getElementById('username').value,
        title: document.getElementById('title').value,
        content: document.getElementById('content').value
    };
    console.log(formData);
    
    
    var blogPost = {
        username: formData.username,
        title: formData.title,
        content: formData.content
    };
    localStorage.setItem('blogPost', JSON.stringify(blogPost));

    // Redirect to the posts page
    window.location.href = 'blog.html';
});

function toggleMode() {
    var body = document.body;
    body.classList.toggle('dark-mode');
}
