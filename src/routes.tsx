import { Icon } from '@chakra-ui/react';
import {
  MdDashboard,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from 'react-icons/md';

// Admin Imports
import DashboardsDefault from 'views/admin/dashboards/default';
import DashboardsRTLDefault from 'views/admin/dashboards/rtl';
import DashboardsCarInterface from 'views/admin/dashboards/carInterface';
import DashboardsSmartHome from 'views/admin/dashboards/smartHome';

// // NFT Imports
import NFTMarketplace from 'views/admin/nfts/marketplace';
import NFTPage from 'views/admin/nfts/page';
import NFTCollection from 'views/admin/nfts/collection';
import NFTProfile from 'views/admin/nfts/profile';

// Main Imports
import AccountBilling from 'views/admin/main/account/billing';
import AccountApplications from 'views/admin/main/account/application';
import AccountInvoice from 'views/admin/main/account/invoice';
import AccountSettings from 'views/admin/main/account/settings';
import AccountAllCourses from 'views/admin/main/account/courses';
import AccountCoursePage from 'views/admin/main/account/coursePage';

import UserNew from 'views/admin/main/users/newUser';
import UsersOverview from 'views/admin/main/users/overview';
import UsersReports from 'views/admin/main/users/reports';

import ProfileSettings from 'views/admin/main/profile/settings';
import ProfileOverview from 'views/admin/main/profile/overview';
import ProfileNewsfeed from 'views/admin/main/profile/newsfeed';

import ApplicationsKanban from 'views/admin/main/applications/kanban';
import ApplicationsDataTables from 'views/admin/main/applications/dataTables';
import ApplicationsCalendar from 'views/admin/main/applications/calendar';

import EcommerceNewProduct from 'views/admin/main/ecommerce/newProduct';
import EcommerceProductOverview from 'views/admin/main/ecommerce/overviewProduct';
import EcommerceProductSettings from 'views/admin/main/ecommerce/settingsProduct';
import EcommerceProductPage from 'views/admin/main/ecommerce/pageProduct';
import EcommerceOrderList from 'views/admin/main/ecommerce/orderList';
import EcommerceOrderDetails from 'views/admin/main/ecommerce/orderDetails';
import EcommerceReferrals from 'views/admin/main/ecommerce/referrals';

// Others
import OthersNotifications from 'views/admin/main/others/notifications';
import OthersPricing from 'views/admin/main/others/pricing';
import OthersError from 'views/admin/main/others/404';
import Messages from 'views/admin/main/others/messages';

// Auth Imports
import ForgotPasswordCentered from 'views/auth/forgotPassword/ForgotPasswordCentered';
import ForgotPasswordDefault from 'views/auth/forgotPassword/ForgotPasswordDefault';
import LockCentered from 'views/auth/lock/LockCentered';
import LockDefault from 'views/auth/lock/LockDefault';
import SignInCentered from 'views/auth/signIn/SignInCentered';
import SignInDefault from 'views/auth/signIn/SignInDefault';
import SignUpCentered from 'views/auth/signUp/SignUpCentered';
import SignUpDefault from 'views/auth/signUp/SignUpDefault';
import VerificationCentered from 'views/auth/verification/VerificationCentered';
import VerificationDefault from 'views/auth/verification/VerificationDefault';

const routes = [
  // --- Dashboards ---
  {
    name: 'Dashboards',
    path: '/dashboards',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    collapse: true,
    items: [
      {
        name: 'Main Dashboard',
        layout: '/admin',
        path: '/dashboards/default',
        component: <DashboardsDefault />,
      },
      {
        name: 'Car Interface',
        layout: '/admin',
        path: '/dashboards/car-interface',
        component: <DashboardsCarInterface />,
      },
      {
        name: 'Smart Home',
        layout: '/admin',
        path: '/dashboards/smart-home',
        component: <DashboardsSmartHome />,
      },
      {
        name: 'RTL',
        layout: '/rtl',
        path: '/dashboards/rtl',
        component: <DashboardsRTLDefault />,
      },
    ],
  },
  // // --- NFTs ---
  {
    name: 'NFTs',
    path: '/nfts',
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    collapse: true,
    items: [
      {
        name: 'Marketplace',
        layout: '/admin',
        path: '/nfts/marketplace',
        component: <NFTMarketplace />,
        secondary: true,
      },
      {
        name: 'Collection',
        layout: '/admin',
        path: '/nfts/collection',
        component: <NFTCollection />,
        secondary: true,
      },
      {
        name: 'NFT Page',
        layout: '/admin',
        path: '/nfts/page',
        component: <NFTPage />,
        secondary: true,
      },
      {
        name: 'Profile',
        layout: '/admin',
        path: '/nfts/profile',
        component: <NFTProfile />,
        secondary: true,
      },
    ],
  },
  // // --- Main pages ---
  {
    name: 'Main Pages',
    path: '/main',
    icon: <Icon as={MdDashboard} width="20px" height="20px" color="inherit" />,
    collapse: true,
    items: [
      {
        name: 'Account',
        path: '/main/account',
        collapse: true,
        items: [
          {
            name: 'Billing',
            layout: '/admin',
            path: '/main/account/billing',
            exact: false,
            component: <AccountBilling />,
          },
          {
            name: 'Application',
            layout: '/admin',
            path: '/main/account/application',
            exact: false,
            component: <AccountApplications />,
          },
          {
            name: 'Invoice',
            layout: '/admin',
            path: '/main/account/invoice',
            exact: false,
            component: <AccountInvoice />,
          },
          {
            name: 'Settings',
            layout: '/admin',
            path: '/main/account/settings',
            exact: false,
            component: <AccountSettings />,
          },
          {
            name: 'All Courses',
            layout: '/admin',
            path: '/main/account/all-courses',
            exact: false,
            component: <AccountAllCourses />,
          },
          {
            name: 'Course Page',
            layout: '/admin',
            path: '/main/account/course-page',
            exact: false,
            component: <AccountCoursePage />,
          },
        ],
      },
      {
        name: 'Ecommerce',
        path: '/main/ecommerce',
        collapse: true,
        items: [
          {
            name: 'New Product',
            layout: '/admin',
            path: '/main/ecommerce/new-prodcut',
            exact: false,
            component: <EcommerceNewProduct />,
          },
          {
            name: 'Product Overview',
            layout: '/admin',
            path: '/main/ecommerce/product-overview',
            exact: false,
            component: <EcommerceProductOverview />,
          },
          {
            name: 'Product Settings',
            layout: '/admin',
            path: '/main/ecommerce/settings',
            exact: false,
            component: <EcommerceProductSettings />,
          },
          {
            name: 'Product Page',
            layout: '/admin',
            path: '/main/ecommerce/page-example',
            exact: false,
            component: <EcommerceProductPage />,
          },
          {
            name: 'Order List',
            layout: '/admin',
            path: '/main/ecommerce/order-list',
            exact: false,
            component: <EcommerceOrderList />,
          },
          {
            name: 'Order Details',
            layout: '/admin',
            path: '/main/ecommerce/order-details',
            exact: false,
            component: <EcommerceOrderDetails />,
          },
          {
            name: 'Referrals',
            layout: '/admin',
            path: '/main/ecommerce/referrals',
            exact: false,
            component: <EcommerceReferrals />,
          },
        ],
      },
      {
        name: 'Users',
        path: '/main/users',
        collapse: true,
        items: [
          {
            name: 'New User',
            layout: '/admin',
            path: '/main/users/new-user',
            exact: false,
            component: <UserNew />,
          },
          {
            name: 'Users Overview',
            layout: '/admin',
            path: '/main/users/users-overview',
            exact: false,
            component: <UsersOverview />,
          },
          {
            name: 'Users Reports',
            layout: '/admin',
            path: '/main/users/users-reports',
            exact: false,
            component: <UsersReports />,
          },
        ],
      },
      {
        name: 'Applications',
        path: '/main/applications',
        collapse: true,
        items: [
          {
            name: 'Kanban',
            layout: '/admin',
            path: '/main/applications/kanban',
            exact: false,
            component: <ApplicationsKanban />,
          },
          {
            name: 'Data Tables',
            layout: '/admin',
            path: '/main/applications/data-tables',
            exact: false,
            component: <ApplicationsDataTables />,
          },
          {
            name: 'Calendar',
            layout: '/admin',
            path: '/main/applications/calendar',
            exact: false,
            component: <ApplicationsCalendar />,
          },
        ],
      },
      {
        name: 'Profile',
        path: '/main/profile',
        collapse: true,
        items: [
          {
            name: 'Profile Overview',
            layout: '/admin',
            path: '/main/profile/overview',
            exact: false,
            component: <ProfileOverview />,
          },
          {
            name: 'Profile Settings',
            layout: '/admin',
            path: '/main/profile/settings',
            exact: false,
            component: <ProfileSettings />,
          },
          {
            name: 'News Feed',
            layout: '/admin',
            path: '/main/profile/newsfeed',
            exact: false,
            component: <ProfileNewsfeed />,
          },
        ],
      },
      {
        name: 'Others',
        path: '/main/others',
        collapse: true,
        items: [
          {
            name: 'Notifications',
            layout: '/admin',
            path: '/main/others/notifications',
            exact: false,
            component: <OthersNotifications />,
          },
          {
            name: 'Pricing',
            layout: '/auth',
            path: '/main/others/pricing',
            exact: false,
            component: <OthersPricing />,
          },
          {
            name: '404',
            layout: '/admin',
            path: '/main/others/404',
            exact: false,
            component: <OthersError />,
          },
          {
            name: 'Messages',
            layout: '/admin',
            path: '/main/others/messages',
            exact: false,
            component: <Messages />,
          },
        ],
      },
    ],
  },
  // --- Authentication ---
  {
    name: 'Authentication',
    layout: '/auth',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    path: '/sign-in',
    collapse: false,
    component: <SignInCentered />,
  },
];

export default routes;
