import React from 'react'
import Section from './Section';
import Text_section from './Text_section';
import Cards_section from './Cards_section';
import Bullet_photo from './Bullet_photo';
import Future_ai_sec from './Future_ai_sec';
import Footer from './Footer';
import Navbar from './Navbar'


export default function Home() {
    return (
        <div>
            <Navbar />
            <Section />
            <Text_section />
            <Cards_section />
            <Bullet_photo />
            <Future_ai_sec />
            <Footer />
        </div>
    )
}
