// src/pages/Dashboard.js
import React from 'react';
import NavbarDashboard from '../../components/NavbarDashboard/NavbarDashboard';
import Sidebar from '../../components/Sidebar/Sidebar';
import UserTable from '../../components/UserTable/UserTable';
import UserChart from '../../components/UserChart/UserChart';

const Dashboard = () => {
    return (
        <div>
            <NavbarDashboard />
            <div className="dashboard">
                <Sidebar />
                <main>
                    <h2>User Entries</h2>
                    <UserChart />
                    <h2>Users</h2>
                    <UserTable />
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
