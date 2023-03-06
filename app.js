const jokeEL = document.getElementById('joke')
const get_joke = document.getElementById('get_joke')

get_joke.addEventListener('click' , generatejoke)

generatejoke();

async  function generatejoke(){
    const jokeRes = await fetch('https://api.chucknorris.io/jokes/random' ,
    {
        headers:{
            accept: 'application/json'
        }
    });
    const joke = await jokeRes.json();
    console.log(joke)
    jokeEL.innerHTML = joke.value;
}