import React from 'react'

import { Resizable } from 're-resizable'
import Draggable from 'react-draggable'
import styled from 'styled-components'

export default class Text extends React.Component {
  onResize(e) {
    e.stopPropagation()
  }

  render() {
    return (
      <Draggable defaultPosition={{ x: 0, y: 0 }}>
        <StyledBox
          onResize={this.onResize}
          defaultSize={{
            width: 320,
            height: 200
          }}>
          Sample with default size
        </StyledBox>
      </Draggable>
    )
  }
}

const StyledBox = styled(Resizable)`
  border: 2px solid blue;
  background: red;
`
