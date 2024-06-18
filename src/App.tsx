import NewButton from './util/NewButton';

function App() {
  return (
    <div className="App">
      <NewButton click={() => alert('리액트 빡셈')}></NewButton>
      <NewButton click={() => alert('리얼 너무 빡세..')}></NewButton>
    </div>
  );
}

export default App;

// import SNSLogin from "./sns/SNSLogin";
// import { FaApple, FaFacebook } from "react-icons/fa";

// function App() {
//   return (
//     <div className="App">
//       <SNSLogin SNSTextP={{ sns: "Apple" }} SNSIconP={{ Icon: FaApple }} SNSColorP="Apple" />
//       <SNSLogin SNSTextP={{ sns: "Facebook" }} SNSIconP={{ Icon: FaFacebook }} SNSColorP="FaceBook" />
//     </div>
//   );
// }

// export default App;
