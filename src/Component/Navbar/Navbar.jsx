import React from 'react'

const Navbar = () => {
  return (
    <nav className=' bg-cyan-950  text-fuchsia-400 text-2xl mt-8'> 
    <div className="container">
        <div className="nav_main flex justify-between items-center">
            <div className="nav_img"><img className='w-20' src="img/logo2.png" alt="l2" /></div>
            <div className="nav_list">
                <ul className='flex gap-8 hover:marker:only: decoration-stone-100 '>
                    <li><a href="/">Home</a></li>
                    <li><a href="/vlog">vlog</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </div>
            <div className="search">
                <input className='bg-transparent border-solid border-2 border-r-amber-50 rounded-l-xl' type="text" />
                <button className=' w-16 h-9 bg-amber-300 text-fuchsia-800 rounded-r-xl'>Go</button>
            </div>

        </div>
    </div>
</nav>
  )
}

export default Navbar