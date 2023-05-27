import React from 'react'
import Card from './Card'
import image1 from '../assets/micro.jpg'
import image2 from '../assets/xbox.jpg'
import image3 from '../assets/psn.jpg'

const cards = [
  {
    id:1,
    title: 'Curso de Mircrosoft',
    image: image1,
    instructor: "Benito Samuel Lopez Razo"
  },
  {
    id:2,
    title: 'Arquitectura xbox',
    image: image2,
    instructor: "Jose Jair Basques Palma"
  },
  {
    id:3,
    title: 'Arquitectura psn',
    image: image3,
    instructor: "Valentin Jimenez Jarquin"
  }
]

export default function Cards() {
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
      <div className='row'>
        {
          cards.map(c =>(
        <div className='col-md-4' key={cards.id}>
          <Card
          key={c.id}
          id={c.id}
          title={c.title}
          image={c.image}
          instructor={c.instructor}
          />
        </div>
          ))
        }
      </div>
    </div>
  )
}
