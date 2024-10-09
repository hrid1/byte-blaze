import Hero from "../components/Hero";
import wave from "../assets/wave.svg";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-116px)]">
      <Hero></Hero>

      <img className=" absolute bottom-0 mb-12 w-full " src={wave} alt="" />
    </div>
  );
};

export default Home;
