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
      name: 'El Gordo',
      day: 27,
      month: 3,
      img: ''
    },
    {
      name: 'Laucha',
      day: 13,
      month: 5,
      img: '/images/back-desktop.jpg'
    },
    {
      name: 'Paparella',
      day: 1,
      month: 7,
      img: '/images/paparella.jpg'
    },
    {
      name: 'Yoru Alfieri',
      day: 19,
      month: 7,
      img: '/images/yoru.png'
    },
    {
      name: 'Maru',
      day: 24,
      month: 7,
      img: ''
    },
    {
      name: 'Lucas',
      day: 19,
      month: 8,
      img: ''
    },
    {
      name: 'Veke',
      day: 7,
      month: 9,
      img: '/images/veke.jpg'
    },
    {
      name: 'Luli',
      day: 17,
      month: 9,
      img: ''
    },
    {
      name: 'Axel',
      day: 20,
      month: 9,
      img: ''
    },
    {
      name: 'Leslie',
      day: 17,
      month: 11,
      img: ''
    },
    {
      name: 'Miki',
      day: 24,
      month: 12,
      img: ''
    }
  ]
};
