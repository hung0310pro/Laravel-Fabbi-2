// api create notifications
import app from '.././app'


export function apiAddTodo(params) {
    return axios.post('/auth/notifications', params)
        .then(response => response)
        .catch(error => error)
}

export function apiEditTodo(id) {
    let url = '/auth/notifications/' + id;
    return axios.get(url)
        .then(response => response)
        .catch(error => error)
}

export function redirect() {
    app.$router.push('/logincustom');
}
