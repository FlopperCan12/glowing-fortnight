$(document).ready(function() {
    // Fetch and display posts from the server
    function fetchPosts() {
        $.get('/posts', function(posts) {
            $('#posts-container').empty();
            posts.forEach(function(post) {
                var postElement = `
                    <div class="post">
                        <div class="content">${post.content}</div>
                        <div class="actions">
                            <button class="like-btn">Like</button>
                        </div>
                    </div>
                `;
                $('#posts-container').prepend(postElement);
            });
        });
    }

    // Fetch posts when the page loads
    fetchPosts();

    // When the post button is clicked
    $('#post-btn').click(function() {
        var postContent = $('#new-post').val();
        if (postContent) {
            $.post('/posts', { content: postContent }, function(post) {
                fetchPosts(); // Refresh the posts
                $('#new-post').val(''); // Clear the input
            });
        }
    });

    // Like button functionality
    $(document).on('click', '.like-btn', function() {
        var likes = $(this).text();
        if (likes === 'Like') {
            $(this).text('Liked');
            $(this).css('background-color', '#007bff');
        } else {
            $(this).text('Like');
            $(this).css('background-color', '#28a745');
        }
    });
});
