import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundaryComp from "components/error-boundary.comp";
import AppRoutes from "app.routes";
import { ThemeProvider } from '@mui/material/styles'
import './app.css';
import theme from 'styles/theme';



function App() {
  return (
    <ErrorBoundaryComp>
      <ThemeProvider theme={theme}>
        <Router>
          <AppRoutes />
        </Router>
      </ThemeProvider>

    </ErrorBoundaryComp>
  );
}

export default App;
