class SwapiServices {

    _baseUrl = 'https://swapi.dev/api/';

    async getData(url) {
        const response = await fetch(`${this._baseUrl}${url}`);
        if (!response.ok) {
            throw new Error(`We have a problem with fetch ${url}!!!`);
        }
        return await response.json();
    }

    async getAllPeople() {
        const response = await this.getData('people/');
        return response.results;
    }

    getPerson(id) {
        return this.getData(`people/${id}/`);
    }

    async getAllPlanets() {
        const response = await this.getData('planets/');
        return response.results;
    }

    getPlanet(id) {
        return this.getData(`planets/${id}/`);
    }

    async getAllStarships() {
        const response = await this.getData('starships/');
        return response.results;
    }

    getStrship(id) {
        return this.getData(`starships/${id}/`);
    }


}

export default SwapiServices;
