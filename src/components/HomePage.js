import { useNavigate } from "react-router";

const links = [
    { display: "Live Race", link: "/live" },
    { display: "Results", link: "/Results" },
];

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <section id="homepage">
            <div className="nav_list">
                {links.map((link, index) => (
                    <div
                        key={index}
                        onClick={() => navigate(link.link)}
                        className="nav_link"
                    >
                        {link.display}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HomePage;
