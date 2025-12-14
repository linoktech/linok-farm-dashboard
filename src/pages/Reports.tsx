import React from 'react'

export default function Reports() {
  const reports = [
    {
      title: 'Daily Herd Report',
      description: 'Complete daily overview of herd performance, health alerts, and production metrics',
      frequency: 'Daily',
      lastGenerated: '2 hours ago',
      size: '2.3 MB'
    },
    {
      title: 'Quality Trend Analysis',
      description: 'Weekly analysis of milk quality trends, fat/protein percentages, and tank data',
      frequency: 'Weekly',
      lastGenerated: '1 day ago',
      size: '4.1 MB'
    },
    {
      title: 'Reproduction Summary',
      description: 'Monthly reproductive performance, breeding success rates, and pregnancy status',
      frequency: 'Monthly',
      lastGenerated: '5 days ago',
      size: '1.8 MB'
    },
    {
      title: 'Cooperative Monthly Summary',
      description: 'Multi-farm performance comparison, quality rankings, and adoption metrics',
      frequency: 'Monthly',
      lastGenerated: '1 week ago',
      size: '6.7 MB'
    },
  ]

  const scheduledReports = [
    {
      name: 'Daily Herd Report',
      schedule: 'Sent daily at 8:00 AM to manager@farm.com',
      status: 'Active'
    },
    {
      name: 'Weekly Quality Summary',
      schedule: 'Sent Mondays at 9:00 AM to quality@coop.com',
      status: 'Active'
    },
  ]

  return (
    <section>
      <h1>Reports</h1>
      <p className="text-muted mb-4">Generate and schedule automated reports</p>

      <div className="flex-between mb-4">
        <select>
          <option>Last 30 Days</option>
        </select>
        <button className="btn secondary small">PDF</button>
      </div>

      {reports.map((report, idx) => (
        <div key={idx} className="panel">
          <div className="panel-header">
            <div>
              <h3>{report.title}</h3>
              <p className="text-muted">{report.description}</p>
            </div>
          </div>
          <div className="flex-between mt-4">
            <div>
              <div className="badge active">{report.frequency}</div>
              <span className="text-muted" style={{marginLeft:'12px',fontSize:'13px'}}>
                {report.lastGenerated} • {report.size}
              </span>
            </div>
            <div className="flex gap-2">
              <button className="btn secondary small">Generate PDF</button>
              <button className="btn secondary small">Schedule Email</button>
            </div>
          </div>
        </div>
      ))}

      <div className="panel mt-4">
        <h3>Quick Data Export</h3>
        <p className="text-muted mb-4">Export specific data sets for analysis</p>
        <div className="flex gap-2">
          <button className="btn secondary small">Cow Data</button>
          <button className="btn secondary small">Production Data</button>
          <button className="btn secondary small">Quality Data</button>
          <button className="btn secondary small">Alert History</button>
        </div>
      </div>

      <div className="panel mt-4">
        <h3>Scheduled Reports</h3>
        <p className="text-muted mb-4">Manage automated report delivery</p>

        {scheduledReports.map((sr, idx) => (
          <div key={idx} className="card mb-4">
            <h4>{sr.name}</h4>
            <p className="text-muted">{sr.schedule}</p>
            <div className="badge active">{sr.status}</div>
          </div>
        ))}

        <button className="btn secondary small">Add New Scheduled Report</button>
      </div>
    </section>
  )
}
