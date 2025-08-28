import { Children } from "react";

function Section({heading, body, children}) {
    const paraClasses = "text-sm sm:text-2xl";
    return (
        <section className="mb-20 sm:mb-30">
            <h2 className="font-display text-2xl sm:text-5xl mb-1.5 sm:mb-5">{heading}</h2>
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