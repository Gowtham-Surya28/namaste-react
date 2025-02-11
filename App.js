import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <h1 className="head" tabIndex="3">
        Maximus 8th King of Rome
        Commander of the Phoeinx Legion
    </h1>
);

// Component Composition
const HeadingComponent = () => (
    <div id="container">
        <Title />
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);