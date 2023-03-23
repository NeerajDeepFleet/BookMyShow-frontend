import React, {useState, useRef} from "react";
import '../styles/App.css';
import '../styles/bootstrap.min.css'
import {movies, slots, seats} from './data'
import {useForm} from "react-hook-form";

const App = () => {


  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: {
      errors
    }
  } = useForm();
  const onSubmit = (data) => {
    console.log("data");
    console.log(data);
    reset()

  };
  console.log("errors");
  console.log(errors);


  return (
    <>

      <form onSubmit={
        handleSubmit(onSubmit)
      }>
        <h1>Book That Show</h1>
        <h1>Select Movie</h1>
        {
        movies.map((i) => {
          return (
            <label>
              <input {...register("movie", {
                                          required: "Movie is required."
                                        })} type="radio"
                value={i}/> {i} </label>
          )
        })
      }


        <h1>Select Slot</h1>
        {
        slots.map((i) => {
          return (
            <label>
              <input {...register("slot", {
                                          required: "Time slot is required."
                                        })} type="radio"
                value={i}/> {i} </label>
          )
        })
      }


        <div>
          <label>A1</label>
          <input type="number" name="A1" {...register("A1",{
                   pattern: /^(0|[1-9][0-9]?|100)$/,
                   message: "Seat No is not valid."
                  })}/>
        </div>
        <div>
          <label>A2</label>
          <input type="number" name="A2" {...register("A2",{
                   pattern: /^(0|[1-9][0-9]?|100)$/,
                   message: "Seat No is not valid."
                  })}/>
        </div>
        <div>
          <label>A3</label>
          <input type="number" name="A3" {...register("A3",{
                   pattern: /^(0|[1-9][0-9]?|100)$/,
                   message: "Seat No is not valid."
                  })}/>
        </div>
        <div>
          <label>A4</label>
          <input type="number" name="A4" {...register("A4",{
                   pattern: /^(0|[1-9][0-9]?|100)$/,
                   message: "Seat No is not valid."
                  })}/>
        </div>
        <div>
          <label>D1</label>
          <input type="number" name="D1" {...register("D1",{
                   pattern: /^(0|[1-9][0-9]?|100)$/,
                   message: "Seat No is not valid."
                  })}/>
        </div>
        <div>
          <label>D2</label>
          <input type="number" name="D2" {...register("D2",{
                   pattern: /^(0|[1-9][0-9]?|100)$/,
                   message: "Seat No is not valid."
                  })}/>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>

      </form>
    </>
  );
}


export default App;


// https://www.freecodecamp.org/news/how-to-create-forms-in-react-using-react-hook-form/
