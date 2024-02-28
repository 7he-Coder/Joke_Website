const Jokes = document.querySelector(`#joke`);
const jokeButton = document.querySelector(`#jokeBtn`);

const generateJokes = () => {
    
    const setHeader = {
        headers: {
            Accept: "application/json",
        }
    };

    fetch('https://icanhazdadjoke.com/', setHeader)
    .then((res)=> res.json()
    ).then((data) => {
        Jokes.innerHTML = data.joke;
    }).catch((err) => {
        console.log(err);
    })
}

jokeButton.addEventListener(`click`, generateJokes);
generateJokes();