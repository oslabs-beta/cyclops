import React, {useContext} from 'react';
import {appContext} from '../App.tsx';
// import BytesInGraph from './graphs/BytesInGraph';
import CPUGraph from './graphs/CPUGraph.js';

const TopicsChart = () => {
  //UNPACK CONNECTION STATE (TO GET whether cluster is Connected)
  // const appState = useContext(appContext);
  // const [connectionState, setConnectionState] = appState.connection;
  // const connectionStatus = connectionState.isConnected;

  // let renderedContent;
  // if (connectionStatus === false){
  //   renderedContent = (
  //     <div className='flex-auto justify-center'>
  //       <div className="m-10 border-2 border-limeGreen/70 rounded bg-backgroundC-400 text-slate-800">
  //         Please Connect to see this page
  //       </div>
  //     </div>
  //     )
  // } else {
  //   renderedContent = (
  //     <div className="w-fit h-fit grid grid-cols-3 gap-10 "> 
  //       <div className="cols-span-1 bg-gray-800 border border-fontGray/40 rounded">
  //         <CPUGraph/>
  //       </div> 
  //       {/* <div className="cols-span-1 bg-gray-800 border border-fontGray/40 rounded">
  //         <CPUGraph/>
  //       </div> 
  //       <div className="cols-span-1 bg-gray-800 border border-fontGray/40 rounded">
  //         <CPUGraph/>
  //       </div>   */}
  //     </div>  
  //   )
  // }
  // return (
  //   <div>
  //     {renderedContent}
  //   </div>  
  // )
  return (
    <div className="w-max h-max grid grid-cols-3 gap-10 ">
      <CPUGraph/>
    </div>
  )
};
export default TopicsChart;