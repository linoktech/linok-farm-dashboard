import React from 'react'
import { FarmContext } from '../App'

export default function Herd() {
  const { selectedFarm } = React.useContext(FarmContext)
  const [activeTab, setActiveTab] = React.useState<'performance' | 'profitability'>('performance')

  const cows = [
    { id: '1004', yield: 102.8, fat: 3.90, protein: 3.30, scc: '112k', fpRatio: 1.18, risk: 'low', trend: '—', value: 245, cost: 180 },
    { id: '9001', yield: 96.5, fat: 3.70, protein: 3.20, scc: '180k', fpRatio: 1.16, risk: 'medium', trend: '—', value: 230, cost: 175 },
    { id: '0001', yield: 96.0, fat: 3.90, protein: 3.30, scc: '95k', fpRatio: 1.18, risk: 'low', trend: '—', value: 228, cost: 172 },
    { id: '1002', yield: 95.6, fat: 4.10, protein: 3.40, scc: '98k', fpRatio: 1.21, risk: 'low', trend: '—', value: 232, cost: 178 },
    { id: '1002', yield: 95.6, fat: 3.70, protein: 3.10, scc: '95k', fpRatio: 1.19, risk: 'low', trend: '—', value: 226, cost: 174 },
    { id: '3102', yield: 94.2, fat: 3.90, protein: 3.10, scc: '110k', fpRatio: 1.26, risk: 'low', trend: '—', value: 224, cost: 170 },
    { id: '3104', yield: 91.0, fat: 3.70, protein: 3.10, scc: '210k', fpRatio: 1.19, risk: 'medium', trend: '—', value: 215, cost: 168 },
    { id: '1005', yield: 90.3, fat: 3.60, protein: 3.00, scc: '80k', fpRatio: 1.20, risk: 'low', trend: '—', value: 212, cost: 165 },
    { id: '3109', yield: 90.3, fat: 3.70, protein: 3.00, scc: '140k', fpRatio: 1.23, risk: 'low', trend: '—', value: 214, cost: 167 },
    { id: '0002', yield: 90.1, fat: 3.70, protein: 3.10, scc: '142k', fpRatio: 1.19, risk: 'low', trend: '—', value: 213, cost: 166 },
    { id: '1001', yield: 87.4, fat: 3.80, protein: 3.20, scc: '125k', fpRatio: 1.19, risk: 'low', trend: '—', value: 207, cost: 162 },
    { id: '5678', yield: 86.7, fat: 3.90, protein: 3.30, scc: '145k', fpRatio: 1.18, risk: 'low', trend: '—', value: 208, cost: 160 },
    { id: '1234', yield: 73.8, fat: 3.80, protein: 3.20, scc: '185k', fpRatio: 1.19, risk: 'high', trend: '—', value: 175, cost: 155 },
    { id: '2005', yield: 51.1, fat: 4.12, protein: 3.45, scc: '450k', fpRatio: 1.19, risk: 'high', trend: '—', value: 128, cost: 145 },
    { id: '1005', yield: 42.9, fat: 3.60, protein: 3.10, scc: '340k', fpRatio: 1.16, risk: 'high', trend: '—', value: 102, cost: 140 },
    { id: '1003', yield: 41.3, fat: 4.20, protein: 3.50, scc: '280k', fpRatio: 1.20, risk: 'high', trend: '—', value: 105, cost: 138 },
  ]

  return (
    <section>
      <h1>Herd Management</h1>
      <p className="text-muted mb-4">Viewing all cows for {selectedFarm}</p>

      <div className="tabs">
        <button
          className={`tab ${activeTab === 'performance' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('performance')}
        >
          Performance Overview
        </button>
        <button
          className={`tab ${activeTab === 'profitability' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('profitability')}
        >
          Profitability Analysis
        </button>
      </div>

      {activeTab === 'performance' && (
        <div className="panel">
          <div className="panel-header">
            <h3>Cow Performance</h3>
            <button className="btn secondary small">Analyze</button>
          </div>
          <p className="text-muted mb-4">Displaying {cows.length} of {cows.length} cows.</p>

          <div className="filter-bar">
            <select>
              <option>All Performance</option>
            </select>
            <select>
              <option>All Risk Levels</option>
            </select>
            <select>
              <option>All F:P Ratios</option>
            </select>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th>Cow ID</th>
                <th>Yield (lb)</th>
                <th>Fat %</th>
                <th>Protein %</th>
                <th>SCC</th>
                <th>F:P Ratio</th>
                <th>Mastitis Risk</th>
                <th>7d Trend</th>
              </tr>
            </thead>
            <tbody>
              {cows.map((cow, idx) => (
                <tr key={idx}>
                  <td>{cow.id}</td>
                  <td>{cow.yield}</td>
                  <td>{cow.fat.toFixed(2)}</td>
                  <td>{cow.protein.toFixed(2)}</td>
                  <td>{cow.scc}</td>
                  <td>{cow.fpRatio.toFixed(2)}</td>
                  <td><span className={`badge ${cow.risk}`}>{cow.risk}</span></td>
                  <td>{cow.trend}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'profitability' && (
        <div className="panel">
          <div className="panel-header">
            <h3>Profitability Analysis</h3>
            <button className="btn secondary small">Export</button>
          </div>
          <p className="text-muted mb-4">Financial performance by cow - Displaying {cows.length} of {cows.length} cows.</p>

          <div className="filter-bar">
            <select>
              <option>All Profit Levels</option>
            </select>
            <select>
              <option>Sort by Margin</option>
            </select>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th>Cow ID</th>
                <th>Yield (lb)</th>
                <th>Milk Value</th>
                <th>Feed Cost</th>
                <th>Health Cost</th>
                <th>Net Margin</th>
                <th>ROI %</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {cows.map((cow, idx) => {
                const margin = cow.value - cow.cost
                const roi = ((margin / cow.cost) * 100).toFixed(1)
                return (
                  <tr key={idx}>
                    <td>{cow.id}</td>
                    <td>{cow.yield}</td>
                    <td>${cow.value}</td>
                    <td>${cow.cost}</td>
                    <td>$12</td>
                    <td className={margin > 50 ? 'text-success' : margin > 20 ? '' : 'text-danger'}>
                      ${margin}
                    </td>
                    <td>{roi}%</td>
                    <td>
                      <span className={`badge ${margin > 50 ? 'low' : margin > 20 ? 'medium' : 'high'}`}>
                        {margin > 50 ? 'profitable' : margin > 20 ? 'average' : 'review'}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}
