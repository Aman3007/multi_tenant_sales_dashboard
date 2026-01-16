import { Building2, Shield, Eye, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { currentUser, tenant, isAdmin, logout } = useAuth();

  return (
    <header className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">
            <Building2 className="w-8 h-8 text-white" />
            <div>
              <h1 className="text-xl font-bold">{tenant.name}</h1>
              <p className="text-sm text-white/80">
                {currentUser.name} • {currentUser.role}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-white/80">
              {isAdmin ? (
                <Shield className="w-4 h-4 text-white" />
              ) : (
                <Eye className="w-4 h-4 text-white" />
              )}
              <span>{isAdmin ? 'Full Access' : 'View Only'}</span>
            </div>

            <button
              onClick={logout}
              className="flex items-center gap-2 px-4 py-2
                         bg-white/10 hover:bg-white/20
                         text-white rounded-lg
                         transition-colors"
            >
              <LogOut className="w-4 h-4 text-white" />
              Logout
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
