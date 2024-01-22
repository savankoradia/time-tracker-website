import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MDBContainer } from "mdb-react-ui-kit";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import About from "./pages/about";
import Tasks from "./pages/task";
import Settings from "./pages/settings";


function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity
      }
    }
  });
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <MDBContainer fluid className="py-5">
            <Routes>
              <Route path="/time-tracker-website" element={<Tasks />} />
              <Route path="/time-tracker-website/about" element={<About />} />
              <Route path="/time-tracker-website/settings" element={<Settings />} />
            </Routes>
          </MDBContainer>
        </BrowserRouter>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
