import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
  return (
    <MeetupDetail
    image='http://4.bp.blogspot.com/-ddzpBm2JkHM/UNfyWHnb9AI/AAAAAAAAAAw/6Qevq9VNJms/s1600/kik.jpg'
    title='Fresh Fruit'
    description='The shelves are rid of lardy, deep-pan pizzas and calorific puddings and now heaving with fresh fruit and veg and low fat this and that.
    The Sun (2015)
    They are also advised to eat fresh fruit and veg.
    The Sun (2008)
    A decade ago if you wanted to make a blueberry muffin, you would have struggled to find the fresh fruit.
    Times, Sunday Times (2009)
    Also brewers have learnt to use hops for their beauty rather than brawn and are better at locking in the hops'   
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
      {
        params: {
          meetupId: 'm3',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        id: meetupId,
        title: 'First Meetup',
        address: 'Some Street 5, Some City',
        description: 'This is a first meetup',
      },
    },
  };
}

export default MeetupDetails;
