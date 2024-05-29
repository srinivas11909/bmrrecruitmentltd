"use server"

import { dbConnect } from "@/utils/db";
import { NextResponse } from "next/server";
import Job from "@/models/Job";
import { signIn, signOut } from "@/auth";


 export const addJob = async (formData) => {

   console.log("2")
   console.log(formData)
   try {
    dbConnect()
    const newJob = new Job(formData);
    const savedJob = await newJob.save();
    return savedJob// NextResponse.json(savedJob);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function doLogout() {
  await signOut({ redirectTo: "/" });
}

export async function dbConnectForLogin(formData) {
  console.log("formData", formData);

  try {
    const response = await signIn("credentials", {
      username: formData.get("username"),
      password: formData.get("password"),
      redirect: false,
    });
    return response;
  } catch (err) {
    throw err;
  }

}

