import { useState } from "react"
import Image from "next/image"
import Button from "../button/button"

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
          width={40} height={40} />
      </a>
    </li> 
  )
}

const HiddenMenu = ({ open, close }) => {
  const menu = [
    { text: 'Home', link: '#' },
    { text: 'Features', link: '#' },
    { text: 'Pricing', link: '#' },
    { text: 'Company', link: '#' },
    { text: 'FAQ', link: '#' }
  ].map(item =>
    <li key={item.text} className="py-5 text-center">
      <a className="font-heading text-4xl transition-all hover:text-primary-200" href={item.link}>
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

  return(
    <menu 
      className="fixed w-full z-100 top-0 left-0 mt-0 px-6 py-6 h-screen flex flex-wrap content-between"
      style={{ backgroundColor: '#17002C', transform: `translateX(${open?'0%':'-100%'})`, transition: 'transform 0.3s ease' }}>
      <div className="flex justify-between items-center w-full">
        <a className="navbar-brand">
          <Image src="/assets/logo.png" alt="brand logo caves" height={37} width={125} />
        </a>

        {/* eslint-disable */}
        <div 
          onClick={() => close()}
          className="flex items-center justify-center w-8 h-8 bg-white rounded-lg">
          <img src="/assets/close.svg" alt="close button" />
        </div>
        {/* eslint-enable */}
      </div>

      <ul className="block w-full -mt-5">
        { menu }
        <li className="pt-5 text-center">
          <Button text="Download App"></Button>
        </li>
      </ul>

      <ul className="flex items-center w-full justify-center -mx-2">
        { sosmed }
      </ul>
    </menu>
  )
}

export default HiddenMenu