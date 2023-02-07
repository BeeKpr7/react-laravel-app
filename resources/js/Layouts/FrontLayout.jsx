import NavBar from "@/components/Front/NavBar.jsx";
import Footer from "@/components/Front/Footer.jsx";
export default function Front({ children }) {
    return (
        <div>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
