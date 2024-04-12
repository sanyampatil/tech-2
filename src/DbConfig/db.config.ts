import mongoose from "mongoose";
export async function connect() {

 try {

  mongoose.connect(process.env.MONGO_URI)
  const connection = mongoose.connection

  connection.on("connected", () => {
   console.log("mongoDb connect")
  })


  connection.on('error', (err) => {

   console.log("mongodb connection error ,plaese check connection", err)
   process.exit()



  })
 } catch (error: any) {


  console.log(`something went wrong `)
  console.log(error)

 }
}