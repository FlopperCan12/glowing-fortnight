$(document).ready(function() {
    // When the post button is clicked
    $('#post-btn').click(function() {
        var postContent = $('#new-post').val();
        if (postContent) {
            // Create a new post element
            var postElement = `
                <div class="post">
                    <div class="content">${postContent}</div>
                    <div class="actions">
                        <button class="like-btn">Like</button>
                    </div>
                </div>
            `;
            
            // Append the new post to the posts container
            $('#posts-container').prepend(postElement);
            
            // Clear the input field
            $('#new-post').val('');
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
