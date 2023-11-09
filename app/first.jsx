import React from "react";
import Image from "next/image";
import Link from "next/link";
import Bg from "./components/bg";

const First = () => {
  return (
    <main id="first">
      <section>
        <div className=" px-6 pt-14 mt-20 lg:px-8 bg-white bg-opacity-70 rounded-2xl">
          <div className="mx-auto  py-16 sm:py-32 lg:py-48 flex items-center ">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Are you ready to add IT to your daily business?
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div>
              <Image src="/b.svg" alt="" width={800} height={500} />
            </div>
          </div>
        </div>
        <Example />
      </section>
    </main>
  );
};

const stats = [
  { name: "Websites created", value: "1000+" },
  { name: "Happy clients", value: "95%" },
  { name: "Average project duration", value: "2 months" },
  { name: "Dedicated support", value: "24/7" },
];

const Example = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Work with us
          </h2>
          <div className="flex justify-evenly">
            <p className="mt-6 text-lg leading-8 text-gray-800">
              At XYZ Software Solutions, we are committed to empowering
              businesses with cutting-edge software solutions tailored to meet
              their unique needs and challenges. With a passion for innovation
              and a track record of excellence, our dedicated team of experts is
              on a mission to transform the way companies operate in today's
              dynamic digital landscape.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At XYZ Software Solutions, we are committed to empowering
              businesses with cutting-edge software solutions tailored to meet
              their unique needs and challenges. With a passion for innovation
              and a track record of excellence, our dedicated team of experts is
              on a mission to transform the way companies operate in today's
              dynamic digital landscape.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-500">
                  {stat.name}
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-500">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default First;
