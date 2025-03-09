import NewMeetupForm from "@/Components/meetups/NewMeetupForm";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";




const NewMeetUp=()=>{
const router=useRouter();
const addMeetupHandler=async(enteredmeetupdata)=>{
    const response=await fetch('/api/new-meetup',
        {
            method: "POST",
            body: JSON.stringify(enteredmeetupdata),
            headers:{
                'Content-Type' : 'application/json'
            }
        }
    )
    const data= await response.json();
    console.log(data)
    router.replace('/')
}

    return(

        <Fragment>
      <Head>
        <title>Add new meetup</title>
        <meta name="description" content="react meetup where you can find highly active meetups list"/>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </Fragment>
        
    )

}

export default NewMeetUp;