import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import ResultTableHeader from "./Result_Table/ResultTableHeader.js";
import SearchAllResults from "./SearchAllResults.js";
import { useSelector } from "react-redux";

const ResultsHistory = () => {
    const [searchValue, setSearchValue] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);

    const results = useSelector((state) => state.results.resultsArray);

    useEffect(() => {
        setFilteredResults(results);
    }, [results]);

    return (
        <section className="result-container">
            <h1>Result History</h1>
            <div className="filter-details">
                <TextField
                    className="result_search"
                    label="Search"
                    variant="outlined"
                    color="error"
                    value={searchValue}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}
                />
            </div>
            <div className="result-history-list">
                {SearchAllResults(filteredResults, searchValue).map(
                    (result, index) => (
                        <ResultTableHeader results={result} key={index} />
                    ),
                )}
            </div>
        </section>
    );
};

export default ResultsHistory;
