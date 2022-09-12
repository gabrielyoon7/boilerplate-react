import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './components/common/DefaultLayout';
import HomeContainer from './containers/home/HomeContainer';
import BootstrapLayout from './components/bootstrap/common/BootstrapLayout';
import BootstrapContainer from './containers/bootstrap/BootstrapContainer';
import MuiLayout from './components/material-ui/common/MuiLayout';
import MuiContainer from './containers/material-ui/MuiContainer';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './components/material-ui/theme';
import { CssBaseline } from '@mui/material';

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

        <Route path='mui' element={<MuiLayout />}>
          <Route path='' element={<MuiContainer />} />
        </Route>

      </Routes>
    </ThemeProvider>
  );
}

export default App;
