import React from 'react';
import todo_icon from '../assets/todo_icon.png';
import TaskList from './TaskList';

const ToDo = () => {
  return (
    <div className='text-stone-900 bg-white w-11/12 max-w-md min-h-[550px] rounded-xl py-5 px-10'>
        {/* title */}
        <div id="title" className='flex items-center gap-4 mt-5 mb-5'>
            <img className='w-8 h-8' src={todo_icon}/>
            <h1 className='text-3xl font-bold '>To-Do List</h1>
        </div>

        {/* input */}
        <div class="relative mt-6 cursor-pointer">
        <input
            type="email"
            placeholder="Add your task..."
            autocomplete="email"
            aria-label="Email address"
            class="block w-full rounded-full border border-neutral-500 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
        />
        <div class="absolute inset-y-1 right-1 flex justify-end">
            <button
            type="submit"
            aria-label="Submit"
            class="flex aspect-square h-full items-center justify-center rounded-full bg-orange-400 text-white transition hover:bg-neutral-800"
            >
            <svg viewBox="0 0 16 6" aria-hidden="true" class="w-4">
                <path
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16 3 10 .5v2H0v1h10v2L16 3Z"
                ></path>
            </svg>
            </button>
        </div>
        </div>

        <div id="task-list">
            <TaskList/>
        </div>

    </div>
  )
}

export default ToDo;