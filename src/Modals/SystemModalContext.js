import React, { useEffect, useRef } from 'react'

import styled from 'styled-components'

const FootNoteModal = ({ title, description, setFootnote }) => {
  let viewRef = useRef < HTMLDivElement > null
  let contentRef = useRef < HTMLDivElement > null

  const { t } = useTranslation('common')

  useEffect(() => {
    let viewEl = viewRef?.current
    if (viewEl && !!title && !!description) {
      disableBodyScroll(viewEl)
    }

    return () => {
      clearAllBodyScrollLocks()
    }
  }, [viewRef, title, description])

  return (
    <View ref={viewRef} isOpen={!!title && !!description}>
      <Content
        ref={contentRef}
        isOpen={!!title && !!description}
        contentHeight={contentRef.current?.offsetHeight || null}>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <CloseButton onClick={handleCloseButtonClick}>{t('close')}</CloseButton>
      </Content>
    </View>
  )

  function handleCloseButtonClick() {
    setFootnote({})
  }
}

export default FootNoteModal

const View =
  styled.div <
  { isOpen } >
  `
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.transition('opacity')}
  pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  background: rgba(0, 0, 0, 0.3);
`

const Content =
  styled.div <
  { isOpen, contentHeight } >
  `
  position: absolute;
  bottom: ${({ contentHeight }) => (contentHeight ? `-${contentHeight}px` : '-100%')};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 30px;
  color: ${({ theme }) => theme.colors.white};
  background: #000;
  font-family: ${({ theme }) => theme.fontsValues.secondary};
  ${({ theme }) => theme.transition('bottom')}

  ${({ isOpen }) =>
    isOpen &&
    css`
      bottom: 0;
    `}

  ${({ theme }) => theme.breakpoints.up('lg')} {
    top: 50%;
    bottom: auto;
    left: 50%;
    max-width: 560px;
    padding: 60px;
    transform: translate(-50%, -50%);
    ${({ theme }) => theme.transition('opacity')}
    opacity: 0;

    ${({ isOpen }) =>
      isOpen &&
      css`
        opacity: 1;
      `}
  }
`

const Title = styled.h2`
  margin-bottom: 29px;
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;

  ${({ theme }) => theme.breakpoints.up('lg')} {
    margin-bottom: 31px;
    font-size: 20px;
    line-height: 30px;
  }
`

const Description = styled.span`
  margin-bottom: 60px;
  letter-spacing: -0.02em;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`

const CloseButton = styled.button`
  ${({ theme }) => theme.resetButton};

  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  font-size: 15px;
  font-weight: 600;
  line-height: 15px;

  ${({ theme }) => theme.breakpoints.up('lg')} {
    cursor: pointer;
    line-height: 16px;
  }

  ${({ theme }) => theme.notTouchScreen} {
    ${({ theme }) => theme.transition('opacity')}

    &:hover {
      opacity: 0.4;
    }
  }
`
