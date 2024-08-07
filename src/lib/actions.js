"use server"

import { dbConnect } from "@/utils/db";
import { NextResponse } from "next/server";
import Job from "@/models/Job";
import { signIn, signOut } from "@/auth";
import { revalidatePath } from "next/cache";



 export const addJob = async (formData) => {
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
  try {
    const response = await signIn("credentials", {
      username: formData.get("username"),
      password: formData.get("password"),
      redirect: false,
    });
    if (response.ok) {
      // Redirect to the admin page upon successful login
      revalidatePath("/admin");
    } else {
      console.error(response.error);
    }
    return response;
  } catch (err) {
    throw err;
  }

}

