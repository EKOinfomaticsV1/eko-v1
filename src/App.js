import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./components/admin/Admin";
import Home from "./components/home/Home";
import AI from "./components/pages/AI/AI";
import Analytics from "./components/pages/Analytics/Analytics";
import BigData from "./components/pages/BigData/BigData";
import ML from "./components/pages/ML/ML";
import BankingAndInsurance from "./components/pages/Banking-and-Insurance/BankingAndInsurance";
import Education from "./components/pages/Education/Education";
import Telecom from "./components/pages/Telecom/Telecom";
import Retail from "./components/pages/Retail/Retail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/artificial-intelligence" element={<AI />}></Route>
        <Route path="/big-data" element={<BigData />}></Route>
        <Route path="/machine-learning" element={<ML />}></Route>
        <Route path="/analytics" element={<Analytics />}></Route>
        <Route
          path="/banking-and-insurance"
          element={<BankingAndInsurance />}
        ></Route>
        <Route path="/education" element={<Education />}></Route>
        <Route path="/telecom" element={<Telecom />}></Route>
        <Route path="/retail" element={<Retail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
