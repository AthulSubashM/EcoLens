import React from 'react';

export default function Settings() {
    return (
        <div className="settings-container">
            <h2>Settings</h2>
            <div className="setting-option">
                <label>Notifications</label>
                <input type="checkbox" />
            </div>
            <div className="setting-option">
                <label>Language</label>
                <select>
                    <option>English</option>
                    <option>French</option>
                    <option>Spanish</option>
                </select>
            </div>
            <div className="setting-option">
                <label>Theme</label>
                <button className="theme-button">Switch to Dark/Light</button>
            </div>
        </div>
    );
}
