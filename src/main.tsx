import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import Router from "./router.tsx";

createRoot(document.getElementById("root")!).render(<Router />);