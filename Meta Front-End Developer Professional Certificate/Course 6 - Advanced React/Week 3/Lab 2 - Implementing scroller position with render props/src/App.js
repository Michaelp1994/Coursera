import "./App.css";
import { useEffect, useState } from "react";

const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      // Use e.clientX and e.clientY to access the mouse position on the screen
    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  // What should be returned here?
  return render(mousePosition);
};

// This component should not receive any props
const PanelMouseLogger = ({ mousePosition }) => {
  // The below if statement can be removed after the render props pattern is implemented
  // if (!mousePosition) {
  //   return null;
  // }
  console.log(mousePosition);
  return (
    <div className="BasicTracker">
      <p>Mouse position:</p>
      <div className="Row">
        <span>x: {mousePosition.x}</span>
        <span>y: {mousePosition.y}</span>
      </div>
    </div>
  );
};

// This component should not receive any props
const PointMouseLogger = ({ mousePosition }) => {
  // The below if statement can be removed after the render props pattern is implemented
  // if (!mousePosition) {
  //   return null;
  // }
  return (
    <p>
      ({mousePosition.x}, {mousePosition.y})
    </p>
  );
};

const PanelMouseTracker = () => {
  return (
    <MousePosition
      render={(mousePosition) => PanelMouseLogger({ mousePosition })}
    />
  );
};
const PointMouseTracker = () => {
  return (
    <MousePosition
      render={(mousePosition) => PointMouseLogger({ mousePosition })}
    />
  );
};

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍕</header>
      {/* <MousePosition
        render={(mousePosition) => {
          return (
            <>
              <PanelMouseLogger mousePosition={mousePosition} />
              <PointMouseLogger mousePosition={mousePosition} />
            </>
          );
        }}
      /> */}
      <PanelMouseTracker />
      <PointMouseTracker />
    </div>
  );
}

export default App;
