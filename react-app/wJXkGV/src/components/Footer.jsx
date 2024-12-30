import React from 'react'
import { Container } from './container/Container'
import { Link } from './Link'

export const Footer = () => {
    return (
        <Container>
            <div>Logo</div>
            <div className='flex flex-col'>
                <Link>Home</Link>
                <Link>About</Link>
                <Link>Contact</Link>
            </div>
            <div className='flex flex-col'>
                <Link>Social Links</Link>
                <Link>Gallery</Link>
                <Link>Location</Link>
            </div>
        </Container>
    )
}
