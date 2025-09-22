import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <div>
        <h1 className="text-5xl text-indigo-600">Welcome to gta</h1>
      </div>
    </main>
  );
};

export default App;
