import React from 'react';

function AnalysisResult({ data }) {
  // Extracting specific data for display
  const { productMetrics, keywordRanking, improvementSuggestions } = data;

  return (
    <div>
      <h2>Analysis Result</h2>

      {/* Product Metrics */}
      <div>
        <h3>Product Metrics</h3>
        {productMetrics && (
          <ul>
            {Object.entries(productMetrics).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Keyword Ranking */}
      <div>
        <h3>Keyword Ranking</h3>
        {keywordRanking && (
          <ul>
            {keywordRanking.map((keyword, index) => (
              <li key={index}>{keyword}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Improvement Suggestions */}
      <div>
        <h3>Improvement Suggestions</h3>
        {improvementSuggestions && (
          <ul>
            {improvementSuggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default AnalysisResult;
