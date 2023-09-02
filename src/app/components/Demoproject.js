import React from 'react'
import ProjectItem from './ProjectItem'
export default function Demoproject() {
  return (
    <div>
      <div className="carousel w-full h-full">
        <div id="item1" className=" items-center justify-center carousel-item w-full h-full mt-4 mb-3">
          <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <div className='grid md:grid-cols-2 gap-8'>
              <ProjectItem title='AI-Genrative-Design App UI' backgroundImg="/Images/AI.jpg" projectUrl='/AI' tech='Adobe XD' />
              <ProjectItem title='Healthcare web UI' backgroundImg="/Images/AI-healtthcare.jpg" projectUrl='/health' tech='Adobe XD' />
              <ProjectItem title='Coffee App UI' backgroundImg="/Images/coffee.jpg" projectUrl='/coffee' tech='Adobe XD' />
              <ProjectItem title='Wine Liquor web UI' backgroundImg="/Images/wine.png" projectUrl='/wine' tech='Adobe XD' />
            </div>
          </div>
        </div>
        <div id="item2" className="items-center justify-center carousel-item w-full mt-4 mb-3">
          <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <div className='grid md:grid-cols-2 gap-8'>
              <ProjectItem title='AI-Genrative-Design App UI' backgroundImg="/Images/AI.jpg" projectUrl='/AI' tech='Adobe XD' />
              <ProjectItem title='Healthcare web UI' backgroundImg="/Images/AI-healtthcare.jpg" projectUrl='/health' tech='Adobe XD' />
              <ProjectItem title='Coffee App UI' backgroundImg="/Images/coffee.jpg" projectUrl='/coffee' tech='Adobe XD' />
              <ProjectItem title='Wine Liquor web UI' backgroundImg="/Images/wine.png" projectUrl='/wine' tech='Adobe XD' />
            </div>
          </div>
        </div>
        <div id="item3" className="items-center justify-center carousel-item w-full mt-4 mb-3">
          <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <div className='grid md:grid-cols-2 gap-8'>
              <ProjectItem title='AI-Genrative-Design App UI' backgroundImg="/Images/AI.jpg" projectUrl='/AI' tech='Adobe XD' />
              <ProjectItem title='Healthcare web UI' backgroundImg="/Images/AI-healtthcare.jpg" projectUrl='/health' tech='Adobe XD' />
              <ProjectItem title='Coffee App UI' backgroundImg="/Images/coffee.jpg" projectUrl='/coffee' tech='Adobe XD' />
              <ProjectItem title='Wine Liquor web UI' backgroundImg="/Images/wine.png" projectUrl='/wine' tech='Adobe XD' />
            </div>
          </div>
        </div>
        <div id="item4" className="items-center justify-center carousel-item w-full mt-4 mb-3">
          <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <div className='grid md:grid-cols-2 gap-8'>
              <ProjectItem title='AI-Genrative-Design App UI' backgroundImg="/Images/AI.jpg" projectUrl='/AI' tech='Adobe XD' />
              <ProjectItem title='Healthcare web UI' backgroundImg="/Images/AI-healtthcare.jpg" projectUrl='/health' tech='Adobe XD' />
              <ProjectItem title='Coffee App UI' backgroundImg="/Images/coffee.jpg" projectUrl='/coffee' tech='Adobe XD' />
              <ProjectItem title='Wine Liquor web UI' backgroundImg="/Images/wine.png" projectUrl='/wine' tech='Adobe XD' />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2 mt-6">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
        <a href="#item4" className="btn btn-xs">4</a>
      </div>
    </div>
  )
}
