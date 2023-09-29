import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/SeatSelection.css';

const SeatSelection = ({ onUpdateSelectedSeats }) => {
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedSeats = localStorage.getItem('seats');
    if (storedSeats) {
      setSeats(JSON.parse(storedSeats));
    } else {
      generateSeats();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('seats', JSON.stringify(seats));
  }, [seats]);

  const selectSeat = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const generateSeats = () => {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    const columns = [1, 2, 3, 4, 5];
    const seatData = [];

    rows.forEach((row) => {
      columns.forEach((column) => {
        const seatId = `${row}${column}`;
        const seat = {
          id: seatId,
          isBooked: Math.random() < 0.5,
        };
        seatData.push(seat);
      });
    });

    setSeats(seatData);
  };

  const goToNextPage = () => {
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat.');
      return;
    }

    if (typeof onUpdateSelectedSeats === 'function') {
      onUpdateSelectedSeats(selectedSeats); // Update selected seats in the parent component
    } else {
      console.error('onUpdateSelectedSeats is not a function'); // Log an error if onUpdateSelectedSeats is not a function
    }

    navigate('/additional-facilities');
  };

  const renderSeats = () => {
    return seats.map((seat) => (
      <div
        key={seat.id}
        className={`seat ${seat.isBooked ? 'booked' : selectedSeats.includes(seat.id) ? 'selected' : 'available'}`}
        onClick={() => selectSeat(seat.id)}
      >
        {seat.id}
      </div>
    ));
  };

  return (
    <div className="seat-selection-container">
      <h2>Seat Selection</h2>
      <button onClick={generateSeats}>Generate Seats</button>
      <div className="seat-container">{renderSeats()}</div>
      <div>
        <h3>Selected Seats:</h3>
        <ul>
          {selectedSeats.map((seat) => (
            <li key={seat}>{seat}</li>
          ))}
        </ul>
      </div>
      <button onClick={goToNextPage}>Proceed to Confirmation Page</button>
    </div>
  );
};

export default SeatSelection;

