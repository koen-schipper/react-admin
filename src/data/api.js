import axios from 'axios';

const getRandomName = async () => {
    const response = await axios.get('https://randomuser.me/api/');
    const firstName = await response.data.results[0].name.first;
    const lastName = await response.data.results[0].name.last;
    const fullName = firstName + ' ' + lastName;
    return fullName;
};

const getRandomPicture = async () => {
    const response = await axios.get('https://randomuser.me/api/');
    return response.data.results[0].picture.medium;
};

export { getRandomName, getRandomPicture };
