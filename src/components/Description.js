import styled from 'styled-components'
import GlobalStyled from '../GlobalStyled'

const Text = styled.p`
	font-size: ${(props) => props.size};
	text-align: center;
	color: ${(props) => props.color};
	line-height: ${(props) => props.lineHeight};
	font-weight: ${(props) => props.weight};

	@media ${GlobalStyled.device.desktop}{
		font-size: ${(props) => props.size ? '1.6rem' : props.size };

	}
`

const Description = ({ children, ...props }) => {
	const { color, lineHeight, size, weight } = props

	return (
		<Text 
      color={color} 
      lineHeight={lineHeight} 
      size={size} 
      weight={weight}
    >
			{children}
		</Text>
	)
}

export default Description
