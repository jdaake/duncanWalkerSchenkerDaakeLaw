import { writable } from 'svelte/store';

const aboutData = writable([
  {
    name: 'Jaclyn Daake',
    phone: '123-456-7890',
    email: 'jacyln@lawyer.com',
    img: './images/jaclyn.jpg',
    modalName: 'jaclyn',
    bio:
      "She's from Texas. She married a clown who is also an attorney. She has foster kids. blah blah blah",
  },
  {
    name: 'Henry Schenker',
    phone: '123-456-7890',
    email: 'henry@lawyer.com',
    img: './images/henry.jpg',
    modalName: 'henry',
    bio: 'some random information about the lawyer',
  },
  {
    name: 'Douglas R. Walker',
    phone: '123-456-7890',
    email: 'doug@lawyer.com',
    img: './images/doug.jpg',
    modalName: 'doug',
    bio: 'some random information about the lawyer',
  },
  {
    name: 'Patrick A. Duncan',
    phone: '123-456-7890',
    email: 'pat@lawyer.com',
    img: './images/patrick.jpg',
    modalName: 'pat',
    bio: 'some random information about the lawyer',
  },
]);

export default aboutData;
