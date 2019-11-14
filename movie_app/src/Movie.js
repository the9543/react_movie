import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({title, poster, genres, synopsis, id}){
    return(
        <div className='Movie'>
            <div className='Movie_Columns'>
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie_Columns">
                <h1>{title}</h1>
                <div className='Movie_Genres'>
                    {genres.map( (genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <p className='Movie_Synopsis'>
                    {synopsis}
                </p>
            </div>
        </div>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

function MovieGenre({genre}){
    return(
    <span className='Movie_Genre'>{genre} </span>
    )
}

MovieGenre.propTypes = {
    genre:PropTypes.string.isRequired
}

function MoviePoster({poster, alt}){
    return(
        <img src={poster} className='Movie_Poster' title={alt} alt={alt}/>
    )
}

MoviePoster.propTypes = {
    poster:PropTypes.string.isRequired,
    alt:PropTypes.string.isRequired
}

export default Movie
