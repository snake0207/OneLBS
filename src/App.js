import ThemeRoutes from "./routes";
import ThemeCustomization from "./themes";

const App = () => {
  return (
    <ThemeCustomization>
      {/* <ScrollTop> */}
      <ThemeRoutes />
      {/* </ScrollTop> */}
    </ThemeCustomization>
  );
};

export default App;
