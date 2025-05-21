import Header from "./components/Header";
import Profile from "./components/Profile";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";
import Footer from "./components/Footer";
import ClientWrapper from "./components/ClientWrapper";

export default function Home() {
  return (
    <div className="App">
      <Header />
      <main>
        <Profile />
        <ClientWrapper />
      </main>
      <Footer />
    </div>

  );
}
