const api = {
  async addPost() {
    fetch('http://localhost:8080/posts', {
      method: 'POST',  
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

export default api;
