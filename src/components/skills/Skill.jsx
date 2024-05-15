import React, { useEffect, useRef, useState } from 'react'
import './skills.css'
import SkillBox from './SkillBox'


const skillSets = [
    {
        skillTitle:'Frontend',
        skillList:[
                "Javascript",
                "React",
                "TypeScript",
                "TailWind"
                ]
    },
    {
        skillTitle:'Backend',
        skillList:[
                "NodeJS",
                "Express",
                "Firebase"]
    },
    {
        skillTitle:'Database',
        skillList:[
                "Firestore",
                "MongoDB",]
    },
    
    {
        skillTitle:"Also Use",
        skillList:[
            "Postman",
            "Figma",
            "Netlify",
            "Render",
            "Shadcn/ui",
        ]
    }
]


const Skill = () => {
    const containerRef = useRef(null)
    const [sectionHeight, setSectionHeight] = useState(0)
    useEffect(() => {
        setTimeout(()=>{
            const containerHeight = containerRef.current.clientHeight
            const windowHeight = window.innerHeight
        setSectionHeight(containerHeight > windowHeight ? containerHeight : windowHeight)

        },0)
    }, [])
    
  return (
    <section style={{
        height: sectionHeight
    }} className="skills section" id="skills">
         <h2 className="section__title">
       Skills
      </h2>
      <span className="section__subtitle">
        My technique stack
      </span>
      <div ref={containerRef} className="skills__container container grid">
        {
            skillSets.map(skillItem => (
                <SkillBox key={skillItem.skillTitle} skillItem={skillItem}/>
            ))
        }
      </div>
    </section>
  )
}

export default Skill