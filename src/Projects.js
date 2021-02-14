function Projects({ projectData }) {
  return (
    <section className="projects">
      <div className="container">
        {projectData.map((project) => {
          const { id, name, image, url } = project;
          return (
            <a key={id} href={url} className="link">
              <img
                src={image}
                alt={name}
                style={{ width: "100%", height: "230px" }}
              />
              <p>{name}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
