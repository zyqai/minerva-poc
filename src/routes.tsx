import { Icon } from '@chakra-ui/react';
import {
  MdBusiness,
  MdHome,
  MdLock,
  MdOutlineWarehouse,
  MdPeople,
  MdSettingsApplications,
} from 'react-icons/md';
import BusinessesPage from 'views/admin/businesses';
import LendersPage from 'views/admin/lenders';
import AccountsPage from 'views/admin/accounts';
import PeoplePage from 'views/admin/people';
import AddProject from 'views/admin/projects/AddProject';
import AddPeople from 'views/admin/people/AddPeople';

// Admin Imports
import Project from 'views/admin/projects';

import SignInCentered from 'views/auth/signIn/SignInCentered';

const routes: RoutesType[] = [
  
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
    name: 'Project',
    layout: '/admin',
    path: '/projects',
    isActive: true,
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    collapse: false,
    component: <Project />,
  },

  {
    name: 'People',
    layout: '/admin',
    path: '/dashboards/people',
    isActive: true,
    icon: <Icon as={MdPeople} width="20px" height="20px" color="inherit" />,
    collapse: false,
    component: <PeoplePage />,
  },
  {
    name: 'Businesses',
    layout: '/admin',
    path: '/dashboards/businesses',
    isActive: true,
    icon: <Icon as={MdBusiness} width="20px" height="20px" color="inherit" />,
    collapse: false,
    component: <BusinessesPage />,
  },
  {
    name: 'Lenders',
    layout: '/admin',
    path: '/dashboards/lenders',
    isActive: true,
    icon: <Icon as={MdOutlineWarehouse} width="20px" height="20px" color="inherit" />,
    collapse: false,
    component: <LendersPage />,
  },
  {
    name: 'Account',
    layout: '/admin',
    path: '/dashboards/accounts',
    isActive: true,
    icon: <Icon as={MdSettingsApplications} width="20px" height="20px" color="inherit" />,
    collapse: false,
    component: <AccountsPage />,
  },
  {
    name: 'Add New Project',
    layout: '/admin',
    path: '/dashboards/AddProject',
    isActive: false,
    icon: <Icon as={MdSettingsApplications} width="20px" height="20px" color="inherit" />,
    collapse: false,
    component: <AddProject />,
  },
  {
    name: 'Add New People',
    layout: '/admin',
    path: '/dashboards/AddPeople',
    isActive: false,
    icon: <Icon as={MdSettingsApplications} width="20px" height="20px" color="inherit" />,
    collapse: false,
    component: <AddPeople />,
  },
];

export default routes;
