import React from "react";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "We build custom websites that are responsive, SEO-friendly, and secure. Our team of experts will work with you to create a website that is tailored to your needs.",
    image: "/webdev.png",
    href: "#",
  },
  {
    id: 2,
    title: "Mobile Development",
    description:
      "We build custom mobile apps that are user-friendly and engaging. Our team of experts will work with you to create an app that meets your business goals.",
    image: "/appdev.png",
    href: "#",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "We create user-centered designs that are both beautiful and functional. Our team of experts will work with you to create a design that meets your users' needs.",
    image: "/uiux.png",
    href: "#",
  },
  {
    id: 4,
    title: "IT Infrastructure",
    description:
      "We design, implement, and manage IT infrastructure that is reliable and secure. Our team of experts will work with you to create an infrastructure that supports your business needs.",
    image: "/information-technology.png",
    href: "#",
  },
  {
    id: 5,
    title: "Design",
    description:
      "We offer a wide range of design services, including graphic design, web design, and UI/UX design. Our team of experts will work with you to create a design that meets your needs.",
    image: "/design.png",
    href: "#",
  },
  {
    id: 6,
    title: "IT Consulting",
    description:
      "We provide expert IT consulting services to businesses of all sizes. Our team of experts will work with you to assess your IT needs and develop a plan to improve your IT infrastructure and processes.",
    image: "/consultant.png",
    href: "#",
  },
];

const Services = () => {
  return (
    <main id="service">
      <section>
        <div className="bg-opacity-95 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 ">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                What we offer
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Learn how to grow your business with our expert advice.
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.id} className="flex flex-col">
                  <div className="flex-shrink-0">
                    <div className="flow-root">
                      <Image
                        className="-my-8 h-full object-cover rounded-lg shadow-lg bg-white p-2 bg-opacity-50"
                        src={service.image}
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="mt-6 text-lg font-medium text-gray-900">
                      <a href={service.href}>
                        <span className="absolute inset-0" />
                        {service.title}
                      </a>
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
