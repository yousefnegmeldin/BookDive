import Button from "./Button"
import Featured from "./Featured"
import Navbar from "./Navbar"

const Hero = () => {
  return (
    <div style={{backgroundImage:"url(../assets/library.jpg)"}} className=' h-screen overflow-hidden bg-cover bg-no-repeat relative'>

        <div style={{backgroundColor: "rgba(0,0,0,0.6)"}} className='absolute h-full w-full overflow-hidden'>
            <div className='absolute text-white top-20 h-full w-full overflow-hidden'>
              <div className="mt-10 text-6xl flex justify-center flex-col items-center">
                <p className="py-4">All your books, opinions, and expressions</p>
                <p>in one place.</p>
              </div>
              <div className="flex justify-center mt-10">
                <Button />
              </div>
              <div className="flex justify-center mt-10">
                  <Featured />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero