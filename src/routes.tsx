import { Icon } from '@chakra-ui/react';
import {
  MdBusiness,
  MdHome,
  MdLock,
  MdOutlineWarehouse,
  MdPeople,
  MdSettingsApplications,
} from 'react-icons/md';

// Admin Imports
import DashboardsDefault from 'views/admin/dashboards/default';

import SignInCentered from 'views/auth/signIn/SignInCentered';

const routes: RoutesType[] = [
  // --- Dashboards ---
  {
    name: 'Dashboards',
    path: '/dashboards/default',
    layout: '/admin',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    collapse: false,
    isActive: true,
    
  },
  // --- Authentication ---
  {
    name: 'Authentication',
    layout: '/auth',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    path: '/sign-in',
    collapse: false,
    isActive: false,
    component: <SignInCentered />,
  },

  {
    name: 'Files',
    layout: '/admin',
    path: '/dashboards/files',
    isActive: true,
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    collapse: false,
    component: <DashboardsDefault />,
  },

  {
    name: 'People',
    layout: '/admin',
    path: '/dashboards/people',
    isActive: true,
    icon: <Icon as={MdPeople} width="20px" height="20px" color="inherit" />,
    collapse: false,
  },
  {
    name: 'Businesses',
    layout: '/admin',
    path: '/dashboards/businesses',
    isActive: true,
    icon: <Icon as={MdBusiness} width="20px" height="20px" color="inherit" />,
    collapse: false,
  },
  {
    name: 'Lenders',
    layout: '/admin',
    path: '/dashboards/lenders',
    isActive: true,
    icon: <Icon as={MdOutlineWarehouse} width="20px" height="20px" color="inherit" />,
    collapse: false,
  },
  {
    name: 'Account',
    layout: '/admin',
    path: '/dashboards/accounts',
    isActive: true,
    icon: <Icon as={MdSettingsApplications} width="20px" height="20px" color="inherit" />,
    collapse: false,
  },
];

export default routes;
