import React from 'react'

export default function TasksAlerts() {
  const tasks = [
    {
      title: 'High SCC Alert',
      priority: 'high',
      status: 'active',
      description: 'Cow #3301 shows SCC levels at 450K. Immediate check of RF quarter required.',
      meta: 'Cow #3301 • 30 minutes ago',
      actions: ['Acknowledge', 'Mark Treated']
    },
    {
      title: 'Tank Temperature Critical',
      priority: 'high',
      status: 'active',
      description: 'Bulk tank temperature is high (5.1°C). Check cooling system immediately.',
      meta: '1 hour ago',
      actions: ['Acknowledge']
    },
    {
      title: 'Optimal Breeding Window',
      priority: 'medium',
      status: 'active',
      description: 'Cow #5678 is in optimal breeding window for next 24 hours.',
      meta: 'Cow #5678 • 4 hours ago',
      actions: ['Acknowledge']
    },
    {
      title: 'Lameness Detected',
      priority: 'medium',
      status: 'active',
      description: 'Cow #6023 activity shows signs of lameness. Please inspect hoof condition.',
      meta: 'Cow #6023 • 8 hours ago',
      actions: ['Acknowledge', 'Schedule Vet']
    },
    {
      title: 'Anestrus Cow',
      priority: 'medium',
      status: 'active',
      description: 'Cow #8210 has not shown heat signs for 60 days post-calving. Vet check recommended.',
      meta: 'Cow #8210 • 12 hours ago',
      actions: ['Acknowledge']
    },
    {
      title: 'Veterinary Checkup',
      priority: 'medium',
      status: 'scheduled',
      description: 'Scheduled health check for Cow #2341 - pregnancy confirmation.',
      meta: 'Cow #2341 • Tomorrow at 10:00 AM',
      actions: []
    },
    {
      title: 'Group Vaccination Due',
      priority: 'low',
      status: 'scheduled',
      description: 'Group 3 (Heifers) due for BVD vaccination protocol.',
      meta: 'In 3 days',
      actions: []
    },
    {
      title: 'Tank Quality Monitor',
      priority: 'low',
      status: 'acknowledged',
      description: 'Fat percentage slightly below target - monitor feed composition.',
      meta: '1 day ago',
      actions: []
    },
    {
      title: 'Mastitis Treatment Follow-up',
      priority: 'high',
      status: 'acknowledged',
      description: 'Cow #1234 requires follow-up check after treatment.',
      meta: 'Cow #1234 • 2 days ago',
      actions: []
    },
    {
      title: 'Milk Drop Alert',
      priority: 'high',
      status: 'completed',
      description: 'Cow #4155 yield dropped by 25%. Marked as treated.',
      meta: 'Cow #4155 • 3 days ago',
      actions: []
    },
  ]

  const activeCount = tasks.filter(t => t.status === 'active').length
  const highPriorityCount = tasks.filter(t => t.priority === 'high' && t.status === 'active').length

  return (
    <section>
      <h1>Tasks & Alerts</h1>
      <p className="text-muted mb-4">Manage farm tasks and respond to alerts</p>

      <div className="summary-stats">
        <div className="summary-stat">
          <div className="summary-stat-value text-danger">{highPriorityCount} High Priority</div>
        </div>
        <div className="summary-stat">
          <div className="summary-stat-value">{activeCount} Active</div>
        </div>
      </div>

      <div className="filter-bar">
        <select>
          <option>All Types</option>
        </select>
        <select>
          <option>All Priority</option>
        </select>
        <select>
          <option>All Status</option>
        </select>
      </div>

      {tasks.map((task, idx) => (
        <div key={idx} className="task-item">
          <h4>
            <span className={`badge ${task.priority}`}>{task.priority}</span>
            <span className={`badge ${task.status}`}>{task.status}</span>
            {task.title}
          </h4>
          <p>{task.description}</p>
          <div className="task-meta">{task.meta}</div>
          {task.actions.length > 0 && (
            <div className="task-actions">
              {task.actions.map((action, i) => (
                <button key={i} className="btn secondary small">{action}</button>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  )
}
