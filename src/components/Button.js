import styled from 'styled-components'
import GlobalStyled from '../GlobalStyled'

const Actions = styled.a`
background-color: ${props => props.bgColor};
  color: ${props => props.color};
  text-decoration-line: ${props => props.styleLink ? 'underline' : null};
  font-size: ${props => props.size};
  font-weight:${props => props.weight};
  line-height: ${props => props.lineHeight};
  text-align: center;
  padding: ${props => props.padding};
  border-radius: ${ props => props.radius ? '11px' : null};

  @media ${GlobalStyled.device.desktop}{
    cursor: pointer;
  }
`

const Button = ({ children, ...props}) => {
  const {  
    color,
    weight,
    size,
    lineHeight,
    styleLink,
    bgColor,
    padding,
    radius } = props
  return (
    <Actions
      color={ color }
      styleLink={styleLink}
      size={size}
      weight={weight}
      lineHeight0={lineHeight}
      bgColor={bgColor}
      padding={padding}
      radius={radius}
    >
      {children}
    </Actions>
  )
}

export default Button
