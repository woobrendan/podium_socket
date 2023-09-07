import { Card, CardContent } from "@mui/material";
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
                <p>Hello</p>
                {links.map((link, index) => (
                    <Card key={index} onClick={() => navigate(link.link)}>
                        <CardContent>
                            <h1>{link.display}</h1>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default HomePage;
