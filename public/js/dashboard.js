const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/blogposts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete blogpost');
      }
    }
};

const updateButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogposts/${id}`, {
      method: 'get',
    });

    if (response.ok) {
      document.location.replace(`/blogpost/${id}/update`);
    } else {
      alert('Failed to find blogpost');
    }
  }
};

if (document.querySelector('.delete-btn')){
    document.querySelector('.delete-btn').addEventListener('click', delButtonHandler);
};
if (document.querySelector('.update-btn')){
  document.querySelector('.update-btn').addEventListener('click', updateButtonHandler);
};
  