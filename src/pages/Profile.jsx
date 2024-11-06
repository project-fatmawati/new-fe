import React from 'react';
import Sidebar from '../components/Sidebar';
import UserDashboard from '../components/Dashboard';

const Profile = () => {
    return (
        <div className="profile-container">
            <Sidebar />
            <div className="dashboard-container">
                <UserDashboard />
            </div>
        </div>
    );
};

export default Profile;
