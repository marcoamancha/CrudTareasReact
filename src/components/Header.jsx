import React from 'react'

const Header = () => {
  return (
    <div className='bg-blue-600 py-3 flex justify-between'>
        <h1 className='text-white font-bold md:text-2xl ml-4'>Marco Amancha</h1>
        <div className='text-white mr-4 md:text-2xl'>
            <a href="https://wa.me/593983841134" target="_blank" className='pr-5'>
                <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://www.linkedin.com/in/marco-amancha-566b6b1b9/" target="_blank" className='pr-5'>
                <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/marcoamancha" target="_blank" className='pr-5'>
                <i className="fab fa-github"></i>
            </a>
        </div>
    </div>
  )
}

export default Header