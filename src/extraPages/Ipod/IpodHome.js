
import React from 'react';
import Ipod from './Ipodcomponents/Ipod';
class App extends React.Component {
  render() {
    const style1 = {
      textAlign: 'center',
      // backgroundColor: '#121212',
      maxWidth: '500px',
      paddingLeft: '10%',
      marginInline: 'auto',
      marginTop: '80px',
      /* reflection effect */
      /* -webkit-box-reflect: below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4)); */
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




// const style=  code {
//     font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
//       monospace;
//   }










export default App;
