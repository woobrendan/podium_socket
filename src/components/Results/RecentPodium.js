import ResultTableHeader from "./Result_Table/ResultTableHeader.js";
import { printPage } from "../../functions/helperFunc.js";
import { Button } from "@mui/material";
import "../../Styling/result.scss";
import { useSelector } from "react-redux";

const RecentPodium = () => {
    const recentResult = useSelector((state) => state.results.recentPodium);

    return (
        <div className="recent-podium-container">
            <Button
                onClick={() => printPage()}
                variant="contained"
                color="success"
            >
                Print Page
            </Button>
            <ResultTableHeader results={recentResult} />
            {/* {recentResult && <ResultTableHeader results={recentResult} />} */}
        </div>
    );
};

export default RecentPodium;
