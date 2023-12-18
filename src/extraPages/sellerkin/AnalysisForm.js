import React, { useState } from 'react';

function AnalysisForm({ onAnalysis }) {
  const [competitorURL, setCompetitorURL] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnalysis(competitorURL);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={competitorURL}
        onChange={(e) => setCompetitorURL(e.target.value)}
        placeholder="Enter competitor product URL"
      />
      <button type="submit">Analyze</button>
    </form>
  );
}

export default AnalysisForm;
