import { api } from "@/APIs/config/axiosInterceptor";
import { b_token, baseURL } from "@/APIs/config/baseURL";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function POST(request) {
  // console.log('request',request);
  const data=await request.json();
  const token= await getToken({req: request});
  console.log({data, token});

  const response = await fetch(`${baseURL}/api/Customer/Get`, {
    method: 'GET',
    params: {data},
    headers: {
      'Content-Type': 'application/json',
      // 'authorization': `Bearer ${b_token}`
      'authorization': `Bearer ${token?.value}` 

    }
  })

  const user= await response.json();
  
  // const user= await api.get('/Customer/Get')
 return NextResponse.json(user);
}