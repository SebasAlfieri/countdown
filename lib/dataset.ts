interface DataSet {
  people: People[];
}

interface People {
  name: string;
  day: number;
  month: number;
  img?: string;
}

export const dataset: DataSet = {
  people: [
    {
      name: 'AÑO NOVO',
      day: 1,
      month: 1,
      img: '/images/anonovo.jpg'
    },
    {
      name: 'El Gordo',
      day: 27,
      month: 3,
      img: '/images/gordo-new.jpg'
    },
    {
      name: 'Laucha',
      day: 13,
      month: 5,
      img: '/images/laucha.jpg'
    },
    {
      name: 'Paparella',
      day: 1,
      month: 7,
      img: '/images/paparella.jpg'
    },
    {
      name: 'Yo XD',
      day: 19,
      month: 7,
      img: '/images/yo.jpg'
    },
    {
      name: 'Maru',
      day: 24,
      month: 7,
      img: '/images/maru.jpg'
    },
    {
      name: 'Lucas',
      day: 19,
      month: 8,
      img: '/images/lucas.jpg'
    },
    {
      name: 'Veke',
      day: 7,
      month: 9,
      img: '/images/veke-new.jpg'
    },
    {
      name: 'Luli',
      day: 17,
      month: 9,
      img: '/images/luli.jpg'
    },
    {
      name: 'Axel',
      day: 20,
      month: 9,
      img: '/images/axel.jpg'
    },
    {
      name: 'Leslie',
      day: 17,
      month: 11,
      img: '/images/leslie.jpg'
    },
    {
      name: 'Miki',
      day: 24,
      month: 12,
      img: '/images/miki.jpg'
    }
  ]
};
