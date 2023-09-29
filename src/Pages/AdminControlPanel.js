import React, { useState } from 'react';

const AdminControlPanel = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [bookingDetails, setBookingDetails] = useState([]);

  const handleBooking = (event) => {
    event.preventDefault();
    // Add logic to handle the booking form submission
  };

  const goToNextPage = (movie) => {
    // Add logic to navigate to the next page
  };

  return (
    <div style={styles.container}>
      <h2>Booking Summary</h2>
      {loading ? (
        <p>Loading booking details...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <div style={styles.bookingForm}>
            <h3>Book a Movie</h3>
            <form onSubmit={handleBooking}>
              <label For="movie">Movie:</label>
              <input type="text" id="movie" name="movie" required />
              <label For="date">Date:</label>
              <input type="date" id="date" name="date" required />
              <label For="seats">Seats:</label>
              <input max={35} min={3} type="number" id="seats" name="seats" required />
              <label For="pricePerSeat">Price Per Seat:</label>
              <input max={50} min={5}  type="number" id="pricePerSeat" name="pricePerSeat" required />
              <label For="posterUrl">Poster URL:</label>
              <input type="text" id="posterUrl" name="posterUrl" required />
              <button type="submit">Book Now</button>
            </form>
          </div>
          <div style={styles.movieList}>
            {bookingDetails.map((movie, index) => (
              <div key={index} style={styles.card}>
                <img src={movie.posterUrl} alt={movie.movie} style={styles.poster} />
                <h3>{movie.movie}</h3>
                <p>Release Date: {movie.date}</p>
                <button onClick={() => goToNextPage(movie)}>Book Now</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    marginBottom: '20px',
  },
  bookingForm: {
    marginBottom: '20px',
  },
  movieList: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  card: {
    width: '200px',
    margin: '10px',
    padding: '10px',
    border: '1px solid #ccc',
  },
  poster: {
    width: '100%',
    height: 'auto',
  },
};

export default AdminControlPanel;