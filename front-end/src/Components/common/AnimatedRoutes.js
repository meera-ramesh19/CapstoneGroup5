import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';

// PAGES
import FourOFour from '../../Pages/FourOFour';
import Home from '../../Pages/Home';
import About from '../../Pages/About';
import Contact from '../../Pages/Contact';
import IndexBooks from '../../Pages/Books/IndexBooks';
import NewBooks from '../../Pages/Books/NewBook';
import ShowBooks from '../../Pages/Books/ShowBooks';
import EditBooks from '../../Pages/Books/EditBooks';
import StudentIndex from '../../Pages/Student/StudentIndex';
import TeacherIndex from '../../Pages/Teacher/TeacherIndex';
//This component to define navbar animate tranisitons
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <div>
      <main>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />

            <Route path='/books'>
              <Route index element={<IndexBooks />} />
              <Route path=':id' element={<ShowBooks />} />
              <Route path='new' element={<NewBooks />} />
              <Route path=':id/edit' element={<EditBooks />} />
            </Route>
            <Route path='/students'>
              <Route index element={<StudentIndex />} />
              {/*<Route path='new' element={<StudentNew />} />
            <Route path=':id' element={<StudentShow />} />
            <Route path=':id/edit' element={<StudentEdit />} />*/}
            </Route>
            <Route path='/teachers'>
              <Route index element={<TeacherIndex />} />
              {/* <Route path='new' element={<TeacherNew />} />
            <Route path=':id' element={<TeacherShow />} />
            <Route path=':id/edit' element={<TeacherEdit />} />*/}
            </Route>

            <Route path='*' element={<FourOFour />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default AnimatedRoutes;
