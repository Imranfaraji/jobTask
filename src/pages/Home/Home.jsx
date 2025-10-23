import React from 'react';
import EmployeeManagement from '../../component/EmployeeManagement/EmployeeManagement';
import DashboardComponent from '../../component/DashboardComponent/DashboardComponent';
import AlertsAndNotifications from '../../component/AlartAndNotifications/AlartAndNotifications';

const Home = () => {
    return (
        <div>
           <EmployeeManagement></EmployeeManagement>
           <DashboardComponent></DashboardComponent>
           <AlertsAndNotifications></AlertsAndNotifications>
        </div>
    );
};

export default Home;