import React from 'react'
import CarouselSlider from '../components/Home/CarouselSlider';
import MovingLine from '../components/Home/MovingLine';
import QuickNotice from '../components/Home/QuickNotice';
import Companies from '../components/Home/Companies';
import Events from '../components/Home/Events';
import SimpleSlider from '../components/Home/Cards';
import Welcome from '../components/Home/Welcome';
import Vision from "../components/Home/Vision"
import Mission from '../components/Home/Mission';
import Heading from '../components/Home/Heading';
const Home = () => {
  return (
    <>
      <div>
        <div>h</div>
        <CarouselSlider />
        <MovingLine heading="Two New B.E. Program - Artificial Intelligence and Machine Learning-CSE (Intake-60) & Robotics and Automation(Intake-60) start from the academic year 2022-23 Intake of B.E.-Automobile Engineering Program is increased from 60 to 120 from the academic year 2022-23." />
        <Vision />
        <Mission />
        <QuickNotice />
        <Events />
        <Heading title="Achievements" />
        <SimpleSlider />
        <Companies />
      </div>
    </>
  );
}

export default Home