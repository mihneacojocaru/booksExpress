export default class Data {
  api(path, method = "GET", body = null) {
    let url = path;

    const options = {
      method,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    };

    if (body != null) {
      options.body = JSON.stringify(body);
    }

    return fetch(url, options);
  }

  async getBooks() {
    try {
      const response = await this.api("http://localhost:3000/books");

      if (response.status === 200) {
        return response.json();
      } else {
        return Promise.reject("error");
      }
    } catch (e) {
      return Promise.reject("error");
    }
  }

  async deleteBookApi(id) {
    try {
      const response = await this.api(`http://localhost:3000/deleteBook/${id}`,"DELETE");
      return response.json();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async updateBookApi(body) {
    try {
      const response = await this.api('http://localhost:3000/updateBook','PUT',body);
      return response.json();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async addNewBook(body){
    try {
      const response = await this.api('http://localhost:3000/postNewBook','POST',body);
      return response.json();
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
