import { writable } from 'svelte/store';

const aboutData = writable([
  {
    name: 'Jacklyn Daake',
    phone: '123-456-7890',
    email: 'jackie@lawyer.com',
    img: './images/jaclyn.jpg',
  },
  {
    name: 'Henry Schenker',
    phone: '123-456-7890',
    email: 'henry@lawyer.com',
    img: './images/henry.jpg',
  },
  {
    name: 'Douglas R. Walker',
    phone: '123-456-7890',
    email: 'doug@lawyer.com',
    img: './images/doug.jpg',
  },
  {
    name: 'Patrick A. Duncan',
    phone: '123-456-7890',
    email: 'pat@lawyer.com',
    img: './images/patrick.jpg',
  },
]);

export default aboutData;
