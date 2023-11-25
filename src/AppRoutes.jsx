import { Routes, Route } from "react-router-dom"

const AppRoutes = () => {

    return (<Routes>

        <Route path="/" element={<h1>HomePage</h1>} />
        <Route path="/inicio" element={<h1>Soy el inicio</h1>} />
        <Route path="/recomendados" element={<h1>Soy los Recomendados</h1>} />
        <Route path="/registrarse" element={<h1>Soy el Sign Up</h1>} />
        <Route path="/inicio-sesion" element={<h1>Soy el Login</h1>} />
        <Route path="/lista-deseos" element={<h1>Dime tu lista de deseos para reyes :P</h1>} />
        <Route path="/perfil" element={<h1>Soy el perfil de usuario</h1>} />
        <Route path="/perfil/editar" element={<h1>Edito el usuario</h1>} />

        <Route path="/viajes" element={<h1>Soy los viajes</h1>} />
        <Route path="/viajes/crear" element={<h1>Nuevo viaje</h1>} />
        <Route path="/viajes/realizados" element={<h1>Soy los viajes realizados</h1>} />
        <Route path="/viajes/detalles/:id" element={<h1>Detalles de viaje</h1>} />
        <Route path="/viajes/reservas/:id" element={<h1>Detalles de reserva</h1>} />
        <Route path="/viajes/planes/:id" element={<h1>Soy los planes del viaje</h1>} />
        <Route path="/viajes/informacion/:id" element={<h1>Soy la información viajes</h1>} />
        <Route path="/viajes/gastos/:id" element={<h1>Soy los gastos del viaje</h1>} />

        <Route path="/perfil/documentos" element={<h1>Soy los documentos del usuario</h1>} />
        <Route path="/perfil/amigos" element={<h1>Soy la lista de amigos del usuario</h1>} />
        <Route path="/perfil/amigos/añadir" element={<h1>Lista de usuarios para añadir amigos</h1>} />

        <Route path="*" element={<h1>Error 404 (no soy una tetera pero ojalá)</h1>} />
    </Routes>
    )

}

export default AppRoutes