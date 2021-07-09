import Image from "next/image"
import { useState } from "react"
import Button from "./button/button"
import HiddenMenu from "./hidden-menu/hidden-menu"

const IconSosmed = ({ item }) => {
  const [icon, setIcon] = useState(item.icon)

  return (
    <li className="nav-item px-2">
      <a href={item.link} className="nav-link ps-0 pe-3">
        <Image id="twitch" 
          onMouseOver={() => setTimeout(() => {
            setIcon(item.icon.split('.')[0]+'-color.svg')
          }, 100)}
          onMouseOut={() => setIcon(item.icon)}
          src={`/assets/${icon}`} 
          alt={`icon ${icon}`}
          width={29} height={29} />
      </a>
    </li> 
  )
}

const Header = () => {
  const [open, setOpen] = useState(false)

  const menu = [
    { text: 'Home', link: '#' },
    { text: 'Features', link: '#' },
    { text: 'Pricing', link: '#' },
    { text: 'Company', link: '#' },
    { text: 'FAQ', link: '#' }
  ].map(item =>
    <li key={item.text} className="px-4">
      <a className="font-heading text-2xl transition-all hover:text-primary-200" href={item.link}>
        { item.text }
      </a>
    </li>  
  )

  const sosmed = [
    { icon: 'twc.svg', link: '#' },
    { icon: 'fb.svg', link: '#' },
    { icon: 'twt.svg', link: '#' },
    { icon: 'ig.svg', link: '#' },
    { icon: 'yt.svg', link: '#' }
  ].map(item =>
    <IconSosmed key={item.icon} item={item}></IconSosmed>
  )

  return (
    <>
      <nav className="py-2 mt-2 sm:mt-16" style={{backgroundColor: '#17002C'}}>
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <a className="navbar-brand hidden sm:inline-block">
                <Image src="/assets/logo.png" alt="brand logo caves" height={50} width={170} />
              </a>
              <a className="navbar-brand inline-block sm:hidden">
                <Image src="/assets/logo.png" alt="brand logo caves" height={37} width={125} />
              </a>
              <ul className="hidden sm:flex -mx-4 ml-4">
                { menu }
              </ul>
            </div>

            {/* eslint-disable */}
            <div 
              onClick={() => setOpen(true)}
              className="flex sm:hidden items-center justify-center w-8 h-8 bg-white rounded-lg">
              <img src="/assets/menu.svg" alt="menu button" />
            </div>
            {/* eslint-enable */}

            <div className="hidden sm:flex items-center">
              <ul className="flex items-center -mx-2 mr-2">
                { sosmed }
              </ul>
              
              <Button text="Download App"></Button>
            </div>
          </div>
        </div>
      </nav>

      <HiddenMenu open={open} close={() => setOpen(false)}></HiddenMenu>
    </>
  )
}

export default Header