export interface Car {
  id: number;
  brand: string;
  country: string;
  logo: string;
  models: Model[];
}

export interface Model {
  id: string;
  name: string;
  year: string;
  image: string;
  description: string;
}

const cars: Car[] = [
  {
    id: 1,
    brand: 'Volks Wagen',
    country: 'Germany',
    logo: 'https://www.carlogos.org/car-logos/volkswagen-logo.png',
    models: [
      {
        id: 'A1',
        name: 'Taos',
        year: '2020',
        image: 'https://cdn.jdpower.com/JDPA_2022%20Volkswagen%20Taos%20SEL%20Cornflower%20Blue%20Front%20Quarter%20View.jpg',
        description: 'With its streamlined styling and sharp features, the Taos was made to be a joy to drive and a joy to look at. You might even brag about the photo-worthy looks that deliver an excitement that’s hard to hide everywhere you go. We designed the Taos to make your daily driving experience a joy. And with the available 4MOTION® all-wheel-drive and a turbocharged engine, it’s ready to handle the not so everyday, too.'
      },
      {
        id: 'A2',
        name: 'Jetta',
        year: '2019',
        image: 'https://media.ed.edmunds-media.com/volkswagen/jetta/2020/oem/2020_volkswagen_jetta_sedan_14t-r-line-ulev_fq_oem_1_1600.jpg',
        description: 'The Jetta brings a look that has wow written all over it. Its eye-catching lines and tech-filled, smile-inducing cabin stand out from the crowd. The Jetta doesn’t hold back in forward-thinking features, which is why the innovative tech in the Jetta is designed to help you get the most out of your daily outings.'
      },
      {
        id: 'A3',
        name: 'Atlas',
        year: '2023',
        image: 'https://media.ed.edmunds-media.com/volkswagen/atlas/2022/oem/2022_volkswagen_atlas_4dr-suv_sel-premium-r-line_fq_oem_1_1600.jpg',
        description: 'There’s comfort and more than enough room for your family, friends and furry companions to happily go along for the ride in the Atlas. Named “Best Value” SUV in Parents® 2022 Best Family Cars shopping guide, the family-built, adventurous Atlas hauls your household and its gear handsomely.'
      },
      {
        id: 'A4',
        name: 'Tiguan',
        year: '2020',
        image: 'https://media.ed.edmunds-media.com/volkswagen/tiguan/2022/oem/2022_volkswagen_tiguan_4dr-suv_sel-r-line_fq_oem_1_815.jpg',
        description: 'Designed to fit your life, the Tiguan is confidently stylish and impressively versatile. With its modern looks, solid build, and cargo capacity it\'s got a lot of good things under one roof. Turbocharged horsepower together with nimble, agile handling gives you the freedom to move about the highways and back roads with ease and control. '
      }
    ]

  },

  {
    id: 2,
    brand: 'Range Rover',
    country: 'England',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/LandRover.svg/1200px-LandRover.svg.png',
    models: [
      {
        id: 'B1',
        name: 'Range Rover Sport',
        year: '2021',
        image: 'https://media.ed.edmunds-media.com/land-rover/range-rover-sport/2023/oem/2023_land-rover_range-rover-sport_4dr-suv_p440e-autobiography_fq_oem_1_1280x855.jpg',
        description: 'From focused on-road performance and world-renowned all-terrain capability, a host of exciting and innovative technologies make Range Rover Sport the definition of sporting luxury. Watch Range Rover Sport and stunt driver Jessica Hawkins tackle Iceland\'s Kárahnjúkar Dam spillway. Together they face ice, rock, and water. Range Rover Sport does not shy away from a challenge'
      },
      {
        id: 'B2',
        name: 'Range Rover Discovery',
        year: '2019',
        image: 'https://m.atcdn.co.uk/vms/media/%7Bresize%7D/131da4f8bfd948ab80a9978000a61b96.jpg',
        description: 'If you’re planning trips with up to seven of you, whether it’s your friends or the kids, our seven seat Land Rover Discovery offers the perfect everyday solution. And with stadium seating, everyone can enjoy the view of the road ahead. Integrated with an 11,4” Touchscreen, the centre console features a deep storage compartment and improved ventilation.'
      },
      {
        id: 'B3',
        name: 'Land Rover Defender',
        year: '2023',
        image: 'https://media.ed.edmunds-media.com/land-rover/defender/2022/oem/2022_land-rover_defender_4dr-suv_110-p400-se_fq_oem_4_1280x855.jpg',
        description: 'When you choose a Land Rover Defender for your business, you will benefit from an extraordinary vehicle, total peace of mind and exemplary levels of service. Defender PHEV can help reduce your organisation’s overall impact on the environment and reflect your commitment to sustainable business.'
      },
      {
        id: 'B4',
        name: 'Land Rover Velar',
        year: '2020',
        image: 'https://media.ed.edmunds-media.com/land-rover/range-rover-velar/2023/oem/2023_land-rover_range-rover-velar_4dr-suv_p340-r-dynamic-s_f_oem_1_1280x855.jpg',
        description: 'Land Rover Range Rover Velar is a 5 seater SUV available in a price range of Rs. 89.41 Lakh*. It is available in 2 variants, 2 engine options that are BS6 compliant and a single Automatic transmission. Other key specifications of the Range Rover Velar include a kerb weight of 1875Kg and boot space of 748 Liters.'
      }
    ]

  }

];

export default cars;