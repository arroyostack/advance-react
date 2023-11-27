
import { SplitScreen } from './components/SplitScreen';

export const LeftSideComponent = ({ title }) => {
  return (
    <h1 style={ { background: "yellow" } }>{ title ? title : 'Hello Left' }</h1>
  );
};
export const RightSideComponent = ({ title }) => {
  return (
    <h1 style={ { background: "red" } }>{ title ? title : 'Hello Right' }</h1>
  );
};


const App = () => {

  return (
    <SplitScreen
      leftWidth={ 1 }
      rightWidth={ 2 }
    >
      <LeftSideComponent title={ 'left' } />
      <RightSideComponent title={ 'right' } />
    </SplitScreen>
  );
};

export default App;
