export default class UserService {
    static async login(username: string, password: string) {
        const response = await fetch(
            "https://dummyjson.com/auth/login",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            }
        );
        if (!response.ok) {
            throw new Error('Неправильный логин или пароль!');
        }
        return await response.json();
    }
}
