import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, activeView, onViewChange, onClose }) => {
  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: '📊',
      description: 'Overview and key metrics'
    },
    {
      id: 'charts',
      label: 'Data Visualizations',
      icon: '📈',
      description: 'Interactive research charts'
    },
    {
      id: 'analysis',
      label: 'AI Analysis',
      icon: '🤖',
      description: 'Machine learning insights'
    },
    {
      id: 'research',
      label: 'Research Papers',
      icon: '📚',
      description: 'Academic resources'
    }
  ];

  const researchInsights = [
    {
      title: 'ESG Market Growth',
      value: '+15.2%',
      change: '+2.1%',
      trend: 'up'
    },
    {
      title: 'AI Adoption Rate',
      value: '68%',
      change: '+12%',
      trend: 'up'
    },
    {
      title: 'Bias Reduction',
      value: '42%',
      change: '+8%',
      trend: 'up'
    }
  ];

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h3>Navigation</h3>
          <button className="close-button" onClick={onClose}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeView === item.id ? 'active' : ''}`}
              onClick={() => onViewChange(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <div className="nav-content">
                <span className="nav-label">{item.label}</span>
                <span className="nav-description">{item.description}</span>
              </div>
            </button>
          ))}
        </nav>

        <div className="sidebar-section">
          <h4>Research Insights</h4>
          <div className="insights-grid">
            {researchInsights.map((insight, index) => (
              <div key={index} className="insight-card">
                <div className="insight-header">
                  <span className="insight-title">{insight.title}</span>
                  <span className={`insight-trend ${insight.trend}`}>
                    {insight.trend === 'up' ? '↗' : '↘'}
                  </span>
                </div>
                <div className="insight-value">{insight.value}</div>
                <div className="insight-change">{insight.change}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="sidebar-footer">
          <div className="research-progress">
            <h4>Research Progress</h4>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '75%' }}></div>
            </div>
            <span className="progress-text">75% Complete</span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar; 