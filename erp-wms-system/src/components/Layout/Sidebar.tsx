import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, setOpen }) => {
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/' },
    { name: 'Inventory', href: '/inventory' },
    { name: 'Sales', href: '/sales' },
    { name: 'Purchases', href: '/purchases' },
    { name: 'Warehouse', href: '/warehouse' },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity lg:hidden ${
          open ? 'opacity-100 ease-out duration-300' : 'opacity-0 ease-in duration-200'
        }`}
        onClick={() => setOpen(false)}
      ></div>

      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-800 overflow-y-auto transition duration-300 transform ${
          open ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'
        } lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-center h-16 bg-indigo-500 dark:bg-indigo-600">
          <span className="text-white text-2xl font-semibold">ERP & WMS</span>
        </div>
        <nav className="mt-5 px-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md ${
                location.pathname === item.href
                  ? 'text-gray-900 bg-gray-100 dark:text-white dark:bg-gray-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;