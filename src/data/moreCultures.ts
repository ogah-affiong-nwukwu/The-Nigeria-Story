import type { Culture } from './types'

export const moreCultures: Culture[] = [
  {
    id: 'urhobo',
    name: 'Urhobo',
    people: 'Urhobo',
    region: 'Niger Delta (Delta State)',
    states: 'Delta',
    language: 'Urhobo',
    zone: 'Niger Delta',
    aliases: ['delta'],
    tagline: 'People of the Delta woodlands — udje dancers, udu drums and the Ovie thrones.',
    teaser:
      'The Urhobo of the western Niger Delta blend forest spirituality, age-grade festivals and the famous clay-pot udu drum into one of the Delta\u2019s richest traditions.',
    keyTradition: 'Udje Song-Dances & the Ovie Thrones',
    monogram: 'URH',
    pattern: 'pat-wave',
    palette: {
      primary: '#2e825b',
      secondary: '#4c5db0',
      pa: 'rgba(46,130,91,0.18)',
      pb: 'rgba(76,93,176,0.16)',
    },
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/Victory_dance_of_Urhobo_people.jpg/960px-Victory_dance_of_Urhobo_people.jpg',
    sections: [
      {
        id: 'traditions',
        label: 'Traditions & Festivals',
        items: [
          {
            name: 'Udje Song-Dances',
            tag: 'Dance',
            description:
              'Competitive song cycles that praise achievements and satirise rivals, performed at village festivals with drums and improvised wit.',
          },
          {
            name: 'Igbe Religion',
            tag: 'Faith',
            description:
              'The Urhobo spiritual movement blending song, trance and healing, founded by Ubiesha Etarakpo in the 1950s.',
          },
          {
            name: 'Age-Grade Ceremonies (Otu)',
            tag: 'Rite of Passage',
            description:
              'Youths graduate through graded age sets with feasts, wrestling and communal labour that bind the village together.',
          },
          {
            name: 'Ovie Kingship',
            tag: 'Royalty',
            description:
              'Each Urhobo clan crowns an Ovie (king) with rituals that sanctify the land; the Orodje of Okpe and the Ovie of Agbon are famed thrones.',
          },
          {
            name: 'Urhobo Day',
            tag: 'Festival',
            description:
              'The annual gathering of the Urhobo Progress Union celebrating heritage, language and enterprise across the world.',
          },
        ],
      },
      {
        id: 'attire',
        label: 'Attire & Textiles',
        items: [
          {
            name: 'George & Velvet Wrappers',
            tag: 'Elegance',
            description:
              'Ceremonial layering of patterned George and velvet wrappers for women and chiefs across the Delta.',
          },
          {
            name: 'Etibo Shirt',
            tag: 'Formal',
            description:
              'The short-sleeved, embroidered native shirt popularised across the Delta as formalwear of choice.',
          },
          {
            name: 'Coral & Brass Adornments',
            tag: 'Adornment',
            description:
              'Necklaces of coral and brass that mark rank, marriage and festivity in Urhobo towns.',
          },
          {
            name: 'Masquerade Regalia',
            tag: 'Masquerade',
            description:
              'Raffia, cloth and carved-wood costumes worn by the festive ohworhu dancers.',
          },
        ],
      },
      {
        id: 'music',
        label: 'Music, Instruments & Arts',
        items: [
          {
            name: 'Udu',
            tag: 'Percussion',
            description:
              'The clay pot drum with its water-deep voice, born in Urhoboland and now loved by percussionists worldwide.',
          },
          {
            name: 'Epha Divination',
            tag: 'Sacred',
            description:
              'Priestly arts of prophecy and healing kept alive by the epha diviners of Urhobo spirituality.',
          },
          {
            name: 'Woodcarving & Mortuary Art',
            tag: 'Craft',
            description:
              'Carved staves, stools and memorial figures honouring elders and ancestors.',
          },
          {
            name: 'Ohworhu Masquerade',
            tag: 'Masquerade',
            description:
              'The festive masquerade that dances through Urhobo celebrations in whirling costume.',
          },
          {
            name: 'Canoe Culture',
            tag: 'Maritime',
            description:
              'Creeks and rivers as highways — the regattas and boat festivals of the western Delta.',
          },
        ],
      },
    ],
    figures: [
      {
        name: 'Chief Mukoro Mowoe',
        title: 'The Urhobo Moses',
        era: '1890–1948',
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Mukoro_Mowoe_1.png',
        summary:
          'Merchant and politician who led the Urhobo Progress Union and became the first Urhobo to sit in the Western House of Assembly.',
        significance: 'Father of modern Urhobo unity.',
      },
      {
        name: 'Bruce Onobrakpeya',
        title: 'Master Printmaker',
        era: 'b. 1932',
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Bruce_Onobrakpeya_The_Pride_of_all_nigerians.jpg',
        summary:
          'Painter, sculptor and printmaker whose plastocast and deep-etch techniques made him a global art legend from Agbarha-Otor.',
        significance: 'The bridge between Benin bronze tradition and Nigerian modernism.',
      },
      {
        name: 'David Dafinone',
        title: 'Senator & Accountant',
        era: '1927–2018',
        image: 'https://upload.wikimedia.org/wikipedia/en/f/f7/David_Dafinone.jpg',
        summary:
          'Pioneering chartered accountant, senator and community builder who mentored a generation of Delta professionals.',
        significance: 'Helped shape Nigerian accounting standards.',
      },
    ],
    families: [
      {
        name: 'The Ovie Thrones',
        tagline: 'Kings of the Clans',
        description:
          'The sacred stools of the Urhobo clans — Ovie of Agbon, Orodje of Okpe, Ovie of Uvwie and more — custodians of each people\u2019s land and memory.',
      },
      {
        name: 'The Ibru Family',
        tagline: 'Merchant Princes',
        description:
          'Olorogun Michael Ibru\u2019s dynasty of traders, bankers and publishers that made Agbara-Otor a household name.',
      },
      {
        name: 'The Mowoe Family',
        tagline: 'Voice of the Union',
        description:
          'Descendants of Chief Mukoro Mowoe who kept the torch of the Urhobo Progress Union burning.',
      },
    ],
  },
  {
    id: 'edo',
    name: 'Edo (Bini)',
    people: 'Ẹ̀dó (Bini)',
    region: 'South-South (Benin City)',
    states: 'Edo',
    language: 'Ẹ̀dó',
    zone: 'South-South',
    aliases: ['bini', 'benin'],
    tagline: 'The Great Benin Kingdom — bronze masters and the Oba who outshone Europe.',
    teaser:
      'The Edo of Benin City built one of Africa\u2019s grandest empires — court artists in bronze and ivory whose works stunned the world and still define global museums.',
    keyTradition: 'Igue Festival & the Benin Bronzes',
    monogram: 'EDO',
    pattern: 'pat-north',
    palette: {
      primary: '#c95b2a',
      secondary: '#b4831f',
      pa: 'rgba(201,91,42,0.16)',
      pb: 'rgba(180,131,31,0.15)',
    },
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e8/Oba_of_Benin_Palace%2C_Benin%2C_Edo_state.jpg/960px-Oba_of_Benin_Palace%2C_Benin%2C_Edo_state.jpg',
    sections: [
      {
        id: 'traditions',
        label: 'Traditions & Festivals',
        items: [
          {
            name: 'Igue Festival',
            tag: 'Royalty',
            description:
              'The annual rites that renew the Oba\u2019s sacred power with song, dance and ceremony at the heart of Benin City.',
          },
          {
            name: 'Benin Bronzes & Ivories',
            tag: 'Masterwork',
            description:
              'Commemorative heads, plaques and ivory masks cast for the royal altars since the 13th century — among the world\u2019s great court arts.',
          },
          {
            name: 'Ugie Ceremonies',
            tag: 'Palace',
            description:
              'The great palace festivals — Ugie Ivie, Ugie Erha Oba — when the Oba\u2019s court displays its full regalia.',
          },
          {
            name: 'Ekasa Dance',
            tag: 'Dance',
            description:
              'The stately royal dance of chiefs and queens in flowing coral-bead regalia.',
          },
          {
            name: 'Guild System',
            tag: 'Guilds',
            description:
              'Hereditary guilds of brass-casters, carvers, weavers and doctors who have served the palace for centuries.',
          },
        ],
      },
      {
        id: 'attire',
        label: 'Attire & Textiles',
        items: [
          {
            name: 'Coral Bead Regalia (Ewu Ivie)',
            tag: 'Royalty',
            description:
              'The royal coral crowns, collars and robes that mark the Oba and his court.',
          },
          {
            name: 'Okuku Headgear',
            tag: 'Headwear',
            description:
              'The towering coral headdress of queen mothers and senior chiefs.',
          },
          {
            name: 'Velvet Robes & Wrappers',
            tag: 'Elegance',
            description:
              'Rich velvet and woven cloth of the Bini aristocracy, layered for court and ceremony.',
          },
          {
            name: 'Iwu Body Marks',
            tag: 'Rank',
            description:
              'The traditional body markings that once signalled rank, family and initiation.',
          },
        ],
      },
      {
        id: 'music',
        label: 'Music, Instruments & Arts',
        items: [
          {
            name: 'Ema Drums',
            tag: 'Percussion',
            description:
              'The royal drum ensemble of the Oba\u2019s court, heard at every great palace festival.',
          },
          {
            name: 'Bronze Casting (Igbesanmwan)',
            tag: 'Guild',
            description:
              'The lost-wax casting tradition of the Igbesanmwan guild, unbroken since the 13th century.',
          },
          {
            name: 'Ivory Carving',
            tag: 'Masterwork',
            description:
              'The Iyoba pendant mask and carved tusks — Benin\u2019s legendary ivory art.',
          },
          {
            name: 'Ovia Masquerades',
            tag: 'Masquerade',
            description:
              'Masks and dances of the water deity Ovia, guardians of rivers and fertility.',
          },
        ],
      },
    ],
    figures: [
      {
        name: 'Oba Ewuare the Great',
        title: 'Architect of Empire',
        era: '1440–1473',
        image:
        'https://upload.wikimedia.org/wikipedia/commons/d/d5/Oba_Ewuare_I%2C_Benin_Bronzes%2C_Horniman_Museum_4_%28cropped%29.jpg',
        summary:
          'The warrior-poet Oba who rebuilt Benin City, created the palace chieftaincy system and expanded the empire to its height.',
        significance: 'Shaped Benin\u2019s golden age.',
      },
      {
        name: 'Queen Idia (Iyoba)',
        title: 'The Queen Mother',
        era: '16th Century',
        image:
          'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Queen_Mother_Pendant_Mask-_Iyoba_MET_DP231460.jpg/960px-Queen_Mother_Pendant_Mask-_Iyoba_MET_DP231460.jpg',
        summary:
          'First Iyoba, commander and counsellor of the throne; her image became the most famous African ivory mask in the world.',
        significance: 'Symbol of Edo womanhood and the emblem of FESTAC \u201977.',
      },
      {
        name: 'Oba Ovonramwen',
        title: 'The Last Independent Oba',
        era: '1857–1914',
        image:
        'https://upload.wikimedia.org/wikipedia/commons/5/5a/Ovonramwen_Nogbaisi_with_his_two_wives_in_Calabar%2C_c1912_%28cropped%29.jpg',
        summary:
          'Ruled when the British punitive expedition of 1897 sacked Benin City; he died in exile at Calabar.',
        significance: 'Embodiment of Benin\u2019s defiance.',
      },
      {
        name: 'Oba Akenzua II',
        title: 'Moderniser King',
        era: '1933–1978',
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Oba_Akenzua_II%2C_1936_0327.0008.jpg',
        summary:
          'Restored the palace, founded schools and brought Benin\u2019s bronzes to global attention.',
        significance: 'The bridge between empire and republic.',
      },
    ],
    families: [
      {
        name: 'The House of Eweka',
        tagline: 'The Oba Dynasty',
        description:
          'An unbroken line of Obas from Eweka I, son of Oranmiyan, reigning over Benin since the 12th century.',
        image:
          'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/Royal_Palace_of_the_Oba_of_Benin.jpg/960px-Royal_Palace_of_the_Oba_of_Benin.jpg',
      },
      {
        name: 'The Uzama Nihiron',
        tagline: 'The Seven Kingmakers',
        description:
          'The hereditary palace chiefs who crown every Oba — the oldest aristocracy of the kingdom.',
      },
      {
        name: 'The Ogiamien Family',
        tagline: 'Keepers of the Old Order',
        description:
          'The dynasty that ruled Benin before the Eweka line, still honoured in coronation rites today.',
      },
    ],
  },
  {
    id: 'fulani',
    name: 'Fulani',
    people: 'Fulɓe (Fulani)',
    region: 'Northern Nigeria & the Sahel',
    states: 'Adamawa, Bauchi, Gombe, Taraba, Sokoto, Katsina, Jigawa & beyond',
    language: 'Fulfulde',
    zone: 'North',
    aliases: ['fulbe', 'fulɓe', 'wodaabe', 'bororo', 'pulaaku'],
    tagline: 'The Great Cattle People — Pulaaku honour, Wodaabe beauty and the longest migrations.',
    teaser:
      'The Fulɓe are West Africa\u2019s great pastoralists, guardians of a code of honour (pulaaku) that has carried them — and their cattle — across the Sahel for a thousand years.',
    keyTradition: 'Gerewol & Pulaaku',
    monogram: 'FUL',
    pattern: 'pat-oke',
    palette: {
      primary: '#90651b',
      secondary: '#c95b2a',
      pa: 'rgba(144,101,27,0.18)',
      pb: 'rgba(201,91,42,0.14)',
    },
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2d/1997_274-24_Gerewol.jpg/960px-1997_274-24_Gerewol.jpg',
    sections: [
      {
        id: 'traditions',
        label: 'Traditions & Festivals',
        items: [
          {
            name: 'Gerewol',
            tag: 'Beauty',
            description:
              'The Wodaabe week-long courtship festival where young men paint their faces and dance the Yaake to win a bride\u2019s eye.',
          },
          {
            name: 'Pulaaku',
            tag: 'Code of Honour',
            description:
              'The moral code of munyal (patience), semteende (modesty) and hakkiilo (wisdom) that defines Fulani honour.',
          },
          {
            name: 'Transhumance',
            tag: 'Nomadism',
            description:
              'The seasonal cattle migrations along ancestral routes that bind herder to landscape.',
          },
          {
            name: 'Cattle Culture',
            tag: 'Heritage',
            description:
              'The zebu as wealth, dowry and muse — cattle names, songs and lore passed down generations.',
          },
          {
            name: 'Naming & Initiation Rites',
            tag: 'Rite of Passage',
            description:
              'Sunna naming ceremonies and the age-grade steps into Fulani adulthood.',
          },
        ],
      },
      {
        id: 'attire',
        label: 'Attire & Textiles',
        items: [
          {
            name: 'Wodaabe Finery',
            tag: 'Ceremony',
            description:
              'Embroidered tunics, mirrors, ostrich plumes and dazzling face-paint of the Gerewol dancers.',
          },
          {
            name: 'Toogi Earrings & Leppi',
            tag: 'Adornment',
            description:
              'The gold and silver jewellery of Fulani women, worn in layered brilliance.',
          },
          {
            name: 'Flowing Robes & Conical Hats',
            tag: 'Style',
            description:
              'Pastoral elegance in motion — the herder\u2019s robe and hat as graceful as his stride.',
          },
          {
            name: 'Henna & Facial Marks',
            tag: 'Adornment',
            description:
              'Beauty arts of the Sahel shared across Fulani communities.',
          },
        ],
      },
      {
        id: 'music',
        label: 'Music, Instruments & Arts',
        items: [
          {
            name: 'Hoddu',
            tag: 'Melody',
            description:
              'The four-stringed Sahelian lute of Fulani griots, ancestor of the American banjo.',
          },
          {
            name: 'Serdu & Flutes',
            tag: 'Melody',
            description:
              'Reed flutes of the herders, played under acacia shade at journey\u2019s end.',
          },
          {
            name: 'Yaake Dance',
            tag: 'Dance',
            description:
              'The Wodaabe\u2019s graceful, bird-like courtship dance — beauty as performance.',
          },
          {
            name: 'Maudu Poetry',
            tag: 'Poetry',
            description:
              'Fulfulde verse on faith, cattle and love, recited by masters of the spoken word.',
          },
        ],
      },
    ],
    figures: [
      {
        name: 'Modibbo Adama',
        title: 'Founder of Adamawa',
        era: '1786–1847',
        image:
        'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/Gate_of_Lamido_Palace.jpg/960px-Gate_of_Lamido_Palace.jpg',
        summary:
          'Dan Fodio\u2019s lieutenant who conquered and founded the Adamawa Emirate, from Yola to the Cameroons.',
        significance: 'Namesake of the Lamido dynasty of Adamawa.',
      },
      {
        name: 'Umaru Musa Yar\u2019Adua',
        title: 'President of Nigeria',
        era: '1951–2010',
        image:
        'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f8/Umaru_YarAdua_080630-F-1644L-111.jpg/960px-Umaru_YarAdua_080630-F-1644L-111.jpg',
        summary:
          'Scholar-descendant of the Katsina aristocracy who became president of Nigeria (2007–2010).',
        significance: 'Symbol of northern reform and academic leadership.',
      },
      {
        name: 'Muhammadu Buhari',
        title: 'President of Nigeria',
        era: 'b. 1942',
        image:
        'https://upload.wikimedia.org/wikipedia/commons/b/bb/Muhammadu_Buhari%2C_President_of_the_Federal_Republic_of_Nigeria_%283x4_cropped%29.jpg',
        summary:
          'Retired general from Daura and two-time president (1983–85 and 2015–2023).',
        significance: 'A defining figure of modern Nigerian politics.',
      },
    ],
    families: [
      {
        name: 'The Wodaabe Lineages',
        tagline: 'Beauty on the Move',
        description:
          'Clans of the Bororo whose Gerewol courtships are the Sahel\u2019s most photographed spectacle.',
        image:
          'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/Flickr_-_Dan_Lundberg_-_1997_%5E276-27A_Wodaabe_camp.jpg/960px-Flickr_-_Dan_Lundberg_-_1997_%5E276-27A_Wodaabe_camp.jpg',
      },
      {
        name: 'The Lamido Dynasty of Adamawa',
        tagline: 'House of Adama',
        description:
          'Descendants of Modibbo Adama who still reign as Lamido of Adamawa in Yola.',
      },
      {
        name: 'The Yar\u2019Adua Family',
        tagline: 'Katsina Aristocrats',
        description:
          'A dynasty of scholars, soldiers and statesmen that produced a president.',
      },
    ],
  },
  {
    id: 'kanuri',
    name: 'Kanuri',
    people: 'Kanuri',
    region: 'Northeastern Nigeria (Borno)',
    states: 'Borno, Yobe',
    language: 'Kanuri',
    zone: 'Northeast',
    aliases: ['borno', 'kanem-bornu', 'kanem bornu'],
    tagline: 'Heirs of Kanem-Bornu — a thousand-year empire of the Sahel.',
    teaser:
      'The Kanuri of Borno built Kanem-Bornu, one of the longest-lived empires in history, and still ride under the Shehu of Borno\u2019s banner.',
    keyTradition: 'The Shehu\u2019s Durbar & Koroso Dance',
    monogram: 'KAN',
    pattern: 'pat-north',
    palette: {
      primary: '#4c5db0',
      secondary: '#c95b2a',
      pa: 'rgba(76,93,176,0.18)',
      pb: 'rgba(201,91,42,0.15)',
    },
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Shehu_Sanda_Kura_of_Borno_on_horseback.jpg/960px-Shehu_Sanda_Kura_of_Borno_on_horseback.jpg',
    sections: [
      {
        id: 'traditions',
        label: 'Traditions & Festivals',
        items: [
          {
            name: 'The Shehu\u2019s Durbar',
            tag: 'Royalty',
            description:
              'Borno\u2019s great Sallah cavalry parade, when thousands of horsemen salute the Shehu in Maiduguri.',
          },
          {
            name: 'Kanem-Bornu Heritage',
            tag: 'Empire',
            description:
              'The Sayfawa dynasty\u2019s millennium of Sahelian empire — from Lake Chad\u2019s shores to the caravan roads.',
          },
          {
            name: 'Koroso Dance',
            tag: 'Dance',
            description:
              'The acrobatic Kanuri dance of the Borno towns, leaping and tumbling to drums.',
          },
          {
            name: 'Qur\u2019anic Scholarship',
            tag: 'Scholarship',
            description:
              'Borno\u2019s ancient schools of Islamic learning, famed across the Sahel for centuries.',
          },
          {
            name: 'Borno Indigo & Leather',
            tag: 'Craft',
            description:
              'Dyed cloth and worked leather from the workshops of old Borno.',
          },
        ],
      },
      {
        id: 'attire',
        label: 'Attire & Textiles',
        items: [
          {
            name: 'Baba Riga',
            tag: 'Elegance',
            description:
              'Borno\u2019s flowing, voluminous gown, worn with easy majesty.',
          },
          {
            name: 'Embroidered Kanuri Caps',
            tag: 'Headwear',
            description:
              'The finely stitched caps that crown the Kanuri gentleman.',
          },
          {
            name: 'Striped Wrappers',
            tag: 'Handwoven',
            description:
              'Fine striped cloth of the women\u2019s ceremonial wardrobe.',
          },
          {
            name: 'Henna & Beads',
            tag: 'Adornment',
            description:
              'Henna artistry and beadwork of Kanuri brides and dancers.',
          },
        ],
      },
      {
        id: 'music',
        label: 'Music, Instruments & Arts',
        items: [
          {
            name: 'Kuntigi',
            tag: 'Melody',
            description:
              'The one-stringed Kanuri fiddle that sings the songs of Borno.',
          },
          {
            name: 'Kakaki & Ganga',
            tag: 'Royal',
            description:
              'Royal trumpets and drums of the Shehu\u2019s court processions.',
          },
          {
            name: 'Koroso Dance Music',
            tag: 'Dance',
            description:
              'The driving drum cycles behind Borno\u2019s most athletic dance.',
          },
          {
            name: 'Borno Calligraphy',
            tag: 'Calligraphy',
            description:
              'Illuminated manuscripts and calligraphic arts of the Borno schools.',
          },
        ],
      },
    ],
    figures: [
      {
        name: 'Mai Idris Alooma',
        title: 'Greatest Emperor of Borno',
        era: '1580–1617',
        summary:
          'Modernised Kanem-Bornu with firearms, diplomacy and codified law; pilgrimages and trade flourished under his rule.',
        significance: 'The peak of the Sayfawa dynasty.',
      },
      {
        name: 'Sheikh Muhammad El-Kanemi',
        title: 'Saviour of Borno',
        era: '1776–1837',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Muhammad_al-Amin_al-Kanemi.png',
        summary:
          'The scholar who repelled the Sokoto jihad\u2019s assault on Borno and founded the El-Kanemi dynasty.',
        significance: 'Rebuilder of the Shehu throne.',
      },
      {
        name: 'Sir Kashim Ibrahim',
        title: 'First Among Northerners',
        era: '1910–1990',
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Kashim_Ibrahim.jpg',
        summary:
          'Kanuri politician, federal minister and Governor of Northern Nigeria (1962–66).',
        significance: 'The voice of the Kanem-Bornu legacy in modern Nigeria.',
      },
    ],
    families: [
      {
        name: 'The Sayfawa Dynasty',
        tagline: 'A Millennium of Kings',
        description:
          'The legendary line of Mai rulers who led Kanem-Bornu for nearly a thousand years.',
      },
      {
        name: 'The El-Kanemi Dynasty',
        tagline: 'The Shehus of Borno',
        description:
          'Descendants of Sheikh El-Kanemi who have reigned as Shehu of Borno since 1814.',
        image:
          'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/Shehu_of_Borno_at_the_Kanem_Borno_Cultural_Summit_2026.jpg/960px-Shehu_of_Borno_at_the_Kanem_Borno_Cultural_Summit_2026.jpg',
      },
      {
        name: 'The Zanna Nobility',
        tagline: 'Princes of the Court',
        description:
          'The titled Zanna class of Borno, keepers of palace tradition and horsemanship.',
      },
    ],
  },
  {
    id: 'idoma',
    name: 'Idoma',
    people: 'Idoma',
    region: 'Middle Belt (Benue South)',
    states: 'Benue',
    language: 'Idoma',
    zone: 'Middle Belt',
    aliases: ['benue'],
    tagline: 'Children of Alekwu — ancestor law and the Och\u2019Idoma\u2019s stool.',
    teaser:
      'The Idoma of the Benue south bank trace their roots to the ancient Apa confederacy, honouring ancestors through Alekwu rites and their paramount ruler, the Och\u2019Idoma.',
    keyTradition: 'Alekwu Ancestral Rites',
    monogram: 'IDO',
    pattern: 'pat-angbian',
    palette: {
      primary: '#b04a22',
      secondary: '#2b2115',
      pa: 'rgba(176,74,34,0.16)',
      pb: 'rgba(43,33,21,0.22)',
    },
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Idoma_masquerade.jpg/960px-Idoma_masquerade.jpg',
    sections: [
      {
        id: 'traditions',
        label: 'Traditions & Festivals',
        items: [
          {
            name: 'Alekwu',
            tag: 'Ancestors',
            description:
              'The ancestral cult that upholds Idoma law, morality and social order from the shrine houses.',
          },
          {
            name: 'Och\u2019Idoma Installation',
            tag: 'Royalty',
            description:
              'Coronation rites of the paramount ruler in Otukpo, the heart of Idomaland.',
          },
          {
            name: 'Oglinye Festivals',
            tag: 'Festival',
            description:
              'Village festivals gathered around the great drum, with masquerades and feasting.',
          },
          {
            name: 'Apa Heritage',
            tag: 'Origins',
            description:
              'The Kwararafa-Apa confederacy origins remembered in Idoma oral tradition.',
          },
          {
            name: 'Traditional Wrestling',
            tag: 'Sport',
            description:
              'Village wrestling contests of strength and honour at market and festival.',
          },
        ],
      },
      {
        id: 'attire',
        label: 'Attire & Textiles',
        items: [
          {
            name: 'Black-Red Striped Wrappers',
            tag: 'Identity',
            description:
              'The signature woven cloth of Idoma women, bold and unmistakable.',
          },
          {
            name: 'Coral & Cowrie Beadwork',
            tag: 'Adornment',
            description:
              'Necklaces and waist-beads of coral and cowrie for ceremony.',
          },
          {
            name: 'Masquerade Regalia',
            tag: 'Masquerade',
            description:
              'Raffia, paint and carved masks of the Alekwu festivals.',
          },
        ],
      },
      {
        id: 'music',
        label: 'Music, Instruments & Arts',
        items: [
          {
            name: 'Oglinye',
            tag: 'Percussion',
            description:
              'The massive slit-log drum that booms through Idoma festivals.',
          },
          {
            name: 'Ancestral Chants',
            tag: 'Sacred',
            description:
              'Alekwu incantations and praise-chants of the elders.',
          },
          {
            name: 'Flutes & Horns of the Benue',
            tag: 'Melody',
            description:
              'Reed flutes and animal-horn calls colouring moonlight dances.',
          },
          {
            name: 'Anjenu Water Masquerades',
            tag: 'Masquerade',
            description:
              'Masks of the water spirits, guardians of rivers and wells.',
          },
        ],
      },
    ],
    figures: [
      {
        name: 'Ameh Ebute',
        title: 'Senate President',
        era: 'b. 1946',
        image:
        'https://upload.wikimedia.org/wikipedia/commons/c/c2/Sen._Ameh_Ebute_%286th_Senate_President_%28Military%29.jpg',
        summary:
          'The Idoma lawyer and politician who served as Nigeria\u2019s Senate President in the Third Republic.',
        significance: 'The highest Idoma voice in national politics.',
      },
      {
        name: 'Ogiri Oko',
        title: 'Football Wizard',
        era: '1943–1995',
        summary:
          'One of Nigeria\u2019s most beloved footballers of the 1960s and 70s, dazzling for club and country.',
        significance: 'Idoma\u2019s sporting legend.',
      },
      {
        name: 'Elias Ikoyi Obekpa',
        title: 'The Och\u2019Idoma',
        era: 'd. 2021',
        summary:
          'Long-serving Och\u2019Idoma who guided Idomaland through decades of change.',
        significance: 'Modern custodian of the paramount stool.',
      },
    ],
    families: [
      {
        name: 'The Och\u2019Idoma Paramount Stool',
        tagline: 'Father of Idomaland',
        description:
          'The paramount rulership created in the colonial era, seated at Otukpo and rotating among the great lineages.',
      },
      {
        name: 'The Apa Descent Groups',
        tagline: 'Sons of the Confederacy',
        description:
          'The clan lineages tracing descent from the ancient Apa confederacy of the Benue.',
      },
      {
        name: 'The Ebute Family',
        tagline: 'The Senate House',
        description:
          'The family of Ameh Ebute, Idoma\u2019s most senior political dynasty.',
      },
    ],
  },
  {
    id: 'annang',
    name: 'Annang',
    people: 'Annang',
    region: 'Akwa Ibom (Ikot Ekpene zone)',
    states: 'Akwa Ibom',
    language: 'Annang',
    zone: 'South-South',
    aliases: ['akwa ibom', 'ikot ekpene'],
    tagline: 'Weavers of Ukatt — the raffia arts of the Northwest Ibibio.',
    teaser:
      'The Annang of Akwa Ibom are famed for the Ukatt raffia weaving of Ikot Ekpene and the fierce Ekpo masquerades that guard ancestral law.',
    keyTradition: 'Ukatt Raffia Weaving & Ekpo',
    monogram: 'ANN',
    pattern: 'pat-checker',
    palette: {
      primary: '#2e825b',
      secondary: '#c9730d',
      pa: 'rgba(46,130,91,0.16)',
      pb: 'rgba(201,115,13,0.14)',
    },
    image:
      'https://upload.wikimedia.org/wikipedia/commons/1/13/Faces_of_Annang_Masquerade._Akwa_ibom_State_cultural_festivals._Nigeria.jpg',
    sections: [
      {
        id: 'traditions',
        label: 'Traditions & Festivals',
        items: [
          {
            name: 'Ekpo Masquerades',
            tag: 'Ancestors',
            description:
              'The ancestral masquerades that police morality and honour the dead in towering costume.',
          },
          {
            name: 'Ukatt Weaving',
            tag: 'Craft',
            description:
              'The raffia craft of Ikot Ekpene — the \u2018Raffia City\u2019 — woven into cloth and festive costume.',
          },
          {
            name: 'New Yam & Harvest Festivals',
            tag: 'Harvest',
            description:
              'Thanksgiving festivals of yam and palm that open the Annang seasons.',
          },
          {
            name: 'Age-Grade Societies',
            tag: 'Community',
            description:
              'The graded societies that organise work, play and defence in Annang towns.',
          },
        ],
      },
      {
        id: 'attire',
        label: 'Attire & Textiles',
        items: [
          {
            name: 'Ukatt Raffia Cloth',
            tag: 'Handwoven',
            description:
              'Raffia woven into ceremonial cloth and costumes of extraordinary texture.',
          },
          {
            name: 'Wrappers & Beadwork',
            tag: 'Elegance',
            description:
              'Patterned wrappers and coral beadwork of the Annang woman.',
          },
          {
            name: 'Ekpo Costumes',
            tag: 'Masquerade',
            description:
              'Carved masks and raffia regalia of the ancestral cult.',
          },
        ],
      },
      {
        id: 'music',
        label: 'Music, Instruments & Arts',
        items: [
          {
            name: 'Ekpo Drum Ensembles',
            tag: 'Percussion',
            description:
              'The driving drum cycles that summon and pace the masquerades.',
          },
          {
            name: 'Ukatt Weaving Arts',
            tag: 'Craft',
            description:
              'Baskets, fans, mats and cloth — the complete raffia art of the Annang.',
          },
          {
            name: 'Annang Praise Songs',
            tag: 'Song',
            description:
              'Praise-singing of chiefs and wrestlers at festivals.',
          },
          {
            name: 'Mask Carving',
            tag: 'Craft',
            description:
              'The sculptural tradition behind the Ekpo faces.',
          },
        ],
      },
    ],
    figures: [
      {
        name: 'Godswill Akpabio',
        title: 'Senate President',
        era: 'b. 1962',
        image:
          'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Godswill_Obot_Akpabio_%282012%29_%28cropped%29.jpg/960px-Godswill_Obot_Akpabio_%282012%29_%28cropped%29.jpg',
        summary:
          'The Annang politician who rose from Akwa Ibom commissioner to governor to Nigeria\u2019s Senate President.',
        significance: 'The Annang voice at the apex of power.',
      },
      {
        name: 'Don Etiebet',
        title: 'Mining Statesman',
        era: 'b. 1939',
        summary:
          'Petroleum minister and elder statesman of the Annang political family.',
        significance: 'A founding figure of Akwa Ibom politics.',
      },
      {
        name: 'Onofiok Luke',
        title: 'Speaker & Lawmaker',
        era: 'b. 1978',
        image:
        'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/Rt._Hon._%28Barr%29_Onofiok_Luke%2C_Speaker%2C_Akwa_Ibom_State_House_of_Asembly.jpg/960px-Rt._Hon._%28Barr%29_Onofiok_Luke%2C_Speaker%2C_Akwa_Ibom_State_House_of_Asembly.jpg',
        summary:
          'Young Speaker of the Akwa Ibom House of Assembly who championed youth in governance.',
        significance: 'New-generation Annang leadership.',
      },
    ],
    families: [
      {
        name: 'The Nto Annang Descent Groups',
        tagline: 'The Eight Districts',
        description:
          'Abak, Ikot Ekpene, Etim Ekpo, Ukanafun, Oruk Anam, Essien Udim, Ika and Obot Akara — the ancestral districts of the Annang nation.',
      },
      {
        name: 'The Ukatt Guild Lineages',
        tagline: 'Raffia Masters',
        description:
          'Families of Ikot Ekpene who have woven the raffia craft for generations.',
      },
      {
        name: 'The Akpabio Family',
        tagline: 'From Essien Udim to the Villa',
        description:
          'The political dynasty of Godswill Akpabio, power-brokers of the South-South.',
      },
    ],
  },
  {
    id: 'igala',
    name: 'Igala',
    people: 'Igala',
    region: 'North-Central (Kogi East)',
    states: 'Kogi',
    language: 'Igala',
    zone: 'North-Central',
    aliases: ['kogi', 'ata'],
    tagline: 'Kingdom of the Ata — the beaded stool and Princess Inikpi\u2019s sacrifice.',
    teaser:
      'The Igala kingdom of Idah has crowned the Ata for centuries; its nine-corded beaded stool and the legend of Princess Inikpi anchor a proud royal culture.',
    keyTradition: 'Ocho Festival & the Ata\u2019s Stool',
    monogram: 'IGL',
    pattern: 'pat-isi',
    palette: {
      primary: '#b4831f',
      secondary: '#8e3a1d',
      pa: 'rgba(180,131,31,0.16)',
      pb: 'rgba(142,58,29,0.16)',
    },
    image:
      'https://upload.wikimedia.org/wikipedia/commons/c/c0/Photo_Showing_The_Statue_Of_Late_Princess_Inikpi_Of_Igala_Kingdom_Who_Was_Buried_Alive_With_Nine_Slaves_For_The_Safety_Of_The_Igala_Kingdom_During_A_War_Against_The_Jukuns.Jpeg',
    sections: [
      {
        id: 'traditions',
        label: 'Traditions & Festivals',
        items: [
          {
            name: 'Ocho Festival',
            tag: 'Royalty',
            description:
              'The Ata\u2019s great annual festival of renewal, when the kingdom gathers at Idah in full regalia.',
          },
          {
            name: 'The Legend of Inikpi',
            tag: 'Legend',
            description:
              'The princess buried alive so the kingdom might win its war against the Jukun — remembered in statues and songs.',
          },
          {
            name: 'The Ata\u2019s Regalia',
            tag: 'Royalty',
            description:
              'The nine-corded beaded stool, royal masks and coral crowns of the Attah\u2019s court.',
          },
          {
            name: 'Egwu Masquerades',
            tag: 'Masquerade',
            description:
              'The masked festivals of the Igala towns and villages.',
          },
          {
            name: 'River Niger Heritage',
            tag: 'River',
            description:
              'The Niger — Ochamachala — and its fishing rites, canoes and river spirits.',
          },
        ],
      },
      {
        id: 'attire',
        label: 'Attire & Textiles',
        items: [
          {
            name: 'Royal Beadwork',
            tag: 'Royalty',
            description:
              'Coral crowns and beaded regalia of the Ata\u2019s court.',
          },
          {
            name: 'Handwoven Wrappers',
            tag: 'Elegance',
            description:
              'Woven cloth of the Igala women, layered for ceremony.',
          },
          {
            name: 'Masquerade Costumes',
            tag: 'Masquerade',
            description:
              'The carved masks and raffia regalia of the Egwu.',
          },
        ],
      },
      {
        id: 'music',
        label: 'Music, Instruments & Arts',
        items: [
          {
            name: 'Egedege',
            tag: 'Dance',
            description:
              'The swaying Igala dance music that conquered Nigerian parties in the 1980s.',
          },
          {
            name: 'Kakaki & Court Drums',
            tag: 'Royal',
            description:
              'Trumpets and drums of the Ata\u2019s palace ceremonies.',
          },
          {
            name: 'Pottery of Idah',
            tag: 'Craft',
            description:
              'The ancient terracotta and pottery tradition of the Niger bank.',
          },
        ],
      },
    ],
    figures: [
      {
        name: 'Ata Ayegba Oma Idoko',
        title: 'The Ata of the Sacrifice',
        era: '17th Century',
        summary:
          'Reigned when his daughter Inikpi gave her life for the kingdom; his stool passes down the royal line to this day.',
        significance: 'The Ata of the Igala founding legend.',
      },
      {
        name: 'Princess Inikpi',
        title: 'The Selfless Princess',
        era: '17th Century',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/c/c0/Photo_Showing_The_Statue_Of_Late_Princess_Inikpi_Of_Igala_Kingdom_Who_Was_Buried_Alive_With_Nine_Slaves_For_The_Safety_Of_The_Igala_Kingdom_During_A_War_Against_The_Jukuns.Jpeg',
        summary:
          'Daughter of Ata Ayegba who chose burial alive so her kingdom might win its war — immortalised in Idah\u2019s statue.',
        significance: 'Igala\u2019s enduring emblem of sacrifice.',
      },
      {
        name: 'Abubakar Audu',
        title: 'The People\u2019s Governor',
        era: '1947–2015',
        summary:
          'Two-time governor of Kogi State and the modern face of Igala politics.',
        significance: 'Dominant political figure of the Igala heartland.',
      },
    ],
    families: [
      {
        name: 'The Aju Ameacho Dynasty',
        tagline: 'The Ata Lineage',
        description:
          'The royal house from which the Attah of Igala has been selected for generations.',
      },
      {
        name: 'The Achadu Lineage',
        tagline: 'The Kingmaker',
        description:
          'The hereditary prime minister who crowns and counsels the Ata.',
      },
      {
        name: 'The Audu Family',
        tagline: 'Ogbonicha\u2019s House',
        description:
          'The political dynasty of Abubakar Audu, princes of Kogi politics.',
      },
    ],
  },
  {
    id: 'ebira',
    name: 'Ebira',
    people: 'Ebira (Anebira)',
    region: 'North-Central (Kogi Central)',
    states: 'Kogi',
    language: 'Ebira',
    zone: 'North-Central',
    aliases: ['anebira', 'okene'],
    tagline: 'The Ohinoyi\u2019s People — Ekuechi masks and the hills of Okene.',
    teaser:
      'The Ebira of the Kogi hills revere their Ohinoyi, celebrate the Ekuechi festival of masks, and turned Okene into a trading crossroads.',
    keyTradition: 'Ekuechi Masked Festival',
    monogram: 'EBI',
    pattern: 'pat-north',
    palette: {
      primary: '#3c4893',
      secondary: '#c9730d',
      pa: 'rgba(60,72,147,0.18)',
      pb: 'rgba(201,115,13,0.14)',
    },
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/Masque_Ekuecici-Ebira_%281%29.jpg/960px-Masque_Ekuecici-Ebira_%281%29.jpg',
    sections: [
      {
        id: 'traditions',
        label: 'Traditions & Festivals',
        items: [
          {
            name: 'Ekuechi',
            tag: 'Masquerade',
            description:
              'The masked festival honouring the dead and driving off evil — the heart of Ebira spiritual life.',
          },
          {
            name: 'Ohinoyi Kingship',
            tag: 'Royalty',
            description:
              'The paramount rulership of Ebiraland, centred on the palace at Okene.',
          },
          {
            name: 'Traditional Wrestling',
            tag: 'Sport',
            description:
              'The wrestling contests of Ebira festivals, trials of strength and honour.',
          },
          {
            name: 'Clan & Age-Grade Life',
            tag: 'Community',
            description:
              'The clan and age-grade organisation that keeps Ebira towns cohesive.',
          },
        ],
      },
      {
        id: 'attire',
        label: 'Attire & Textiles',
        items: [
          {
            name: 'Black-White Woven Wrappers',
            tag: 'Identity',
            description:
              'The signature woven cloth of Ebira women.',
          },
          {
            name: 'Coral & Brass Adornments',
            tag: 'Adornment',
            description:
              'Jewellery of coral and brass for festivals and marriages.',
          },
          {
            name: 'Masquerade Regalia',
            tag: 'Masquerade',
            description:
              'The carved masks and costumes of the Ekuechi.',
          },
        ],
      },
      {
        id: 'music',
        label: 'Music, Instruments & Arts',
        items: [
          {
            name: 'Ekuechi Masquerade Music',
            tag: 'Percussion',
            description:
              'The drum and song cycles that drive the masked festival.',
          },
          {
            name: 'Praise Songs of the Ohinoyi',
            tag: 'Song',
            description:
              'Court praise-singing of the paramount ruler and chiefs.',
          },
          {
            name: 'Pottery & Blacksmithing',
            tag: 'Craft',
            description:
              'The clay and iron crafts of the Ebira towns.',
          },
        ],
      },
    ],
    figures: [
      {
        name: 'Dr. Ado Ibrahim',
        title: 'The People\u2019s Ohinoyi',
        era: '1929–2024',
        summary:
          'Beloved Ohinoyi of Ebiraland who served the Anebira for over two decades with wisdom and calm.',
        significance: 'Modern symbol of Ebira unity.',
      },
      {
        name: 'Joseph Makoju',
        title: 'Power Czar',
        era: '1948–2022',
        summary:
          'Engineer who led Nigeria\u2019s electricity sector through decades of reform.',
        significance: 'Ebira\u2019s industrial titan.',
      },
      {
        name: 'Yahaya Bello',
        title: 'Kogi\u2019s Young Governor',
        era: 'b. 1975',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/IMG-20230701-WA0024_%28cropped%29.jpg',
        summary:
          'Two-term governor of Kogi State from the Ebira heartland (2016–2024).',
        significance: 'New-generation Ebira power.',
      },
    ],
    families: [
      {
        name: 'The Ohinoyi Paramount Stool',
        tagline: 'Father of the Anebira',
        description:
          'The paramount rulership of Ebiraland, guardian of the Ekuechi tradition.',
      },
      {
        name: 'The Clans of the Hills',
        tagline: 'Ozumi, Eika & Idoji',
        description:
          'The great clan divisions of Ebiraland, each with its own festivals and shrines.',
      },
      {
        name: 'The Makoju Family',
        tagline: 'Engineers of the Nation',
        description:
          'The industrial family of Joseph Makoju, builders of Nigeria\u2019s power.',
      },
    ],
  },
  {
    id: 'nupe',
    name: 'Nupe',
    people: 'Nupe',
    region: 'North-Central (Niger State)',
    states: 'Niger, Kwara, Kogi',
    language: 'Nupe',
    zone: 'North-Central',
    aliases: ['bida'],
    tagline: 'The Etsu\u2019s Domain — Bida brass, masaga beads and the Niger\u2019s canoe people.',
    teaser:
      'The Nupe of Bida forged a riverine kingdom on the Niger; their brass-smiths and glass-bead makers made Bida a legendary craft city.',
    keyTradition: 'Bida Craft Guilds & the Etsu\u2019s Durbar',
    monogram: 'NUP',
    pattern: 'pat-wave',
    palette: {
      primary: '#2e825b',
      secondary: '#ed9013',
      pa: 'rgba(46,130,91,0.16)',
      pb: 'rgba(237,144,19,0.15)',
    },
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/Bronze-chasers_in_Bida_market.jpg/960px-Bronze-chasers_in_Bida_market.jpg',
    sections: [
      {
        id: 'traditions',
        label: 'Traditions & Festivals',
        items: [
          {
            name: 'The Etsu Nupe\u2019s Durbar',
            tag: 'Royalty',
            description:
              'Bida\u2019s royal cavalry festival, when horsemen in quilted lifidi armour salute the Etsu.',
          },
          {
            name: 'The Tsoede Legend',
            tag: 'Legend',
            description:
              'The founding myth of the Nupe kingdom — the prince who rode out of Idah to forge a nation on the Niger.',
          },
          {
            name: 'Craft Guilds of Bida',
            tag: 'Guilds',
            description:
              'Hereditary guilds of brass-casters, bead-makers and weavers that made Bida a craft capital.',
          },
          {
            name: 'River Niger Life',
            tag: 'River',
            description:
              'Canoes, fishing and floodplain farming along the great river.',
          },
        ],
      },
      {
        id: 'attire',
        label: 'Attire & Textiles',
        items: [
          {
            name: 'Flowing Gowns & Turbans',
            tag: 'Elegance',
            description:
              'The regal dress of the Bida court and Nupe gentry.',
          },
          {
            name: 'Masaga Glass-Bead Jewellery',
            tag: 'Adornment',
            description:
              'The famous blue and red glass beads of the masaga guilds.',
          },
          {
            name: 'Woven Striped Cloth',
            tag: 'Handwoven',
            description:
              'The fine striped textiles of Nupe looms.',
          },
        ],
      },
      {
        id: 'music',
        label: 'Music, Instruments & Arts',
        items: [
          {
            name: 'Kakaki Fanfares',
            tag: 'Royal',
            description:
              'Long royal trumpets of the Etsu\u2019s processions.',
          },
          {
            name: 'Court Praise-Singing',
            tag: 'Song',
            description:
              'Praise-poetry of the palace bards.',
          },
          {
            name: 'Bida Brass & Silver',
            tag: 'Craft',
            description:
              'Ewers, trays and regalia of the bronze-chasers\u2019 guilds.',
          },
          {
            name: 'Masaga Glass Beads',
            tag: 'Craft',
            description:
              'Bead-making of Bida\u2019s masaga guilds, famed across West Africa.',
          },
        ],
      },
    ],
    figures: [
      {
        name: 'Tsoede (Edegi)',
        title: 'Founder of the Nupe Kingdom',
        era: '15th Century',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/7/73/Tsoede%2C_founding_father_of_the_Nupe_Kingdom_in_Niger_State.jpg',
        summary:
          'Legendary prince who rode out of Idah and forged the Nupe nation on the banks of the Niger.',
        significance: 'Nupe\u2019s origin figure.',
      },
      {
        name: 'Etsu Umaru Sanda Ndayako',
        title: 'The Modern Etsu',
        era: '1937–2003',
        summary:
          'Twelfth Etsu Nupe who guided Bida into the modern age as a revered father figure.',
        significance: 'Beloved father of contemporary Nupe.',
      },
      {
        name: 'Etsu Yahaya Abubakar',
        title: 'Reigning Etsu Nupe',
        era: 'b. 1952',
        summary:
          'The serving Etsu Nupe and chairman of the Niger State Council of Traditional Rulers.',
        significance: 'The Etsu of today.',
      },
    ],
    families: [
      {
        name: 'The Etsu Nupe Dynasty',
        tagline: 'House of Bida',
        description:
          'The royal line of Bida, rulers of the Nupe since the fall of old Nupeland\u2019s kingdoms.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/The_Place_of_Etsue_Nupe.jpg',
      },
      {
        name: 'The Craft Guild Families',
        tagline: 'Masaga & Brass Masters',
        description:
          'The hereditary workshops of Bida\u2019s brass-casters, bead-makers and weavers.',
        image:
          'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/Bronze-chasers_in_Bida_market.jpg/960px-Bronze-chasers_in_Bida_market.jpg',
      },
      {
        name: 'The Ndayako Family',
        tagline: 'Twice Crowned',
        description:
          'The family of Etsu Umaru Sanda Ndayako, pillars of the Bida court.',
      },
    ],
  },
  {
    id: 'jukun',
    name: 'Jukun',
    people: 'Jukun (Wapan)',
    region: 'Middle Belt (Taraba)',
    states: 'Taraba',
    language: 'Jukun (Wapan)',
    zone: 'Middle Belt',
    aliases: ['wapan', 'kwararafa'],
    tagline: 'Heirs of Kwararafa — the Aku Uka and the confederacy of the Benue.',
    teaser:
      'The Jukun of Wukari led the Kwararafa confederacy that once shook the Hausa city-states; the Aku Uka\u2019s sacred stool still rules from the Benue Valley.',
    keyTradition: 'The Aku Uka & Kwararafa Heritage',
    monogram: 'JUK',
    pattern: 'pat-oke',
    palette: {
      primary: '#8e3a1d',
      secondary: '#b4831f',
      pa: 'rgba(142,58,29,0.16)',
      pb: 'rgba(180,131,31,0.15)',
    },
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/Aku_Ukas_of_Wukari_and_their_wives_01.jpg/960px-Aku_Ukas_of_Wukari_and_their_wives_01.jpg',
    sections: [
      {
        id: 'traditions',
        label: 'Traditions & Festivals',
        items: [
          {
            name: 'The Aku Uka of Wukari',
            tag: 'Royalty',
            description:
              'The sacred kingship of the Jukun world, seated on the ancestral stool at Wukari.',
          },
          {
            name: 'Kwararafa Confederation',
            tag: 'Empire',
            description:
              'The great Benue confederacy that raided and traded with the Hausa city-states for centuries.',
          },
          {
            name: 'Puje Festival',
            tag: 'Festival',
            description:
              'The royal festival of Wukari, with masquerades, dances and homage to the Aku Uka.',
          },
          {
            name: 'River Benue Life',
            tag: 'River',
            description:
              'Fishing, ferries and floodplain farming of the Benue Valley.',
          },
        ],
      },
      {
        id: 'attire',
        label: 'Attire & Textiles',
        items: [
          {
            name: 'Woven Striped Cloth',
            tag: 'Identity',
            description:
              'The handwoven striped cloth of Jukun dress.',
          },
          {
            name: 'Beaded Royal Regalia',
            tag: 'Royalty',
            description:
              'The beadwork and regalia of the Aku Uka\u2019s court.',
          },
          {
            name: 'Masquerade Costumes',
            tag: 'Masquerade',
            description:
              'Costumes of the Puje and ancestral festivals.',
          },
        ],
      },
      {
        id: 'music',
        label: 'Music, Instruments & Arts',
        items: [
          {
            name: 'Aku Uka Court Orchestra',
            tag: 'Royal',
            description:
              'The drum and horn ensemble of the Wukari palace.',
          },
          {
            name: 'Talking Drums & Horns',
            tag: 'Percussion',
            description:
              'Message drums and horns of the Benue towns.',
          },
          {
            name: 'Jukun Pottery',
            tag: 'Craft',
            description:
              'The famed claywork of the Benue potters.',
          },
        ],
      },
    ],
    figures: [
      {
        name: 'Aku Uka Amadu',
        title: 'The Horseman King',
        era: 'Reigned 1927–1940',
        image:
          'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9f/Amadu_%281927-1940%29%2C_Aku_Uka_of_Wukari.jpg/960px-Amadu_%281927-1940%29%2C_Aku_Uka_of_Wukari.jpg',
        summary:
          'Aku Uka who led Wukari through the colonial transition with dignity and horsemanship.',
        significance: 'The photographed face of the old Kwararafa.',
      },
      {
        name: 'Aku Uka Shekarau Angyu Masa-Ibi',
        title: 'The Long Reign',
        era: '1937–2015',
        image:
        'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/Kuvyon_II_Shekarau_Angyu_Masa-Ibi_%281976-2021%29%2C_Aku_Uka_of_Wukari.jpg/960px-Kuvyon_II_Shekarau_Angyu_Masa-Ibi_%281976-2021%29%2C_Aku_Uka_of_Wukari.jpg',
        summary:
          'One of the longest-serving Aku Uka in history (1976–2015), presiding over decades of change.',
        significance: 'Keeper of the stool in modern times.',
      },
      {
        name: 'Theophilus Danjuma',
        title: 'General & Statesman',
        era: 'b. 1938',
        image:
          'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/Theophilus_Danjuma.png/960px-Theophilus_Danjuma.png',
        summary:
          'Army chief, minister and philanthropist from Takum whose foundation transformed rural Nigeria.',
        significance: 'Jukun pride on the national stage.',
      },
    ],
    families: [
      {
        name: 'The Aku Uka Stool',
        tagline: 'Heart of Kwararafa',
        description:
          'The sacred royal stool of Wukari, continuity of the Kwararafa confederacy.',
        image:
          'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Matakhitswen%2C_Aku_Uka_of_Wukari.jpg/960px-Matakhitswen%2C_Aku_Uka_of_Wukari.jpg',
      },
      {
        name: 'The Kwararafa Royal Houses',
        tagline: 'Princes of the Confederacy',
        description:
          'The princely lineages from which each Aku Uka is chosen.',
      },
      {
        name: 'The Danjuma Family',
        tagline: 'The General\u2019s House',
        description:
          'The family of Theophilus Danjuma, soldiers and philanthropists of Takum.',
      },
    ],
  },
  {
    id: 'itsekiri',
    name: 'Itsekiri',
    people: 'Itsekiri',
    region: 'Niger Delta (Warri)',
    states: 'Delta',
    language: 'Itsekiri',
    zone: 'Niger Delta',
    aliases: ['warri', 'iwere'],
    tagline: 'Kingdom of the Olu — a Benin-born dynasty on the Atlantic coast.',
    teaser:
      'The Itsekiri of Warri blend Edo royalty with Delta waterways; their Olu has reigned since the 15th century, when Portuguese caravels first arrived off the coast.',
    keyTradition: 'The Olu of Warri & the Etibo',
    monogram: 'ITS',
    pattern: 'pat-wave',
    palette: {
      primary: '#4c5db0',
      secondary: '#b04a22',
      pa: 'rgba(76,93,176,0.18)',
      pb: 'rgba(176,74,34,0.14)',
    },
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/54/The_Olu_of_Warri_kingdom.jpg/960px-The_Olu_of_Warri_kingdom.jpg',
    sections: [
      {
        id: 'traditions',
        label: 'Traditions & Festivals',
        items: [
          {
            name: 'The Olu\u2019s Court',
            tag: 'Royalty',
            description:
              'Coronation rites of the Ogiame and the ceremonies of the Warri palace.',
          },
          {
            name: 'Warri & the Portuguese',
            tag: 'History',
            description:
              'Five centuries of Atlantic encounter since the caravels first arrived in the 1480s.',
          },
          {
            name: 'Royal Regattas',
            tag: 'Maritime',
            description:
              'Ceremonial canoes and regattas of the Warri creeks.',
          },
          {
            name: 'Etibo Tradition',
            tag: 'Style',
            description:
              'The native shirt that became formalwear across the Delta and beyond.',
          },
        ],
      },
      {
        id: 'attire',
        label: 'Attire & Textiles',
        items: [
          {
            name: 'Coral Crowns & Beadwork',
            tag: 'Royalty',
            description:
              'The coral regalia of the Olu and his chiefs.',
          },
          {
            name: 'Velvet Wrappers & Lace',
            tag: 'Elegance',
            description:
              'Ceremonial dress of the Itsekiri woman.',
          },
          {
            name: 'Etibo Shirt',
            tag: 'Formal',
            description:
              'The embroidered native shirt worn with wrappers at court.',
          },
        ],
      },
      {
        id: 'music',
        label: 'Music, Instruments & Arts',
        items: [
          {
            name: 'Court Music of the Ogiame',
            tag: 'Royal',
            description:
              'Drums and chants of the Warri palace.',
          },
          {
            name: 'Regatta Songs',
            tag: 'Song',
            description:
              'Call-and-response songs that pace the canoes.',
          },
          {
            name: 'Canoe Carving',
            tag: 'Craft',
            description:
              'The carved ceremonial canoes of the Warri waterways.',
          },
        ],
      },
    ],
    figures: [
      {
        name: 'Ginuwa I',
        title: 'Founder of Warri',
        era: '15th Century',
        summary:
          'The Benin prince who led his followers west to found the kingdom of Iwere (Warri).',
        significance: 'First of the Olus.',
      },
      {
        name: 'Nanna Olomu',
        title: 'The Merchant Prince',
        era: '1852–1916',
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Nanna_Olomu.jpg',
        summary:
          'Governor of the Benin River whose resistance to British trade monopoly ended in exile in 1894.',
        significance: 'The Delta\u2019s great anti-colonial merchant.',
      },
      {
        name: 'Ogiame Atuwatse III',
        title: 'The 21st Olu',
        era: 'b. 1984',
        image:
          'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/His_Majesty_Ogiame_Atuwatse_III%2C_the_21st_Olu_of_Warri.jpg/960px-His_Majesty_Ogiame_Atuwatse_III%2C_the_21st_Olu_of_Warri.jpg',
        summary:
          'Young reformer Olu crowned in 2021, championing development and unity across the Delta.',
        significance: 'The new face of the ancient crown.',
      },
    ],
    families: [
      {
        name: 'The Ginuwa Dynasty',
        tagline: 'House of Iwere',
        description:
          'The royal line founded by Ginuwa I, reigning over Warri for five centuries.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Olu_of_Warri_golden_crown.jpg',
      },
      {
        name: 'The Olomu Family',
        tagline: 'Merchants of Jakpa',
        description:
          'The house of Nanna Olomu, palm-oil merchants of the Benin River.',
      },
      {
        name: 'The Ologbotsere Lineage',
        tagline: 'The Kingmaker',
        description:
          'The hereditary prime minister of the Warri kingdom, crown-bearer of the Olu.',
      },
    ],
  },
]
