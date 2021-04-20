import * as React from 'react';
import * as storage from '../module/storage';
import {counter} from '../../lib/counter';

interface iProps {
  onClose: () => void;
}

interface iState {
  msg:string;
  data: string;
  count: number;
}

class Container extends React.Component<iProps, iState> {
  constructor(props: iProps, state:iState) {
    super(props, state);
    this.state = {
      msg:null,
      data: null,
      count: 0
    } 
  }
  async save() {
    const data = (document.getElementById('data') as HTMLInputElement).value;
    await storage.save(data);
    this.setState({msg: 'saved:' + data});
    this.setState({count: counter()});
  }
  async load() {
    const data = await storage.load();
    this.setState({data});
  }
  render() {
    return (
      <div className="dialogue">
          <button onClick={()=> this.props.onClose()}>Close</button>
          <input type="text" id="data" />
          <button onClick={()=> this.save()}>Save</button>
          <button onClick={()=> this.load()}>Load</button>
          <div>{this.state.data}</div>
          <div>{this.state.msg}</div>
          <div>{this.state.count}</div>
      </div>
    )
  } 
}

export default Container;