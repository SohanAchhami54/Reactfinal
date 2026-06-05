import React from 'react'
import BlurText from '../ui/BlurText'

const Home = () => {
  const handleAnimationComplete = () => {
  console.log('Animation completed!');
};
  return (
    <div className='flex justify-center items-center h-screen'>
     <BlurText
     text="This is home page."
     delay={200}
     animateBy="words"
      direction="top"
     onAnimationComplete={handleAnimationComplete}
     className="text-5xl"
/>
    </div>
  )
}

export default Home
