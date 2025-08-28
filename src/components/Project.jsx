import BtnContainer from './BtnContainer';

function Project({project}) {
    return (
        <article className="mt-2.5 sm:mt-5">
            <h3 className="text-xl font-semibold mb-2 text-altblue">{project.name}</h3>
            <p className="mb-4">{project.desc}</p>
            <BtnContainer 
                link1={project.link1} 
                link2={project.link2}
                linkTypes={project.linkTypes}
            />
        </article>
    );
}

export default Project;