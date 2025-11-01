import { ColorModeContext } from "./theme";
import { CssBadeline, CssBaseline, ThemeProvider } from "@mui/material";
import { useMode } from "./theme";
import { Route, Routes } from "react-router-dom";
import Topbar from "./scenses/Dashboard App/global/Topbar";
import Sidebar from "./scenses/Dashboard App/global/Sidebar";
import Dashboard from "./scenses/Dashboard App/index.jsx";
import Team from "./scenses/team";
import Contacts from "./scenses/contacts";
import Invoices from "./scenses/invoices";
import Form from "./scenses/form/index.jsx";
import Calendar from "./scenses/calendar/index.jsx";
import FAQ from "./scenses/faq/index.jsx";
import Bar from "./scenses/bar/index.jsx";
 import Pie from "./scenses/pie";
 import Line from "./scenses/line";
import Geography from "./scenses/geography/index.jsx";
function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />

            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
