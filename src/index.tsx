import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./_10_crypto_tracker/App";
import { theme } from "./_10_crypto_tracker/theme";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
