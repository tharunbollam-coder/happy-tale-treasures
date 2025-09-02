import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import Stories from "./pages/Stories";
import StoryDetail from "./pages/StoryDetail";
import SpellingGame from "./pages/SpellingGame";
import StoryQuestions from "./pages/StoryQuestions";
import Series from "./pages/Series";
import SeriesDetail from "./pages/SeriesDetail";
import ChapterDetail from "./pages/ChapterDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Toaster from "./components/ui/Toaster";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/story/:id" element={<StoryDetail />} />
            <Route path="/spelling-game/:id" element={<SpellingGame />} />
            <Route path="/story-questions/:id" element={<StoryQuestions />} />
            <Route path="/series" element={<Series />} />
            <Route path="/series/:id" element={<SeriesDetail />} />
            <Route path="/series/:seriesId/chapter/:chapterId" element={<ChapterDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;