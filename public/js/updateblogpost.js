const updateBlogpostHandler = async (event) => {
    event.preventDefault();

  const title = document.querySelector('#blogpost-title').value.trim();
  const content = document.querySelector('#blogpost-content').value.trim();
  const id = document.querySelector('#update-blogpost-submit').getAttribute('data-id')
  
  if (title && content) {
    const response = await fetch(`/api/blogposts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('#update-blogpost-submit').addEventListener('click', updateBlogpostHandler);