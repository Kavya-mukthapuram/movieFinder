console.log("script.js is connected");

const APIkey="3de7ad72"
const movieList=document.getElementById("movie-list")

function displayMovies(movies){
    movieList.innerHTML=""
   
    if(!movies){
        movieList.innerHTML=`<li>No movies found</li>`
        return
    }
   
    movies.forEach(movie=>{
        const movieItem=document.createElement("li")
        movieItem.classList.add("movie-item")

        const movieImg=document.createElement("img")
        movieImg.src=movie.Poster 

        const movieTitle=document.createElement("h3")
        movieTitle.innerText=movie.Title 

        const movieYear=document.createElement("p")
        movieYear.innerText=`Year: ${movie.Year}`

        movieItem.appendChild(movieImg)
        movieItem.appendChild(movieTitle)
        movieItem.appendChild(movieYear)    
        movieList.appendChild(movieItem)
    })

}

function searchMovies(){
    const movieName=document.getElementById("search-input").value
if(movieName===""){
    alert("Please enter movie name")
    return
}
fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=${APIkey}`)
.then(response=>response.json())
.then(data=>{displayMovies(data.Search)})
.catch(error=>
    console.error("Error fetching movie data:",error))

}
