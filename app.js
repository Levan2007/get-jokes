const get_joke = document.getElementById("get_joke");
get_joke.addEventListener('click' , generateJokes);

generateJokes();

async function generateJokes(){
    const jokeEL = document.getElementById("joke");
    const jokeData = await fetch('https://api.chucknorris.io/jokes/random' , {
        headers:{
            accept: 'application/json'
        }
    });
    const jokes = await jokeData.json();
    console.log(jokes); 
    jokeEL.innerHTML = jokes.value;
}