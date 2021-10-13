import styled from 'styled-components'
import hero from '../assets/images/illustration-hero.svg'
import GlobalStyled from '../GlobalStyled'
import IconMusic from '../assets/images/icon-music.svg'
import Media from './Media'
import Heading from './Heading'
import Description from './Description'
import Button from './Button'

const Card = styled.section`
	max-width: 450px;
	width: 100%;
	border-radius: 2rem;
	background-color: #ffffff;
  box-sizing: border-box;
	display: flex;
	flex-direction: column;
	// remplaza padding-block-start
	gap: 3.2rem;

  @media ${GlobalStyled.device.desktop}{
    gap: 4.5rem;
  }
`

const CardBody = styled.div`
	padding-inline: 2.4rem;
	padding-block-end: 3.2rem;

	display: flex;
	flex-direction: column;
	gap: 2.4rem;

  @media ${GlobalStyled.device.desktop}{
    padding-inline: 4.8rem;
	  padding-block-end: 4.8rem;
  }
`
const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
`

const CardDetails = styled.div`
	display: flex;
	justify-content: space-between;
  align-items: center;
	padding-block: 1.7rem 1.6rem;
	padding-inline: 1.6rem;
  background-color: ${GlobalStyled.colors.neutral.VeryPaleBlue};

  @media ${GlobalStyled.device.desktop}{

    padding-block: 2.5rem;
	  padding-inline: 2.4rem;

    & .spacing {
      margin-right: 9.4rem
  }
  }
 
`

const Order = () => {
	return (
		<Card>
			<Media radius={'2rem'} imagen={hero} />
			<CardBody>
				<CardContent>
					<Heading
						size='2.2rem'
						color={GlobalStyled.colors.neutral.DarkBlue}
						weight={GlobalStyled.fonts.black}
						lineHeight='2.9rem'
					>
						Order Summary
					</Heading>
					<Description
						size='1.5rem'
						color={GlobalStyled.colors.neutral.DesaturatedBlue}
						weight={GlobalStyled.fonts.medium}
						lineHeight='2.5rem'
					>
						You can now listen to millions of songs, audiobooks, and podcasts on any
						device anywhere you like!
					</Description>
				</CardContent>
				<CardDetails>
					<Media imagen={IconMusic} />
          <div className='spacing' 
          style={{
            display: 'flex',
            flexDirection: 'column', 
            justifyContent: 'center',
            gap: '3px',
          }}
          >
            <Description
              size='1.4rem'
              color={GlobalStyled.colors.neutral.DarkBlue}
              weight={GlobalStyled.fonts.black}
              lineHeight='1.8rem'
            >
              Annual Plan
            </Description>
            <Description
              size='1.4rem'
              color={GlobalStyled.colors.neutral.DesaturatedBlue}
              weight={GlobalStyled.fonts.medium}
              lineHeight='1.8rem'
            >
              $59.99/year
            </Description>
          </div>
          <Button 
            color={GlobalStyled.colors.primary.BrightBlue}
            styleLink
            weight={GlobalStyled.fonts.bold}
            size='1.3rem'
            lineHeight='1.7rem'
          > 
            Change 
          </Button>
				</CardDetails>
         <Button
          bgColor={GlobalStyled.colors.primary.BrightBlue}
          color={GlobalStyled.colors.neutral.VeryPaleBlue}
          weight={GlobalStyled.fonts.black}
          size='1.5rem'
          lineHeight='1.9rem'
          padding='15px 64px 15px 64px'
          radius
         >
          Proceed to Payment 
         </Button>

          <Button
             color={GlobalStyled.colors.neutral.DesaturatedBlue}
             weight={GlobalStyled.fonts.black}
             size='1.5rem'
             lineHeight='1.9rem'
          >
            Cancel Order 
          </Button>
			</CardBody>
		</Card>
	)
}

export default Order
