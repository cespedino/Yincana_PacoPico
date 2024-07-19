import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from './components/navbar';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Router>
      <NavigationBar />
      <div>
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;


