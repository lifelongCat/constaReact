export default class ServicesService {
    static async getAll() {
        return await fetch(
            "https://673423afa042ab85d1190055.mockapi.io/api/v1/services"
        ).then(response => response.json());
    }
}
