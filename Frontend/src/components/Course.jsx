import React from "react";
import { Link } from "react-router-dom";
import list from "../../public/list.json";
import Cards from "./Cards";
function Course() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
            <h1 className="text-2xl md:text-4xl">We're delighted to have you <span className="text-pink-500">Here! :)</span></h1>
            <p className="mt-12">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt rerum ad voluptatibus, nulla autem harum quas, odit voluptatem facere enim, hic architecto provident cumque beatae? Doloribus perferendis rerum ratione voluptates impedit, et inventore in facilis eos excepturi, quam deleniti qui corrupti numquam odit illo neque quibusdam facere.
            </p>
            <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-700 hover:text-black duration-300 ">Back</button>
            </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {
               list.map((item)=>(
                <Cards key={item.id} item={item}/>
               ))
            }
        </div>
    </div>
    </>
  )
}

export default Course