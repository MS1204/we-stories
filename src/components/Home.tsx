// import Header from "./Header";
// import Sidebar from "./Sidebar";
// import Footer from "./Footer";
import ImageShowcase from "./ImageShowcase";

const slides = [
  {
    image: "https://source.unsplash.com/random/800x600?fashion",
    label: "Personal Shopping Assistance",
  },
  {
    image: "https://source.unsplash.com/random/800x600?bridal",
    label: "Bridal",
  },
  {
    image: "https://source.unsplash.com/random/800x600?guest",
    label: "Guest",
  },
  {
    image: "https://source.unsplash.com/random/800x600?ritual",
    label: "Ritual",
  },
];

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen whole-bg">
            <div className="flex flex-1">
                <main className="flex-1 p-6 md:ml-0 md:pl-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center">
                            <h5 className="pt-31 font-cinzel font-bold text-balance text-amber-950 text-4xl justify-between"> WHERE YOUR WEDDING LOVE STORY BECOMES A CELEBRATION TO REMEBER </h5>
                            <p className="pt-8 text-[rgb(186,172,172)] text-1xl justify-between">Hyderabad’s own full-stack destination wedding company brought to you by the pioneers behind the city’s biggest live experiences</p>
                            <div className="pt-6">
                                <button className="px-4 mb-4 mt-3 py-1 rounded-full border bg-amber-950 border-amber-950 text-[rgba(158,154,47,0.66)]">Plan Your Dream Wedding <span className="ml-2 text-lg"> ›</span></button>
                            </div>
                            <div className="pt-26">
                                <img src="public/images/wp2599322.png" alt="no image found" className="w-full h-auto object-cover"/>
                            </div>

                            <div className="pt-35">
                                <div className="col-span-12">
                                    <div className="flex">
                                        {/* Left image */}
                                        <div className="">
                                        <img
                                            src="public/images/wedding-image.jpg"
                                            alt="Event Scene"
                                            className="w-180 h-60 rounded-s-4xl"
                                        />
                                        <h5 className="pt-8 font-cinzel font-bold text-left text-amber-950 text-4xl pb-2"> About us </h5>
                                        <p className="font-semibold text-amber-950 text-left">A Legacy of Spectacle. A Promise of Intimacy. </p>
                                        <p className="pt-4 text-left text-[rgba(158,92,26,0.63)] text-1xl justify-between">We are Hyderabad’s very own full-stack destination wedding company an initiative by Hyderabad Talkies, the creative force behind 10+ iconic large-scale concerts featuring Ilaiyaraaja, M.M. Keeravaani, Ar rahman, Arijith singh, Shreya Ghoshal, Sid Sriram, and Dj Snake.</p>
                                        <p className="pt-4 text-left text-[rgb(186,172,172)] text-1xl justify-between">From curating unforgettable concerts to executing events for over 30,000+ people, we know how to bring magic to every moment. And now, we channel that same passion, precision, and creativity into celebrating the most meaningful day of your life.</p>
                                        <button className="px-10 mb-4 mt-6 py-1 justify-start flex rounded-full border bg-amber-950 border-amber-950 text-[rgba(158,154,47,0.66)]">Know More About Us </button>
                                        </div>

                                        {/* Right image */}
                                        <div className="">
                                        <img
                                            src="public/images/AS.jpeg"
                                            alt="Flower Wall"
                                            className="w-220 h-120 rounded-e-4xl rounded-bl-4xl object-cover"
                                        />
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-13">
                                <h5 className="pt-8 font-cinzel font-bold text-center text-amber-950 text-4xl pb-2"> Our Services </h5>
                                <div className="flex">
                                    <ImageShowcase slides={slides} />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
export default Home;
