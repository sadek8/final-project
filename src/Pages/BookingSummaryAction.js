import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import images for movies //
import movie1Poster from '../images/movie12.jpg';
import movie2Poster from '../images/movie13.jpg';
import movie3Poster from '../images/movie14.jpg';
import movie4Poster from '../images/movie15.jpg';
import movie5Poster from '../images/movie16.jpg';
import movie6Poster from '../images/movie17.jpg';
import movie7Poster from '../images/movie18.jpg';
import movie8Poster from '../images/movie19.jpg';

const BookingSummary = () => {
  // const [search,setSearch]=useState=("");
  const [loading, setLoading] = useState(false);
  const [bookingDetails, setBookingDetails] = useState([
    {
      movie: 'Meg 2',
      date: '2023-08-30',
      time: '18:00 PM',
      seats: 2,
      pricePerSeat: 10,
      posterUrl: movie1Poster,
    },
    {
      movie: 'Retribution',
      date: '2023-09-01',
      time: '20:30',
      seats: 3,
      pricePerSeat: 11,
      posterUrl: movie2Poster,
    },
    {
      movie: 'John Wick: Chapter 4',
      date: '2023-09-10',
      time: '01:00 AM',
      seats: 20,
      pricePerSeat: 7,
      posterUrl: movie3Poster,
    },
    {
      movie: 'Oppenheimer',
      date: '2023-09-20',
      time: '06:00 AM',
      seats: 20,
      pricePerSeat: 15,
      posterUrl: movie4Poster,
    },
    {
      movie: 'A Million Miles Away',
      date: '2023-10-01',
      time: '22:30',
      seats: 20,
      pricePerSeat: 7,
      posterUrl: movie5Poster,
    },
    {
      movie: 'I Am Rage',
      date: '2023-10-10',
      seats: 20,
      time: '11:15 PM',
      pricePerSeat: 18,
      posterUrl: movie6Poster,
    },
    {
      movie: 'Hypnotic',
      date: '2023-11-7',
      time: '05:05 PM',
      seats: 20,
      pricePerSeat: 16,
      posterUrl: movie7Poster,
    },
    {
      movie: 'Sisu',
      date: '2023-12-25',
      time: '03:00 AM',
      seats: 30,
      pricePerSeat: 13,
      posterUrl: movie8Poster,
    },

  ]);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const goToNextPage = (movie) => {
    localStorage.setItem('bookingDetails', JSON.stringify(movie));
    navigate('/seat-selection');
  };

  // Limit the number of movies to display
  const displayedMovies = bookingDetails.slice(0, 12);

  return (
    <div>
      <h2>Booking Summary</h2>
      {/* <form className="d-flex m-3" role="search"  >
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit" onChange={(e)=>setSearch(e.target.value)}>
          Search
        </button>
      </form> */}

      {loading ? (
        <p>Loading booking details...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (



        <div style={styles.movieList}>

          {displayedMovies
            // .filter((movies)=>{
            //   if(search==''){
            //   return  movies}
            // else if(movies.movie.toLowerCase().includes(search.toLowerCase())){
            //   return movies;
            // }})
            .map((movie, index) => (
              <div key={index} style={styles.card}>
                <img src={movie.posterUrl} alt={movie.movie} style={styles.poster} />
                <h3>{movie.movie}</h3>
                <p>Release Date: {movie.date}</p>
                <p>Time: {movie.time}</p>
                <button onClick={() => goToNextPage(movie)}>Book Now</button>
              </div>
            ))}
        </div>

      )}
    </div>

  );
};

const styles = {
  movieList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px',
  },
  poster: {
    width: '200px',
    height: '300px',
    marginBottom: '10px',
  },
};

export default BookingSummary;



