import Image from "next/image";
import ExampleImage from "../../public/images/example.jpeg";
const Experience = () => {
  return (
    <div className="py-20">
      <h1 className="text-3xl font-bold my-2">Experience</h1>
      <div className="hover:shadow-2xl flex gap-4 hover:py-3 my-8 hover:px-3 shadow-blue-200 rounded-xl ease-in-out transition-all duration-200 cursor-pointer">
        <div className="w-1/2">
          <Image src={ExampleImage} alt="" className="w-96 rounded-xl" />
        </div>

        <div className="w-1/2 line-clamp-6">
          <h6 className="text-lg font-semibold">
            Web Development Competition Participant Unikama Malang
          </h6>
          <p className="my-5">
            UMKM Product Landing Page Competition – 2023 I took part in a web
            development competition held by Universitas Kanjuruhan Malang
            (Unikama), where participants were challenged to build a landing
            page for a local UMKM (small business) product provided by the
            organizers. I designed and developed a responsive, user-friendly
            page using HTML, CSS, JavaScript, and Bootstrap that highlighted the
            product&#39;s features, benefits, testimonials, and included a
            simple order form. Technologies used: HTML, CSS, JavaScript
            Bootstrap Although I did not win the competition, it was a valuable
            experience that enhanced my skills in building real-world UI
            solutions for small businesses under time constraints.
          </p>
        </div>
      </div>

      <div className="hover:shadow-2xl flex gap-4 hover:py-3 mt-8 hover:px-3 shadow-blue-200 rounded-xl ease-in-out transition-all duration-200 cursor-pointer">
        <div className="w-1/2">
          <Image src={ExampleImage} alt="" className="w-96 rounded-xl" />
        </div>

        <div className="w-1/2 line-clamp-6">
          <h6 className="text-lg font-semibold">Intern Web Developer</h6>
          <p className="my-5">
            Vistech Software House – February 2023 to July 2023 During my
            6-month internship at Vistech Software House, I gained hands-on
            experience in developing modern web applications. I was introduced
            to and actively involved in building RESTful APIs, using Laravel for
            backend development and ReactJS for frontend. I also learned and
            applied Tailwind CSS to build clean, responsive UI components. Key
            responsibilities and skills learned: Built and integrated RESTful
            APIs using Laravel. Developed frontend components using ReactJS and
            Tailwind CSS. Managed relational databases using MySQL and Laravel
            Eloquent ORM. Collaborated with the team using Git for version
            control. Participated in Agile development workflow with daily
            stand-ups. Performed debugging and implemented feature improvements
            on internal projects. I contributed to internal tools such as an
            admin dashboard and an employee management system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
