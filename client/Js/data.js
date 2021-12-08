export default class Data {


    api(path, method = 'GET', body = null) {

        let url = path;

        const options = {

            method,
            headers: {

                'Content-Type': 'application/json;charset=utf-8',

            }
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







}