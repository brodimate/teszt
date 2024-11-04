import React, { useState } from 'react';
import { FaImage, FaMapMarkerAlt, FaUserCircle } from 'react-icons/fa';
import './Post.css';

const Post = () => {
    const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

    const toggleRightSidebar = () => {
        setIsRightSidebarOpen(!isRightSidebarOpen);
    };

    const openProfileSidebar = () => {
        setIsRightSidebarOpen(true);
    };

    return (
        <div className="main-container">
            {/* Bal oldali menüsáv */}
            <div className="left-sidebar">
                <h2>Menu</h2>
                <ul>
                    <li>Home</li>
                    <li onClick={openProfileSidebar}>Profile</li>
                    <li>Log Out</li>
                </ul>
            </div>

            {/* Poszt mező */}
            <div className="post-section">
                <div className="post-container">
                    <div className="post-header">
                        <FaUserCircle size={36} />
                        <h1>Create a Post</h1>
                    </div>
                    <form className="post-form">
                        <input type="text" placeholder="What's on your mind?" className="post-title" />
                        
                        <div className="post-options">
                            <label className="icon-input">
                                <FaImage size={24} />
                                <input type="file" />
                                <span>Add Photo</span>
                            </label>
                            <label className="icon-input">
                                <FaMapMarkerAlt size={24} />
                                <input type="text" placeholder="Location" />
                                <span>Add Location</span>
                            </label>
                        </div>
                        <button type="submit" className="post-button">Post</button>
                    </form>
                </div>

                {/* Posztok listája */}
                <div className="post-list">
                    <div className="post-item">
                        <h2>Sample Post Title</h2>
                        <p>Sample description of the post...</p>
                        <span>Location: Sample Location</span>
                    </div>
                </div>
            </div>

            {/* Jobb oldali becsukható menüsáv */}
            <div className={`right-sidebar ${isRightSidebarOpen ? 'open' : 'closed'}`}>
                <button className="toggle-btn" onClick={toggleRightSidebar}>
                    {isRightSidebarOpen ? 'Close' : 'Open'}
                </button>

                {isRightSidebarOpen && (
                    <div className="sidebar-content">
                        <div className="user-info">
                            <img src="profile.jpg" alt="User Profile" className="profile-pic" />
                            <p>Username</p>
                        </div>
                        
                        <div className="filters">
                            <h3>Filters</h3>
                            <label>Map Location</label>
                            <input type="text" placeholder="Enter Coordinates" />

                            <label>Distance (km)</label>
                            <input type="range" min="1" max="100" />

                            <label>Animal Type</label>
                            <select>
                                <option>Dog</option>
                                <option>Cat</option>
                                <option>Bird</option>
                                <option>Other</option>
                            </select>

                            <label>
                                <input type="checkbox" />
                                Lost Animal
                            </label>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Post;
