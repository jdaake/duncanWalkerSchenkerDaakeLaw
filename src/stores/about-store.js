import { writable } from 'svelte/store';

const aboutData = writable([
  {
    name: 'Jaclyn Daake',
    nameOnModal: 'Jaclyn Daake, Partner',
    phone: '(308) 928-2165',
    email: ' jndaake@gmail.com',
    img: './images/jaclyn.jpg',
    modalName: 'jaclyn',
    linkedin: 'https://www.linkedin.com/in/jaclyncannaday/',
    bio1:
      'Jaclyn is the newest partner to the firm. She specializes in Litigation, Family Law, and Real Estate.',
    bio2:
      'Jaclyn was born and raised in Texas, graduating from Schreiner University in 2009 with a B.A. in Political Science. After a stint in the workforce as a summer camp director, Jaclyn pursued her Juris Doctorate at Washburn University School of Law in Topeka, Kansas.  There, she competed on multiple trial advocacy teams, eventually graduating with a Certificate in Advocacy with Distinction in December 2013. Since becoming an attorney, Jaclyn has served a variety of roles with the Nebraska State Bar Association and was named Nebraska’s Outstanding Young Lawyer in 2015.',
    bio3:
      'Jaclyn lives in Alma, Nebraska with her husband (also a lawyer!) and three sons. In her spare time, she enjoys camping, kayaking, playing board games, and visiting her family in the South.',
  },
  {
    name: 'Henry Schenker',
    nameOnModal: 'Henry C. Schenker, Partner',
    phone: '(308) 425-6273',
    email: 'henry.schenker@gmail.com',
    img: './images/henry.jpg',
    modalName: 'henry',
    linkedin: '',
    bio1:
      'Henry has been practicing since 2011.  He specializes in Estate Planning, Probate, and Agricultural Law. Henry is also a licensed real estate broker in the State of Nebraska and owns and operates Farm & Ranch Land Brokers, L.L.C.',
    bio2:
      'Henry is originally from Pennsylvania and grew up playing classical piano. As an active outdoorsman in the woods of the Northeast, he earned his Eagle Scout award at the age of 16. Henry went on to obtain a B.A. in Business and French from Lake Forest College in Illinois and his Juris Doctorate from the University of South Carolina.',
    bio3:
      'Henry lives in Hildreth, Nebraska with his wife and blue heeler dog.  In his spare time, he enjoys playing the piano, riding horses, and enjoying the beautiful Nebraska outdoors.',
  },
  {
    name: 'Douglas R. Walker',
    nameOnModal: 'Douglas R. Walker, Partner',
    phone: '(308) 928-2165',
    email: 'ddjwlaw@yahoo.com',
    img: './images/doug.jpg',
    modalName: 'doug',
    linkedin: '',
    bio1:
      'Doug has been practicing since 1982. He specializes in Estate Planning and Probate. Doug also serves as municipal attorney for a wide variety of local cities and villages.',
    bio2:
      'Doug has resided in Nebraska his entire life, being raised in Harlan County and receiving both his B.S. in Agriculture and his Juris Doctorate from the University of Nebraska Lincoln.',
    bio3:
      'Doug lives in Alma, Nebraska but splits his workdays between our Alma, Oxford, and Hildreth offices. In his spare time, he is an unwavering volunteer at his church and dedicated fan of all Nebraska Cornhusker sports teams.',
  },
  {
    name: 'Patrick A. Duncan',
    nameOnModal: 'Patrick A. Duncan, Of Counsel',
    phone: '',
    email: '',
    img: './images/patrick.jpg',
    modalName: 'pat',
    bio1:
      'Pat was admitted to practice law in 1974. During his time as a practitioner, he served a wide variety of clients in just as many different areas of law with honesty, integrity, and a sense of humor.',
    bio2:
      'Pat left full-time practice in June 2015, but still consults on cases, prepares tax returns, and assists the firm with research and client contact. He and his wife, Carol, now reside in Lincoln, Nebraska, and together they spend every chance they get with their nine grandchildren.',
    bio3: '',
  },
]);

export default aboutData;
