import CardExperience from "@/components/CardExperience/page";
import experiences from "@/data/experience";

const Experience = () => {
  return (
    <div className=" min-h-screen">
      <h1 className="text-3xl font-bold my-2">Experience</h1>
      {experiences.map((data) => (
        <CardExperience
          key={data.title}
          image={data.image}
          title={data.title}
          subtitle={data.subtitle}
          description={data.description}
          technology={data.technology}
          list={data.list}
          details={data.details}
        />
      ))}
    </div>
  );
};

export default Experience;
