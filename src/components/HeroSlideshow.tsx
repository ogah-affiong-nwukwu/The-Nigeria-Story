import { useEffect, useState } from 'react'

interface Slide {
  image: string
  alt: string
}

const slides: Slide[] = [
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Igbo_Cultural_Masquerades_-_008.jpg',
    alt: 'Igbo cultural masquerades in full regalia',
  },
  {
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/LAGOS_EYO_FESTIVAL_2025._02.jpg/960px-LAGOS_EYO_FESTIVAL_2025._02.jpg',
    alt: 'White-robed adimu masqueraders at the Lagos Eyo festival',
  },
  {
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/15/Mounted_Man_with_Spear%2C_Sallah_Durbar%2C_Kano%2C_Nigeria.png/960px-Mounted_Man_with_Spear%2C_Sallah_Durbar%2C_Kano%2C_Nigeria.png',
    alt: 'Horseman with spear at the Sallah Durbar in Kano',
  },
  {
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Boat_Regatta%2CRivers_State.jpg/960px-Boat_Regatta%2CRivers_State.jpg',
    alt: 'Decorated boats at a Niger Delta regatta',
  },
  {
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0f/Calabar_carnival_3.jpg/960px-Calabar_carnival_3.jpg',
    alt: 'Colourful dancers at the Calabar Carnival',
  },
]

const SLIDE_SECONDS = 6

export default function HeroSlideshow() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [tick, setTick] = useState(0)

  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => {
      setActive(current => (current + 1) % slides.length)
    }, SLIDE_SECONDS * 1000)
    return () => window.clearInterval(id)
  }, [paused, tick])

  function goTo(index: number) {
    setActive(index)
    setTick(current => current + 1)
  }

  return (
    <div
      className="hero-slideshow"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`hero-slideshow__slide${index === active ? ' is-active' : ''}`}
          style={{ backgroundImage: `url("${slide.image}")` }}
          role="presentation"
        />
      ))}
      <div className="hero-slideshow__overlay" aria-hidden="true" />
      <div className="hero-slideshow__rail" role="group" aria-label="Browse hero slides">
        <span className="hero-slideshow__rail-num" aria-hidden="true">
          {String(active + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            className={`hero-slideshow__dot${index === active ? ' is-active' : ''}`}
            aria-label={`Show slide ${index + 1}: ${slide.alt}`}
            aria-current={index === active}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </div>
  )
}
