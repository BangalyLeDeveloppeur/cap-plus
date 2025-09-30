import react from 'react';
import AdminNavigation from '../component/AdminNavigation.jsx';
import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div>
            <AdminNavigation/>
            <Outlet/>
        </div>
    );
};

export default AdminLayout;