import { NextRequest, NextResponse } from "next/server"

const data = [
    {
        fullname: "Ali Jawwad default from backend",
    },
]

// method to fetch the data
export async function GET() {
    return NextResponse.json(data);
}

// method to handle the incoming req. Example user sending the data from the input field.
export async function POST(request: NextRequest){
    const body = await request.json()
    data.push(body)

    console.log("body",body);

    return NextResponse.json(body)
}