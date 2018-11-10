
export const getLinks = () => {
    return fetch('https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty')
        .then(response => response.json());
};
