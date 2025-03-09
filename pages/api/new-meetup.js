import { MongoClient } from "mongodb";

const Handler=async(req,res)=>{
    if(req.method === "POST"){
        const data=req.body;

        const{title,image,address,description}=data;

    const Client=await MongoClient.connect('mongodb+srv://Amit:ccw79FeCPa4jLIHd@cluster0.rleji.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0')
    const db=Client.db()

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data)
    console.log(result)
    Client.close();
    res.status(201).json({message :"meetup inserted"})

}

}

export default Handler;