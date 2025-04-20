// App.jsx
import { Routes, Route } from "react-router-dom";
import TicketsList from "./components/ticketsList/TicketsList";
import CreateTicket from "./components/ticketForm/CreateTicket";
import TicketDetail from "./components/ticketDetails/TicketDetails";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <Header />
      <main className="main-layout">
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
