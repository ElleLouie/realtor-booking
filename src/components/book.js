import React, { useState } from 'react';
import DayTimePicker from '@mooncake-dev/react-day-time-picker';

function Book(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const submit = (e) => {
    props.createBooking(email, name, phone, props.history);
  };

  return (
    <div className="booking">
      <div className="input-container">
        <div className="input-group">
          <div className="input-left">
            <h1>Book an Appointment</h1>
            <div>
              <h2>Time:</h2>
              <h2>Date: </h2>
              <div className="schedule-container"><DayTimePicker timeSlotSizeMinutes={60} /></div>
            </div>
          </div>
          <div className="input-right">
            <h2>Name</h2>
            <input type="text" id="name" onChange={(e) => setName(e.target.value)} placeholder="name" />
            <h2>Email</h2>
            <input type="text" id="name" onChange={(e) => setEmail(e.target.value)} placeholder="email" />
            <h2>Phone Number</h2>
            <input type="text" id="name" onChange={(e) => setPhone(e.target.value)} placeholder="phone" />
            <button type="button" onClick={submit}>sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
