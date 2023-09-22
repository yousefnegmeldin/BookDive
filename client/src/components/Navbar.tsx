import Button from "./Button"


const Navbar = () => {
  return (
    <header className="text-stone-100 w-full bg-brown-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5 px-4  bg-inherit z-10 fixed shadow-2xl">
      <nav className="flex flex-1 w-full justify-between items-center h-20 text-lg ">
        <p className="w-[200px] text-center">Image</p>
        <div className="flex">
            <p className="mx-8">Home</p>
            <p className="mx-8">Blog</p>
        </div>
        <Button />
      </nav>
    </header>
    

  )
}

export default Navbar