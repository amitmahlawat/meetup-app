import NewMeetupForm from "@/Components/meetups/NewMeetupForm";




const NewMeetUp=()=>{

const addMeetupHandler=(enteredmeetupdata)=>{
    console.log(enteredmeetupdata)
}

    return(

        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    )

}

export default NewMeetUp;