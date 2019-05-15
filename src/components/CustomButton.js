import React from 'react';
import { Button } from 'react-bootstrap';

class CustomButton extends React.PureComponent {

  render() {
      return (
          <Button
            onClick={() => { this.props.onClick() }}
            style={{width: 200, margin: 10}}
            variant={this.props.variant}>
            {this.props.title}
          </Button>
      )
  }
}

CustomButton.defaultProps = {
  variant: 'primary',
  title: 'Button',
  onClick: () => -1
};


export default CustomButton