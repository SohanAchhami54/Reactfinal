import React, { useState } from 'react'
import StateLifting from '../components/StateLifting'

const Accordion = () => { 
    const [activeIndex,setActiveIndex]=useState(0)
  return (
    <div className='flex flex-col justify-center items-center gap-5'>
        <h1>Almaty,Kazakhstan</h1>
      <StateLifting title='About' isActive={activeIndex===0} onShow={()=>setActiveIndex(0)}>
            With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </StateLifting>

      <StateLifting title='Etymology' isActive={activeIndex===1} onShow={()=>setActiveIndex(1)}>
              The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </StateLifting>
    </div>
  )
}
export default Accordion
