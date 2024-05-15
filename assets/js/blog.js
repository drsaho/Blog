document.addEventListener('DOMContentLoaded', function() {
    // Retrieve from localStorage
    var storedBlogPost = localStorage.getItem('blogPost');
    
    // check for stored data
    if (storedBlogPost) {
        // Parse the stored data
        var blogPost = JSON.parse(storedBlogPost);
        
        // display post
        var blogPostHTML = `
            <div class="post">
                <h2>${blogPost.title}</h2>
                <p>By: ${blogPost.username}</p>
                <p>${blogPost.content}</p>
            </div>
        `;
        
        // Blog HTML 
        var blogPostsContainer = document.getElementById('blogPosts');
        blogPostsContainer.innerHTML = blogPostHTML;
    }
});
//toggle button
function toggleMode() {
    var body = document.body;
    body.classList.toggle('dark-mode');
}
