import React from 'react'

export default function Settings() {
  return (
    <section>
      <h1>Settings</h1>
      <p className="text-muted mb-4">Manage your farm settings and subscription</p>

      <div className="panel">
        <h3>Current Plan: Plus Tier</h3>
        <h4 className="mt-4">Included Features:</h4>
        <ul className="bulleted mt-4">
          <li>Everything in Basic</li>
          <li>Quality Dashboard</li>
          <li>Tank Analytics</li>
          <li>ROI Calculations</li>
          <li>Advanced Alerts</li>
          <li>Export Reports</li>
        </ul>
        <div className="flex gap-2 mt-4">
          <button className="btn primary small">Upgrade to Full Tier</button>
          <button className="btn secondary small">View All Features</button>
        </div>
      </div>

      <div className="panel">
        <h3>Farm Settings</h3>
        <div className="grid grid-2 mt-4">
          <div className="card">
            <div className="flex-between">
              <div>
                <div className="card-title">Farm Name</div>
                <div className="kpi-value" style={{fontSize:'18px'}}>Meadowbrook Dairy</div>
              </div>
              <button className="btn secondary small">Edit</button>
            </div>
          </div>
          <div className="card">
            <div className="flex-between">
              <div>
                <div className="card-title">Total Cows</div>
                <div className="kpi-value" style={{fontSize:'18px'}}>1,247 head</div>
              </div>
              <button className="btn secondary small">Update</button>
            </div>
          </div>
          <div className="card">
            <div className="flex-between">
              <div>
                <div className="card-title">Location</div>
                <div className="kpi-value" style={{fontSize:'18px'}}>Wisconsin, USA</div>
              </div>
              <button className="btn secondary small">Edit</button>
            </div>
          </div>
        </div>
      </div>

      <div className="panel">
        <h3>Notifications</h3>
        <div className="mt-4">
          <div className="card mb-4">
            <div className="flex-between">
              <div>
                <div className="card-title">High Priority Alerts</div>
                <div className="text-muted">Mastitis, health issues</div>
              </div>
              <span className="badge active">Enabled</span>
            </div>
          </div>
          <div className="card mb-4">
            <div className="flex-between">
              <div>
                <div className="card-title">Daily Reports</div>
                <div className="text-muted">Email at 8:00 AM</div>
              </div>
              <span className="badge active">Enabled</span>
            </div>
          </div>
          <div className="card mb-4">
            <div className="flex-between">
              <div>
                <div className="card-title">Breeding Reminders</div>
                <div className="text-muted">Optimal breeding windows</div>
              </div>
              <span className="badge completed">Disabled</span>
            </div>
          </div>
        </div>
        <button className="btn secondary small">Manage All Notifications</button>
      </div>

      <div className="panel">
        <h3>Team Access</h3>
        <div className="mt-4">
          <div className="card mb-4">
            <div className="flex-between">
              <div>
                <div className="card-title">Farm Manager</div>
                <div className="text-muted">manager@farm.com</div>
              </div>
              <span className="badge active">Admin</span>
            </div>
          </div>
          <div className="card mb-4">
            <div className="flex-between">
              <div>
                <div className="card-title">Veterinarian</div>
                <div className="text-muted">vet@clinic.com</div>
              </div>
              <span className="badge active">Viewer</span>
            </div>
          </div>
        </div>
        <button className="btn secondary small">Invite Team Member</button>
      </div>

      <div className="panel">
        <h3>Data Management</h3>
        <div className="grid grid-3 mt-4">
          <div className="card">
            <div className="card-title">Data Retention</div>
            <div className="text-muted mb-4">Keep data for 2 years</div>
            <button className="btn secondary small">Configure</button>
          </div>
          <div className="card">
            <div className="card-title">Export Data</div>
            <div className="text-muted mb-4">Download all farm data</div>
            <button className="btn secondary small">Export</button>
          </div>
          <div className="card">
            <div className="card-title">API Access</div>
            <div className="text-muted mb-4">Connect external tools</div>
            <button className="btn secondary small" disabled>Full Tier Only</button>
          </div>
        </div>
      </div>

      <div className="panel">
        <h3>Tier Comparison</h3>
        <p className="text-muted mb-4">Compare features across all tiers</p>

        <div className="grid grid-3">
          <div className="card">
            <h4>basic Tier</h4>
            <ul className="bulleted mt-4">
              <li>Farm Overview Dashboard</li>
              <li>Basic KPI Tracking</li>
              <li>Production Charts</li>
              <li>Basic Alerts</li>
            </ul>
            <button className="btn secondary small mt-4">Downgrade to basic</button>
          </div>

          <div className="card" style={{border:'2px solid var(--accent)'}}>
            <h4>plus Tier</h4>
            <span className="badge active">Current</span>
            <ul className="bulleted mt-4">
              <li>Everything in Basic</li>
              <li>Quality Dashboard</li>
              <li>Tank Analytics</li>
              <li>ROI Calculations</li>
              <li>Advanced Alerts</li>
              <li>Export Reports</li>
            </ul>
          </div>

          <div className="card">
            <h4>full Tier</h4>
            <ul className="bulleted mt-4">
              <li>Everything in Plus</li>
              <li>Reproduction Management</li>
              <li>Advanced Breeding Windows</li>
              <li>Multi-farm Cooperative Dashboard</li>
              <li>Custom Reports</li>
              <li>API Access</li>
            </ul>
            <button className="btn primary small mt-4">Upgrade to full</button>
          </div>
        </div>
      </div>
    </section>
  )
}
