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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<HomeContainer />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>잘못된 요청입니다!</p>
              </main>
            }
          />
        </Route>
        
        <Route path='bootstrap' element={<BootstrapLayout />}>
          <Route path='' element={<BootstrapContainer />} />
        </Route>

        <Route path='mui' element={<MuiDashboardLayout />}>
          <Route path='' element={<DashboardContainer />} />
        </Route>

      </Routes>
    </ThemeProvider>
  );
}

export default App;