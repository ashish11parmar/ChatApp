import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginWithGoogle from './components/LoginWithGoogle/LoginWithGoogle';

function App() {
  return (
   <>



<BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginWithGoogle />}>
          
        </Route>
      </Routes>
    </BrowserRouter>
   {/* <LoginWithGoogle/> */}

   </>
  );
}

export default App;
