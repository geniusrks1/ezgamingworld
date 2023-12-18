import React, { useState } from 'react';
import styles from './SellerkinFeatures.module.css'
import Contact from '../myresume/Contact/Contact';
import Navbar from './Navbar';
import AnalysisForm from './AnalysisForm';
import AnalysisResult from './AnalysisResult';





function SellerkinFeatures() {
  const fetchAnalysisData = async (competitorURL) => {
    try {
      // Simulating a fetch request to a fake API (using JSONPlaceholder)
      const response = await fetch(competitorURL);
      // https://jsonplaceholder.typicode.com/posts/
      
      if (!response.ok) {
        throw new Error('Failed to fetch analysis data');
      }


      const analysisData = {
        productMetrics: {
          price: 99.99,
          rating: 4.5,
          reviews: 120,
          specifications: 'Some specifications here...',
        },
        keywordRanking: ['keyword1', 'keyword2', 'keyword3'],
        improvementSuggestions: [
          'Improve product description',
          'Enhance customer support',
          'Adjust pricing strategy',
        ],
      };




      return analysisData; // Simulated analysis data
    } catch (error) {
      console.error('Error fetching analysis data: ', error);
      return null;
    }
  };

  
  const [analysisData, setAnalysisData] = useState(null);

  const handleAnalysis = async (competitorURL) => {
    try {
      const result = await fetchAnalysisData(competitorURL);
      setAnalysisData(result);
    } catch (error) {
      console.error('Error fetching analysis data: ', error);
    }
  };
  return (
    <>

     <Navbar/>
     <div className={styles.App}>
      <h1>Competitor Product Analysis Tool</h1>
      <AnalysisForm onAnalysis={handleAnalysis} />
      {analysisData && <AnalysisResult data={analysisData} />}
    </div>
    <div className={styles.footer}>
    <Contact/>
    </div>
   
    </>
  
  );
}

export default SellerkinFeatures;
















