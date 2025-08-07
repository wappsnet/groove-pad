import { LanguagesEnum } from 'store/slices/configs/types';

export default {
  language: LanguagesEnum.En,
  contacts: {
    address: 'Yerevan, Saryan st., apt. 12',
    phone: '+374 55 555 555',
    email: 'info@boon.am'
  },
  tips: [
    {
      uri: 'https://media.slidesgo.com/storage/84205/upload.jpeg',
      id: '1'
    },
    {
      uri: 'https://pptmon.com/wp-content/uploads/2022/02/Music-Therapy-Free-Google-Slides-Theme-and-PowerPoint-Template.png',
      id: '2'
    },
    {
      uri: 'https://myfreeslides.com/wp-content/uploads/2020/04/Free-Rock-Concert-Powerpoint-Template-and-Google-Slides-Themes.jpg',
      id: '3'
    }
  ]
};
