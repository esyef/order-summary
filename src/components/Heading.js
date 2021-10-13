import styled from 'styled-components'
import GlobalStyled from '../GlobalStyled'

const Headings = styled.h1`
	font-size: ${(props) => props.size};
	text-align: center;
  color: ${props => props.color};
  line-height: ${props => props.lineHeight};
  font-weight: ${props => props.weight};

  @media ${GlobalStyled.device.desktop}{
	  font-size: ${(props) => props.size ? '2.8rem' : '1.6rem'};

  }
`

const Heading = ({ children, ...props }) => {
	const { color, lineHeight, size, weight } = props

	return (
		<Headings 
      color={color}
      lineHeight={lineHeight}
      size={size}
      weight={weight}
    >
			{children}
		</Headings>
	)
}

export default Heading
