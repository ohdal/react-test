import React, {Component} from 'react'
import './Pallet.scss'

class Pallet extends Component {
  render() {
    const {colors, colorChange} = this.props
    const colorList = colors.map(color => (
      <p onClick={() => {colorChange(color)}}
         className="color-box"
         style={{backgroundColor: color}} key={color}/>)
    )
    return (
      <div>
        {colorList}
      </div>
    );
  }
}

export default Pallet;
