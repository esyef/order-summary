import styled from 'styled-components'

const Picture = styled.img.attrs( props => ({
  src: props.imagen,
  alt: 'Default Value'
}))`
  display: block;
  object-fit: contain;
  //width: auto;
  border-top-left-radius: ${props => props.radius};
  border-top-right-radius: ${props => props.radius};

`

const Media = ({ ...props }) => {
  const { radius, imagen } = props

  return ( <Picture radius={radius} imagen={imagen}/> );
}
 
export default Media;