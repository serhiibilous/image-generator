import React from 'react';
import {CustomPicker} from 'react-color';
import {Alpha, Hue, Saturation} from 'react-color/lib/components/common'

// Custom Pointers
import CircleCustomPointer from './circle-custom-pointer'
import VerticalCustomPointer from './vertical-custom-pointer'

class ColorPicker extends React.Component {
  handleChange = (data) => {
    this.props.onChange(data);
  }

  render() {
    return (
      <div>
        <div style={{position: 'relative', width: '100%', height: '135px', margin: '0 0 24px'}}>
          <Saturation
            {...this.props} onChange={this.handleChange} pointer={CircleCustomPointer}/>
        </div>
        <div style={{position: 'relative', width: '100%', height: '7px', margin: '0 0 31px'}}>
          <Hue
            {...this.props}
            pointer={VerticalCustomPointer}
            onChange={this.handleChange}
            direction={'horizontal'}/>
        </div>
        <div style={{position: 'relative', width: '100%', height: '7px'}}>
          <Alpha {...this.props} onChange={this.handleChange} pointer={VerticalCustomPointer}/>
        </div>
      </div>
    )
  }
}

export default CustomPicker(ColorPicker);