import React, { useState } from 'react';
import './App.css';
import ResearchCharts from './ResearchCharts';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  const [activeView, setActiveView] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />;
      case 'charts':
        return <ResearchCharts />;
      case 'analysis':
        return <div className="analysis-section">
          <h2>Advanced Analysis</h2>
          <p>Coming soon: Machine learning models and predictive analytics...</p>
        </div>;
      case 'research':
        return <div className="research-section">
          <h2>Research Papers</h2>
          <p>Access to academic papers and industry reports...</p>
        </div>;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app">
      <Header 
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        activeView={activeView}
      />
      <div className="app-container">
        <Sidebar 
          isOpen={sidebarOpen}
          activeView={activeView}
          onViewChange={setActiveView}
          onClose={() => setSidebarOpen(false)}
        />
        <main className="main-content">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;