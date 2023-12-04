import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage.jsx'
import ProfilePage from './pages/ProfilePage/ProfilePage.jsx'
import TripsPage from './pages/TripsPage/TripsPage.jsx'
import SignupPage from './pages/SignupPage/SignupPage.jsx'

import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx'
import NewTripPage from './pages/NewTripPage/NewTripPage.jsx'
import NewBookingPage from './pages/NewBookingPage/NewBookingPage.jsx'
import TripDetail from './pages/TripDetail/TripDetail.jsx'
import PlanDetails from "./components/PlanDetails/PlanDetails.jsx"

import NewDocumentPage from './pages/NewDocumentPage/NewDocumentPage.jsx'
import DocumentsForm from './components/Forms/DocumentsForm/DocumentsForm.jsx'
import LoginPage from './pages/LoginPage/LoginPage.jsx'


const AppRoutes = () => {

    return (<Routes>


        <Route path='/pruebas' element={<NewDocumentPage />}></Route>


        <Route path='/' element={<HomePage />} />
        {/* <Route path='/recomendados' element={<h1>Soy los Recomendados</h1>} /> */}
        <Route path='/registrarse' element={<SignupPage />} />
        <Route path='/inicio-sesion' element={<LoginPage />} />

        <Route element={<PrivateRoute />}>
            <Route path='/lista-deseos' element={<h1>Dime tu lista de deseos para reyes :P</h1>} />
            <Route path='/perfil' element={<ProfilePage />} />
            <Route path='/viajes' element={<TripsPage />} />
            <Route path='/viajes/crear' element={<NewTripPage />} />
            <Route path='/viajes/reservas/:id/crear' element={<NewBookingPage />} />
            <Route path='/viajes/detalles/:id' element={<TripDetail />} />
            <Route path="/viajes/planes/:id" element={<h1>Soy los planes del viaje</h1>} />
            <Route path="/viajes/informacion/:id" element={<h1>Soy la información viajes</h1>} />
            <Route path="/viajes/gastos/:id" element={<p>vista de gastos</p>} />
            <Route path="/viajes/:id/planes/:id/detalle" element={<PlanDetails />} />
        </Route>

        <Route path='*' element={<h1>Error 404 (no soy una tetera pero ojalá)</h1>} />

    </Routes>
    )

}

export default AppRoutes