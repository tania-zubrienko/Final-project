import { Routes, Route } from "react-router-dom"
import SignupForm from "./components/Forms/SignupForm/SignupForm.jsx"
import LoginForm from "./components/Forms/LoginForm/LoginForm.jsx"
import HomePage from "./pages/HomePage/HomePage.jsx"
import Profile from "./pages/Profile/Profile.jsx"
import Trips from "./pages/Trips/Trips.jsx"
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx"

import NewTripForm from "./components/Forms/NewTripForm/NewTripForm.jsx"
import NewBookingForm from "./components/Forms/NewBookingForm/NewBookingForm.jsx"
import TripDetail from "./pages/TripDetail/TripDetail.jsx"

import NewExpenseForm from "./components/Forms/NewExpensesForm/NewExpensesForm.jsx"
import TripList from "./components/Lists/TripList/TripList.jsx"

const AppRoutes = () => {

    return (<Routes>

        <Route path="/pruebas" element={<TripList />}></Route>

        <Route path="/" element={<HomePage />} />
        <Route path="/recomendados" element={<h1>Soy los Recomendados</h1>} />
        <Route path="/registrarse" element={<SignupForm />} />
        <Route path="/inicio-sesion" element={<LoginForm />} />

        <Route element={<PrivateRoute />}>
            <Route path="/lista-deseos" element={<h1>Dime tu lista de deseos para reyes :P</h1>} />
            <Route path="/perfil" element={<Profile />} />
            {/* <Route path="/perfil/editar" element={<h1>Edito el usuario</h1>} /> no hay edicion como tal en cliente*/}

            <Route path="/viajes" element={<Trips />} />
            <Route path="/viajes/crear" element={<NewTripForm />} />
            {/* <Route path="/viajes/realizados" element={<Trips />} />   2 listas en la vista */}
            <Route path="/viajes/reservas/:id/crear" element={<NewBookingForm />} />
            <Route path="/viajes/detalles/:id" element={<TripDetail />} />

            {/* <Route path="/viajes/reservas/:id" element={<h1>Detalles de reserva</h1>} /> de momento*/}
            <Route path="/viajes/planes/:id" element={<h1>Soy los planes del viaje</h1>} />
            <Route path="/viajes/informacion/:id" element={<h1>Soy la información viajes</h1>} />
            <Route path="/viajes/gastos/:id/añadir" element={<NewExpenseForm />} />
            <Route path="/viajes/gastos/:id" element={<p>vista de gastos</p>} />

        </Route>

        <Route path="*" element={<h1>Error 404 (no soy una tetera pero ojalá)</h1>} />

    </Routes>
    )

}

export default AppRoutes