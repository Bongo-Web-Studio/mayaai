import Navbar from "@/Components/Navbar";
import HeroSection from "@/Components/HeroSection";
import Marqueue from "@/Components/Marqueue";
import Explain from "@/Components/Explain";

export default function HomePage(): React.ReactElement {
  return (
    <>
      <div className="w-full overflow-hidden  bg-[#F4EEE4]">
        <Navbar />
        <HeroSection />

        <Marqueue />
        <Explain />
      </div>
    </>
  );
}
