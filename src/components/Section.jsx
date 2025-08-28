function Section({heading, body, children}) {
    const paraClasses = "text-sm m2t:text-lg t2d:text-2xl mb-2.5";
    return (
        <section className="mb-20 m2t:mb-30">
            <h2 className="font-display text-2xl m2t:text-3xl t2d:text-5xl mb-3 m2t:mb-5">{heading}</h2>
            {Array.isArray(body) ? (
                body.map((paragraph, i) => <p key={i} className={paraClasses}>{paragraph}</p>)
            ) : (
                body && <p className={paraClasses}>{body}</p>
            )}
            { children }
        </section>
    );
}

export default Section;