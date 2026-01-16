import { Phone } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const CallLogsModule = () => {
  const { tenantCallLogs } = useAuth();

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200 flex items-center gap-2">
        <Phone className="w-5 h-5" />
        <h2 className="text-xl font-semibold">Call Logs</h2>
      </div>

      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left">Lead Name</th>
            <th className="px-6 py-3 text-left">Date & Time</th>
            <th className="px-6 py-3 text-left">Duration</th>
            <th className="px-6 py-3 text-left">Outcome</th>
          </tr>
        </thead>
        <tbody>
          {tenantCallLogs.map(log => (
            <tr key={log.id} className="border-t">
              <td className="px-6 py-4">{log.leadName}</td>
              <td className="px-6 py-4">{log.dateTime}</td>
              <td className="px-6 py-4">{log.duration}</td>
              <td className="px-6 py-4">{log.outcome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CallLogsModule;
