const newCommentHandler = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#comment-content').value.trim();
    const blogpostId = document.querySelector('#comment-btn').getAttribute('data-id');
  
    if ( content ) {
      const response = await fetch(`/api/blogposts/${blogpostId}/comment`, {
        method: 'POST',
        body: JSON.stringify({ content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/blogpost/${blogpostId}`);
      } else {
        alert('Failed to create comment');
      }
    }
};

document.querySelector('.new-comment-form').addEventListener('submit', newCommentHandler);
