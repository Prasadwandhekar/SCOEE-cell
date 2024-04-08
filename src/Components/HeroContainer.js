import HeroText from "./HeroText";


function HeroContainer() {
    return (
        <div class="relative bg-cover bg-center h-screen flex items-center justify-center overflow-hidden">

            {/* background image */}
            <img src="banner2.jpg" className="absolute inset-0 w-full h-full object-cover z-0 blur-sm backdrop-sepia" alt="Background Images"></img>

            {/* background image overlay */}
            <div class="w-[100vw] h-[100vh] absolute bg-slate-800 opacity-80 z-10"></div>
            <HeroText></HeroText>
        </div>
    )
}

export default HeroContainer;