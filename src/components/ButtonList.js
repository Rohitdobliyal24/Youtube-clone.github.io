import React from 'react'
import Button from './Button'
const ButtonList = () => {
  return (
    <div className='flex'>
       <Button name="All"/>
      <Button name="Trending"/>
      <Button name="Gaming"/>
      <Button name="Songs"/>
      <Button name="Live"/>
      <Button name="Soccer"/>
      <Button name="Cricket"/>
      <Button name="Cooking"/>
      <Button name="Basketball"/>
      </div>
  );
}

export default ButtonList;