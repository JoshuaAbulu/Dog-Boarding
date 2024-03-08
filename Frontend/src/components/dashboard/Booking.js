import React from 'react';
import './styles.css';

export const Booking=()=> {
    return (
        <div className="booking-container">
            <h2>Bookings</h2>
            <div className="booking-list">
                <div className="booking-item">
                    <h3>Booking #1</h3>
                    <p>Date: 2022-03-08</p>
                    <p>Status: Confirmed</p>
                </div>
                <div className="booking-item">
                    <h3>Booking #2</h3>
                    <p>Date: 2022-03-10</p>
                    <p>Status: Pending</p>
                </div>
            </div>
        </div>
    );
}


