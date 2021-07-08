import Image from "next/image"
import { useState } from "react"
import Button from "./button/button"

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
    <nav className="py-2 mt-16" style={{backgroundColor: '#17002C'}}>
      <div className="container">
        <div className="flex justify-between">
          <div className="flex items-center">
            <a className="navbar-brand">
              <Image src="/assets/logo.png" alt="brand logo caves" height={50} width={170} />
            </a>
            <ul className="flex -mx-4 ml-4">
              { menu }
            </ul>
          </div>

          <div className="flex items-center">
            <ul className="flex items-center -mx-2 mr-2">
              { sosmed }
            </ul>
            
            <Button text="Download App"></Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header