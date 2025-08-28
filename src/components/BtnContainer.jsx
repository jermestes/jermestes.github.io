
function BtnContainer({link1, link2, linkTypes}) {
    const btnClasses = "bg-altblue hover:bg-darkblue text-white px-5 py-1.5 rounded-sm";
    return ( 
        <div className="flex gap-2">
            {link1 && <a href={link1} target="_blank" rel="noreferrer" className={btnClasses}>{linkTypes[0]}</a>}
            {link2 && <a href={link2} target="_blank" rel="noreferrer" className={btnClasses}>{linkTypes[1]}</a>}
        </div>
     );
}


export default BtnContainer;