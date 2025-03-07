// src/components/common/ResponsiveGraph.jsx
import React from 'react';

const ResponsiveGraph = ({ children, className = "" }) => (
  <div className={`responsive-graph-container ${className}`}>
    <div className="responsive-graph-content">
      {children}
    </div>
  </div>
);

export default ResponsiveGraph;