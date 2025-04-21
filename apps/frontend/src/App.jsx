// App.jsx
import { Routes, Route } from "react-router-dom";
import TicketsList from "./components/ticketsList/TicketsList";
import CreateTicket from "./components/ticketForm/CreateTicket";
import TicketDetail from "./components/ticketDetails/TicketDetails";
import Header from "./components/header/Header";
import PATHS from "./components/constants/paths";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path={PATHS.HOME} element={<TicketsList />} />
          <Route path={PATHS.CREATE_TICKET} element={<CreateTicket />} />
          <Route path={PATHS.TICKET} element={<TicketDetail />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
