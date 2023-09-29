
import React, { useEffect, useState } from 'react';
import '../Style/BookingConfirmation.css';

const BookingConfirmation = () => {
  const [bookingDetails, setBookingDetails] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedBookingDetails = localStorage.getItem('bookingDetails');
    const storedSelectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    const storedUserName = localStorage.getItem('username');

    if (storedBookingDetails) {
      setBookingDetails(JSON.parse(storedBookingDetails));
    }

    if (storedSelectedSeats) {
      setSelectedSeats(storedSelectedSeats);
    }

    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const handleCancelBooking = () => {
    setBookingDetails(null);
    setSelectedSeats([]);
    setUserName('');
    localStorage.removeItem('bookingDetails');
    localStorage.removeItem('selectedSeats');
    localStorage.removeItem('username');
    window.location.href = '/';
  };

  const handleBookAnother = () => {
    setBookingDetails(null);
    setSelectedSeats([]);
    setUserName('');
    localStorage.removeItem('bookingDetails');
    localStorage.removeItem('selectedSeats');
    localStorage.removeItem('username');
    window.location.href = '/booking-summary-action';
  };

  if (!bookingDetails) {
    return <p>No booking details found.</p>;
  }

  const { movie, date, pricePerSeat } = bookingDetails;
  const totalPrice = selectedSeats.length * pricePerSeat;

  return (
    <div className="booking-confirmation">
      <h2>Booking Confirmation</h2>
      <p className="user">UserName: {userName}</p>
      <p className="movie">Movie: {movie}</p>
      <p className="date">Date: {date}</p>
      <p className="selected-seats">Selected Seats: {selectedSeats.join(', ')}</p>
      <p className="total-price">Total Price: {totalPrice}</p>

      <button className="cancel-booking" onClick={handleCancelBooking}>Cancel Booking</button>
      <button className="book-another" onClick={handleBookAnother}>Book Another</button>
    </div>
  );
};

export default BookingConfirmation;



