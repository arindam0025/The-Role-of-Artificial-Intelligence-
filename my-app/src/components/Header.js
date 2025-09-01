import React from 'react';
import './Header.css';

const Header = ({ onMenuClick, activeView }) => {
  const getViewTitle = () => {
    switch (activeView) {
      case 'dashboard':
        return 'AI in Sustainable Investment Dashboard';
      case 'charts':
        return 'Research Data Visualizations';
      case 'analysis':
        return 'Advanced AI Analysis';
      case 'research':
        return 'Research Papers & Resources';
      default:
        return 'AI in Sustainable Investment';
    }
  };

  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-button" onClick={onMenuClick}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <div className="logo">
          <span className="logo-icon">🤖</span>
          <span className="logo-text">AI Sustainable Finance</span>
        </div>
      </div>
      
      <div className="header-center">
        <h1 className="page-title">{getViewTitle()}</h1>
      </div>
      
      <div className="header-right">
        <div className="status-indicator">
          <span className="status-dot"></span>
          <span className="status-text">Live Data</span>
        </div>
        <div className="user-profile">
          <span className="user-avatar">👤</span>
          <span className="user-name">Researcher</span>
        </div>
      </div>
    </header>
  );
};

export default Header; 