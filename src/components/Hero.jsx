
function Hero() {
  return (
    <div className="grid-rows-1 grid-cols-1 w-full my-12 m2t:mb-20 t2d:mb-28">
        <div className="bg-[url(/hero-gradients.svg)] bg-[length:100%_100%] m2t:w-58/100 m-auto">
            <img src="/portfolio-hero_inverted2-transparent-subject-crop.png"
            className="w-58/100 justify-self-center"
            alt="Me seated in a computer chair, dribbling a basketball with my left hand while typing on a laptop with my right hand." />
        </div>
        
       {/*<ul className="hidden m2t:inline-block font-body font-extralight text-4xl *:text-lg *:t2d:text-4xl">
            <li className="row-1 col-3">Developer</li>
            <li className="row-1 col-2">Creator</li>
            <li className="">Designer</li>
            <li className="row-3 col-1">Artist</li>
            <li className="row-2 col-1">Athlete</li>
        </ul>*/}
    </div>
  );
}
export default Hero;