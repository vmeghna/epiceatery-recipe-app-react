import { useEffect, useState } from "react";
import "./settings.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Settings = () => {
  const colors = [
    "rgb(255, 0, 86)",
    "rgb(33, 150, 243)",
    "rgb(255, 193, 7)",
    "rgb(0, 200, 83)",
    "rgb(156, 39, 176)",
  ];

  const themes = [
    {
      "--text-color": "#0A0A0A",
      "--text-light": "#575757",
      "--shadow-color": "rgba(0,0,0,0.2)",
      "--background-color": "#fff",
      "--background-light": "#fff",
    },
    {
      "--text-color": "#fff",
      "--text-light": "#eceaea",
      "--shadow-color": "rgba(0,0,0,0.2)",
      "--background-color": "rgb(29,29,29)",
      "--background-light": "rgb(77,77,77)",
    },
  ];
  const [settings, setSettings] = useState({
    "--primary-color": "rgb(255,0,86)",
    "--text-color": "#0A0A0A",
    "--text-light": "#575757",
    "--shadow-color": "rgba(0,0,0,0.2)",
    "--background-color": "#fff",
    "--background-light": "#fff",
  });
  const [theme, setTheme] = useState("light");
  const [scolor, setsColor] = useState(0);
  useEffect(() => {
    const root = document.documentElement;
    for (let key in settings) {
      root.style.setProperty(key, settings[key]);
    }
  }, [settings]);

  //Change Theme
  const themeHandler = (e) => {
    const _theme = { ...themes[e] };
    setTheme(e === 0 ? "light" : "dark");
    let _settings = { ...settings };
    for (let key in _theme) {
      _settings[key] = _theme[key];
    }
    setSettings(_settings);
  };
  //Handling primary color
  const colorHandler = (index) => {
    const _colors = colors[index];
    let _settings = { ...settings };
    _settings["--primary-color"] = _colors;
    setsColor(index);
    setSettings(_settings);
  };
  return (
    <>
      <div className="section d-block">
        <h2>Preferred Theme</h2>
        <div className="options-container">
          <div className="option light" onClick={() => themeHandler(0)}>
            {theme === "light" && (
              <div className="check-box">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
          <div className="option dark" onClick={() => themeHandler(1)}>
            {theme === "dark" && (
              <div className="check-box">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="section d-block">
        <h2>Primary Color</h2>
        <div className="options-container">
          {colors.map((color, index) => (
            <div
              className="option light"
              style={{ backgroundColor: color }}
              onClick={() => colorHandler(index)}
            >
              {scolor === index && (
                <div className="check-box">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Settings;
