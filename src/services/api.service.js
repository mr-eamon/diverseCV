import axios from 'axios';

export const fetchUsers = () => axios.get('/api/users');

export const uploadFile = (name, email, file) => {
    var formdata = new FormData;
    formdata.append('name' ,name);
    formdata.append('contact', email);
    formdata.append('file', file)
    return axios.post('/api/upload/',
        formdata,
        { headers: { 'Content-Type': 'multipart/form-data' } })
};
