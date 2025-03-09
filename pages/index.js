import MeetupList from "@/Components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "a first meetup",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/515205059.jpg?k=3b29cbb7484dd64d4b968e1ca23f9e036269f2eebfa6cf4006ca7ce18c1c9f19&o=&hp=1",
    address: "some address 10, 1234 some city",
    description: "this is first meetup",
  },
  {
    id: "m2",
    title: "a second meetup",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/515205059.jpg?k=3b29cbb7484dd64d4b968e1ca23f9e036269f2eebfa6cf4006ca7ce18c1c9f19&o=&hp=1",
    address: "some address 10, 1234 some city",
    description: "this is second meetup",
  },
  {
    id: "m3",
    title: "a third meetup",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/515205059.jpg?k=3b29cbb7484dd64d4b968e1ca23f9e036269f2eebfa6cf4006ca7ce18c1c9f19&o=&hp=1",
    address: "some address 10, 1234 some city",
    description: "this is third meetup",
  },
];

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

// export async function getServerSideProps(){
//

//     return{
//         props:{
//                 meetups:meetup
//             }
//     }
// }

export async function getStaticProps() {
  const Client = await MongoClient.connect(
    "mongodb+srv://Amit:ccw79FeCPa4jLIHd@cluster0.rleji.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = Client.db();

  const meetupsCollection = db.collection("meetups");
  const meetup = await meetupsCollection.find().toArray();
  Client.close();

  return {
    props: {
      meetups: meetup.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

export default HomePage;
