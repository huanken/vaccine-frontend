import async from "../components/Async";

import {
  Layout as LayoutIcon,
  List as ListIcon,
  MapPin as MapPinIcon,
  Monitor as MonitorIcon,
  Heart as HeartIcon,
  Users as UsersIcon,
  Home as Home,
  Edit as Edit,
  Edit2 as Edit2,
} from "react-feather";

// Landing
import Landing from "../pages/landing/Landing3";

// Auth
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import ResetPassword from "../pages/auth/ResetPassword";
import Page404 from "../pages/auth/Page404";
import Page500 from "../pages/auth/Page500";
import Page403 from "../pages/auth/Page403";
// Layouts
import Boxed from "../pages/layouts/Boxed";
import SidebarCollapsed from "../pages/layouts/SidebarCollapsed";
import SidebarSticky from "../pages/layouts/SidebarSticky";
import ThemeClassic from "../pages/layouts/ThemeClassic";
import ThemeCorporate from "../pages/layouts/ThemeCorporate";
import ThemeModern from "../pages/layouts/ThemeModern";

// Misc
import Blank from "../pages/misc/Blank";

// Pages
import Profile from "../pages/pages/Profile";
import Settings from "../pages/pages/Settings";

import NewPassword from "../pages/auth/NewPassword";

// auth
import withAuth from "../HOC/withAuth";
// author
import withAuthor from "../HOC/withAuthor";
import Storage from '../Storage/Storage';

// user
const User = async(() => import("../pages/user/User"));
const Vaccine = async(() => import("../pages/vaccine/Vaccine"));
const Location = async(() => import("../pages/location/Location"));
const Injection = async(() => import("../pages/injection/Injection"));
const Vaccination = async(() => import("../pages/vaccination/BookingInjection"));

// Routes
const landingRoutes = {
  path: "/",
  name: "Landing Page",
  component: Landing,
  children: null
};

const userRoutes = {
  path:  Storage.isAuthor() === true ? "/users" : "/",
  name: Storage.isAuthor() === true ? "User Management" : "Home",
  icon : Storage.isAuthor() === true ? ListIcon : Home,
  component: Storage.isAuthor() === true ? withAuth(withAuthor(User)) : Landing ,
  children: null
};

const bookingRoutes = {
  path: "/relative",
  name: "Booking Injection Page",
  component: Vaccination,
  icon: Edit,
  children: null
};

const historyRoutes = {
  path: "/user/",
  name: "History",
  component: Vaccination,
  icon: Edit2,
  children: null
};

// const userRoutes = {
//   path: !Storage.isAuth() ? ( Storage.isAuthor() == false ? "/users" : "/"): "/",
//   name: !Storage.isAuth() ? ( Storage.isAuthor() == false ? "User Management" : "Home") : "/",
//   icon: !Storage.isAuth() ? ( Storage.isAuthor() == false ? ListIcon : Home) : Home,
//   component: !Storage.isAuth() ? ( Storage.isAuthor() == false ? withAuth(withAuthor(User)) : Landing ) : Landing,
//   children: null
// };

const vaccineRoutes = {
  path: "/vaccines",
  name: "Vaccine Management",
  icon: LayoutIcon,
  component: withAuth(Vaccine),
  children: null
};
const injectionRoutes = {
  path: "/injection",
  name: "Injection Management",
  icon: HeartIcon,
  component: withAuth(Injection),
  children: null
};
const locationRoutes = {
  path: "/locations",
  name: "Locations Management",
  icon: MapPinIcon,
  component: withAuth(Location),
  children: null
};

const authRoutes = {
  path: "/auth",
  name: "Auth",
  icon: UsersIcon,
  badgeColor: "secondary",
  badgeText: "Special",
  children: [
    {
      path: "/auth/sign-in",
      name: "Sign In",
      component: SignIn
    },
    {
      path: "/auth/sign-up",
      name: "Sign Up",
      component: SignUp
    },
    {
      path: "/auth/reset-password",
      name: "Reset Password",
      component: ResetPassword
    },
    {
      path: "/auth/new-password/:token",
      name: "New Password",
      component: NewPassword
    },
    {
      path: "/auth/404",
      name: "404 Page",
      component: Page404
    },
    {
      path: "/auth/500",
      name: "500 Page",
      component: Page500
    },
    {
      path: "/auth/403",
      name: "403 Page",
      component: Page403
    }
  ]
};

const layoutRoutes = {
  path: "/layouts",
  name: "Layouts",
  icon: MonitorIcon,
  children: [
    {
      path: "/layouts/sidebar-sticky",
      name: "Sticky Sidebar",
      component: withAuth(SidebarSticky)
    },
    {
      path: "/layouts/sidebar-collapsed",
      name: "Sidebar Collapsed",
      component: withAuth(SidebarCollapsed)
    },
    {
      path: "/layouts/boxed",
      name: "Boxed Layout",
      component: withAuth(Boxed)
    },
    {
      path: "/layouts/theme-classic",
      name: "Classic Theme",
      component: withAuth(ThemeClassic)
    },
    {
      path: "/layouts/theme-corporate",
      name: "Corporate Theme",
      component: withAuth(ThemeCorporate),
      badgeColor: "primary",
      badgeText: "New"
    },
    {
      path: "/layouts/theme-modern",
      name: "Modern Theme",
      component: withAuth(ThemeModern),
      badgeColor: "primary",
      badgeText: "New"
    }
  ]
};

// This route is not visisble in the sidebar
const privateRoutes = {
  path: "/private",
  name: "Private",
  children: [
    {
      path: "/private/blank",
      name: "Blank Page",
      component: Blank
    }
  ]
};

const profileRoutes = {
  path: "/profile",
  name: "Profile",
  component: withAuth(Profile),
  children: null
};

const settingsRoutes = {
  path: "/settings",
  name: "Settings",
  component: withAuth(Settings),
  children: null
};

// Dashboard specific routes
export const dashboard = [
  userRoutes,
  vaccineRoutes,
  locationRoutes,
  injectionRoutes,
  layoutRoutes,
  bookingRoutes,
  historyRoutes,
  // uiRoutes,
  // iconRoutes,
  // formRoutes,
  // tableRoutes,
  // formPluginsRoutes,
  // advancedTablesRoutes,
  // chartRoutes,
  privateRoutes,
  profileRoutes,
  settingsRoutes
];

// Landing specific routes
export const landing = [landingRoutes];

// Auth specific routes
export const page = [authRoutes];


// All routes
export default [
  userRoutes,
  vaccineRoutes,
  locationRoutes,
  injectionRoutes,
  bookingRoutes,
  historyRoutes,
  // authRoutes,
  // layoutRoutes,
  // uiRoutes,
  // iconRoutes,
  // formRoutes,
  // tableRoutes,
  // formPluginsRoutes,
  // advancedTablesRoutes,
  // chartRoutes,
];
