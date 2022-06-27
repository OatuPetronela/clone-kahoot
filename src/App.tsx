import {Route, Routes} from 'react-router-dom';
import {AuthContextProvider} from 'features/Auth/Auth.context';
import {Login, Register} from 'features/Auth';
import {AnonymousLayout} from 'layouts';
import {Nav} from 'components/navbar';

function App() {
    return (
        <AuthContextProvider>
        <Nav />
        <div className="w-7/12 m-auto">
            <Routes>
                <Route path="/" element={<AnonymousLayout/>}>
                    <Route path="/" element={< Login />}/>
                    <Route path="register" element={< Register />}/>
                </Route>
            </Routes>
            </div>
        </AuthContextProvider>
    );
}

export default App;