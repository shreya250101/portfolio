{/*
  
import {RESEARCH_PROJECTS} from '../constants';
const ResearchProjects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">Research Projects</h2>
      <div>
      {RESEARCH_PROJECTS.map((project, index) => (
  <a
    key={index}
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="block mb-8 flex flex-wrap lg:flex-nowrap items-start transition-transform transform hover:scale-105"
  >
    <div className="w-full lg:w-1/4 flex-shrink-0">
      <img
        src={project.image}
        className="mb-6 rounded"
        width={150}
        height={150}
        alt={project.title}
      />
    </div>
    <div className="w-full lg:w-3/4 p-4">
      <h6 className="mb-2 font-semibold">{project.title}</h6>
      <p className="text-neutral-400">{project.description}</p>
      <div className="mt-2 flex flex-wrap">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </a>
))}

      </div>
    </div>
  )
}

export default ResearchProjects*/}

import { RESEARCH_PROJECTS } from '../constants';

const ResearchProjects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Research Projects</h2>
      <div>
        {RESEARCH_PROJECTS.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-8 lg:flex items-center transition-transform transform hover:scale-105"
          >
            <div className="w-full lg:w-1/4 flex-shrink-0 lg:mr-6">
              <img
                src={project.image}
                className="mb-6 rounded"
                width={150}
                height={150}
                alt={project.title}
              />
            </div>
            <div className="w-full lg:w-3/4 p-4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="text-neutral-400">{project.description}</p>
              <div className="mt-2 flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ResearchProjects;
