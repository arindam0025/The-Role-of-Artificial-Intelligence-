import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Key metrics data
  const keyMetrics = [
    {
      title: 'ESG Market Size',
      value: '$29.8T',
      change: '+15.2%',
      trend: 'up',
      description: 'Global assets under management'
    },
    {
      title: 'AI Adoption Rate',
      value: '68%',
      change: '+12%',
      trend: 'up',
      description: 'Financial institutions using AI'
    },
    {
      title: 'Bias Reduction',
      value: '42%',
      change: '+8%',
      trend: 'up',
      description: 'Average reduction with AI'
    },
    {
      title: 'Research Papers',
      value: '156',
      change: '+23',
      trend: 'up',
      description: 'Published this year'
    }
  ];

  // ESG growth data
  const esgGrowthData = [
    { year: '2020', assets: 30.6, growth: 15.2 },
    { year: '2021', assets: 32.1, growth: 4.9 },
    { year: '2022', assets: 30.0, growth: -6.5 },
    { year: '2023', assets: 25.1, growth: -16.3 },
    { year: '2024', assets: 29.8, growth: 18.7 },
    { year: '2030', assets: 79.7, growth: 167.5 }
  ];

  // AI effectiveness by sector
  const aiEffectivenessData = [
    { sector: 'Banking', effectiveness: 85, adoption: 72 },
    { sector: 'Asset Management', effectiveness: 78, adoption: 68 },
    { sector: 'Insurance', effectiveness: 72, adoption: 65 },
    { sector: 'Fintech', effectiveness: 90, adoption: 88 },
    { sector: 'Regulatory', effectiveness: 65, adoption: 45 }
  ];

  // Behavioral bias impact
  const biasImpactData = [
    { bias: 'Loss Aversion', traditional: 78, aiMitigated: 32, improvement: 59 },
    { bias: 'Confirmation Bias', traditional: 71, aiMitigated: 28, improvement: 61 },
    { bias: 'Herding Behavior', traditional: 69, aiMitigated: 31, improvement: 55 },
    { bias: 'Overconfidence', traditional: 73, aiMitigated: 38, improvement: 48 }
  ];

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="welcome-section">
          <h1>Welcome to AI Sustainable Finance Research</h1>
          <p>Exploring the intersection of artificial intelligence, behavioral finance, and ESG investing</p>
        </div>
        <div className="time-section">
          <div className="current-time">{formatTime(currentTime)}</div>
          <div className="current-date">{formatDate(currentTime)}</div>
        </div>
      </div>

      <div className="metrics-grid">
        {keyMetrics.map((metric, index) => (
          <div key={index} className="metric-card">
            <div className="metric-header">
              <span className="metric-title">{metric.title}</span>
              <span className={`metric-trend ${metric.trend}`}>
                {metric.trend === 'up' ? '↗' : '↘'}
              </span>
            </div>
            <div className="metric-value">{metric.value}</div>
            <div className="metric-change">{metric.change}</div>
            <div className="metric-description">{metric.description}</div>
          </div>
        ))}
      </div>

      <div className="charts-section">
        <div className="chart-row">
          <div className="chart-card">
            <h3>ESG Market Growth & Projections</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={esgGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis label={{ value: 'Assets (Trillion USD)', angle: -90, position: 'insideLeft' }} />
                <Tooltip formatter={(value) => [`$${value}T`, 'Assets']} />
                <Line type="monotone" dataKey="assets" stroke="#10b981" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
            <p className="chart-source">Source: Bloomberg Intelligence, Grand View Research (2024)</p>
          </div>

          <div className="chart-card">
            <h3>AI Effectiveness by Financial Sector</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={aiEffectivenessData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="sector" angle={-45} textAnchor="end" height={80} />
                <YAxis label={{ value: 'Effectiveness (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Bar dataKey="effectiveness" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
            <p className="chart-source">Source: Industry analysis and case studies</p>
          </div>
        </div>

        <div className="chart-row">
          <div className="chart-card full-width">
            <h3>Behavioral Bias Impact: Traditional vs AI-Mitigated</h3>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={biasImpactData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bias" />
                <YAxis label={{ value: 'Impact Level (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Bar dataKey="traditional" fill="#ef4444" name="Traditional Impact" />
                <Bar dataKey="aiMitigated" fill="#10b981" name="AI-Mitigated Impact" />
              </BarChart>
            </ResponsiveContainer>
            <p className="chart-source">Source: Behavioral finance research and AI implementation studies</p>
          </div>
        </div>
      </div>

      <div className="insights-section">
        <h2>Key Research Insights</h2>
        <div className="insights-grid">
          <div className="insight-item">
            <h4>🤖 AI Reduces Behavioral Biases</h4>
            <p>Machine learning algorithms can reduce investment decision biases by an average of 42%, with loss aversion showing the highest improvement at 59%.</p>
          </div>
          <div className="insight-item">
            <h4>📈 ESG Market Recovery</h4>
            <p>The ESG market has shown strong recovery in 2024, with projected growth to $79.7T by 2030, driven by regulatory changes and investor demand.</p>
          </div>
          <div className="insight-item">
            <h4>🏦 Sector Adoption Varies</h4>
            <p>Fintech leads AI adoption in sustainable finance at 88%, while regulatory bodies lag at 45%, highlighting opportunities for growth.</p>
          </div>
          <div className="insight-item">
            <h4>🔬 Research Momentum</h4>
            <p>156 research papers published this year on AI in sustainable finance, representing a 17% increase from last year.</p>
          </div>
        </div>
      </div>

      <div className="action-section">
        <h2>Next Steps</h2>
        <div className="action-buttons">
          <button className="action-btn primary">View Detailed Charts</button>
          <button className="action-btn secondary">Download Research Data</button>
          <button className="action-btn secondary">Explore AI Models</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 