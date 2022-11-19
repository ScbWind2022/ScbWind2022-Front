import React from 'react'

import styled, { ThemeProvider, css } from 'styled-components'

import createBreakpoints from './createBreakpoints'

export const breakpointsValues = {
  xs: 0,
  sm: 720, // replacement tablet
  md: 960, // replacement tabletLarge
  lg: 1440, // replacement desktop
  xl: 1920, // replacement desktopLarge
  xxl: 2560 // replacement desktopExtraLarge
}

export const breakpoints = createBreakpoints({ values: breakpointsValues })

export const RootThemeProvider = ({ children }) => {
  return (
    <ThemeProvider
      theme={{
        breakpoints,
        typography,
        colors,
        zIndex,
        fonts,
        container,
        grid,
        gridColumnGap,
        hidden,
        placeholder,
        resetButton,
        listStyleNone,
        notTouchScreen,
        linkStyles
      }}>
      {children}
    </ThemeProvider>
  )
}

export const colors = {}

export const zIndex = {
  modal: 999
}

export const typography = {
  h1: css`
    letter-spacing: -0.02em;
    font-size: 32.8px;
    font-weight: 500;
    line-height: 35px;

    ${({ theme }) => theme.breakpoints.up('sm')} {
      font-size: 45.75px;
      line-height: 50px;
    }

    ${({ theme }) => theme.breakpoints.up('lg')} {
      font-size: 55.75px;
      line-height: 60px;
    }

    ${({ theme }) => theme.breakpoints.up('xl')} {
      letter-spacing: -0.025em;
      font-size: 90px;
      line-height: 90px;
    }
  `,
  h2: css`
    letter-spacing: -0.02em;
    font-size: 25.75px;
    font-weight: 500;
    line-height: 30px;

    ${({ theme }) => theme.breakpoints.up('sm')} {
      font-size: 35.75px;
      line-height: 40px;
    }

    ${({ theme }) => theme.breakpoints.up('lg')} {
      font-size: 45.75px;
      line-height: 50px;
    }

    ${({ theme }) => theme.breakpoints.up('xl')} {
      letter-spacing: -0.025em;
      font-size: 55.75px;
      line-height: 60px;
    }
  `,
  h3: css`
    letter-spacing: -0.01em;
    font-size: 20px;
    font-weight: 500;
    line-height: 25px;

    ${({ theme }) => theme.breakpoints.up('sm')} {
      letter-spacing: -0.02em;
      font-size: 25.75px;
      line-height: 30px;
    }

    ${({ theme }) => theme.breakpoints.up('lg')} {
      font-size: 35.75px;
      line-height: 40px;
    }

    ${({ theme }) => theme.breakpoints.up('xl')} {
      font-size: 45.75px;
      line-height: 50px;
    }
  `,
  h4: css`
    letter-spacing: -0.01em;
    font-size: 15.75px;
    font-weight: 500;
    line-height: 20px;

    ${({ theme }) => theme.breakpoints.up('sm')} {
      font-size: 20px;
      line-height: 25px;
    }

    ${({ theme }) => theme.breakpoints.up('lg')} {
      letter-spacing: -0.02em;
      font-size: 25.75px;
      line-height: 30px;
    }

    ${({ theme }) => theme.breakpoints.up('xl')} {
      font-size: 35.75px;
      line-height: 40px;
    }
  `,
  text: css`
    letter-spacing: -0.01em;
    font-size: 15.75px;
    line-height: 20px;

    ${({ theme }) => theme.breakpoints.up('lg')} {
      font-size: 20px;
      line-height: 25px;
    }

    ${({ theme }) => theme.breakpoints.up('xl')} {
      letter-spacing: -0.02em;
      font-size: 25.75px;
      line-height: 30px;
    }
  `,
  title2: css`
    letter-spacing: -0.02em;
    text-transform: uppercase;
    font-size: 31.4px;
    font-weight: 500;
    line-height: 35px;

    ${({ theme }) => theme.breakpoints.up('sm')} {
      font-size: 35.75px;
      line-height: 40px;
    }

    ${({ theme }) => theme.breakpoints.up('lg')} {
      font-size: 45.75px;
      line-height: 50px;
    }

    ${({ theme }) => theme.breakpoints.up('xl')} {
      letter-spacing: -0.025em;
      font-size: 55.75px;
      line-height: 60px;
    }
  `,
  title3: css`
    letter-spacing: -0.02em;
    font-size: 25.75px;
    font-weight: 500;
    line-height: 30px;

    ${({ theme }) => theme.breakpoints.up('sm')} {
      font-size: 30px;
      line-height: 35px;
    }

    ${({ theme }) => theme.breakpoints.up('xl')} {
      font-size: 35.75px;
      line-height: 40px;
    }
  `,
  sectionTitle: css`
    letter-spacing: -0.02em;
    text-transform: uppercase;
    font-size: 25.75px;
    font-weight: 500;
    line-height: 30px;

    ${({ theme }) => theme.breakpoints.up('sm')} {
      font-size: 30px;
      line-height: 35px;
    }

    ${({ theme }) => theme.breakpoints.up('lg')} {
      letter-spacing: -0.025em;
      font-size: 55.75px;
      line-height: 60px;
    }
  `,
  cardTitle: css`
    letter-spacing: -0.01em;
    font-size: 20px;
    font-weight: 500;
    line-height: 25px;

    ${({ theme }) => theme.breakpoints.up('lg')} {
      letter-spacing: -0.02em;
      font-size: 25.75px;
      line-height: 30px;
    }
  `,
  cardText: css`
    letter-spacing: 0.04em;
    font-size: 12.1px;
    line-height: 15px;

    ${({ theme }) => theme.breakpoints.up('lg')} {
      letter-spacing: -0.01em;
      font-size: 20px;
      line-height: 25px;
    }
  `
}

export const fonts = {
  primary: 'Favorit Pro, sans-serif'
}

export const container = css`
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 10px;

  ${({ theme }) => theme.breakpoints.up('lg')} {
    padding: 0 45px;
  }

  ${({ withMargin }) =>
    withMargin &&
    css`
      margin-bottom: 80px;

      ${({ theme }) => theme.breakpoints.up('sm')} {
        margin-bottom: 115px;
      }

      ${({ theme }) => theme.breakpoints.up('md')} {
        margin-bottom: 120px;
      }

      ${({ theme }) => theme.breakpoints.up('lg')} {
        margin-bottom: 150px;
      }
    `};
`

export const Container = styled.div`
  ${container};
`

export const gridColumnGap = css`
  grid-column-gap: 20px;

  ${({ theme }) => theme.breakpoints.up('lg')} {
    grid-column-gap: 30px;
  }
`

export const grid = css`
  ${gridColumnGap};

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  ${({ theme }) => theme.breakpoints.up('sm')} {
    grid-template-columns: repeat(6, 1fr);
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    grid-template-columns: repeat(12, 1fr);
  }
`

export const hidden = (name, before) => {
  const mediaQuery = `${before ? 'min' : 'max'}-width: ${breakpointsValues[name] - (before ? 0 : 1)}px`
  return css`
    @media (${mediaQuery}) {
      display: none !important; /* stylelint-disable-line */
    }
  `
}

export const notTouchScreen = '@media (hover), (min--moz-device-pixel-ratio: 0)'

export const listStyleNone = css`
  margin: 0;
  padding: 0;
  list-style: none;
`

export const placeholder = (styles, parent = '&') => ({
  [`${parent}::-webkit-input-placeholder`]: {
    ...styles
  },
  [`${parent}:-moz-placeholder`]: {
    ...styles
  },
  [`${parent}::-moz-placeholder`]: {
    ...styles
  },
  [`${parent}:-ms-input-placeholder`]: {
    ...styles
  }
})

export const hideScrollbar = css`
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const resetButton = css`
  padding: 0;
  cursor: pointer;
  border: none;
  background: transparent;
`

export const linkStyles = (type) => {
  switch (type) {
    case 'white':
      return css`
        transition: background 150ms ease-in-out;
        background: linear-gradient(to left, white 0%, white 100%) no-repeat left bottom 1px / 100% 0;

        ${({ theme }) => theme.notTouchScreen} {
          &:hover {
            background-size: 100% 1px;
          }
        }
      `
    default:
      return css`
        transition: background 150ms ease-in-out;
        background: linear-gradient(to left, ${colors.primary} 0%, ${colors.primary} 100%) no-repeat left bottom 1px /
          100% 1px;

        ${({ theme }) => theme.notTouchScreen} {
          &:hover {
            background-size: 100% 0;
          }
        }
      `
  }
}

export const SeoH1 = styled.h1`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`
