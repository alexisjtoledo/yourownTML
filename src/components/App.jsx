import React from "react";
import Dashboard from "./Dashboard";
import ShowsList from "./ShowsList";
import "../styles/globalStyles.sass";

function App() {
    return (
        <div className="App">
            <Dashboard />
            <ShowsList />
        </div>
    );
}

export default App;
