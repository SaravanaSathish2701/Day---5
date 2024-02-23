// CLASS MOVIE

class Movie{
    constructor(title,studio,rating = PG){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getRating(){
        return rating("This movie rating:" + rating);
    }
}

let movie = new Movie("Casino Royale","Eon Production","PG13");
console.log(movie);