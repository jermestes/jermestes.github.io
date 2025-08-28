import BtnContainer from './BtnContainer';

function Project({project}) {
    return (
        <article className="mt-2.5 m2t:mt-5 p-6">
            <h3 className="font-display text-lg m2t:text-2xl t2d:text-4xl mb-2 text-altblue">{project.name}</h3>
            <p className="mb-4 text-xs m2t:text-xl m2t:max-w-[30ch]">{project.desc}</p>
            <BtnContainer 
                link1={project.link1} 
                link2={project.link2}
                linkTypes={project.linkTypes}
            />
        </article>
    );
}

export default Project;