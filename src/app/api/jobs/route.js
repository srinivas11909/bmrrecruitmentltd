import Job from "@/models/Job";
import { dbConnect } from "@/utils/db";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
    await dbConnect();
    try{
        const jobs = await Job.find();
        revalidatePath("/admin/view-all-pages")
        return NextResponse.json(jobs);
    }catch(error){
        return NextResponse.json(error.message, {
            status: 400,
        });
    }
}

export async function POST(request) {
    try {
      const body = await request.json();
      const newJob = new Job(body);
      const savedJob = await newJob.save();
      revalidatePath("/admin")
      return NextResponse.json(savedJob);
    } catch (error) {
      return NextResponse.json(error.message, {
        status: 400,
      });
    }

  }
