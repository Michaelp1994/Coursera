import { ChakraProvider } from "@chakra-ui/react";
import Alert from "./components/Alert";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import { ScrollProvider } from "./context/ScrollContext";
import { AlertProvider } from "./context/alertContext";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <ScrollProvider>
          <main>
            <Header />
            <LandingSection />
            <ProjectsSection />
            <ContactMeSection />
            <Footer />
            <Alert />
          </main>
        </ScrollProvider>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
