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

  convertIntToPercent = (value) => {
    console.log(value)
    return (value * 100).toFixed()
  }

  render() {
    const styleOpacityValue = {

    }
    console.log(this.props)
    return (
      <div>
        <div style={{position: 'relative', width: '100%', height: '150px', margin: '0 0 26px'}}>
          <Saturation
            {...this.props} onChange={this.handleChange} pointer={CircleCustomPointer}/>
        </div>
        <div style={{position: 'relative', width: '100%', height: '7px', margin: '0 0 34px'}}>
          <Hue
            {...this.props}
            pointer={VerticalCustomPointer}
            onChange={this.handleChange}
            direction={'horizontal'}/>
        </div>
        <div style={{position: 'relative', width: 'calc(100% - 53px)', height: '7px'}}>
          <Alpha {...this.props} onChange={this.handleChange} pointer={VerticalCustomPointer}/>
          <div className="color-picker-opacity">
            {this.convertIntToPercent(this.props.rgb.a)}%
          </div>
        </div>
      </div>
    )
  }
}

export default CustomPicker(ColorPicker);