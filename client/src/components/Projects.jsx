import React from 'react';
import PlooberModal from './PlooberModal.jsx';
import RedStoreModal from './RedStoreModal.jsx';
import { FiGithub } from 'react-icons/fi';
import FigmaWireFrames from './FigmaWireFrames.jsx';
import Morpheus from './Morpheus.jsx';

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
    })
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
        <button className='btn' onClick={this.handleClick} value='ploober'>Ploober</button>
        <button className='btn' onClick={this.handleClick}value='redstore'>RedStore Merch</button>
        <button className='btn' onClick={this.handleClick}value='morpheus'>Morpheus</button>
      </div>
      {this.state.show === 'ploober' ?<PlooberModal show={this.state.show} handleClose={this.handleClose}/> : null}
      {this.state.show === 'redstore' ? <RedStoreModal show={this.state.show} handleClose={this.handleClose}/> : null}
      {this.state.show === 'morpheus' ? <Morpheus show={this.state.show} handleClose={this.handleClose}/> : null}
    </div>
    )
  }
}
export default Projects;