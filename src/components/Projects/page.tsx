import CardProject from "@/components/CardProject/page";
import projects from "@/data/projects";
const Projects = () => {
  return (
    <div className=" min-h-screen">
      <h1 className="text-3xl font-bold my-2">Projects</h1>
      {projects.map((data) => (
        <CardProject
          key={data.title}
          image={data.image}
          title={data.title}
          subtitle={data.subtitle}
          description={data.description}
          technology={data.technology}
          list={data.list}
          features={data.features}
          listFeatures={data.listFeatures}
          details={data.details}
          git={data.git}
          website={data.website}
        />
      ))}
    </div>
  );
};

export default Projects;
