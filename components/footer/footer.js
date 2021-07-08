import Image from "next/image"
import { useState } from "react"

const IconSosmed = ({ item }) => {
  const [icon, setIcon] = useState(item.icon)

  return (
    <li className="px-2">
      <a href={item.link}>
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

const Footer = () => {
  const menu = [
    { text: 'Press', link: '#' },
    { text: 'Creator Kit', link: '#' },
    { text: 'Developer Blog', link: '#' },
    { text: 'Ship Notes', link: '#' },
    { text: 'Terms Of Services', link: '#' },
    { text: 'FAQ', link: '#' }
  ].map(item =>
    <li key={item.text} className="px-5">
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
    <footer className="mt-40 mb-32">
      <div className="container">
        <nav className="py-2">
          <div className="flex justify-between items-center">
            <a className="navbar-brand">
              <Image src="/assets/logo.png" alt="brand logo caves" height={50} width={170} />
            </a>
            <ul className="flex -mx-5">
              { menu }
            </ul>
          </div>
        </nav>

        <h4 className="text-center mt-5 mb-5 font-heading text-2xl">
          &copy; { new Date().getFullYear() } Caves Inc. All rights reserved
        </h4>

        <ul className="flex justify-center -mx-2">
          { sosmed }
        </ul>
      </div>
    </footer>
  )
}

export default Footer