import { useState, useMemo } from 'react';
import { Users } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { LEAD_STATUSES } from '../../data/constants';

const LeadsModule = () => {
  const { tenantLeads, isAdmin, updateLeadStatus } = useAuth();
  const [filter, setFilter] = useState('All');
  const [editingId, setEditingId] = useState(null);

  const filteredLeads = useMemo(() => {
    if (filter === 'All') return tenantLeads;
    return tenantLeads.filter(l => l.status === filter);
  }, [tenantLeads, filter]);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200 flex justify-between">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Users className="w-5 h-5" /> Leads
        </h2>
        <div className="flex gap-2">
          {['All', ...LEAD_STATUSES].map(status => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-3 py-1.5 text-sm rounded ${
                filter === status
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left">Name</th>
            <th className="px-6 py-3 text-left">Phone</th>
            <th className="px-6 py-3 text-left">Status</th>
            {isAdmin && <th className="px-6 py-3 text-left">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {filteredLeads.map(lead => (
            <tr key={lead.id} className="border-t">
              <td className="px-6 py-4">{lead.name}</td>
              <td className="px-6 py-4">{lead.phone}</td>
              <td className="px-6 py-4">
                {editingId === lead.id && isAdmin ? (
                  <select
                    value={lead.status}
                    onChange={(e) => {
                      updateLeadStatus(lead.id, e.target.value);
                      setEditingId(null);
                    }}
                  >
                    {LEAD_STATUSES.map(s => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                ) : (
                  lead.status
                )}
              </td>
              {isAdmin && (
                <td className="px-6 py-4">
                  <button
                    onClick={() => setEditingId(lead.id)}
                    className="text-blue-600"
                  >
                    Edit
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadsModule;
