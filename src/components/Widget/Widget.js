import React from 'react'

import { Resizable } from 're-resizable'
import Draggable from 'react-draggable'
import styled from 'styled-components'

export default function Widget({ defaultPosition, defaultSize, containerEl, isOpened, children }) {
  function handleResize(e) {
    e.stopPropagation()
  }

  function handleDrag(e) {
    e.stopPropagation()
  }

  return (
    <StyledDraggableContainer
      onDrag={handleDrag}
      isOpened={isOpened}
      defaultPosition={{ x: defaultPosition.x, y: defaultPosition.y }}>
      <StyledBox
        onResize={handleResize}
        defaultSize={{
          width: defaultSize.width,
          height: defaultSize.height
        }}>
        <WidgetControl>Control</WidgetControl>
        {children}
      </StyledBox>
    </StyledDraggableContainer>
  )
}
const StyledDraggableContainer = styled(Draggable)`
  display: ${({ isOpened }) => (isOpened ? 'block' : 'none')};
  background: #fff;
  z-index: 100;
`
const StyledBox = styled(Resizable)`
  background: #e91e63;
  padding: 0px 2px 2px 2px;
`

const WidgetControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
`
