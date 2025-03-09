import Head from "next/head";
import MeetupDetail from "../../Components/meetups/MeetupDetail";
import { MongoClient, ObjectId ,} from "mongodb";
import { Fragment } from "react";
function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content="react meetup where you can find highly active meetups list"/>
      </Head>
      <MeetupDetail
      image={props.meetupData.image}
      id={props.meetupData.id}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    ></MeetupDetail>
    </Fragment>
    
  );
}
export async function getStaticPaths(){

  const Client=await MongoClient.connect('mongodb+srv://Amit:ccw79FeCPa4jLIHd@cluster0.rleji.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0')
  const db=Client.db()

  const meetupsCollection = db.collection("meetups");

  const meetups= await meetupsCollection.find({},{ _id : 1}).toArray();;
  Client.close();

  return{
    fallback:"blocking",
    paths:meetups.map(meetup=>({params:{meetupID:meetup._id.toString()}}))
  }
}

 export async function getStaticProps(context){
  const meetupId=context.params.meetupID;
  console.log(meetupId)
  const Client=await MongoClient.connect('mongodb+srv://Amit:ccw79FeCPa4jLIHd@cluster0.rleji.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0')
  const db=Client.db()

  const meetupsCollection = db.collection("meetups");

  const Selectedmeetup=await meetupsCollection.findOne({_id :new ObjectId(meetupId)})
  Client.close();


  return {
    props:{
      meetupData:
      {
        id: Selectedmeetup._id.toString(),
        title: Selectedmeetup.title,
        image: Selectedmeetup.image,
        address: Selectedmeetup.address,
        description: Selectedmeetup.description
      }
    }
  }
 }

export default MeetupDetails;
