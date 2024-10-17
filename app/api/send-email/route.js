// pages/api/send-email.js
import  sendEmail  from "../../lib/sendEmail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req, res) {

  const { name, email, message } = await req.json();

  try {
    await sendEmail(name, email, message);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
