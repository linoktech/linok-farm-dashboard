import React from 'react'

export default function Quality() {
  return (
    <section>
      <h1>Quality Dashboard</h1>
      <p className="text-muted mb-4">Monitor milk composition and tank analytics</p>

      <div className="flex-between mb-4">
        <div></div>
        <div className="flex gap-2">
          <button className="btn secondary small">PDF</button>
          <button className="btn secondary small">CSV</button>
        </div>
      </div>

      <div className="panel">
        <h3>Ideal Fat to Protein Ratio: 1.19</h3>
        <p className="text-muted">The herd is in a good metabolic state, indicating balanced energy and effective rumen function.</p>
        <button className="btn secondary small mt-4">View At-Risk Cows</button>
      </div>

      <div className="grid grid-4">
        <div className="card">
          <h3>Cow Fat %</h3>
          <div className="kpi-value">3.7%</div>
          <div className="text-success">Excellent</div>
          <div className="text-muted">Target: 3.5%</div>
        </div>
        <div className="card">
          <h3>Tank Fat %</h3>
          <div className="kpi-value">3.8%</div>
          <div className="text-success">Excellent</div>
          <div className="text-muted">Target: 3.5%</div>
        </div>
        <div className="card">
          <h3>Cow Protein %</h3>
          <div className="kpi-value">3.1%</div>
          <div className="text-success">Excellent</div>
          <div className="text-muted">Target: 3%</div>
        </div>
        <div className="card">
          <h3>Tank Protein %</h3>
          <div className="kpi-value">3.2%</div>
          <div className="text-success">Excellent</div>
          <div className="text-muted">Target: 3%</div>
        </div>
      </div>

      <div className="grid grid-3 mt-4">
        <div className="card">
          <div className="card-title">Protein Rising</div>
          <div className="text-success">+0.2% w/w vs 7-day avg</div>
        </div>
        <div className="card">
          <div className="card-title">Fat Stable</div>
          <div className="text-muted">±0.1% vs target range</div>
        </div>
        <div className="card">
          <div className="card-title">SCC Improving</div>
          <div className="text-success">-15K cells vs last week</div>
        </div>
      </div>

      <div className="panel mt-4">
        <h3>Tank Composition</h3>
        <div className="badge success" style={{marginBottom:'12px'}}>Grade A</div>
        <p className="text-muted mb-4">Real-time tank analytics</p>

        <div className="grid grid-3">
          <div>
            <div className="card-title">Current Volume</div>
            <div className="kpi-value">750 gal</div>
            <div className="text-muted">(6,447 lb)</div>
          </div>
          <div>
            <div className="card-title">Fat %</div>
            <div className="kpi-value">3.8%</div>
          </div>
          <div>
            <div className="card-title">Protein %</div>
            <div className="kpi-value">3.2%</div>
          </div>
          <div>
            <div className="card-title">SCC</div>
            <div className="kpi-value">185K</div>
          </div>
          <div>
            <div className="card-title">Temp</div>
            <div className="kpi-value">40°F</div>
          </div>
        </div>
        <p className="text-muted mt-4">Last updated: 15 minutes ago</p>
      </div>

      <div className="panel mt-4">
        <h3>ROI Projections</h3>
        <p className="text-muted mb-4">Based on current market schedule</p>

        <div className="grid grid-4">
          <div className="card">
            <div className="card-title">Monthly Premium</div>
            <div className="kpi-value">$485.50</div>
          </div>
          <div className="card">
            <div className="card-title">Per Cow Value</div>
            <div className="kpi-value">$12.85</div>
          </div>
          <div className="card">
            <div className="card-title">Weekly Change</div>
            <div className="kpi-value text-success">+$23.40</div>
            <div className="text-muted">vs last week</div>
          </div>
        </div>
        <button className="btn secondary small mt-4">View Assumptions</button>
      </div>
    </section>
  )
}
