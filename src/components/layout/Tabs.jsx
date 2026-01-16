import { useAuth } from '../../context/AuthContext';

const Tabs = ({ tab, setTab }) => {
  const { isAdmin } = useAuth();

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex gap-8">
          <button
            onClick={() => setTab('leads')}
            className={`py-4 border-b-2 font-medium ${
              tab === 'leads'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Leads
          </button>

          <button
            onClick={() => setTab('calls')}
            className={`py-4 border-b-2 font-medium ${
              tab === 'calls'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Call Logs
          </button>

          {isAdmin && (
            <button
              onClick={() => setTab('settings')}
              className={`py-4 border-b-2 font-medium ${
                tab === 'settings'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Settings
            </button>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Tabs;
