import NavBar from "@/components/Front/NavBar.jsx";
export default function Front({ children }) {
    return (
        <div>
            <NavBar />
            <main>{children}</main>
        </div>
    );
}
