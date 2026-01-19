import fetch from 'node-fetch';

export const hello = (req, res) => {
    res.send('Hello World!');
};

export const apiNames = async (req, res) => {
    const url = 'https://www.usemodernfullstack.dev/api/v1/users';
    let data;

    try {
        const response = await fetch(url);
        data = await response.json();
        const userStrings = data.map(user => `ID: ${user.id}, Name: ${user.name}`);
        res.send(userStrings.join('<br>'));
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
};