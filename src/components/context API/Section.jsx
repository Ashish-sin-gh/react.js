import { Children, useContext } from "react";
import { LevelContext } from "./LevelContext";
import { ThemeContext } from "./themeContext";
import "./Section.css";
function Section({ level, children }) {
  const theme = useContext(ThemeContext);
  return (
    <section
      className={theme}
      style={{
        border: "2px gray solid",
        margin: 10,
        width: "60%",
        paddingLeft: 10,
      }}
    >
      <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
    </section>
  );
}

export default Section;
