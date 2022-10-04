import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './components/common/DefaultLayout';
import HomeContainer from './containers/home/HomeContainer';
import BootstrapLayout from './components/bootstrap/common/BootstrapLayout';
import BootstrapContainer from './containers/bootstrap/BootstrapContainer';
import DashboardContainer from './containers/material-ui/DashboardContainer';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './components/material-ui/dashboard/theme';
import { CssBaseline } from '@mui/material';
import MuiDashboardLayout from './components/material-ui/dashboard/layout/MuiDashboardLayout';
import MainContainer from './containers/material-ui/MainContainer';
import Inputs from './containers/material-ui/example/components/Inputs';
import DataDisplay from './containers/material-ui/example/components/DataDisplay';
import Feedback from './containers/material-ui/example/components/Feedback';
import Surfaces from './containers/material-ui/example/components/Surfaces';
import Navigation from './containers/material-ui/example/components/Navigation';
import Layout from './containers/material-ui/example/components/Layout';
import CounterApp from './containers/redux/CounterApp';
import homeRoutes from './app/routes/homeRoutes';
import bootstrapRoutes from './app/routes/bootstrapRoutes';
import reduxRoutes from './app/routes/reduxRoutes';
import muiRoutes from './app/routes/muiRoutes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        {homeRoutes.map((route) => <Route path={route.path} element={route.element} key={route.path} />)}
      </Route>
      <Route path='/bootstrap' element={<BootstrapLayout />}>
        {bootstrapRoutes.map((route) => <Route path={route.path} element={route.element} key={route.path} />)}
      </Route>
      <Route path='/redux' element={<DefaultLayout />}>
        {reduxRoutes.map((route) => <Route path={route.path} element={route.element} key={route.path} />)}
      </Route>
      <Route path='/mui' element={<MuiDashboardLayout />}>
        {muiRoutes.map((route) => <Route path={route.path} element={route.element} key={route.path} />)}
      </Route>
    </Routes>
  );
}

export default App;
