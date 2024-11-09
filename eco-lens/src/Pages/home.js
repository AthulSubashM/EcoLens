import React from 'react';
import CameraButton from '../Components/CameraButton';

export default function Home() {
    return (
        <div className="home-container">
            <h1>Eco-Lens</h1>
            <div className="action-container">
                <CameraButton />
                <div className="home-icons">
                    <div className="icon-container">🔍 Search</div>
                    <div className="icon-container">📖 Learn</div>
                    <div className="icon-container">🔔 Notifications</div>
                </div>
            </div>
        </div>
    );
}
