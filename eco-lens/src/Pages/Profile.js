import React from 'react';

export default function Profile() {
    return (
        <div className="profile-container">
            <h2>Your Profile</h2>
            <p>Name: Eco User</p>
            <p>Email: user@example.com</p>
            <div className="achievements">
                <h3>Achievements</h3>
                <ul>
                    <li>Recycling Champion</li>
                    <li>Eco-Friendly Warrior</li>
                </ul>
            </div>
        </div>
    );
}
