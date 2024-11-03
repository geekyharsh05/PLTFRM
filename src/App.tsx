

// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     // children: [
//     //   {
//     //     path: "/",
//     //     element: <LandingPage />,
//     //   },
//     // ],
//   },
// ]);

import AboutUs from "./components/aboutus-section"
import BrandCarousel from "./components/brand-caraousel"
import FAQSection from "./components/faq-section"
import HeroSection from "./components/hero-section"
import Navbar from "./components/navbar"
import ServicesSection from "./components/services-section"

function App() {

  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutUs />
      <BrandCarousel />
      <FAQSection />
    </div>
  )
}

export default App
