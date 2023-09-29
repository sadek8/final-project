import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import images for movies //
import movie1Poster from '../images/movie1.jpg';
import movie2Poster from '../images/movie2.jpg';
import movie3Poster from '../images/movie9.jpg';
import movie4Poster from '../images/movie10.jpg';
import movie5Poster from '../images/movie5.jpg';
import movie6Poster from '../images/movie11.jpg';
import movie7Poster from '../images/movie7.jpg';
import movie8Poster from '../images/movie8.jpg';

const BookingSummary = () => {

  const [loading, setLoading] = useState(false);
  const [bookingDetails, setBookingDetails] = useState([
    {
      movie: 'THE BOY',
      date: '2023-08-30',
      time: '18:00 PM',
      seats: 2,
      pricePerSeat: 10,
      posterUrl: movie1Poster,
    },
    {
      movie: 'HOWLLS',
      date: '2023-09-01',
      time: '20:30',
      seats: 3,
      pricePerSeat: 11,
      posterUrl: movie2Poster,
    },
    {
      movie: 'The Nun II',
      date: '2023-09-06',
      time: '20:30',
      seats: 3,
      pricePerSeat: 20,
      posterUrl: movie3Poster,
    },
    {
      movie: 'The boogeyman',
      date: '2023-6-2',
      time: '03:00 AM',
      seats: 15,
     pricePerSeat: 30,
     posterUrl: movie4Poster,
   },
    {
           movie: 'RED ROD',
            date: '2023-10-01',
            time: '22:30',
            seats: 20,
             pricePerSeat: 7,
             posterUrl: movie5Poster,
          },
          {
            movie: 'skinamarink',
             date: '2023-11-28',
             time: '2:30',
             seats: 6,
              pricePerSeat: 19,
              posterUrl: movie6Poster,
           },
           {
            movie: 'HORROR',
             date: '2023-11-7',
             time: '05:05 PM',
             seats: 20,
             pricePerSeat: 16,
             posterUrl: movie7Poster,
           },
           {
             movie: 'HAT MOOT',
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
      {loading ? (
        <p>Loading booking details...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div style={styles.movieList}>
          {displayedMovies.map((movie, index) => (
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



