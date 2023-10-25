import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

//GET

export async function GET(req, res) {
  return NextResponse.json({ msg: "Uttara" });
}
