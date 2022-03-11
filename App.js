import Home from './Components/Home/Home.jsx';
import NavBar from './Components/NavBar/NavBar.jsx'
import Metarials from './Components/Home/Metarials/Metarials.jsx';
import Section from './Components/Home/Section/Section.jsx'
import Servies from './Components/Home/Servies/Servies.jsx';
import Catug from './Components/Home/Catug/Catug';
import Testimonials from './Components/Home/Testimonials/Testimonials.jsx';
import Footer from './Components/Footer/Footer.jsx';
import ScroolingBtn from './Components/Home/ScroolingBtn.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes, Router, Switch } from 'react-router-dom';
import Metarial_Page from './Components/Page_Metarial/Metarial_Page.jsx';
import PageCourses from './Components/Courses_Page/PageCourses.jsx';
import Connect from './Components/Connect/Connect.jsx';
import HomePage from './Components/Home/HomePage.jsx';

function App() {
  return (
    // <BrowserRouter>
    //   <Switch>
    //     {/* <Route exact path='/home'>
    //       <NavBar />
    //       <Home />
    //       <ScroolingBtn />
    //       <Section />
    //       <Servies />
    //       <Metarials />
    //       <Catug />
    //       <Testimonials />
    //     </Route> */}

    //     <Route exact path='/'>
    //       <HomePage />
    //     </Route>

    //     <Route exact path='/material'>
    //       <Metarial_Page />
    //     </Route>

    //     <Route  path='/PageCourses'>
    //       <PageCourses />
    //     </Route>
        
    //     <Route path='/connect'>
    //       <Connect />
    //     </Route>

    //   </Switch>
    //   <Footer />
    // </BrowserRouter>
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route  path='/Metarial_Page' exact element={<Metarial_Page />} />
          <Route  path='/PageCourses' exact element={<PageCourses />} />
          <Route  path='/Connect' exact element={<Connect />} />
        </Routes>
      </BrowserRouter>

      <Footer />

    </div>
  );
}

export default App;
