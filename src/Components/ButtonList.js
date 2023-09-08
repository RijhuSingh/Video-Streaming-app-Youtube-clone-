import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex mt-3 mb-3 ml-12' >
      <Button name='All' />
      <Button name='Music' />
      <Button name='Movies' />
      <Button name='Sitcoms' />
      <Button name='Cricket' />
      <Button name='Live' />
      <Button name='Soccer' />
      <Button name='Action' />
      <Button name='Thrillers' />
      <Button name='News' />
      <Button name='Comedy' />
      <Button name='React' />
    </div>
  )
}

export default ButtonList