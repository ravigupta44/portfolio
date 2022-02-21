import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
         Hey there, I'm Ravi <br />  
        </SectionTitle>
        <SectionText>
        I am Ravi Kumar Gupta ,from Aurangabad Bihar.I'm pursuing B.tech from Indian Institute of Information Technology Una Himachal Pradesh in the field of Information Technology. I am a MERN stack web developer ,Competetive Programmer. I also have knowledge about Database Management System, MySQL and searching for good platform to enhance and implement my skills .
        </SectionText>
        <SectionTitle main center>
         welcome to <br />
         my personel portfolio 
        </SectionTitle>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;