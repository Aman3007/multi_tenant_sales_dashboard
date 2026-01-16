import { useState, useEffect, Suspense } from 'react';
import { useAuth } from '../context/AuthContext';

import Header from '../components/layout/Header';
import StatsBar from '../components/layout/StatusBar';
import Tabs from '../components/layout/Tabs';

import LeadsModule from '../components/leads/LeadsModule';
import CallLogsModule from '../components/calls/CallLogsModule';
import SettingsModule from '../components/settings/SettingModule';

import Loader from '../components/ui/Loader';


const Dashboard = () => {
  const { currentUser } = useAuth();
  const [tab, setTab] = useState('leads');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, [currentUser]);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <StatsBar />
      <Tabs tab={tab} setTab={setTab} />
      <main className="p-6">
        <Suspense fallback={<Loader />}>
          {tab === 'leads' && <LeadsModule />}
          {tab === 'calls' && <CallLogsModule />}
          {tab === 'settings' && <SettingsModule />}
        </Suspense>
      </main>
    </div>
  );
};

export default Dashboard;
