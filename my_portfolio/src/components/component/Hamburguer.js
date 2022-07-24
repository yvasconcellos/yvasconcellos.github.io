import React from "react";
import { slide as Menu } from 'react-burger-menu'
import './Hamburguer.css'

function HamburguerMenu() {
  return(
<Menu>
  <a className="menu-item text-4xl py-3 w-fit" href="#about">About</a>
  <a className="menu-item text-4xl py-3 w-fit" href="#projects">Projects</a>
  <a className="menu-item text-4xl py-3 w-fit" href="#skills">skills</a>
  <a className="menu-item text-4xl py-3 w-fit" href="#contact">Contact</a>
</Menu>
  )
}

export default HamburguerMenu