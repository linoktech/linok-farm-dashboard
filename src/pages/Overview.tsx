import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Milk, TrendingUp, TrendingDown, AlertTriangle, Droplet, TestTube, Shield, DollarSign, Wheat, Heart, Users } from 'lucide-react'
import { FarmContext } from '../App'

function KPI({title, value, subtitle, change, onClick, icon: Icon}:{title:string,value:string,subtitle?:string,change?:string,onClick?:()=>void,icon?:any}){
  const changeClass = change?.includes('+') ? 'positive' : change?.includes('-') ? 'negative' : 'neutral'
  return (
    <div className={`kpi-card ${onClick ? 'kpi-card-clickable' : ''}`} onClick={onClick}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px'}}>
        <div className="kpi-title">{title}</div>
        {Icon && <Icon size={20} style={{color: 'var(--accent)', opacity: 0.7}} />}
      </div>
      <div className="kpi-value">{value}</div>
      {subtitle && <div className="kpi-subtitle">{subtitle}</div>}
      {change && <div className={`kpi-change ${changeClass}`}>{change}</div>}
    </div>
  )
}

// Farm-specific data configurations
const farmData: Record<string, any> = {
  'Meadowbrook Dairy': {
    milkPerCow: { value: '74.2lb', change: '+5.1 lb vs yesterday' },
    topProducers: { value: '22', change: '+1 from yesterday' },
    bottomProducers: { value: '4', change: 'Same as yesterday' },
    mastitisRisk: { value: '5', change: '+1 from yesterday' },
    avgFat: '3.89%',
    avgProtein: '3.25%',
    avgSCC: '149K',
    monthlyPremium: '$112',
    productionData: [
      { date: 'Jan 1', production: 68.5 },
      { date: 'Jan 2', production: 70.2 },
      { date: 'Jan 3', production: 69.8 },
      { date: 'Jan 4', production: 71.5 },
      { date: 'Jan 5', production: 72.1 },
      { date: 'Jan 6', production: 70.8 },
      { date: 'Jan 7', production: 71.9 },
      { date: 'Jan 8', production: 73.2 },
      { date: 'Jan 9', production: 72.5 },
      { date: 'Jan 10', production: 73.8 },
      { date: 'Jan 11', production: 72.9 },
      { date: 'Jan 12', production: 74.1 },
      { date: 'Jan 13', production: 73.5 },
      { date: 'Jan 14', production: 74.2 },
    ],
    alerts: [
      { severity: 'high', title: 'Mastitis Risk', description: 'Cow #1234 shows elevated SCC levels', time: '2 hours ago' },
      { severity: 'medium', title: 'Low Milk Yield', description: 'Cow #5678 producing 40% below average', time: '4 hours ago' },
    ],
    economics: {
      milkValue: '$13,061',
      milkValueSub: '631.0 cwt total',
      feedCost: '$7,225',
      feedCostSub: '$8.50/cow/day',
      healthCost: '$1,573',
      healthCostSub: '$1.85/cow/day',
      laborCost: '$1,870',
      laborCostSub: '$2.20/cow/day',
      netIncome: '$2,394',
      perCowProfit: '$3',
      perCwtProfit: '$4',
    }
  },
  'Riverside Farm': {
    milkPerCow: { value: '82.5lb', change: '+3.2 lb vs yesterday' },
    topProducers: { value: '28', change: '+3 from yesterday' },
    bottomProducers: { value: '2', change: '-1 from yesterday' },
    mastitisRisk: { value: '3', change: '-2 from yesterday' },
    avgFat: '4.12%',
    avgProtein: '3.42%',
    avgSCC: '125K',
    monthlyPremium: '$145',
    productionData: [
      { date: 'Jan 1', production: 75.8 },
      { date: 'Jan 2', production: 77.1 },
      { date: 'Jan 3', production: 76.5 },
      { date: 'Jan 4', production: 78.2 },
      { date: 'Jan 5', production: 79.1 },
      { date: 'Jan 6', production: 78.8 },
      { date: 'Jan 7', production: 79.5 },
      { date: 'Jan 8', production: 80.2 },
      { date: 'Jan 9', production: 80.8 },
      { date: 'Jan 10', production: 81.3 },
      { date: 'Jan 11', production: 81.0 },
      { date: 'Jan 12', production: 81.8 },
      { date: 'Jan 13', production: 82.1 },
      { date: 'Jan 14', production: 82.5 },
    ],
    alerts: [
      { severity: 'low', title: 'Equipment Maintenance', description: 'Milking parlor due for scheduled maintenance', time: '1 day ago' },
      { severity: 'medium', title: 'Feed Inventory', description: 'Alfalfa supply running low - reorder recommended', time: '5 hours ago' },
    ],
    economics: {
      milkValue: '$15,842',
      milkValueSub: '724.5 cwt total',
      feedCost: '$8,120',
      feedCostSub: '$9.20/cow/day',
      healthCost: '$1,245',
      healthCostSub: '$1.41/cow/day',
      laborCost: '$2,105',
      laborCostSub: '$2.39/cow/day',
      netIncome: '$4,372',
      perCowProfit: '$5',
      perCwtProfit: '$6',
    }
  },
  'Green Valley Ranch': {
    milkPerCow: { value: '68.3lb', change: '-1.5 lb vs yesterday' },
    topProducers: { value: '18', change: '-2 from yesterday' },
    bottomProducers: { value: '7', change: '+3 from yesterday' },
    mastitisRisk: { value: '8', change: '+2 from yesterday' },
    avgFat: '3.65%',
    avgProtein: '3.15%',
    avgSCC: '178K',
    monthlyPremium: '$85',
    productionData: [
      { date: 'Jan 1', production: 71.2 },
      { date: 'Jan 2', production: 70.8 },
      { date: 'Jan 3', production: 72.1 },
      { date: 'Jan 4', production: 70.5 },
      { date: 'Jan 5', production: 69.8 },
      { date: 'Jan 6', production: 70.2 },
      { date: 'Jan 7', production: 69.5 },
      { date: 'Jan 8', production: 68.9 },
      { date: 'Jan 9', production: 69.1 },
      { date: 'Jan 10', production: 68.5 },
      { date: 'Jan 11', production: 69.2 },
      { date: 'Jan 12', production: 68.8 },
      { date: 'Jan 13', production: 69.8 },
      { date: 'Jan 14', production: 68.3 },
    ],
    alerts: [
      { severity: 'high', title: 'Multiple High SCC Cases', description: 'Herd average SCC elevated - veterinary review needed', time: '30 minutes ago' },
      { severity: 'high', title: 'Production Decline', description: 'Herd production down 8% this week', time: '3 hours ago' },
      { severity: 'medium', title: 'Water System Issue', description: 'Pressure fluctuation in barn 3', time: '6 hours ago' },
    ],
    economics: {
      milkValue: '$11,245',
      milkValueSub: '558.2 cwt total',
      feedCost: '$6,890',
      feedCostSub: '$8.10/cow/day',
      healthCost: '$2,145',
      healthCostSub: '$2.52/cow/day',
      laborCost: '$1,685',
      laborCostSub: '$1.98/cow/day',
      netIncome: '$525',
      perCowProfit: '$1',
      perCwtProfit: '$1',
    }
  }
}

export default function Overview() {
  const navigate = useNavigate()
  const { selectedFarm } = React.useContext(FarmContext)
  const data = farmData[selectedFarm] || farmData['Meadowbrook Dairy']

  return (
    <section>
      <div className="kpi-row">
        <KPI
          title="Today's Milk per Cow"
          value={data.milkPerCow.value}
          change={data.milkPerCow.change}
          onClick={() => navigate('/herd')}
          icon={Milk}
        />
        <KPI
          title="Top Producers"
          value={data.topProducers.value}
          subtitle="cows >79 lb"
          change={data.topProducers.change}
          onClick={() => navigate('/herd')}
          icon={TrendingUp}
        />
        <KPI
          title="Bottom Producers"
          value={data.bottomProducers.value}
          subtitle="cows <45 lb"
          change={data.bottomProducers.change}
          onClick={() => navigate('/herd')}
          icon={TrendingDown}
        />
        <KPI
          title="Mastitis Risk Count"
          value={data.mastitisRisk.value}
          subtitle="high risk"
          change={data.mastitisRisk.change}
          onClick={() => navigate('/herd')}
          icon={AlertTriangle}
        />
      </div>

      <div className="panel">
        <div className="panel-header">
          <h3>Advanced Quality Analytics</h3>
          <button className="btn secondary small" onClick={() => navigate('/quality')}>View Quality Dashboard</button>
        </div>
        <p className="text-muted">Real-time milk composition tracking with premium calculations</p>
        <div className="grid grid-4 mt-4">
          <div className="card kpi-card-clickable" onClick={() => navigate('/quality')}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px'}}>
              <div className="card-title">Avg Fat %</div>
              <Droplet size={18} style={{color: 'var(--warning)', opacity: 0.7}} />
            </div>
            <div className="kpi-value">{data.avgFat}</div>
            <div className="text-success">Above Target</div>
          </div>
          <div className="card kpi-card-clickable" onClick={() => navigate('/quality')}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px'}}>
              <div className="card-title">Avg Protein %</div>
              <TestTube size={18} style={{color: 'var(--accent)', opacity: 0.7}} />
            </div>
            <div className="kpi-value">{data.avgProtein}</div>
            <div className="text-success">Premium Quality</div>
          </div>
          <div className="card kpi-card-clickable" onClick={() => navigate('/quality')}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px'}}>
              <div className="card-title">Avg SCC</div>
              <Shield size={18} style={{color: 'var(--success)', opacity: 0.7}} />
            </div>
            <div className="kpi-value">{data.avgSCC}</div>
            <div className="text-success">Grade A</div>
          </div>
          <div className="card kpi-card-clickable" onClick={() => navigate('/quality')}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px'}}>
              <div className="card-title">Monthly Premium</div>
              <DollarSign size={18} style={{color: 'var(--success)', opacity: 0.7}} />
            </div>
            <div className="kpi-value">{data.monthlyPremium}</div>
            <div className="text-muted">Quality bonus</div>
          </div>
        </div>
      </div>

      <div className="grid grid-2">
        <div className="panel">
          <h3>Milk Production Trend</h3>
          <p className="text-muted mb-4">Last 14 days - Average milk per cow (lb)</p>
          <div style={{height:'240px'}}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.productionData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--panel-border)" />
                <XAxis
                  dataKey="date"
                  stroke="var(--muted)"
                  style={{ fontSize: '12px' }}
                />
                <YAxis
                  stroke="var(--muted)"
                  style={{ fontSize: '12px' }}
                  domain={[65, 80]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--panel)',
                    border: '1px solid var(--panel-border)',
                    borderRadius: '6px',
                    color: 'var(--text)'
                  }}
                  labelStyle={{ color: 'var(--muted)' }}
                />
                <Line
                  type="monotone"
                  dataKey="production"
                  stroke="var(--accent)"
                  strokeWidth={2}
                  dot={{ fill: 'var(--accent)', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <h3>Active Alerts</h3>
            <a href="/tasks" className="text-muted" style={{fontSize:'13px'}}>View All</a>
          </div>
          {data.alerts.map((alert: any, idx: number) => (
            <div className="alert-item" key={idx}>
              <h4>
                <span className={`badge ${alert.severity}`}>{alert.severity}</span>
                {alert.title}
              </h4>
              <p>{alert.description}</p>
              <div className="alert-meta">{alert.time}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="panel">
        <h3>Today's Economic Snapshot</h3>
        <p className="text-muted mb-4">Click any section to view detailed calculations</p>
        <div className="grid grid-4">
          <div className="card">
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px'}}>
              <div className="card-title">Milk Value</div>
              <Milk size={18} style={{color: 'var(--accent)', opacity: 0.7}} />
            </div>
            <div className="kpi-value">{data.economics.milkValue}</div>
            <div className="text-muted">{data.economics.milkValueSub}</div>
          </div>
          <div className="card">
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px'}}>
              <div className="card-title">Feed Cost</div>
              <Wheat size={18} style={{color: 'var(--warning)', opacity: 0.7}} />
            </div>
            <div className="kpi-value">{data.economics.feedCost}</div>
            <div className="text-muted">{data.economics.feedCostSub}</div>
          </div>
          <div className="card">
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px'}}>
              <div className="card-title">Health Cost</div>
              <Heart size={18} style={{color: 'var(--danger)', opacity: 0.7}} />
            </div>
            <div className="kpi-value">{data.economics.healthCost}</div>
            <div className="text-muted">{data.economics.healthCostSub}</div>
          </div>
          <div className="card">
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px'}}>
              <div className="card-title">Labor Cost</div>
              <Users size={18} style={{color: 'var(--info)', opacity: 0.7}} />
            </div>
            <div className="kpi-value">{data.economics.laborCost}</div>
            <div className="text-muted">{data.economics.laborCostSub}</div>
          </div>
        </div>
        <div className="grid grid-3 mt-4">
          <div className="card">
            <div className="card-title">Estimated Daily Net Income</div>
            <div className={`kpi-value ${parseFloat(data.economics.netIncome.replace(/[$,]/g, '')) > 1000 ? 'text-success' : 'text-warning'}`}>
              {data.economics.netIncome}
            </div>
            <div className={parseFloat(data.economics.netIncome.replace(/[$,]/g, '')) > 1000 ? 'text-success' : 'text-warning'}>
              {parseFloat(data.economics.netIncome.replace(/[$,]/g, '')) > 1000 ? 'Profitable Operation' : 'Review Needed'}
            </div>
          </div>
          <div className="card">
            <div className="card-title">Per Cow Profit</div>
            <div className="kpi-value">{data.economics.perCowProfit}</div>
          </div>
          <div className="card">
            <div className="card-title">Per cwt Profit</div>
            <div className="kpi-value">{data.economics.perCwtProfit}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
