import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Data from './component/Data';
interface iState {
  showData:boolean;
}

class Main extends React.Component<{}, iState> {
  constructor(state:iState) {
    super(state);
    this.state = {
      showData: false,
    }
  }

  render() {
    return (
      <div id="root">
        {this.state.showData ? <Data onClose={() => this.setState({showData:false})}/> : null}
        <button onClick={() => this.setState({showData:true})}>Data</button>
        <div>Hello</div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);