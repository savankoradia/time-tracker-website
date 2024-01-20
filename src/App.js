import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MDBContainer } from "mdb-react-ui-kit";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Dashboard from "./pages/dashboard";
import About from "./pages/about";
import Project from "./pages/project";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <MDBContainer fluid className="py-5">
            <Routes>
              <Route path="/time-tracker-website" element={<Dashboard />} />
              <Route path="/time-tracker-website/about" element={<About />} />
              {/* <Route path="/project" element={<Project />} /> */}
            </Routes>
          </MDBContainer>
        </BrowserRouter>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
