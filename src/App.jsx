import TaskBoard from "./components/Task/TaskBoard";
import Footer from "./components/footer";
import HeroSection from "./components/heroSection";
import Header from "./components/navbar";

const App = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <HeroSection />
        <TaskBoard />
      </div>
      <Footer />
    </>
  );
};

export default App;
