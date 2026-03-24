import { Suspense } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import PricingOptions from "./components/PricingOptions/PricingOptions";

const pricingPromise = fetch('pricingData.json').then(res => res.json());
// console.log(pricingPromise);

function App() {
  return (
    <div className="mx-2 lg:mx-5">
      <header>
        <NavBar/>
      </header>
      <main className="min-h-[calc(100vh-40px)]">
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <PricingOptions pricingPromise={pricingPromise} />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
