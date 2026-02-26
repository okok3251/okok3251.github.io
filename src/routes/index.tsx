import App from './pages/test/App';
import {Route, Routes} from 'react-router-dom'
// import App from "./pages/test/App";

const Router = () => {
    return(
        <div>
            <Routes>
                <Route
                    path="/"
                    element={<App></App>}
                />
            </Routes>
        </div>
    )
}

export default Router;