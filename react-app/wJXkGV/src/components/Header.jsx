import React from 'react'
import { Container } from './container/Container'
import { Link } from './Link'
import { Typography } from './Typography'

export const Header = () => {
    return (
        <Container>
            <div>
                <Typography type={'smallpara'} block={true} color='primary' className={'font-mono'}>Hello World</Typography>
                <Typography type={'smallpara'} color='secondary'>Hello World</Typography>
            </div>
            <div className='flex flex-col'>
                <Link path="home">Home</Link>
                <Link path="about">About</Link>
                <Link path="contact">Contact</Link>
            </div>
            <div>
                <button>Get in Touch</button>
            </div>
        </Container>
    )
}
