import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactList from './Pages/ContactList/contactList';
import ContactDetails from './Pages/ContactDetails/contactDetails';
import SendMessage from './Pages/SendMessage/sendMessage';
import AllMessages from './Pages/AllMessages/allMessages';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/Messages" element={<AllMessages />} />
          <Route path="/Contact/:id" element={<ContactDetails />} />
          <Route path="/sendMessage/:id" element={<SendMessage />} />   
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
