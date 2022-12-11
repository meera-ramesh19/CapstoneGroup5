import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react'

// PAGES
import FourOFour from '../../Pages/FourOFour';
import Home from '../../Pages/Home';
import About from '../../Pages/About';
import Register from '../../Pages/Register';
import Login from '../../Pages/Login';

import IndexBooks from '../../Pages/Books/IndexBooks';
import NewBooks from '../../Pages/Books/NewBook';
import ShowBooks from '../../Pages/Books/ShowBooks';
import EditBooks from '../../Pages/Books/EditBooks';

import TeacherIndex from '../../Pages/Teacher/TeacherIndex';
import TeacherNew from '../../Pages/Teacher/TeacherNew';
import TeacherShow from '../../Pages/Teacher/TeacherShow';
import TeacherEdit from '../../Pages/Teacher/TeacherEdit';

import StudentIndex from '../../Pages/Student/StudentIndex';
import StudentNew from '../../Pages/Student/StudentNew';
import StudentShow from '../../Pages/Student/StudentShow';
import StudentEdit from '../../Pages/Student/StudentEdit';

import IndexLogs from '../../Pages/Logs/IndexLogs';
import NewLog from '../../Pages/Logs/NewLog';
import ShowLogs from '../../Pages/Logs/ShowLogs';
import EditLogs from '../../Pages/Logs/EditLogs';
import app from '../../firebase';

// import SignUp from  '../../Pages/SignUp';
// import TeacherSignUp from '../../Pages/TeacherSignUp';
// import TeacherLogin from '../../Pages/TeacherLogin';
// import ParentLogin from '../../Pages/ParentLogin';
// import ParentSignUp from '../../Pages/ParentSignUp';

//This component to define navbar animate tranisitons
const AnimatedRoutes = () => {
	// logging in
	const [signedIn, setSignedIn] = useState(false);

	const [signedInUser, setSignedInUser] = useState({});

	// signing up /register

  const [register, setRegister] = useState(false)

  const [hasRegistered, setHasRegistered] = useState({})

	const location = useLocation();
	return (
		<div>
			<main>
				<AnimatePresence>
					<Routes location={location} key={location.pathname}>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						{/* <Route path='/contact' element={<Contact />} /> */}
						<Route path='/signup' element={<Register register = {register} setRegister = {setRegister} hasRegistered = {hasRegistered} setHasRegistered = {setHasRegistered} />} />
						<Route
							path='/login'
							element={
								<Login
									signedIn={signedIn}
									setSignedIn={setSignedIn}
									signedInUser={signedInUser}
									setSignedInUser={setSignedInUser}
								/>
							}
						/>

						{/* <Route path='/signUp'>
            <Route index element={<SignUp/>} />
            <Route path='teacher-signup' element={<TeacherSignUp />}></Route>
          
            <Route path="parent-signup" element={<ParentSignUp />}></Route>
            </Route> */}
						{/* <Route path='/login'>
            <Route index element={<SignUp/>} />
            <Route path="teacher-login" element={<TeacherLogin />}></Route>
            <Route path="parent-login" element={<ParentLogin />}></Route>
            </Route> */}

						<Route path='/books'>
							<Route index element={<IndexBooks />} />
							<Route path='new' element={<NewBooks />} />
							<Route path=':id' element={<ShowBooks />} />
							<Route path=':id/edit' element={<EditBooks />} />
						</Route>

						<Route path='/students'>
							<Route index element={<StudentIndex />} />
							<Route path='new' element={<StudentNew />} />
							<Route path=':id' element={<StudentShow />} />
							<Route path=':id/edit' element={<StudentEdit />} />
						</Route>

						<Route path='/teachers'>
							<Route index element={<TeacherIndex />} />
							<Route path='new' element={<TeacherNew />} />
							<Route path=':id' element={<TeacherShow />} />
							<Route path=':id/edit' element={<TeacherEdit />} />
						</Route>

						<Route path='/logs'>
							<Route index element={<IndexLogs />} />
							<Route path='new' element={<NewLog />} />
							<Route path=':id' element={<ShowLogs />} />
							<Route path=':id/edit' element={<EditLogs />} />
						</Route>

						<Route path='*' element={<FourOFour />} />
					</Routes>
				</AnimatePresence>
			</main>
		</div>
	);
};

export default AnimatedRoutes;
