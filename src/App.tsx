import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import Login from './pages/Login'
import Overview from './pages/Overview'
import Herd from './pages/Herd'
import Quality from './pages/Quality'
import TasksAlerts from './pages/TasksAlerts'
import Reports from './pages/Reports'
import Settings from './pages/Settings'

const requireAuth = () => {
  return !!localStorage.getItem('linok_user')
}

function Protected({ children }: { children: React.ReactNode }) {
  if (!requireAuth()) return <Navigate to="/login" replace />
  return <>{children}</>
}

export type FarmContextType = {
  selectedFarm: string
  timeframe: string
}

export const FarmContext = React.createContext<FarmContextType>({
  selectedFarm: 'Meadowbrook Dairy',
  timeframe: 'Last 7 Days'
})

export default function App() {
  const isLoginPage = window.location.pathname === '/login'
  const [selectedFarm, setSelectedFarm] = React.useState('Meadowbrook Dairy')
  const [timeframe, setTimeframe] = React.useState('Last 7 Days')

  return (
    <FarmContext.Provider value={{ selectedFarm, timeframe }}>
      <div className="app-root">
        {!isLoginPage && <NavBar />}
        <div className="main-area">
          {!isLoginPage && (
            <header className="top-header">
              <div className="header-controls">
                <select
                  className="header-select"
                  value={selectedFarm}
                  onChange={(e) => setSelectedFarm(e.target.value)}
                >
                  <option>Meadowbrook Dairy</option>
                  <option>Riverside Farm</option>
                  <option>Green Valley Ranch</option>
                </select>
                <select
                  className="header-select"
                  value={timeframe}
                  onChange={(e) => setTimeframe(e.target.value)}
                >
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>Last 90 Days</option>
                  <option>This Year</option>
                  <option>Custom Range</option>
                </select>
              </div>
            </header>
          )}
        <main className="content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={<Protected><Overview /></Protected>}
            />
            <Route path="/overview" element={<Protected><Overview /></Protected>} />
            <Route path="/herd" element={<Protected><Herd /></Protected>} />
            <Route path="/quality" element={<Protected><Quality /></Protected>} />
            <Route path="/tasks" element={<Protected><TasksAlerts /></Protected>} />
            <Route path="/reports" element={<Protected><Reports /></Protected>} />
            <Route path="/settings" element={<Protected><Settings /></Protected>} />
          </Routes>
        </main>
      </div>
    </div>
    </FarmContext.Provider>
  )
}
