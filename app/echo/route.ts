import { NextResponse } from "next/server";

import React from 'react'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  //const name = searchParams.get('name')
  //const age = searchParams.get('age')
  const obj  = Object.fromEntries(searchParams.entries()) // If we dont know how many params we have

  return NextResponse.json(obj)
}
