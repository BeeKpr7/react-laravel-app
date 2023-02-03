import FrontLayout from "@/Layouts/FrontLayout.jsx";
import HeroSection from "@/components/Front/HeroSection.jsx";
import FeaturesSection from "@/components/Front/FeaturesSection.jsx";
export default function Home(props) {
    return (
        <FrontLayout>
            <HeroSection />
            <FeaturesSection />
        </FrontLayout>
    );
}
