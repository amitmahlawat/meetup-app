import MeetupDetail from "@/Components/meetups/meetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image={
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/515205059.jpg?k=3b29cbb7484dd64d4b968e1ca23f9e036269f2eebfa6cf4006ca7ce18c1c9f19&o=&hp=1"
      }
      id={"Amit"}
      title={"this is first meetup"}
      address={"some address , some city 5"}
      description={" this is first meetup"}
    ></MeetupDetail>
  );
}
export function getStaticPaths(){
  return{
    fallback:false,
    paths:[
      {
        params:{
          meetupID:"m1"
        }
      },
      {
        params:{
          meetupID:"m2"
        }
      },
      {
        params:{
          meetupID:"m3"
        }
      }
    ]
  }
}

 export async function getStaticProps(context){
  const meetupId=context.params.meetupID;
  console.log(meetupId)

  return {
    props:{
      meetupData:{
        image:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/515205059.jpg?k=3b29cbb7484dd64d4b968e1ca23f9e036269f2eebfa6cf4006ca7ce18c1c9f19&o=&hp=1",
        id:meetupId,
        address:"some address , some city 5",
        description:" this is first meetup"
      }
    }
  }
 }

export default MeetupDetails;
