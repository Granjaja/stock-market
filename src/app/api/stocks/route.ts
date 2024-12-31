import axios from 'axios'
import { NextResponse } from 'next/server';


export async function GET() {

var d = new Date()
d.setDate(d.getDate()-1)
const date = d.toISOString().split("T")[0]  

const isWeekday = d.getDay() > 0 && d.getDay() < 6

console.log(date)

if (!isWeekday) {
  return NextResponse.json({
    message:"No data available on weekends",
  })
}

const API_URL = `https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/${date}`;
const POLYGON_API_KEY = process.env.API_KEY;

  try {
    const response = await axios.get(API_URL, {
    params: {
      adjusted: true,
      apiKey: POLYGON_API_KEY
    }
  });
  console.log('API Response:', response)
  return NextResponse.json(response.data.results)
  } catch (error:any) {
    
    return NextResponse.json({
      message:"Error fetching data",
      error:error.message
    })
  }
}