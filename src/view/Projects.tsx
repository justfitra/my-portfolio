import Image from "next/image";
import example from "../../public/images/example.jpeg";

const Projects = () => {
  return (
    <div className="py-20">
      <h1 className="text-3xl font-bold my-2">Projects</h1>

      <div className="hover:shadow-2xl flex gap-4 hover:py-3 my-8 hover:px-3 shadow-blue-200 rounded-xl ease-in-out transition-all duration-200 cursor-pointer">
        <div className="flex ">
          <div className="w-1/2 mr-2">
            <Image
              src={example}
              alt="example.jpg"
              className="w-96 rounded-xl"
            />
          </div>
          <div className="ml-2 w-1/2">
            <h4 className="font-semibold text-2xl">Wedding Website Project</h4>
            <p>Personal Project 2025</p>
            <div className="line-clamp-3">
              <p>
                A fully responsive wedding website built to showcase wedding
                details, event timelines, RSVP forms, and photo galleries. The
                goal was to create a clean, elegant design with a smooth user
                experience for wedding guests.
              </p>
              <h6>Teach Stack : </h6>
              <ul>
                <li>Html</li>
                <li>TailwindCss</li>
                <li>JavaScript</li>
              </ul>
              <h6>Key Features : </h6>
              <ul>
                <li>Bride & Groom introduction section</li>
                <li>Countdown to the wedding day</li>
                <li>Event location with Google Maps integration</li>
                <li>Online RSVP form</li>
                <li>Photo gallery and wishes section</li>
              </ul>
              <p>
                I built this project to learn how to design elegant, real-world
                user interfaces and handle form submission on the web.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hover:shadow-2xl flex gap-4 hover:py-3 my-8 hover:px-3 shadow-blue-200 rounded-xl ease-in-out transition-all duration-200 cursor-pointer">
        <div className="flex ">
          <div className="w-1/2 mr-2">
            <Image
              src={example}
              alt="example.jpg"
              className="w-96 rounded-xl"
            />
          </div>
          <div className="ml-2 w-1/2">
            <h4 className="font-semibold text-2xl">Digital Product Shop</h4>
            <p>Personal Project 2025</p>
            <div className="line-clamp-3">
              <p>
                An online store for digital products such as design templates,
                icons, and e-books. Users can browse, search, and purchase
                downloadable items.
              </p>
              <h6>Teach Stack : </h6>
              <ul>
                <li>Next.js</li>
                <li>TailwindCss</li>
              </ul>
              <h6>Key Features : </h6>
              <ul>
                <li>Product listing and filtering</li>
                <li>Responsive design for all devices</li>
                <li>Product detail page</li>
                <li>Cart simulation and checkout UI</li>
              </ul>
              <p>
                This project helped me understand the basics of e-commerce
                workflows, user navigation, and product management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
