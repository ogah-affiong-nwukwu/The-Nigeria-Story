import { useEffect, useRef, useState } from 'react'

interface HeritageSlide {
  image: string
  name: string
  detail: string
  alt: string
}

const slides: HeritageSlide[] = [
  {
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/Nok_sculpture_Louvre_70-1998-11-1.jpg/960px-Nok_sculpture_Louvre_70-1998-11-1.jpg',
    name: 'The Nok',
    detail: 'Terracotta masters of the Jos Plateau · c. 1500 BCE',
    alt: 'Nok terracotta sculpture of a seated figure',
  },
  {
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/LAGOS_EYO_FESTIVAL_2025._02.jpg/960px-LAGOS_EYO_FESTIVAL_2025._02.jpg',
    name: 'The Yorùbá',
    detail: 'Eyo masqueraders, Lagos · the white tide of the city',
    alt: 'White-robed adimu masqueraders at the Lagos Eyo festival',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Igbo_Cultural_Masquerades_-_008.jpg',
    name: 'The Igbo',
    detail: 'Mmanwu masquerades · spirits in cloth and colour',
    alt: 'Igbo cultural masquerades in full regalia',
  },
  {
    image:
      'https://upload.wikimedia.org/wikipedia/commons/d/d5/Oba_Ewuare_I%2C_Benin_Bronzes%2C_Horniman_Museum_4_%28cropped%29.jpg',
    name: 'The Benin Empire',
    detail: 'Court bronzes · the world\u2019s great archive in metal',
    alt: 'Benin bronze head of Oba Ewuare I',
  },
  {
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/15/Mounted_Man_with_Spear%2C_Sallah_Durbar%2C_Kano%2C_Nigeria.png/960px-Mounted_Man_with_Spear%2C_Sallah_Durbar%2C_Kano%2C_Nigeria.png',
    name: 'The Hausa-Fulani',
    detail: 'Sallah Durbar, Kano · cavalry in embroidered thunder',
    alt: 'Horseman with spear at the Sallah Durbar in Kano',
  },
]

const SLIDE_SECONDS = 5

export default function HeritageSlideshow() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [tick, setTick] = useState(0)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    if (paused) return
    timerRef.current = window.setInterval(() => {
      setActive(current => (current + 1) % slides.length)
    }, SLIDE_SECONDS * 1000)
    return () => {
      if (timerRef.current !== null) window.clearInterval(timerRef.current)
    }
  }, [paused, tick])

  function goTo(index: number) {
    setActive(index)
    setTick(current => current + 1)
  }

  return (
    <div
      className="heritage-show"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="heritage-show__stage">
        {slides.map((slide, index) => (
          <figure
            key={slide.name}
            className={`heritage-show__slide${index === active ? ' is-active' : ''}`}
            aria-hidden={index !== active}
          >
            <img
              src={slide.image}
              alt={index === active ? slide.alt : ''}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            <figcaption className="heritage-show__caption">
              <span className="heritage-show__name">{slide.name}</span>
              <span className="heritage-show__detail">{slide.detail}</span>
            </figcaption>
          </figure>
        ))}
        <div className="heritage-show__frame" aria-hidden="true" />
      </div>
      <div className="heritage-show__dots" role="group" aria-label="Choose a heritage slide">
        {slides.map((slide, index) => (
          <button
            key={slide.name}
            type="button"
            className={`heritage-show__dot${index === active ? ' is-active' : ''}`}
            aria-label={`Show ${slide.name}`}
            aria-current={index === active}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </div>
  )
}
