import React from 'react'

interface itemProp{
    name:string;
    active?: boolean;

}

const NavItem: React.FC<itemProp>=({name, active})=> {
  return (
    <div className={active ? 'text-white cursor-default' : 
    ' text-gray-400 hover:text-gray-200 transition cursor-pointer'}
    
    >{name}</div>
  )
}

export default NavItem