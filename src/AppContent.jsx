import { useAuth } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';

const AppContent = () => {
  const { currentUser } = useAuth();
  return currentUser ? <Dashboard /> : <LoginPage />;
};

export default AppContent;
