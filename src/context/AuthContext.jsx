import React, { createContext, useContext, useState, useMemo } from 'react';
import { MOCK_USERS } from '../data/mockUsers';
import { TENANTS } from '../data/tenants';
import { MOCK_LEADS } from '../data/leads';
import { MOCK_CALL_LOGS } from '../data/callLogs';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [leads, setLeads] = useState(MOCK_LEADS);

  const login = (id) => setCurrentUser(MOCK_USERS.find(u => u.id === id));
  const logout = () => setCurrentUser(null);

  const isAdmin = useMemo(() => currentUser?.role === 'Admin', [currentUser]);
  const tenant = useMemo(() => currentUser ? TENANTS[currentUser.tenantId] : null, [currentUser]);

  const tenantLeads = useMemo(() => currentUser ? leads[currentUser.tenantId] : [], [currentUser, leads]);
  const tenantCallLogs = useMemo(() => currentUser ? MOCK_CALL_LOGS[currentUser.tenantId] : [], [currentUser]);

  const updateLeadStatus = (leadId, status) => {
    if (!isAdmin) return;
    setLeads(prev => ({
      ...prev,
      [currentUser.tenantId]: prev[currentUser.tenantId].map(l =>
        l.id === leadId ? { ...l, status } : l
      ),
    }));
  };

  return (
    <AuthContext.Provider value={{
      currentUser, isAdmin, tenant,
      login, logout,
      tenantLeads, tenantCallLogs,
      updateLeadStatus
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
