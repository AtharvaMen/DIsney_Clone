import React from 'react'

const HeaderItem = ({name,Icon}) => {
  return (
    <div className ="text-white flex gap-3 items-center text-[18px] font-semibold cursor-pointer hover:underline underline-offset-8">
      <Icon />
        <h2>{name}</h2>
    </div>
  )
}

export default HeaderItem
