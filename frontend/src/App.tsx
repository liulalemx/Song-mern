import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateSongs from "./pages/CreateSongs";
import ShowSong from "./pages/ShowSong";
import DeleteSong from "./pages/DeleteSong";
import EditSong from "./pages/EditSong";
import { ThemeProvider } from "./components/ThemeProvider";
import Header from "./components/Header";
import Artists from "./pages/Artists";
import Albums from "./pages/Albums";
import Genres from "./pages/Genres";

const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/songs/create" element={<CreateSongs />} />
        <Route path="/songs/details/:id" element={<ShowSong />} />
        <Route path="/songs/edit/:id" element={<EditSong />} />
        <Route path="/songs/delete/:id" element={<DeleteSong />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
