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
const CYCLE_SECONDS = slides.length * SLIDE_SECONDS

export default function HeroSlideshow() {
  return (
    <div className="hero-slideshow" aria-hidden="true">
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className="hero-slideshow__slide"
          style={{
            backgroundImage: `url("${slide.image}")`,
            animation: `hero-slide-fade ${CYCLE_SECONDS}s ease-in-out ${index * SLIDE_SECONDS}s infinite`,
          }}
          role="presentation"
        />
      ))}
      <div className="hero-slideshow__overlay" />
    </div>
  )
}
