import React from 'react';
import SalesChart from '../components/Dashboard/SalesChart';
import InventoryStatus from '../components/Dashboard/InventoryStatus';
import RecentActivities from '../components/Dashboard/RecentActivities';

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="col-span-1 md:col-span-2 lg:col-span-3">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Dashboard</h1>
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-2">
        <SalesChart />
      </div>
      <div className="col-span-1">
        <InventoryStatus />
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-3">
        <RecentActivities />
      </div>
    </div>
  );
};

export default Dashboard;