'use client'
import React from "react";
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'


const Testimonials = () => {
  const people = [
    {
      name: 'Judith Black',
      position: 'CEO at transistor',
      logo: 'https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg'
    },
    {
      name: 'Joseph Rodriguez',
      position: 'CEO of Workcation',
      logo: 'https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg'
    },
    {
      name: 'John Smith',
      position: 'CEO of tuple',
      logo: 'https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg'
    }
  ]
  return (
    <main id="testimonial">
      <section>
        <div className=" flex justify-center w-full mb-10">
          <h1 className="text-5xl">Testimonial</h1>
        </div>
            <div className="flex-1 justify-between">
              {people.map((item, index) => {
                return <Example key={index} name={item.name} position={item.position} logo={item.logo}/>;
              })}
            </div>

      </section>
    </main>
  );
};

const Example = (props) => {
  return (
    <section className=" px-6 py-2 sm:py-4 lg:px-8 rounded-xl mb-10">
      <div className="mx-auto max-w-2xl lg:max-w-4xl  ">
        <img
          className="mx-auto h-12"
          src={props.logo}
          alt=""
        />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
              in laborum sed rerum et corporis.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <div className="w-full flex justify-center">

          <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
            </div>
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">{props.name}</div>
              <svg
                viewBox="0 0 2 2"
                width={3}
                height={3}
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">{props.position}</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Testimonials;
