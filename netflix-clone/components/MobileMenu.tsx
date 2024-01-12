import React from 'react'

interface mobilProp{
    visible?:boolean
}

const MobileMenu: React.FC<mobilProp>= ({visible})=> {
    if(!visible){

        return null;
    }
  return (
    <div>MobileMenu</div>
  )
}

export default MobileMenu