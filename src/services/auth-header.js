export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && !user.token.isEmpty) {
        // for Node.js Express back-end
        return { 'x-access-token': !user.token.isEmpty };
    } else {
        return {};
    }
}
