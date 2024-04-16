import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
import { motion } from 'framer-motion';
import { InfiniteMovingCards } from './components/ui/infinite-moving-cards';
import { CardStack } from './components/ui/card-stack';
import { BsRecordCircle } from "react-icons/bs";
import { BsFiletypeDocx } from "react-icons/bs";
import { BsFiletypeJpg } from "react-icons/bs";
import { BsFiletypePpt } from "react-icons/bs";
import { BsFiletypePdf } from "react-icons/bs";
import { QuizQuestion } from './components/quiz-question';
import screenshotImage from './resources/aaaaa.png';
const words = "Easily generate notes, quizzes, flashcards, and get homework assistance based on classes along with your fellow students."
const notes = "Record Lectures acurratelly"


const CARDS = [
  {
    id: 0,
    content: (
      <p className="text-xl">
          Force
      </p>
    ),
  },
  {
    id: 1,
    content: (
      <p className="text-xl">
Energy used to push or pull an object
      </p>
    ),
  },
  {
    id: 2,
    content: (
      <p className="text-xl">
          Weight
      </p>
    ),
  },
  {
    id: 3,

    content: (
      <p className="text-xl">
          The force of gravity on an object
      </p>
    ),
  },
  {
    id: 4,

    content: (
      <p className="text-xl">
          Mass
      </p>
    ),
  },
  {
    id: 5,
    content: (
      <p className="text-xl">
          The amount of matter in an object
      </p>
    ),
  },
];


function App() {
  return (
    <div className="App h-screen overflow-y-scroll snap-y snap-mandatory">
      <div className= "Header h-20 bg-slate-100 sticky top-0 flex items-center">
      <p className="m-10 p-2 rounded-md text-3xl font-bold hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 inline-block">
        Notello
      </p>
      </div>

      <div className = "Body h-screen bg-slate-000 flex flex-row justify-center items-center snap-start">
  <motion.div className="flex-col w-96 m-20">
          <p className="text-5xl font-bold">AI Assisted Learning</p>
          <TextGenerateEffect words={words} />

  </motion.div>
        <div className = "flex-col w-96 h-96 rounded-xl justify-center items-center hidden sm:flex">
        <img src={screenshotImage} alt="Screenshot" />
        </div>

      </div>
      <div className = "Body sm:h-screen bg-slate-100 flex flex-row justify-center items-center snap-start">
        <div className = "flex-col w-8/12 m-20 justify-center items-center text-center">
          <p className="text-5xl font-bold">Easily Upload Class Content</p>
          <div className = "flex flex-col justify-center sm:flex-row">
            <div className = "flex flex-col sm:w-96 sm:h-96 border-2 border-slate-400 rounded-lg sm:m-10 items-center mt-10 sm:mt-0">
              <p className="text-3xl font-bold">Record</p>
    <div>
      <BsRecordCircle className="text-red-500 w-36 h-36 hover:text-red-700 transition duration-300 ease-out m-10" />
    </div>
              <p className="text-xl ml-10 mr-10">Record lectures with accuracy and AI that ensures coherency</p>
            </div>
            <div className = "flex flex-col sm:w-96 sm:h-96 border-2 border-slate-400 rounded-lg sm:m-10 items-center mt-10 sm:mt-0">
              <p className="text-3xl font-bold">Upload</p>
    <div >
     <InfiniteMovingCards        direction="right"
        speed="slow"/>


    </div>
              <p className="text-xl ml-10 mr-10">Supports Images, Powerpoint Lectures, Documents, Pdfs and more!</p>
            </div>
          </div>
        </div>

      </div>
      {/* <div className = "Body h-screen bg-slate-500 flex flex-row justify-center items-center snap-start">
        <div className = "flex-col w-96 m-20">

        </div>
        <div className = "flex-col w-48">
          <p className="text-5xl font-bold">Graph Part</p>
          <TextGenerateEffect words={words} />

        </div>

      </div> */}
      <div className = "Body h-screen bg-slate-200 flex flex-row justify-center items-center snap-start">
        <div className = "flex-col w-8/12 m-20 justify-center items-center text-center">
          <p className="text-5xl font-bold">Generated Study Tools</p>
          <div className = "flex sm:flex-row justify-center flex-col">
            <div className = "flex flex-col sm:w-96  rounded-lg m-10 items-center">
    <div className="m-24">
      <CardStack items={CARDS} />
    </div>
            </div>
    <div>
            <div className = "flex flex-col sm:w-96  rounded-lg m-10 items-center">

      <QuizQuestion/>


            </div>

    </div>
          </div>
        </div>

      </div>
      <div className = "Body h-screen bg-slate-300 flex flex-row justify-center items-center snap-start">
        <div className = "flex-col w-96 m-20">
          <p className="text-5xl font-bold text-black">Coming Soon!</p>
        </div>
      </div>


    </div>
  );
}

export default App;
