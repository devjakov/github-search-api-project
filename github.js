class GitHub {
    constructor() {
        this.client_id = '64809bcf3e0933db10c5';
        this.client_secret = '303577625a33988d8bbbb2c2cd7e6863cf996b3f '
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        
        return {
            profile
        }
    }
}