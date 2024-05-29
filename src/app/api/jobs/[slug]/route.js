import Job from "@/models/Job";
import { dbConnect } from "@/utils/db";
import { NextResponse } from "next/server";
import slugify from '@/lib/slugify';
import { revalidatePath } from "next/cache";


export async function GET(req, {params}){
    dbConnect();
    try{
        const jobFound = await Job.find(params);
        if (!jobFound)
            return NextResponse.json(
              {
                message: "Job not found",
              },
              {
                status: 404,
              }
            );
      
          return NextResponse.json(jobFound);
        } catch (error) {
          return NextResponse.json(error.message, {
            status: 400,
          });
        }
}

export async function PUT(request, { params }) {
  console.log("data dd")
  console.log(params)
    const body = await request.json();
    const { title, description, location, jobType, category } = body;
    const newSlug = slugify(title);
    console.log(newSlug)
    dbConnect();
  
    try {
      const jobUpdated = await Job.findOneAndUpdate(params, { title, slug: newSlug, description, location, jobType, category}, {
        new: true,
      });
  
      if (!jobUpdated)
        return NextResponse.json(
          {
            message: "Job not found",
          },
          {
            status: 404,
          }
        );
  
      return NextResponse.json(jobUpdated);
    } catch (error) {
      return NextResponse.json(error.message, {
        status: 400,
      });
    }  
}

export async function DELETE(request, { params }) {

  console.log(params)
    dbConnect();
    try {
        const jobDeleted = await Job.deleteOne(params);
    
        if (!jobDeleted)
          return NextResponse.json(
            {
              message: "Job not found",
            },
            {
              status: 404,
            }
          );
          revalidatePath("/admin/view-all-jobs")
        return NextResponse.json(jobDeleted);
      } catch (error) {
        return NextResponse.json(error.message, {
          status: 400,
        });
      }
}