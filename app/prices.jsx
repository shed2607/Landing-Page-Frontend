import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

const Prices = () => {
  const prices = [
    {
      title: "Personal portfolio",
      price: "₦100,000",
      description: "Great for personal use to show off your resume and work",
      type: "Pay once, own it forever",
      features: [
        "Private forum access",
        "Member resources",
        "Entry to annual conference",
        "Official member t-shirt",
        "Advanced e-commerce features",
        "Custom website design",
      ],
    },
    {
      title: "Company landing page",
      price: "₦200,000",
      description: "Ideal for growing businesses trying to show what they do",
      type: "Pay once, own it forever",
      features: [
        "Custom website design",
        "Advanced e-commerce features",
        "Dedicated support team",
        "Premium website design",
        "24/7 customer support",
      ],
    },
    {
      title: "E-cormmerce website",
      price: "₦50,000",
      description: "For small-scale trying to sell their products online",
      type: "per month",
      features: [
        "Advanced e-commerce features",
        "Dedicated support team",
        "Premium website design",
        "Private forum access",
        "Official member t-shirt",
        "24/7 customer support",
      ],
    },
    {
      title: "E-cormmerce website",
      price: "₦600,000",
      description: "For small-scale trying to sell their products online",
      type: "Pay once, own it forever",
      features: [
        "Advanced e-commerce features",
        "Dedicated support team",
        "Premium website design",
        "Custom website design",
        "24/7 customer support",
        "Entry to annual conference",
      ],
    },
  ];  
  
  return (
    <main id="price">
      <section>
        <div className="mx-auto max-w-2xl sm:text-center ">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple no-tricks pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
            quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          {prices.map((item, index) => {
            return (
              <Example
                key={index}
                title={item.title}
                price={item.price}
                description={item.description}
                features={item.features}
                type={item.type}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

const includedFeatures = [
  "Private forum access",
  "Member resources",
  "Entry to annual conference",
  "Official member t-shirt",
];

const Example = (props) => {
  const feature = props.features;
  return (
    <div className="py-2 sm:py-4 w-3/4">
      <div className=" mx-auto max-w-7xl px-6 lg:px-8">
        <div className="bg-white mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              {props.title}
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              {props.description}
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {feature.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  {props.type}
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    {props.price}
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    NGN
                  </span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get qoute
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
