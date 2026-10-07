import type { Anthem, CultureFigure, HistoryEra } from './types'

export const historyEras: HistoryEra[] = [
  {
    era: 'c. 1500 BCE – 500 CE',
    title: 'The Nok Culture',
    description:
      'On the Jos Plateau, the Nok people fired terracotta sculptures of extraordinary finesse — the earliest known figurative art of West Africa and proof of an ancient iron-working civilisation.',
  },
  {
    era: '9th – 11th Century',
    title: 'Igbo-Ukwu & Nri',
    description:
      'At Igbo-Ukwu, bronzes of astonishing sophistication were buried with a priest-king; nearby, the Nri kingdom began a millennium of ritual authority over peace and the yam.',
  },
  {
    era: '12th – 15th Century',
    title: 'Ife & Benin',
    description:
      'Ile-Ife\u2019s naturalistic bronze and terracotta heads rank among the masterpieces of medieval world art; the Benin Empire later turned bronze casting into the world\u2019s greatest court archive.',
  },
  {
    era: '9th – 19th Century',
    title: 'Kanem-Bornu',
    description:
      'Around Lake Chad, the Sayfawa dynasty ruled one of the longest-lived empires in history — a millennium of trade, cavalry and Islamic scholarship linking the Sahel to the Mediterranean.',
  },
  {
    era: '14th – 19th Century',
    title: 'Empires of the Savanna & South',
    description:
      'The Oyo Empire rode its cavalry from the Niger to the coast; the Kwararafa confederacy raided the Hausa city-states; the Igala, Nupe and Jukun kingdoms traded and warred along the great rivers.',
  },
  {
    era: '1804',
    title: 'The Sokoto Caliphate',
    description:
      'Usman dan Fodio\u2019s jihad united Hausaland into the Sokoto Caliphate — at its height the largest state in West Africa, with a written scholarly culture led by poets like Nana Asma\u2019u.',
  },
  {
    era: '15th – 19th Century',
    title: 'The Coast & the Atlantic',
    description:
      'Benin traded ivory and pepper with Portugal; the Atlantic slave trade scarred the coast; after abolition, palm-oil city-states — Bonny, Calabar, Opobo, Brass — grew fabulously rich under merchant kings like Jaja and Nanna Olomu, who then led resistance against colonial monopoly.',
  },
  {
    era: '1861 – 1914',
    title: 'Colonisation & Amalgamation',
    description:
      'Lagos was annexed in 1861 and the Royal Niger Company carved out the interior. In 1914, the northern and southern protectorates were amalgamated into one colony — named \u2018Nigeria\u2019 by Flora Shaw — under Lord Lugard.',
  },
  {
    era: '1914 – 1960',
    title: 'The Road to Freedom',
    description:
      'Herbert Macaulay\u2019s NNDP (1923) lit the first nationalist fire; Azikiwe\u2019s West African Pilot newspaper spread it; Awolowo, Bello and Balewa built parties; constitutional conferences marched the nation toward freedom.',
  },
  {
    era: '1 October 1960',
    title: 'Independence!',
    description:
      'The green-white-green rose over a new nation. Prime Minister Balewa addressed the world while \u2018Nigeria, We Hail Thee\u2019 rang out — Africa\u2019s most populous country had joined the free world.',
  },
  {
    era: '1963 – 1970',
    title: 'Republic, Crisis & Civil War',
    description:
      'Nigeria became a republic in 1963. Coups in 1966 shattered the First Republic, and the Biafran war of 1967–70 tested the union. Out of the ashes came the slogans of reconciliation and \u2018no victor, no vanquished\u2019.',
  },
  {
    era: '1970s – 1999',
    title: 'Oil, Military Rule & Democracy',
    description:
      'The oil boom rebuilt cities and a new middle class; cycles of military rule followed. In 1999 the Fourth Republic began, and Nigeria has chosen every president since by ballot.',
  },
  {
    era: 'Today',
    title: 'The Living Mosaic',
    description:
      '250+ ethnic groups, 500+ languages, Nollywood\u2019s cameras, Afrobeat\u2019s anthem voices and a diaspora on every continent — Nigeria stands as Africa\u2019s loudest, proudest argument for diversity.',
  },
]

export const foundingFathers: CultureFigure[] = [
  {
    name: 'Herbert Macaulay',
    title: 'Father of Nigerian Nationalism',
    era: '1864–1946',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fe/Herbert_Macaulay.jpg/960px-Herbert_Macaulay.jpg',
    summary:
      'Surveyor, journalist and grandson of Bishop Samuel Ajayi Crowther, he founded the Nigerian National Democratic Party in 1923 — the first modern political party in British West Africa.',
    significance: 'He lit the fire of Nigerian nationalism.',
  },
  {
    name: 'Nnamdi Azikiwe',
    title: 'First President of Nigeria',
    era: '1904–1996',
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/88/Dr._Nnamdi_Azikiwe.jpg/960px-Dr._Nnamdi_Azikiwe.jpg',
    summary:
      '\u2018Zik of Africa\u2019 — journalist, orator and leader of the NCNC, whose West African Pilot newspaper spread nationalism far beyond the cities.',
    significance: 'Nigeria\u2019s founding head of state and pan-African icon.',
  },
  {
    name: 'Obafemi Awolowo',
    title: 'Premier of the Western Region',
    era: '1909–1987',
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Obafemi_Awolowo_Drawing.jpg/960px-Obafemi_Awolowo_Drawing.jpg',
    summary:
      'Leader of the Action Group, he delivered free universal primary education and Africa\u2019s first television station (WNTV, 1959) to the Western Region.',
    significance: 'The architect of modern Yoruba education and welfare.',
  },
  {
    name: 'Ahmadu Bello',
    title: 'Sardauna of Sokoto',
    era: '1910–1966',
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Ahmadu_Bello_Premier_of_the_Northern_Region_of_Nigeria_1960_Oak_Ridge_%2824578438519%29.jpg/960px-Ahmadu_Bello_Premier_of_the_Northern_Region_of_Nigeria_1960_Oak_Ridge_%2824578438519%29.jpg',
    summary:
      'Premier of the Northern Region and descendant of dan Fodio, who championed northern education and unity within the federation.',
    significance: 'A founding father whose vision bound the north to Nigeria.',
  },
  {
    name: 'Abubakar Tafawa Balewa',
    title: 'First Prime Minister',
    era: '1912–1966',
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Abubakar_Tafawa_Balewa_1.jpg/960px-Abubakar_Tafawa_Balewa_1.jpg',
    summary:
      'The teacher from Bauchi who became Nigeria\u2019s first and only Prime Minister — the calm, deep voice that declared independence on 1 October 1960.',
    significance: 'The face of Nigeria at the hour of freedom.',
  },
]

export const anthems: Anthem[] = [
  {
    title: 'Nigeria, We Hail Thee',
    byline: 'Words: Lillian Jean Williams · Music: Frances Berda',
    years: 'Current anthem · Adopted 1960, restored 2024',
    history:
      'Nigeria\u2019s first anthem, sung at independence on 1 October 1960 and through the First Republic, the war years and the oil boom. Retired in 1978 in favour of \u2018Arise, O Compatriots\u2019, it never left the people\u2019s hearts — and in May 2024 it was officially reinstated as the national anthem.',
    verses:
      'Nigeria, we hail thee,\nOur own dear native land,\nThough tribe and tongue may differ,\nIn brotherhood we stand,\nNigerians all, and proud to serve\nOur sovereign Motherland.\n\nOur flag shall be a symbol\nThat truth and justice reign,\nIn peace or battle honour\u2019d,\nAnd this we count as gain,\nTo hand on to our children\nA banner without stain.\n\nO God of all creation,\nGrant this our one request,\nHelp us to build a nation\nWhere no man is oppressed,\nAnd so with peace and plenty\nNigeria may be blessed.',
  },
  {
    title: 'Arise, O Compatriots',
    byline:
      'Words: P.O. Aderibigbe, John A. Ilechukwu, Eme Etim Akpan, B.A. Ogunnaike & Sota Omoigui · Music: Nigerian Police Band (B.E. Odiasse)',
    years: 'Former anthem · 1978 – 2024',
    history:
      'Born from a national competition in 1978, this anthem carried Nigeria for 46 years — through the return to democracy in 1999, three peaceful transfers of power and every sporting triumph. For two generations it was the song of the fatherland, and it remains beloved today.',
    verses:
      'Arise, O Compatriots,\nNigeria\u2019s call obey\nTo serve our fatherland\nWith love and strength and faith\nThe labour of our heroes past\nShall never be in vain,\nTo serve with heart and might\nOne nation bound in freedom, peace and unity.\n\nOh God of creation,\nDirect our noble cause\nGuide our leaders right\nHelp our youth the truth to know\nIn love and honesty to grow\nAnd living just and true\nGreat lofty heights attain\nTo build a nation where peace and justice shall reign.',
  },
]
