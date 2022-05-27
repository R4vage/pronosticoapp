
import './App.css';
import { Home, PageNotFound} from "./pages"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
