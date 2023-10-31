
import React from 'react';

import Ipod from './Ipodcomponents/Ipod';
class App extends React.Component {

  componentDidMount() {
    document.title = "Ipod";
    document.querySelector('link[rel="icon"]').setAttribute('href', 'ipod-favicon.png');
  }






  render() {
    const style1 = {
      textAlign: 'center',
      // backgroundColor: '#121212',
      maxWidth: '500px',
      paddingLeft: '10%',
      marginInline: 'auto',
      marginTop: '80px',
    }

    return (
      <>
      <div className="container"  style={style1} draggable= "false">
      <Ipod />
      </div>
      </>
    )
  }
}


export default App;
