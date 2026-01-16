import { Building2 } from 'lucide-react';
import { MOCK_USERS } from '../data/mockUsers';
import { TENANTS } from '../data/tenants';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const { login } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-black/90">
      <div className="bg-black/70 backdrop-blur-md p-8 rounded-xl shadow-2xl w-full max-w-md border border-white/10">
        <Building2 className="mx-auto mb-6 text-white" size={40} />

        {MOCK_USERS.map(user => (
          <button
            key={user.id}
            onClick={() => login(user.id)}
            className="w-full p-4 border border-white/10 rounded-lg mb-3 text-left 
                       text-white hover:bg-white/10 transition"
          >
            <p className="font-medium">{user.name}</p>
            <p className="text-sm text-white/70">
              {TENANTS[user.tenantId].name} • {user.role}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LoginPage;
