
const size = {
  mobile: '375px',
  desktop: '1366px'
}

const GlobalStyled = {
  device: {
    mobile: `(min-width: ${size.mobile})`,
    desktop: `(min-width: ${size.desktop})`,
  },
  colors: {
    primary: {
      PaleBlue: 'hsl(225, 100%, 94%)',
      BrightBlue: 'hsl(245, 75%, 52%)',
    },
    neutral: {
      VeryPaleBlue: 'hsl(225, 100%, 98%)',
      DesaturatedBlue: 'hsl(224, 23%, 55%)',
      DarkBlue: 'hsl(223, 47%, 23%)',
    }
  },
  fonts: {
    medium: 500,
    bold: 700,
    black: 900
  }
}

export default GlobalStyled