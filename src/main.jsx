import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ui/ErrorFallback.jsx";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => window.location.replace("/")}
      >
        <App />
      </ErrorBoundary>
    </StyleSheetManager>
  </StrictMode>
);
