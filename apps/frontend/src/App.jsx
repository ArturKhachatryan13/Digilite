// App.jsx
import { Routes, Route } from "react-router-dom";
import TicketsList from "./components/TicketsList";
import CreateTicket from "./components/CreateTicket";
import TicketDetail from "./components/TicketDetail";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <main className="pt-20 p-4 max-w-4xl mx-auto">
        <Routes>
          <Route path="/" element={<TicketsList />} />
          <Route path="/create" element={<CreateTicket />} />
          <Route path="/ticket/:id" element={<TicketDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
