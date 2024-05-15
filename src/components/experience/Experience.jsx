import React from 'react'
import '../about/about.css'
import Timeline from './Timeline';

const Experience = ({openModal, closeModal, ShowModal}) => {

   const  experienceList = [
      {
          title:'University Of Calicut',
          subTitle:"Bachelor Of Computer Application",
          period:{
              startTime:{
                  year:2020,
                  month:8
              },
              endTime:{
                  year:2023,
                  month:3
              }
          },
          des:``
      },
      {
        title:'BlueGen Software solution',
        subTitle:"Internship",
        period:{
            startTime:{
                year:2022,
                month:10
            },
            endTime:{
             year:2022,
             month:12
         }
        },
   
    },
      {
          title:'Plus 2',
          subTitle:"Computer Science",
          period:{
              startTime:{
                  year:2018,
                  month:6
              },
              endTime:{
               year:2020,
               month:3
           }
          }
      },
      {
          title:' G tech computer education',
          subTitle:"ADVANCED COMPUTER OPERATOR",
          period:{
              startTime:{
                  year:2018,
                  month:4
              },
              endTime:{
               year:2018,
               month:7
           }
          },
          
      },
      
  ]

      

  return (
   <section className="about section" id="experience">
    <h2 className="section__title">
        Education
      </h2>
      <span className="section__subtitle">
        My journey
      </span>
      <main>
         <div className='flex justify-center gap-4'>
            <span style={{color:'var(--title-color)'}} className=' font-bold text-2xl'>Education & Work</span>
         </div>
         <section>
            <Timeline ShowModal={ShowModal} openModal={openModal} closeModal={closeModal} experienceList={experienceList}/>
         </section>
      </main>
   </section>
  )
}

export default Experience