import NewMeetupForm from "@/Components/meetups/NewMeetupForm";
import { useRouter } from "next/router";




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

        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    )

}

export default NewMeetUp;