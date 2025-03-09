import MeetupList from "@/Components/meetups/MeetupList";


const DUMMY_MEETUPS=[
    {id: 'm1', 
        title: 'a first meetup',
         image: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/515205059.jpg?k=3b29cbb7484dd64d4b968e1ca23f9e036269f2eebfa6cf4006ca7ce18c1c9f19&o=&hp=1',
        address : 'some address 10, 1234 some city',
        description: 'this is first meetup'
        },
    {id: 'm2', 
        title: 'a second meetup',
         image: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/515205059.jpg?k=3b29cbb7484dd64d4b968e1ca23f9e036269f2eebfa6cf4006ca7ce18c1c9f19&o=&hp=1',
        address : 'some address 10, 1234 some city',
        description: 'this is second meetup'
        },
    {id: 'm3', 
        title: 'a third meetup',
         image: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/515205059.jpg?k=3b29cbb7484dd64d4b968e1ca23f9e036269f2eebfa6cf4006ca7ce18c1c9f19&o=&hp=1',
        address : 'some address 10, 1234 some city',
        description: 'this is third meetup'
        }
        ]

function HomePage(props) {


return (
    
    <MeetupList  meetups={props.meetups}/>
    
    
  )
}

export async function getServerSideProps(){


    return{
        props:{
                meetups:DUMMY_MEETUPS
            }
    }
}

// export async function getStaticProps() {

//     return{
//         props:{
//             meetups:DUMMY_MEETUPS
//         },
//         revalidate: 10
//     }
    
// }

export default HomePage;
