import { FC } from "react";
import {
  ShoppingBag,
  Megaphone,
  PenTool,
  Globe,
  FileText,
  Video,
} from "lucide-react";
import globe from "../assets/globe.png";
import QuoteButton from "./quote-button";

const FloatingIcon: FC<{
  Icon: typeof ShoppingBag;
  color: "blue" | "red";
  position: string;
  delay?: string;
}> = ({ Icon, color, position, delay = "0s" }) => (
  <div
    className={`absolute ${position} transform hover:scale-110 transition-all duration-300`}
    style={{
      animation: `float 6s ease-in-out infinite ${delay}`,
    }}
  >
    <div
      className={`${
        color === "blue" ? "bg-blue-600" : "bg-red-500"
      } text-white p-2 md:p-4 rounded-full shadow-lg`}
    >
      <Icon className="w-4 h-4 md:w-6 md:h-6" />
    </div>
  </div>
);

const HeroSection: FC = () => {
  return (
    <main className="relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,minmax(40px,1fr))] grid-rows-[repeat(auto-fill,minmax(40px,1fr))]">
        {Array.from({ length: 1000 }).map((_, i) => (
          <div key={i} className="border-[0.5px] border-gray-100" />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-1 relative">
        <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
          <h1 className="text-4xl md:text-7xl leading-tight md:leading-normal font-extrabold text-[#2B42F3] relative z-10">
            Watch The Future
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 font-medium px-4 relative z-10">
            We craft digital solutions that drive growth, boost visibility, and
            engage audiences.
          </p>
          <QuoteButton />
        </div>

        {/* Crystal Ball Image */}
        <div className="mt-20 flex justify-center">
          <div className="relative w-[150px] md:w-[290px]">
            <img
              src={globe}
              alt="Crystal ball illustration"
              width={400}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Floating Icons */}
        <FloatingIcon
          Icon={ShoppingBag}
          color="blue"
          position="top-48 left-4 md:top-1/4 md:left-16 lg:left-12"
          delay="0s"
        />
        <FloatingIcon
          Icon={Megaphone}
          color="blue"
          position="top-48 right-4 md:top-1/4 md:right-16 lg:right-12"
          delay="0s"
        />
        <FloatingIcon
          Icon={PenTool}
          color="red"
          position="top-72 left-8 md:top-1/2 md:left-1/4 md:mt-16"
          delay="0.5s"
        />
        <FloatingIcon
          Icon={Globe}
          color="blue"
          position="bottom-20 right-6 md:bottom-1/3 md:bottom-16 md:right-32"
          delay="1.5s"
        />
        <FloatingIcon
          Icon={FileText}
          color="red"
          position="top-72 right-8 md:top-1/2 md:right-1/4 md:mt-16"
          delay="0.5s"
        />
        <FloatingIcon
          Icon={Video}
          color="red"
          position="bottom-20 left-6 md:bottom-1/3 md:bottom-16 md:left-32"
          delay="1.2s"
        />
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </main>
  );
};

export default HeroSection;