import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import images for movies //
import movie1Poster from '../images/movie20.jpg';
import movie2Poster from '../images/movie21.jpg';
import movie3Poster from '../images/movie22.jpg';
import movie4Poster from '../images/movie23.jpg';
import movie5Poster from '../images/movie24.jpg';
import movie6Poster from '../images/movie25.jpg';
import movie7Poster from '../images/movie26.jpg';
import movie8Poster from '../images/movie27.jpg';

const BookingSummary = () => {
  const [loading, setLoading] = useState(false);
  const [bookingDetails, setBookingDetails] = useState([
    {
      movie: 'Barbie',
      date: '2023-08-30',
      time: '18:00 PM',
      seats: 2,
      pricePerSeat: 10,
      posterUrl: movie1Poster,
    },
    {
      movie: 'Teenage Mutant Ninja Turtles: Mutant Mayhem',
      date: '2023-09-01',
      time: '20:30',
      seats: 3,
      pricePerSeat: 11,
      posterUrl: movie2Poster,
    },
    {
            movie: 'The Little Mermaid',
            date: '2023-09-10',
            time: '01:00 AM',
            seats: 20,
             pricePerSeat: 7,
             posterUrl: movie3Poster,
           },
           {
             movie: 'Strays',
             date: '2023-09-20',
             time: '06:00 AM',
             seats: 20,
             pricePerSeat: 15,
             posterUrl: movie4Poster,
          },
          {
           movie: 'Epic Tails',
            date: '2023-10-01',
            time: '22:30',
            seats: 20,
             pricePerSeat: 7,
             posterUrl: movie5Poster,
          },
          {
            movie: 'Me Vuelves Loca ',
            date: '2023-10-10',
            seats: 20,
            time: '11:15 PM',
             pricePerSeat: 18,
            posterUrl: movie6Poster,
           },
           {
            movie: 'Miraculous',
             date: '2023-11-7',
             time: '05:05 PM',
             seats: 20,
             pricePerSeat: 16,
             posterUrl: movie7Poster,
           },
           {
             movie: 'Lit­tle Allan',
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



