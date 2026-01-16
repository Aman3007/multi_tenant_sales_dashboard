import './App.css'
import { AuthProvider } from './context/AuthContext';
import AppContent from './AppContent';

const App = () => (
  <AuthProvider>
    <AppContent />
  </AuthProvider>
);

export default App;
