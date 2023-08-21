import ResultTableHeader from "./ResultTableHeader";
import { useEffect } from "react";
import { printPage } from "../../functions/helperFunc";
import { Button } from "@mui/material";
import "../../Styling/result.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../store/resultsActions";

const RecentPodium = () => {
  const dispatch = useDispatch();
  const recentResult = useSelector((state) => state.results.recentPodium);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="recent-podium-container">
      <Button onClick={() => printPage()} variant="contained" color="success">
        Print Page
      </Button>
      {recentResult && <ResultTableHeader results={recentResult} />}
    </div>
  );
};

export default RecentPodium;
