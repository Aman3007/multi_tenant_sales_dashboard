import { Shield, Settings } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const SettingsModule = () => {
  const { isAdmin } = useAuth();

  if (!isAdmin) {
    return (
      <div className="bg-white p-12 text-center border rounded-lg">
        <Shield className="mx-auto mb-3" />
        <p>Access Denied: Admin only</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border shadow-sm">
      <div className="p-6 border-b flex items-center gap-2">
        <Settings className="w-5 h-5" />
        <h2 className="text-xl font-semibold">Settings</h2>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex justify-between bg-gray-50 p-4 rounded">
          <div>
            <p className="font-medium">Organization Settings</p>
            <p className="text-sm text-gray-600">Manage preferences</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Configure
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModule;
