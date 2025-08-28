
function Hero() {
  return (
    <div className="grid-rows-1 grid-cols-1 w-full">
        <img src="/portfolio-hero_inverted2-transparent-subject-crop.png"
            className="w-58/100 justify-self-center"
            alt="Me seated in a computer chair, dribbling a basketball with my left hand while typing on a laptop with my right hand." />
        <div className="gradient-left"></div>
        <div className="gradient-right"></div>
        <ul className="hidden sm:inline-block font-body font-extralight text-4xl">
            <li>Developer</li>
            <li>Creator</li>
            <li>Designer</li>
            <li>Artist</li>
            <li>Athlete</li>
        </ul>
    </div>
  );
}
export default Hero;