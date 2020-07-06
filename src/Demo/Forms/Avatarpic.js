import React from 'react'
import img1 from "./123.jpg"
import Avatar from 'react-avatar-edit';
 
class Avatarpic extends React.Component {
 
  constructor(props) {
    super(props)
    const src = ''
    this.state = {
      preview: null,
      src
    }
    this.onCrop = this.onCrop.bind(this)
    this.onClose = this.onClose.bind(this)
    this.onBeforeFileLoad = this.onBeforeFileLoad.bind(this)
  }
  
  
  onClose() {
    this.setState({preview: null})
  }
  
  onCrop(preview) {
    this.setState({preview})
    console.log(this.state.preview);

  }
 
  onBeforeFileLoad(elem) {
    if(elem.target.files[0].size > 71680){
      alert("File is too big!");
      elem.target.value = "";
    };
  }
 
  render () {
    return (
      <div>

      
        <Avatar
          width={180}
          height={180}
          onCrop={this.onCrop}
          onClose={this.onClose}
          onBeforeFileLoad={this.onBeforeFileLoad}
          src={this.state.src}
          label="personal photo"

        />
        <br/>
        <br/>
    
       <div>
       </div>
     
     </div> 
    
     
     
    )
  }
}
 export default Avatarpic;
