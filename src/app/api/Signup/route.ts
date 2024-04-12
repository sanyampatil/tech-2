import { connect } from '@/DbConfig/db.config'
import User from '@/models/userModel'

import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'

connect()

export async function POST(request: NextRequest) {
 try {

  const reqbody = await request.json()

  const { username, email, password } = reqbody

  console.log(reqbody)
  const user = await User.find({ email })


  if (user) {
   return NextResponse.json({ error: "user already exist" }, { status: 400 })

  }

  const salt = await bcryptjs.genSalt(10)
  const hashpassword = await becrypt.hash

 } catch (error: any) {

  return NextResponse.json({ error: error.message },
   { status: 500 }
  )

 }
}