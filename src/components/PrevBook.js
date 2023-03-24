import React, {useState, useRef, useEffect} from "react";
import axios from 'axios'
import useSWR from 'swr'


const PrevBook = () => {

  const fetcher = async () => {
    const response = await fetch(`http://localhost:8000/api/booking`)
    const data = await response.json()
    return data
  }
  const options = {
    refreshInterval: 500,
  }
  const { data: preBookingData } = useSWR(
    `http://localhost:8000/api/booking`,
    fetcher,
    options
  )
  console.log("this is previous booking")
  console.log(preBookingData)

let data=[]
if(preBookingData){
  console.log(preBookingData.message)
  data=preBookingData.message
}

  return (
    <>
      <h1>Last Booking
      </h1>
      <div> {
        (data.length !== 0) ? (
          <div>
            <div>movie : {
              data[0].movie
            }</div>
            <div>slot : {
              data[0].slot
            }</div>
            <div>A1 : {data[0].seat.A1}</div>
            <div>A2 : {data[0].seat.A2}</div>
            <div>A3 : {data[0].seat.A3}</div>
            <div>A4 : {data[0].seat.A4}</div>
            <div>D1 : {data[0].seat.D1}</div>
            <div>D2 : {data[0].seat.D2}</div>
          </div>
        ) : (
          <div>NO PREVIOUS BOOKING</div>
        )
      } </div>

    </>
  )
}

export default PrevBook;
