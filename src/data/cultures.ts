import type { Culture, Stat } from './types'
import { moreCultures } from './moreCultures'

export * from './types'

const coreCultures: Culture[] = [
  {
    id: 'igbo',
    name: 'Igbo',
    people: 'Ndi Igbo',
    region: 'Southeastern Nigeria',
    states: 'Anambra, Imo, Enugu, Abia, Ebonyi + parts of Delta & Rivers',
    language: 'Igbo (Ásụ̀sụ́ Ìgbò)',
    zone: 'Southeast',
    aliases: ['ibo', 'ndi igbo'],
    tagline: 'Land of the Rising Sun — a world of masquerades, enterprise and the sacred yam.',
    teaser:
      'From the New Yam Festival to the 9th-century bronzes of Igbo-Ukwu, the Igbo weave artistry, enterprise and masquerade into one of Nigeria\u2019s most dynamic cultures.',
    keyTradition: 'New Yam Festival (Iri Ji)',
    monogram: 'IGB',
    pattern: 'pat-isi',
    palette: {
      primary: '#2e825b',
      secondary: '#c95b2a',
      pa: 'rgba(46,130,91,0.18)',
      pb: 'rgba(201,91,42,0.18)',
    },
    image:
      'https://upload.wikimedia.org/wikipedia/commons/0/0b/Igbo_Cultural_Masquerades_-_008.jpg',
    sections: [
      {
        id: 'traditions',
        label: 'Traditions & Festivals',
        items: [
          {
            name: 'New Yam Festival (Iri Ji / Iwa Ji)',
            tag: 'Harvest',
            description:
              'Yam is king: at the close of the rainy season, communities give thanks for the first harvest, feasting on roasted yam and palm oil while masquerades bless the town.',
          },
          {
            name: 'Mmanwu Masquerades',
            tag: 'Ancestors',
            description:
              'Colourful masked performers believed to embody ancestral spirits — from the elegant Maiden Spirit to the towering Ijele, king of all masquerades.',
          },
          {
            name: 'Igba Nkwu (Traditional Marriage)',
            tag: 'Celebration',
            description:
              'The bride carries palm wine through the crowd to find her groom — a test of love sealed with kola nut, blessings and lavish celebration.',
          },
          {
            name: 'Ofala Festival',
            tag: 'Royalty',
            description:
              'The royal festival of Onitsha, when the Obi (monarch) appears in full regalia to renew the bond between ruler and people.',
          },
          {
            name: 'Igba Boi (Apprenticeship)',
            tag: 'Enterprise',
            description:
              'The famed Igbo apprenticeship system: young learners serve master traders, then receive \u2018settlement\u2019 capital to launch ventures of their own.',
          },
        ],
      },
      {
        id: 'attire',
        label: 'Attire & Textiles',
        items: [
          {
            name: 'Isi Agu',
            tag: 'Status',
            description:
              'The lion-head patterned shirt reserved for titled men and grand occasions — a symbol of strength, worn with the red cap of chieftaincy.',
          },
          {
            name: 'Okpu Agu (Red Cap)',
            tag: 'Chieftaincy',
            description:
              'The crimson cap of Ndi Ichie, marking chieftaincy titles and elder status across Igboland.',
          },
          {
            name: 'Akwete Cloth',
            tag: 'Weaving',
            description:
              'Handwoven textiles from Abia State, with intricate motifs once reserved for royalty, woven by generations of women.',
          },
          {
            name: 'Uli Body Art',
            tag: 'Adornment',
            description:
              'Ephemeral body painting in earthy indigo and charcoal tones, decorating skin for festivals and rites of passage.',
          },
          {
            name: 'Coral Beads & George Wrappers',
            tag: 'Ceremony',
            description:
              'Brides and matriarchs layer precious coral beads over richly patterned wrappers for weddings and elders\u2019 burials.',
          },
        ],
      },
      {
        id: 'music',
        label: 'Music, Instruments & Arts',
        items: [
          {
            name: 'Ogene',
            tag: 'Idiophone',
            description:
              'The forged metal gong whose melodic, talking voice calls meetings, paces masquerades and drives Ogene music.',
          },
          {
            name: 'Udu',
            tag: 'Percussion',
            description:
              'The clay pot drum, struck for deep water-like tones — a Nigerian instrument now heard in jazz and world-music studios worldwide.',
          },
          {
            name: 'Ekwe & Ikoro',
            tag: 'Communication',
            description:
              'Hollowed wooden slit drums; the great Ikoro booms messages across distances while the ekwe keeps time for dance.',
          },
          {
            name: 'Igbo-Ukwu Bronzes',
            tag: 'Heritage',
            description:
              '9th-century bronze vessels, regalia and sculpture — among the oldest copper-alloy art in West Africa.',
          },
          {
            name: 'Mbari Houses',
            tag: 'Sacred art',
            description:
              'Painted shrine-houses of clay, filled with life-size sculpture, built as offerings to Ala, the earth goddess.',
          },
        ],
      },
    ],
    figures: [
      {
        name: 'Nnamdi Azikiwe',
        title: 'First President of Nigeria',
        era: '1904–1996',
        image:
        'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/88/Dr._Nnamdi_Azikiwe.jpg/960px-Dr._Nnamdi_Azikiwe.jpg',
        summary:
          'Journalist, nationalist and statesman known as \u2018Zik of Africa\u2019, he led the fight for independence and shaped Nigeria\u2019s post-colonial vision.',
        significance: 'Champion of pan-African unity and Nigeria\u2019s ceremonial founding head of state.',
      },
      {
        name: 'Chinua Achebe',
        title: 'Father of Modern African Literature',
        era: '1930–2013',
        image:
        'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Chinua_Achebe_-_Buffalo_25Sep2008_crop.jpg/960px-Chinua_Achebe_-_Buffalo_25Sep2008_crop.jpg',
        summary:
          'His novel Things Fall Apart (1958) redefined how the world reads Africa, told through Igbo eyes with unflinching grace.',
        significance: 'One of the most translated authors of the 20th century; voice of Igbo experience worldwide.',
      },
      {
        name: 'Olaudah Equiano',
        title: 'Abolitionist & Author',
        era: 'c. 1745–1797',
        image:
        'https://upload.wikimedia.org/wikipedia/commons/c/c0/Daniel_Orme%2C_W._Denton_-_Olaudah_Equiano_%28Gustavus_Vassa%29%2C_1789.png',
        summary:
          'Kidnapped from an Igbo village as a boy, he purchased his freedom and wrote a best-selling memoir that fuelled the movement to end the slave trade.',
        significance: 'His narrative remains a cornerstone of Black Atlantic literature and abolitionism.',
      },
      {
        name: 'Flora Nwapa',
        title: 'Pioneering Novelist',
        era: '1931–1993',
        image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/Flora_Nwapa.jpg/960px-Flora_Nwapa.jpg',
        summary:
          'Author of Efuru, she became the first African woman to publish a novel in English and a trailblazing publisher of women\u2019s writing.',
        significance: 'Opened global literary doors for generations of African women writers.',
      },
      {
        name: 'Eze Nri Ìfikuánim',
        title: 'First Priest-King of Nri',
        era: '9th Century',
        image:
        'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Ifikuanim_I_Eze_Nri_from_1043-1158.jpg/960px-Ifikuanim_I_Eze_Nri_from_1043-1158.jpg',
        summary:
          'Legendary founder of the Nri kingdom, whose ritual authority over peace, yam cultivation and cleansing spread across Igboland.',
        significance: 'Ancestor of a sacred kingship lineage that endured over a millennium.',
      },
      {
        name: 'King Jaja of Opobo',
        title: 'Merchant King of the Niger Delta',
        era: '1821–1891',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Jaja_of_Opobo.jpg',
        summary:
          'Born in Igboland and sold into slavery as a boy, he rose to lead the Anna Pepple house, founded the kingdom of Opobo and built a palm-oil trading empire.',
        significance: 'Symbol of resistance against colonial monopoly over West African trade.',
      },
    ],
    families: [
      {
        name: 'The Nri Royal Lineage (Ùmụ̀rí)',
        tagline: 'Priest-Kings of Peace',
        description:
          'The most ancient sacred monarchy in Igboland: the Eze Nri and his kin ruled by ritual authority rather than force, cleansing abominations, blessing yam harvests and crowning other rulers for over a thousand years.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Eze_Nri_Obalike_1910-1911.jpg',
      },
      {
        name: 'The Dynasty of Eze Chima',
        tagline: 'Rulers of Onitsha',
        description:
          'The legendary founder who led his kinsmen across the Niger in the 16th century to found Onitsha and neighbouring kingdoms; his descendants still sit as the Obi of Onitsha, celebrated each Ofala.',
        image:
          'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/Obi_of_Onitsha_at_Ofala_Onitsha.jpg/960px-Obi_of_Onitsha_at_Ofala_Onitsha.jpg',
      },
      {
        name: 'The Ojukwu Family',
        tagline: 'Merchants & Warlords',
        description:
          'From Sir Louis Odumegwu Ojukwu, the transport magnate who became Nigeria\u2019s first billionaire, to his son Chukwuemeka Odumegwu Ojukwu, the Biafran leader — one family spanning Igbo enterprise and twentieth-century tragedy.',
        image:
          'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/A_photo_of_Chukwuemeka_%22Emeka%22_Odumegwu-Ojukwu_01.jpg/960px-A_photo_of_Chukwuemeka_%22Emeka%22_Odumegwu-Ojukwu_01.jpg',
      },
      {
        name: 'The Azikiwe Family',
        tagline: 'Keepers of Zik\u2019s Flame',
        description:
          'Descendants of Nnamdi Azikiwe of Onitsha — press barons, politicians and public servants who carried the nationalist torch of \u2018Zik of Africa\u2019 across generations.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Nnamdi_Azikiwe_1.jpg',
      },
    ],
  },
  {
    id: 'yoruba',
    name: 'Yoruba',
    people: 'Àwọn Yorùbá',
    region: 'Southwestern Nigeria',
    states: 'Lagos, Oyo, Ogun, Osun, Ondo, Ekiti + parts of Kwara & Kogi',
    language: 'Yorùbá (Èdè Yorùbá)',
    zone: 'Southwest',
    aliases: ['yorùbá'],
    tagline: 'Cradle of the Orishas — where bronze, cloth and rhythm travelled with the diaspora.',
    teaser:
      'From the sacred groves of Ọ̀ṣun to the talking drums of Lagos, Yoruba artistry — in bronze, cloth and rhythm — has shaped culture across the Atlantic world.',
    keyTradition: 'Eyo & Osun-Osogbo Festivals',
    monogram: 'YOR',
    pattern: 'pat-oke',
    palette: {
      primary: '#4c5db0',
      secondary: '#d19e26',
      pa: 'rgba(76,93,176,0.20)',
      pb: 'rgba(209,158,38,0.16)',
    },
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/LAGOS_EYO_FESTIVAL_2025._02.jpg/960px-LAGOS_EYO_FESTIVAL_2025._02.jpg',
    sections: [
      {
        id: 'traditions',
        label: 'Traditions & Festivals',
        items: [
          {
            name: 'Osun-Osogbo Festival',
            tag: 'UNESCO Heritage',
            description:
              'A pilgrimage to the Sacred Grove of the river goddess Ọ̀ṣun, renewing the covenant between the deity and the town each August.',
          },
          {
            name: 'Eyo Festival',
            tag: 'Masquerade',
            description:
              'Lagos\u2019s grand procession of white-robed adimu masqueraders, dancing through the streets to honour departed kings and heroes.',
          },
          {
            name: 'Gelede',
            tag: 'Women\u2019s Power',
            description:
              'Masked celebration honouring the power of mothers and elderly women, with elaborate headdresses and satirical skits.',
          },
          {
            name: 'Egungun',
            tag: 'Ancestors',
            description:
              'Ancestral masquerades that return the spirits of the dead to their families, blessing the living with dance and cloth.',
          },
          {
            name: 'Ifá Divination',
            tag: 'Wisdom',
            description:
              'The sacred oracular system of Ọ̀rúnmìlà, recited in odù verses — a UNESCO-recognised archive of Yoruba philosophy.',
          },
        ],
      },
      {
        id: 'attire',
        label: 'Attire & Textiles',
        items: [
          {
            name: 'Aso Oke',
            tag: 'Handwoven',
            description:
              'The hand-loomed prestige cloth of the Yoruba — striped etu, shimmering alaari and sanyan — worn for weddings, coronations and festivals.',
          },
          {
            name: 'Adire',
            tag: 'Indigo',
            description:
              'Indigo resist-dyed cotton, painted or tied into flowing patterns that turn cloth into wearable art from Abeokuta\u2019s dye pits.',
          },
          {
            name: 'Agbada',
            tag: 'Royalty',
            description:
              'The flowing grand boubou, embroidered at the chest and layered over aso oke — the uniform of chiefs, kings and grooms.',
          },
          {
            name: 'Gele',
            tag: 'Headwear',
            description:
              'The sculptural headwrap, folded and twisted into crowns of cloth that frame the face like architecture.',
          },
          {
            name: 'Coral & Ipele',
            tag: 'Adornment',
            description:
              'Strings of coral beads and the draped ipele shawl complete the ensemble, signalling wealth, ancestry and occasion.',
          },
        ],
      },
      {
        id: 'music',
        label: 'Music, Instruments & Arts',
        items: [
          {
            name: 'Dùndún (Talking Drum)',
            tag: 'Talking Rhythm',
            description:
              'The hourglass pressure drum that bends pitch like the human voice — praise-poetry, news and melody in the palms of the drummer.',
          },
          {
            name: 'Bàtá Drums',
            tag: 'Sacred',
            description:
              'Double-headed sacred drums of Ṣàngó worship, driving dance trances with their triplet-laced language.',
          },
          {
            name: 'Shekere',
            tag: 'Percussion',
            description:
              'The beaded gourd rattle that rains percussive texture over jùjú, fújì and Afrobeat grooves.',
          },
          {
            name: 'Ife Bronzes & Terracotta',
            tag: 'Masterwork',
            description:
              'Naturalistic 12th–15th century heads and figures from Ile-Ife — among the most accomplished portrait art of the medieval world.',
          },
          {
            name: 'Afrobeat',
            tag: 'Global Sound',
            description:
              'Born in Lagos from Fela Kuti\u2019s genius, a politically charged blend of highlife, jazz and funk that still shakes dancefloors worldwide.',
          },
        ],
      },
    ],
    figures: [
      {
        name: 'Oduduwa',
        title: 'Progenitor of the Yoruba',
        era: 'Legendary Era',
        image:
          'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4c/Statue_of_Oduduwa%2C_Ile-Ife.jpg/960px-Statue_of_Oduduwa%2C_Ile-Ife.jpg',
        summary:
          'The mythic founder of Ile-Ife, from whom the sixteen crowns and royal dynasties of Yorubaland trace their descent.',
        significance: 'The ancestral thread binding Yoruba monarchies and identity.',
      },
      {
        name: 'Moremi Ajasoro',
        title: 'Heroine of Ile-Ife',
        era: 'c. 12th Century',
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Moremi_Ajasoro_statue.jpg',
        summary:
          'A queen who infiltrated the enemy to save her people, immortalised in the Edi festival and the Moremi statue of Ife.',
        significance: 'Enduring emblem of courage and self-sacrifice.',
      },
      {
        name: 'Funmilayo Ransome-Kuti',
        title: 'Women\u2019s Rights Pioneer',
        era: '1900–1978',
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Funmilayo_Ransome-Kuti_graduate.png',
        summary:
          'Teacher, activist and the first Nigerian woman to drive a car; she led the Abeokuta Women\u2019s Union against unfair taxation.',
        significance: 'Mother of Nigerian feminism — and of Fela Kuti.',
      },
      {
        name: 'Fela Anikulapo-Kuti',
        title: 'Creator of Afrobeat',
        era: '1938–1997',
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Fela_Kuti_%28cropped%29.jpg',
        summary:
          'Multi-instrumentalist and fearless critic of power, he forged Afrobeat and lived a revolution of rhythm and defiance.',
        significance: 'Africa\u2019s most influential musician of the 20th century.',
      },
      {
        name: 'Wole Soyinka',
        title: 'Nobel Laureate',
        era: 'b. 1934',
        image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Wole_Soyinka_in_2018.jpg/960px-Wole_Soyinka_in_2018.jpg',
        summary:
          'Playwright, poet and essayist whose works fuse Yoruba myth with global politics — the first African to win the Nobel Prize in Literature (1986).',
        significance: 'Africa\u2019s literary conscience for over six decades.',
      },
      {
        name: 'Samuel Ajayi Crowther',
        title: 'Linguist & First African Bishop',
        era: 'c. 1809–1891',
        image:
        'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8c/Bishop_Samuel_Ajayi_Crowther_1867.png/960px-Bishop_Samuel_Ajayi_Crowther_1867.png',
        summary:
          'Rescued from a slave ship and educated in Freetown, he became the first African Anglican bishop and translated the Bible into Yoruba.',
        significance: 'Pioneer of Yoruba literacy and modern scholarship.',
      },
    ],
    families: [
      {
        name: 'Ooni of Ife Lineage',
        tagline: 'First of the Kings',
        description:
          'The Ooni is first among Yoruba monarchs, tracing an unbroken line to Oduduwa himself; the four ruling houses of Ife rotate the crown, keeping the cradle of the Yoruba forever lit.',
        image:
          'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/10/Ooni_of_Ife%2C_wearing_the_sacred_Ad%C3%A9_%C3%80%C3%A0r%E1%BA%B9%CC%81_during_Olojo_Festival_01.jpg/960px-Ooni_of_Ife%2C_wearing_the_sacred_Ad%C3%A9_%C3%80%C3%A0r%E1%BA%B9%CC%81_during_Olojo_Festival_01.jpg',
      },
      {
        name: 'Alaafin of Oyo Dynasty',
        tagline: 'Lords of the Oyo Empire',
        description:
          'The Alaafin ruled the vast Oyo Empire — at its peak West Africa\u2019s mightiest state — from the old capital of Oyo-Ile; the Adeyemi dynasty still wields immense cultural weight today.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/80/ALAAFIN_OBA_ADEYEMI_III_.jpg',
      },
      {
        name: 'The Ransome-Kuti Family',
        tagline: 'The Rebel Dynasty',
        description:
          'Clergy, radicals and musicians — Funmilayo, Fela, Olikoye, Beko, Yeni, Femi and Seun: five generations of a family that made protest, medicine and Afrobeat instruments of conscience.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Family_Ransome_Kuti_c1940.jpg',
      },
      {
        name: 'The Awolowo Family',
        tagline: 'Architects of the West',
        description:
          'Chief Obafemi Awolowo, his wife Chief (Mrs) Hannah Idowu Dideolu and their children shaped Western Nigerian education, publishing and politics for six decades.',
        image:
          'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Obafemi_Awolowo_Drawing.jpg/960px-Obafemi_Awolowo_Drawing.jpg',
      },
    ],
  },
  {
    id: 'hausa-fulani',
    name: 'Hausa-Fulani',
    people: 'Hausawa & Fulɓe',
    region: 'Northern Nigeria',
    states: 'Kano, Katsina, Sokoto, Kaduna, Zaria, Bauchi, Gombe & beyond',
    language: 'Hausa & Fulfulde',
    zone: 'North',
    aliases: ['hausa', 'fulani', 'hausawa', 'fulbe', 'fulɓe', 'sokoto', 'kano'],
    tagline: 'Kingdom of Horses & Scholars — Sahelian royalty, cavalry and scholarship.',
    teaser:
      'From the ancient dye pits of Kano to the thunder of Durbar horsemen, the Hausa-Fulani world blends Sahelian royalty, Islamic scholarship and epic craftsmanship.',
    keyTradition: 'Durbar (Hawan Sallah)',
    monogram: 'HAU',
    pattern: 'pat-north',
    palette: {
      primary: '#c95b2a',
      secondary: '#ed9013',
      pa: 'rgba(201,91,42,0.16)',
      pb: 'rgba(237,144,19,0.16)',
    },
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/15/Mounted_Man_with_Spear%2C_Sallah_Durbar%2C_Kano%2C_Nigeria.png/960px-Mounted_Man_with_Spear%2C_Sallah_Durbar%2C_Kano%2C_Nigeria.png',
    sections: [
      {
        id: 'traditions',
        label: 'Traditions & Festivals',
        items: [
          {
            name: 'Durbar (Hawan Sallah)',
            tag: 'Royalty',
            description:
              'Thousands of horsemen in embroidered regalia charge past emirs\u2019 palaces during Sallah, in a centuries-old display of cavalry and loyalty.',
          },
          {
            name: 'Sharo',
            tag: 'Courage',
            description:
              'The Fulani flogging contest where suitors endure the lash without flinching to prove courage — and win a bride\u2019s honour.',
          },
          {
            name: 'Sallah (Eid) Celebrations',
            tag: 'Festival',
            description:
              'Two great Eid festivals frame the year with prayers, feasting, music and the gift of new embroidered gowns for children.',
          },
          {
            name: 'Kofar Mata Dye Pits',
            tag: 'Heritage Craft',
            description:
              'Kano\u2019s 500-year-old indigo pits, where cloth is dipped and beaten into deep blue — one of Africa\u2019s oldest working dyeing traditions.',
          },
          {
            name: 'Tsangaya (Qur\u2019anic Schooling)',
            tag: 'Scholarship',
            description:
              'The age-old system of itinerant Qur\u2019anic learning that has made Hausaland a powerhouse of Islamic scholarship for centuries.',
          },
        ],
      },
      {
        id: 'attire',
        label: 'Attire & Textiles',
        items: [
          {
            name: 'Babbar Riga',
            tag: 'Elegance',
            description:
              'The voluminous, flowing gown of the north, its chest and cuffs crowded with intricate askeka embroidery.',
          },
          {
            name: 'Hula & Rawani',
            tag: 'Headwear',
            description:
              'The embroidered cap and wound turban that crown a gentleman — colours and styles signalling region and rank.',
          },
          {
            name: 'Zanna Cloth',
            tag: 'Handwoven',
            description:
              'Handwoven Hausa fabric of interlocked geometric motifs, once reserved for royalty, still woven in ancient workshops.',
          },
          {
            name: 'Lalle (Henna)',
            tag: 'Adornment',
            description:
              'Intricate henna tracery painted on brides\u2019 hands and feet in night-long ceremonies of song and advice.',
          },
          {
            name: 'Fulani Attire',
            tag: 'Nomadic Style',
            description:
              'Fulɓe herders in flowing robes and conical hats, Wodaabe dancers in mirrored finery — pastoral elegance in motion.',
          },
        ],
      },
      {
        id: 'music',
        label: 'Music, Instruments & Arts',
        items: [
          {
            name: 'Kakaki',
            tag: 'Royal Fanfare',
            description:
              'The towering metal trumpet of royal courts, its long solemn calls announcing the emir from miles away.',
          },
          {
            name: 'Kalangu',
            tag: 'Talking Rhythm',
            description:
              'The Hausa talking drum, beating out praise, poetry and market-day news under the sun.',
          },
          {
            name: 'Goje',
            tag: 'Melody',
            description:
              'The one-stringed spike fiddle of the Sahel, bowed to spin tales of heroes and lovers.',
          },
          {
            name: 'Mud Architecture (Tubali)',
            tag: 'Architecture',
            description:
              'Sculpted sun-dried-brick palaces and mosques — the Great Mosque of Kano and Zaria\u2019s walls rise like earth-sculpted geometry.',
          },
          {
            name: 'Leatherwork & Calabash',
            tag: 'Craft',
            description:
              'Kano\u2019s famed tanned leather and engraved calabash gourds carry Hausa craft across the Sahara trade.',
          },
        ],
      },
    ],
    figures: [
      {
        name: 'Queen Amina of Zazzau',
        title: 'Warrior Queen',
        era: 'c. 1533–1610',
        image:
        'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/Queen_Amina_of_Zazzau.jpg/960px-Queen_Amina_of_Zazzau.jpg',
        summary:
          'The fierce ruler of Zazzau (Zaria) who led armies in person, built walled fortresses across Hausaland and forged new trade routes.',
        significance: 'Legendary symbol of northern leadership and military brilliance.',
      },
      {
        name: 'Usman dan Fodio',
        title: 'Founder of the Sokoto Caliphate',
        era: '1754–1817',
        image:
        'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c5/The_tomb_of_Usman_dan_Fodio.png/960px-The_tomb_of_Usman_dan_Fodio.png',
        summary:
          'Islamic scholar and leader of the 1804 jihad that united Hausa states into the Sokoto Caliphate — one of the largest empires in Africa.',
        significance: 'Reshaped the political and intellectual map of the Sahel.',
      },
      {
        name: 'Nana Asma\u2019u',
        title: 'Scholar & Poet',
        era: '1793–1864',
        image:
        'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/Nana_Asma%27u_Calligraphy_02.png/960px-Nana_Asma%27u_Calligraphy_02.png',
        summary:
          'Daughter of Usman dan Fodio, she wrote poetry in Fulfulde, Hausa and Arabic and founded the Yan Taru — a network of women educators.',
        significance: 'A pioneering voice of women\u2019s scholarship in West Africa.',
      },
      {
        name: 'Muhammadu Rumfa',
        title: 'Sultan of Kano',
        era: '1463–1499',
        image:
        'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d0/Gidan_Rumfa-_Emir_Palace_Kano.jpg/960px-Gidan_Rumfa-_Emir_Palace_Kano.jpg',
        summary:
          'The visionary Sarkin Kano who rebuilt the city with the Kurmi market, city walls and palace that made Kano a commercial empire.',
        significance: 'Architect of Kano\u2019s golden age.',
      },
      {
        name: 'Sir Ahmadu Bello',
        title: 'Sardauna of Sokoto',
        era: '1910–1966',
        image:
        'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Ahmadu_Bello_Premier_of_the_Northern_Region_of_Nigeria_1960_Oak_Ridge_%2824578438519%29.jpg/960px-Ahmadu_Bello_Premier_of_the_Northern_Region_of_Nigeria_1960_Oak_Ridge_%2824578438519%29.jpg',
        summary:
          'Premier of Northern Nigeria and descendant of dan Fodio, who championed unity and education across the region.',
        significance: 'One of the founding fathers of modern Nigeria.',
      },
    ],
    families: [
      {
        name: 'The Sokoto Caliphate Dynasty',
        tagline: 'House of dan Fodio',
        description:
          'Descendants of Usman dan Fodio still reign as Sultan of Sokoto, spiritual head of Nigeria\u2019s Muslims — the longest-running royal establishment in modern West Africa, founded in 1804.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Sa%27adu_Abubakar_-Sultan_of_Sokoto.jpg',
      },
      {
        name: 'The Bayero House of Kano',
        tagline: 'Emirs of the Ancient City',
        description:
          'From Abdullahi Bayero\u2019s golden age to today, the Bayero line has led Kano — the thousand-year-old emporium of the Sahel — through the emirate wars, colonialism and the modern republic.',
        image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/Abdullahi_Bayero.jpg/960px-Abdullahi_Bayero.jpg',
      },
      {
        name: 'The Zazzau Royal House',
        tagline: 'Heirs of Amina',
        description:
          'The ruling house of Zaria traces its warrior pedigree to Queen Amina of Zazzau; its emirs have produced generals, scholars and reformers across six centuries.',
        image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Zazzau_palace_02.jpg/960px-Zazzau_palace_02.jpg',
      },
      {
        name: 'The Dantata Family',
        tagline: 'Merchants of the Sahara',
        description:
          'Alhassan Dantata, the great kola-nut and groundnut trader of Kano, founded West Africa\u2019s foremost merchant dynasty — patrons of learning, pilgrims and trade whose wealth reshaped northern enterprise.',
        image:
          'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/54/Alhassan_Dantata.png/960px-Alhassan_Dantata.png',
      },
    ],
  },
  {
    id: 'ijaw',
    name: 'Ijaw',
    people: 'Izon (Ijaw)',
    region: 'Niger Delta',
    states: 'Bayelsa, Delta, Rivers, Ondo, Akwa Ibom, Edo',
    language: 'Ijaw (Izon)',
    zone: 'Niger Delta',
    aliases: ['izon', 'ijo'],
    tagline: 'Guardians of the Delta — a maritime world of creeks, regattas and water spirits.',
    teaser:
      'The Ijaw have navigated the creeks and waterways of the Niger Delta for millennia — a maritime culture of masquerades, regattas and water spirits.',
    keyTradition: 'Boat Regattas & Water Masquerades',
    monogram: 'IJA',
    pattern: 'pat-wave',
    palette: {
      primary: '#3c4893',
      secondary: '#2e825b',
      pa: 'rgba(60,72,147,0.20)',
      pb: 'rgba(46,130,91,0.16)',
    },
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Boat_Regatta%2CRivers_State.jpg/960px-Boat_Regatta%2CRivers_State.jpg',
    sections: [
      {
        id: 'traditions',
        label: 'Traditions & Festivals',
        items: [
          {
            name: 'Owu-Aru-Sun',
            tag: 'Ancestors',
            description:
              'The grand funeral festival of the Delta, when water-spirit masks emerge for days of dance, feasting and farewell to a departed chief.',
          },
          {
            name: 'Boat Regattas',
            tag: 'Maritime',
            description:
              'Rivers come alive with war canoes and decorated craft racing to drums, honouring the Delta\u2019s canoe-building heritage.',
          },
          {
            name: 'Owu Masquerades (Ekine Sekiapu)',
            tag: 'Masquerade',
            description:
              'Kalabari masquerade societies keep the pantheon of water spirits alive through masked performance and myth.',
          },
          {
            name: 'Iria Maidenhood Rites',
            tag: 'Rite of Passage',
            description:
              'Young women\u2019s coming-of-age celebration, marking the transition to womanhood with dance and public display.',
          },
          {
            name: 'Ancestral Fishing Festivals',
            tag: 'Harvest',
            description:
              'Communities honour the rivers that feed them with festivals of thanksgiving to water deities, opening and closing the fishing seasons.',
          },
        ],
      },
      {
        id: 'attire',
        label: 'Attire & Textiles',
        items: [
          {
            name: 'Wrapper & Blouse',
            tag: 'Elegance',
            description:
              'Women layer patterned George and Hollandaise wrappers, blouses and head-ties for ceremonies across the Delta.',
          },
          {
            name: 'Coral & Gold',
            tag: 'Status',
            description:
              'Heavy necklaces of coral and gold adorn chiefs and brides, signalling status and lineage in Delta towns.',
          },
          {
            name: 'Canoe Carving Motifs',
            tag: 'Carving',
            description:
              'Prows of war canoes and paddles carved with animals and spirit faces — the visual language of a water people.',
          },
          {
            name: 'Beaded Crowns & Canes',
            tag: 'Royalty',
            description:
              'Chiefs carry beaded staffs and crowns during festivals, living embodiments of the Amanyanabo (king) tradition.',
          },
        ],
      },
      {
        id: 'music',
        label: 'Music, Instruments & Arts',
        items: [
          {
            name: 'Pericongo (Water Drum)',
            tag: 'Percussion',
            description:
              'A floating gourd-and-wood drum struck in calabash basins of water, its wet tones the heartbeat of Delta festivals.',
          },
          {
            name: 'Obelle (Wooden Gong)',
            tag: 'Signal',
            description:
              'The hand-held wooden gong that calls dancers and signals the masquerade\u2019s arrival through the creeks.',
          },
          {
            name: 'Regatta Songs & Ijo',
            tag: 'Dance',
            description:
              'Call-and-response boat songs and the lively ijo dance weave the rhythm of paddles and waves.',
          },
          {
            name: 'Woodcarving & Masks',
            tag: 'Craft',
            description:
              'Water-spirit masks and intricately carved furniture testify to centuries of Delta sculptural mastery.',
          },
          {
            name: 'Opu-Aki (War Canoes)',
            tag: 'Maritime',
            description:
              'The great ceremonial canoes seating dozens of paddlers, once the naval power of the Delta\u2019s trading city-states.',
          },
        ],
      },
    ],
    figures: [
      {
        name: 'Isaac Adaka Boro',
        title: 'The Revolutionist',
        era: '1938–1968',
        image:
        'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d1/Monument_of_Isaac_Adaka_Boro_5.jpg/960px-Monument_of_Isaac_Adaka_Boro_5.jpg',
        summary:
          'Student leader and soldier who declared the Niger Delta Republic in 1966, fighting for justice for his riverine people.',
        significance: 'Martyr-hero of Niger Delta self-determination.',
      },
      {
        name: 'Gabriel Okara',
        title: 'Poet & Novelist',
        era: '1921–2019',
        summary:
          'Author of The Voice and Piano and Drums, he wrote in a lyrical English inflected by Ijaw speech and thought.',
        significance: 'One of the founding voices of modern African poetry.',
      },
      {
        name: 'John Pepper Clark',
        title: 'Poet & Playwright',
        era: '1935–2020',
        image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/EK%2C_BA_and_JP_Clark.jpg/960px-EK%2C_BA_and_JP_Clark.jpg',
        summary:
          'From Abiku to Ozidi, he turned Delta myth and waterland into some of Africa\u2019s finest verse and drama.',
        significance: 'Titan of Nigerian literature\u2019s golden generation.',
      },
      {
        name: 'Goodluck Jonathan',
        title: 'President of Nigeria',
        era: 'b. 1957',
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Goodluck_Jonathan_2014.jpg',
        summary:
          'Zoologist turned statesman, the first Nigerian president from the Niger Delta (2010–2015), celebrated for conceding power peacefully.',
        significance: 'Symbol of a new democratic maturity.',
      },
    ],
    families: [
      {
        name: 'The House of Opobo',
        tagline: 'Kings of the Palm-Oil Rivers',
        description:
          'Founded by King Jaja in 1870, the Opobo monarchy became the wealthiest palm-oil power of the Delta; the Amanyanabo still presides over the island kingdom today.',
        image:
          'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a1/Jaja_of_Opobo_Palace%2C_Opobo%2C_Rivers_state.jpg/960px-Jaja_of_Opobo_Palace%2C_Opobo%2C_Rivers_state.jpg',
      },
      {
        name: 'The Kings of Nembe (Brass)',
        tagline: 'Lords of the Brass Rivers',
        description:
          'The Mingi of Nembe led the oldest Ijaw kingdom; King Frederick William Koko\u2019s 1895 raid on the Royal Niger Company became the Delta\u2019s legendary act of defiance.',
        image:
          'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4c/King_Koko_in_His_War_Canoe.png/960px-King_Koko_in_His_War_Canoe.png',
      },
      {
        name: 'The Amachree Dynasty of Kalabari',
        tagline: 'Priests & Princes',
        description:
          'The Amachree ruling house of the Kalabari kingdom blends priestly authority with the warrior tradition of the Akasa kings, keeping the Ekine masquerade society alive.',
      },
      {
        name: 'The Jonathan Family',
        tagline: 'From the Creeks to the Villa',
        description:
          'Goodluck Jonathan\u2019s rise from a canoe-maker\u2019s household in Otuoke to the presidency carried Niger Delta hopes onto the national stage — a modern Delta legacy family.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Goodluck_Jonathan_2014-08-05.jpg',
      },
    ],
  },
  {
    id: 'tiv',
    name: 'Tiv',
    people: 'Mba Tiv',
    region: 'Middle Belt (Benue Valley)',
    states: 'Benue, Taraba, Nasarawa, Plateau',
    language: 'Tiv',
    zone: 'Middle Belt',
    aliases: ['mba tiv'],
    tagline: 'Children of the Benue — agriculture, story and community by the great river.',
    teaser:
      'From the black-and-white anger cloth to the magical puppetry of Kwagh-hir, the Tiv celebrate agriculture, story and community along the banks of the Benue.',
    keyTradition: 'Kwagh-hir Puppet Theatre',
    monogram: 'TIV',
    pattern: 'pat-angbian',
    palette: {
      primary: '#90651b',
      secondary: '#2b2115',
      pa: 'rgba(43,33,21,0.28)',
      pb: 'rgba(255,252,245,0.14)',
    },
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Tiv_Traditional_Dance.jpg/960px-Tiv_Traditional_Dance.jpg',
    sections: [
      {
        id: 'traditions',
        label: 'Traditions & Festivals',
        items: [
          {
            name: 'Kwagh-hir',
            tag: 'UNESCO Heritage',
            description:
              'A storytelling theatre of giant puppets, masks and masquerades dramatising Tiv folklore — comedy, horror and satire in one show.',
          },
          {
            name: 'Ya Na Angbian (New Yam Festival)',
            tag: 'Harvest',
            description:
              'The feast of new yam, when no one may eat the new harvest until elders and ancestors are honoured first.',
          },
          {
            name: 'Swem Oath',
            tag: 'Ancestral',
            description:
              'The sacred oath sworn on the ancestral mountain Swem — the highest bond of truth in Tiv custom.',
          },
          {
            name: 'Yamshe (Marriage by Exchange)',
            tag: 'Custom',
            description:
              'The historic marriage-by-exchange custom and the rich bride-negotiation ceremonies that bind families together.',
          },
          {
            name: 'Ijôr (Customary Law)',
            tag: 'Governance',
            description:
              'The unwritten constitution of the Tiv people — community councils and dispute settlement under the shade of great trees.',
          },
        ],
      },
      {
        id: 'attire',
        label: 'Attire & Textiles',
        items: [
          {
            name: 'Anger Cloth (A\u2019nger)',
            tag: 'Identity',
            description:
              'The iconic handwoven black-and-white striped cloth of the Tiv, worn by men and women for every important gathering.',
          },
          {
            name: 'Striped Wrappers & Headwear',
            tag: 'Everyday',
            description:
              'Women\u2019s bold striped wrappers, blouses and head-scarves echo the anger pattern in daily dress.',
          },
          {
            name: 'Beaded Adornments',
            tag: 'Adornment',
            description:
              'Necklaces of beads and brass worn by dancers and brides, catching the light with every step of the ivom dance.',
          },
        ],
      },
      {
        id: 'music',
        label: 'Music, Instruments & Arts',
        items: [
          {
            name: 'Swange Music & Dance',
            tag: 'Dance',
            description:
              'The swaying, elastic dance music of the Tiv, immortalised by Zaki Adze and pulsing through every Benue celebration.',
          },
          {
            name: 'Ilyu (Drum Ensembles)',
            tag: 'Percussion',
            description:
              'Sets of hollowed log and skin drums that anchor festivals, funerals and wrestling matches.',
          },
          {
            name: 'Kwagh-hir Puppetry',
            tag: 'Theatre',
            description:
              'Giant articulated puppets — snakes, warriors and ogres — carved and costumed by master artists of the theatre.',
          },
          {
            name: 'Gourd Rattles & Flutes',
            tag: 'Melody',
            description:
              'Calabash rattles and reed flutes colour storytelling sessions and moonlight dances.',
          },
          {
            name: 'Pottery & Basketry',
            tag: 'Craft',
            description:
              'Benue\u2019s women potters and basket weavers produce some of Nigeria\u2019s most celebrated functional craft.',
          },
        ],
      },
    ],
    figures: [
      {
        name: 'Takar (Takuruku)',
        title: 'Legendary Patriarch',
        era: 'Legendary Era',
        summary:
          'The ancestral founder from whom Tiv genealogies descend, tracing the people\u2019s journey from Swem mountain to the Benue Valley.',
        significance: 'The root of Tiv identity and kinship.',
      },
      {
        name: 'J. S. Tarka',
        title: 'Father of Benue Politics',
        era: '1932–1980',
        image: 'https://upload.wikimedia.org/wikipedia/en/f/ff/Foundi7.jpg',
        summary:
          'Senator and champion of the Middle Belt minority, who led the United Middle Belt Congress in the struggle for representation.',
        significance: 'Defender of minorities in Nigeria\u2019s first republic.',
      },
      {
        name: 'Zaki Adze',
        title: 'King of Swange',
        era: '20th Century',
        summary:
          'The singer who took Tiv swange music from village dances to national fame, becoming the voice of the Benue.',
        significance: 'The most beloved musician in Tiv history.',
      },
      {
        name: 'Aper Aku',
        title: 'The People\u2019s Governor',
        era: '1938–1988',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Gov._Aper_Aku.jpg',
        summary:
          'First civilian governor of Benue State, remembered for mass education and grassroot development.',
        significance: 'A legend of progressive leadership.',
      },
    ],
    families: [
      {
        name: 'The Houses of Ichongo & Ipusu',
        tagline: 'The Two Roots of Tiv',
        description:
          'All Tiv divide into two great descent lines — Ichongo and Ipusu, named for the sons of the patriarch Takar — the oldest and deepest family tree in the Benue Valley.',
      },
      {
        name: 'The Tor Tiv Paramount Stool',
        tagline: 'Custodians of the People',
        description:
          'Since 1946, the Tor Tiv has been the paramount traditional ruler of all Tivland; its holders carry the staff of the ancestral Swem oath.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Tor_Akawe_torkula.jpg',
      },
      {
        name: 'The Tarka Family',
        tagline: 'Voice of the Middle Belt',
        description:
          'From Senator J.S. Tarka\u2019s fight for minority rights to three generations of public service, the Tarka name is synonymous with Middle Belt politics.',
        image: 'https://upload.wikimedia.org/wikipedia/en/f/ff/Foundi7.jpg',
      },
      {
        name: 'The Aku Family',
        tagline: 'Servants of the Benue',
        description:
          'Aper Aku\u2019s dynasty of teachers and public servants built Benue\u2019s schools and institutions — a family of quiet, enduring progress.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Gov._Aper_Aku.jpg',
      },
    ],
  },
  {
    id: 'efik-ibibio',
    name: 'Efik-Ibibio',
    people: 'Efik, Ibibio & Annang',
    region: 'Coastal Southeast (Calabar & Akwa Ibom)',
    states: 'Cross River, Akwa Ibom',
    language: 'Efik & Ibibio',
    zone: 'South-South',
    aliases: ['efik', 'ibibio', 'calabar', 'cross river'],
    tagline: 'Masters of the Masquerade — Ekpe secrets, Nsibidi script and carnival colour.',
    teaser:
      'Home of the Ekpe society, Nsibidi symbols and Africa\u2019s biggest street party — the Calabar Carnival — the Efik-Ibibio coast is a theatre of colour and mystery.',
    keyTradition: 'Ekpe Masquerade & Calabar Carnival',
    monogram: 'EFK',
    pattern: 'pat-checker',
    palette: {
      primary: '#c9730d',
      secondary: '#b04a22',
      pa: 'rgba(201,115,13,0.16)',
      pb: 'rgba(176,74,34,0.14)',
    },
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0f/Calabar_carnival_3.jpg/960px-Calabar_carnival_3.jpg',
    sections: [
      {
        id: 'traditions',
        label: 'Traditions & Festivals',
        items: [
          {
            name: 'Ekpe (Leopard Society)',
            tag: 'Mystery',
            description:
              'The ancient graded society whose masquerades, drums and Nsibidi script guarded law, trade and initiation across the Cross River.',
          },
          {
            name: 'Ekpo Masquerades',
            tag: 'Ancestors',
            description:
              'Ibibio ancestral masquerades that police morality and honour the dead with towering carved costumes.',
          },
          {
            name: 'Calabar Carnival',
            tag: 'Carnival',
            description:
              'Every December, Calabar erupts into Africa\u2019s biggest street party — a month of parades, costumes and Afrobeat.',
          },
          {
            name: 'Nkuho (Fattening Room)',
            tag: 'Rite of Passage',
            description:
              'A maiden\u2019s rite of passage — months of seclusion, feasting, body art and education before marriage.',
          },
          {
            name: 'Nsibidi',
            tag: 'Script',
            description:
              'The sacred ideographic script of the Cross River, written in love letters, masquerade art and secret codes.',
          },
        ],
      },
      {
        id: 'attire',
        label: 'Attire & Textiles',
        items: [
          {
            name: 'Ofong Isong (Chieftaincy Gowns)',
            tag: 'Royalty',
            description:
              'Embroidered gowns, caps and staffs of the Efik chieftaincy, worn by Ekpe initiates and titled men.',
          },
          {
            name: 'Ukatt (Annang Raffia)',
            tag: 'Handwoven',
            description:
              'The Annang weave raffia into patterned ukatt cloth and festive costumes of extraordinary texture.',
          },
          {
            name: 'Beaded Crowns (Okuku)',
            tag: 'Adornment',
            description:
              'Brides wear towering beaded crowns and layered coral, shimmering through days of ceremony.',
          },
          {
            name: 'Velvet Wrappers & Lace',
            tag: 'Elegance',
            description:
              'Rich velvet wrappers, lace blouses and elaborate head-ties dress the coast\u2019s grand occasions.',
          },
        ],
      },
      {
        id: 'music',
        label: 'Music, Instruments & Arts',
        items: [
          {
            name: 'Ekombi Dance',
            tag: 'Dance',
            description:
              'The graceful, wave-like dance of Efik women, mimicking the sway of the sea and fishing nets.',
          },
          {
            name: 'Ekomo & Nkon Drums',
            tag: 'Percussion',
            description:
              'Skin drums and metal gongs that summon masquerades and drive Ekpe ceremonies.',
          },
          {
            name: 'Masquerade Carving',
            tag: 'Craft',
            description:
              'Ekpo and Ekpe masks carved with fierce faces and towering headdresses — the coast\u2019s great sculptural tradition.',
          },
          {
            name: 'Nsibidi Arts',
            tag: 'Heritage',
            description:
              'The script\u2019s signs painted on calabashes, walls and textiles keep its code alive in modern design.',
          },
        ],
      },
    ],
    figures: [
      {
        name: 'Margaret Ekpo',
        title: 'Women\u2019s Rights Champion',
        era: '1914–2006',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Margaret_ekpo.jpg',
        summary:
          'Activist and politician from Calabar who mobilised market women and became one of Nigeria\u2019s first female political leaders.',
        significance: 'A founding mother of Nigerian feminism.',
      },
      {
        name: 'King Eyo Honesty II',
        title: 'Obong of Creek Town',
        era: '19th Century',
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/King_Eyo_Honesty_II.jpg',
        summary:
          'The merchant king who signed treaties with the British and ruled the palm-oil trade of Old Calabar\u2019s golden age.',
        significance: 'Builder of Calabar\u2019s trading empire.',
      },
      {
        name: 'Hogan \u2018Kid\u2019 Bassey',
        title: 'World Champion',
        era: '1932–1998',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Hogan_Bassey.jpg',
        summary:
          'The Calabar-born boxer who won the world featherweight title in 1957 — the first Nigerian world champion.',
        significance: 'A sporting icon of Nigerian pride.',
      },
      {
        name: 'Eyo Ita',
        title: 'Educationist & Nationalist',
        era: '20th Century',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Portrait_of_professor_Eyo_Ita.jpg',
        summary:
          'Educator and political leader who founded the Oron group of schools and led the National Independence Party.',
        significance: 'Pioneer of African-run education.',
      },
    ],
    families: [
      {
        name: 'The Great Houses of Old Calabar',
        tagline: 'Dukes, Eyambas & Kings',
        description:
          'The merchant houses of Duke Town, Creek Town and Henshaw Town ran the palm-oil trade of Old Calabar — the aristocratic Efiks who made the city Africa\u2019s oldest trading capital.',
        image:
          'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Duke_Town%2C_Calabar%2C_Nigeria_-_panoramio_%282%29.jpg/960px-Duke_Town%2C_Calabar%2C_Nigeria_-_panoramio_%282%29.jpg',
      },
      {
        name: 'The Eyo Dynasty of Creek Town',
        tagline: 'The Obongs',
        description:
          'Eight King Eyo Honestys have reigned in Creek Town since the 18th century; Eyo Honesty II\u2019s treaty-making shaped modern Cross River.',
        image:
          'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Ephrahim_Town%2C_with_Old_Calabar._King_Eyo-Honesty%27s_canoe._Her_Majesty%27s_Steam-sloop_%27Rattler%27_saluting_ILN-1850-0622-0005.jpg/960px-Ephrahim_Town%2C_with_Old_Calabar._King_Eyo-Honesty%27s_canoe._Her_Majesty%27s_Steam-sloop_%27Rattler%27_saluting_ILN-1850-0622-0005.jpg',
      },
      {
        name: 'The Ekpo Family',
        tagline: 'Mothers of the Nation',
        description:
          'Margaret Ekpo\u2019s household of market women and politicians nurtured one of Nigeria\u2019s first feminist movements from the heart of Calabar.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Margaret_ekpo.jpg',
      },
    ],
  },
]

export const stats: Stat[] = [
  {
    value: '250+',
    label: 'Ethnic Groups',
    description:
      'Nigeria is home to over 250 distinct peoples, each with its own tongue, dress and story.',
    accent: '#c95b2a',
  },
  {
    value: '500+',
    label: 'Living Languages',
    description:
      'More than 500 languages are spoken across Nigeria — one of the most linguistically diverse places on Earth.',
    accent: '#2e825b',
  },
  {
    value: '3,500+',
    label: 'Years of History',
    description:
      'From the Nok terracottas (c. 1500 BCE) to today, creativity has flourished here for millennia.',
    accent: '#4c5db0',
  },
  {
    value: '2',
    label: 'UNESCO World Heritage Sites',
    description:
      'The Sukur Cultural Landscape and the Osun-Osogbo Sacred Grove crown Nigeria\u2019s global heritage.',
    accent: '#b4831f',
  },
]

export const marqueeWords = [
  'Durbar',
  'Eyo',
  'Mmanwu',
  'Kwagh-hir',
  'Ekombi',
  'Swange',
  'Ifá',
  'Nsibidi',
  'Aso Oke',
  'Isi Agu',
  'Kakaki',
  'Udu',
  'Gele',
  'Babbar Riga',
  'Adire',
  'Ogene',
  'Ekpe',
  'Coral Beads',
  'Benin Bronze',
  'Gerewol',
  'Masaga Beads',
  'Etibo',
  'Koroso',
  'Egedege',
  'Ekuechi',
  'Igue',
  'Ocho',
  'Ukatt',
  'Oglinye',
  'Kwararafa',
]

export const swatchColors = ['#c95b2a', '#d19e26', '#2e825b', '#4c5db0', '#ed9013', '#c9730d']

export const zones = ['Southeast', 'Southwest', 'South-South', 'Niger Delta', 'Middle Belt', 'North', 'Northeast', 'North-Central']

export const cultures: Culture[] = [...coreCultures, ...moreCultures]
