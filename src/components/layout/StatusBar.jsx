import { useAuth } from '../../context/AuthContext';

const StatsBar = () => {
  const { tenantLeads, tenantCallLogs } = useAuth();

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">
              {tenantLeads.length}
            </p>
            <p className="text-sm text-gray-600">Total Leads</p>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">
              {tenantCallLogs.length}
            </p>
            <p className="text-sm text-gray-600">Call Logs</p>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">
              {tenantLeads.filter(l => l.status === 'Qualified').length}
            </p>
            <p className="text-sm text-gray-600">Qualified</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
