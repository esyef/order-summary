import styled from 'styled-components'
import GlobalStyled from './GlobalStyled'
import bgDesktop from './assets/images/pattern-background-desktop.svg'
import bgMobile from './assets/images/pattern-background-mobile.svg'

import Order from './components/Order'

const Container = styled.div`
	background-color: ${GlobalStyled.colors.primary.PaleBlue};
	background-image: url(${bgMobile});
	background-repeat: no-repeat;
	background-size: contain;
	top: 0px;
	height: 100%;
  padding-inline: 24px;
  padding-block : 71px;

	@media ${GlobalStyled.device.desktop} {
		background-image: url(${bgDesktop});
	  background-size: contain;
		display: grid;
		place-items: center;
	}
`

const Attribution = styled.footer`
	margin-top: 1rem;
	text-align: center;
	font-size: 1.6rem;
`

const App = () => {
	return (
		<Container>
			<Order />

			<Attribution>
				Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer noopener">Frontend Mentor</a>. 
				Coded by <a href="/" rel="noreferrer noopener">Yeferson</a>.
 			 </Attribution>
		</Container>
	)
}

export default App
