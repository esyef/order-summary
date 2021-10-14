# Frontend Mentor - Order summary card solution

This is a solution to the [Order summary card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Screenshot

![](./OrderSummary.jpg)

### Links

- Solution URL: [https://soyyef.github.io/order-summary/]
- Live Site URL: [https://soyyef.github.io/order-summary/]

## My process

### Built with

- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

ReactJs y Styled Components me ayudaron a crear diferentes componentes con su funcionalidad reutilizable mediante el uso de props, CSS me ayudo a practicar el diseño responsive aplicando mobile firts.

```css
const Picture = styled.img.attrs( props => ({
  src: props.imagen,
  alt: 'Default Value'
}))`
  display: block;
  object-fit: contain;
  border-top-left-radius: ${props => props.radius};
  border-top-right-radius: ${props => props.radius};

`
```

```js
const Media = ({ ...props }) => {
	const { radius, imagen } = props

	return <Picture radius={radius} imagen={imagen} />
}
```

## Author

- Website - [@soyyef](https://github.com/SoyYef)
- Frontend Mentor - [@YeffWeb](https://www.frontendmentor.io/profile/YeffWeb)

## Acknowledgments

Agradezco a mí profesor [Fazt](https://www.youtube.com/watch?v=M6hBd3Lomvw&t=749s&ab_channel=FaztCode) me ayudo a desplegar este proyecto en GitHub pages 💻.
