import React from 'react';
import PlooberModal from './PlooberModal.jsx';
import REIModal from './REIModal.jsx';
import RedStoreModal from './RedStoreModal.jsx';
class Projects extends React.Component {
  constructor(props){
    super(props),
    this.state = {
      show: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleClick(e) {
    this.setState({
      show: e.target.value
    }, () => console.log(this.state.show))
  }
  handleClose(e) {
    this.setState({
      show: e.target.value
    })
  }
  render(){
    return (
      <div id='projects' className='projects_container'>
      <h1> Projects</h1>
      <div>
        <button onClick={this.handleClick} value='ploober'>Ploober</button>
        <button onClick={this.handleClick}value='rei'>REI Database</button>
        <button onClick={this.handleClick}value='redstore'>RedStore Merch</button>
      </div>
      {this.state.show === 'ploober' ?<PlooberModal show={this.state.show} handleClose={this.handleClose}/> : null}
      {this.state.show === 'rei' ? <REIModal show={this.state.show} handleClose={this.handleClose}/> : null}
      {this.state.show === 'redstore' ?<RedStoreModal show={this.state.show} handleClose={this.handleClose}/> : null}
    </div>
    )
  }
}
export default Projects;