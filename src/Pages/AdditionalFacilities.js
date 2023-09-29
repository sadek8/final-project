import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/AdditionalFacilities.css'; 

const AdditionalFacilities = ({ onUpdateAdditionalFacilities, onUpdateSelectedSeats }) => {
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [foodOptions, setFoodOptions] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  // Function to handle facility selection
  const selectFacility = (facilityId) => {
    if (selectedFacilities.includes(facilityId)) {
      // Facility is already selected, remove it from selectedFacilities
      setSelectedFacilities(selectedFacilities.filter(id => id !== facilityId));
    } else {
      // Facility is not selected, add it to selectedFacilities
      setSelectedFacilities([...selectedFacilities, facilityId]);
    }
  };

  // Function to handle food option selection
  const selectFoodOption = (optionId, price) => {
    if (foodOptions.includes(optionId)) {
      // Food option is already selected, remove it from foodOptions
      setFoodOptions(foodOptions.filter(id => id !== optionId));
    } else {
      // Food option is not selected, add it to foodOptions
      setFoodOptions([...foodOptions, optionId]);
    }

    // Calculate the new total amount
    const facilityAmount = selectedFacilities.length * 10; // Assuming each facility costs $10
    const foodAmount = foodOptions.length * price;
    const newTotalAmount = facilityAmount + foodAmount;
    setTotalAmount(newTotalAmount);
  };

  // Function to go to the Booking Confirmation page
  const goToBookingConfirmation = () => {
    if (selectedFacilities.length === 0 && foodOptions.length === 0) {
      alert('Please select at least one facility or food option.');
      return;
    }

    if (typeof onUpdateAdditionalFacilities === 'function') {
      onUpdateAdditionalFacilities(selectedFacilities, foodOptions); // Update additional facilities in parent component
    }

    if (typeof onUpdateSelectedSeats === 'function') {
      onUpdateSelectedSeats(); // Call the onUpdateSelectedSeats function passed as a prop
    }

    navigate('/booking-confirmation');
  };

  // Render additional facilities UI
  const renderFacilities = () => {
    const facilities = [
      { id: 1, name: 'Popcorn Stand' },
      { id: 2, name: 'Snack Bar' },
      { id: 3, name: 'VIP Lounge' },
      { id: 4, name: '3D Glasses' },
      { id: 5, name: 'Wheelchair Accessible Seating' },
      // Add more facilities as needed
    ];

    return facilities.map(facility => (
      <li
        key={facility.id}
        className={`facility-item ${selectedFacilities.includes(facility.id) ? 'selected' : ''}`}
        onClick={() => selectFacility(facility.id)}
      >
        {facility.name}
      </li>
    ));
  };

  // Render food options UI
  const renderFoodOptions = () => {
    const foodOptions = [
      { id: 1, name: 'Popcorn', price: 5 },
      { id: 2, name: 'Soda', price: 3 },
      { id: 3, name: 'Candy', price: 4 },
      // Add more food options as needed
    ];

    return foodOptions.map(option => (
      <li
        key={option.id}
        className={`food-option ${foodOptions.includes(option.id) ? 'selected' : ''}`}
        onClick={() => selectFoodOption(option.id, option.price)}
      >
        {option.name} (${option.price})
      </li>
    ));
  };

  return (
    <div className="additional-facilities-container">
      <h2 className="title">Additional Facilities</h2>
      <ul className="facility-list">
        {renderFacilities()}
      </ul>
      
      <h2 className="title">Food Options</h2>
      <ul className="food-options-list">
        {renderFoodOptions()}
      </ul>

      <div className="selected-items">
        <h3>Selected Facilities:</h3>
        <ul>
          {selectedFacilities.map(facilityId => (
            <li key={facilityId}>{`Facility ${facilityId}`}</li>
          ))}
        </ul>
      </div>

      <div className="selected-items">
        <h3>Selected Food Options:</h3>
        <ul>
          {foodOptions.map(optionId => (
            <li key={optionId}>{`Food Option ${optionId}`}</li>
          ))}
        </ul>
      </div>

      <div className="total-amount">
        <h3>Total Amount: ${totalAmount}</h3>
      </div>

      <button className="confirmation-button" onClick={goToBookingConfirmation}>
        Go to Booking Confirmation
      </button>
    </div>
  );
};

export default AdditionalFacilities;


