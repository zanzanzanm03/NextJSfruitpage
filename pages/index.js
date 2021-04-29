import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'Apple',
    image:
      'https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834',
    address: '35 bath',
    description: '',
  },
  {
    id: 'm2',
    title: 'Banana',
    image:
      'https://static.libertyprim.com/files/familles/banane-large.jpg?1569271725',
    address: '25 bath',
    description: '',
  },
  {
    id: 'm3',
    title: 'Blueberry ',
    image:
      'https://5.imimg.com/data5/CR/CJ/MY-3040698/blueberry-fruit-500x500.jpg',
    address: '40 bath',
    description: '',
  },
  {
    id: 'm4',
    title: 'Coconut',
    image:
      'https://previews.123rf.com/images/boarding1now/boarding1now1607/boarding1now160700093/61738913-coconut-coconuts-fruit-sliced-half-fruits-isolated-on-a-white-background.jpg',
    address: '55 bath',
    description: '',
  },
  {
    id: 'm5',
    title: 'Grape',
    image:
      'https://f.btwcdn.com/store-34660/product/466d4abc-625b-1010-6822-58a2ec549146.jpg',
    address: '40 bath',
    description: '',
  },
  {
    id: 'm6',
    title: 'Orange',
    image:
      'https://gf.lnwfile.com/_/gf/_raw/x0/w9/n6.jpg',
    address: '25 bath',
    description: '',
  }, {
    id: 'm7',
    title: 'Lemon',
    image:
      'https://www.asianbioplex.com/wp-content/uploads/2018/11/ESN-LMN.jpg',
    address: '35 bath',
    description: '',
  },
  {
    id: 'm8',
    title: 'Cherry',
    image:
      'https://static.libertyprim.com/files/familles/cerise-large.jpg?1569271737',
    address: '55 bath',
    description: '',
  },
  {
    id: 'm9',
    title: 'Mango',
    image:
      'https://sc04.alicdn.com/kf/Udf9fc55cab0a4ae482d63e6e394c3cf4m.jpeg',
    address: '45 bath',
    description: '',
  },
  {
    id: 'm10',
    title: 'PineApple',
    image:
      'https://sc04.alicdn.com/kf/U36493bbf3e5e44eeaf73eea9fb5c64bfx.jpg',
    address: '75 bath',
    description: '',
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 1
  }; 
}

export default HomePage;
