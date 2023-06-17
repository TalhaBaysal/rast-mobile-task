import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import "./assets/sass/layout.scss";
import { Header } from "./components";
import { Dashboard } from "./pages";
import Container from "@mui/material/Container";

function App() {
  return (
    <Container sx={{ maxWidth: "2000px !important" }}>
      <Header />
      <Dashboard />
    </Container>
  );
}

export default App;
