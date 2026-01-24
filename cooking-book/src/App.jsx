import './App.css';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import ThemeContext from './components/context/ThemeContext';
import { lazy, Suspense, useEffect, useState } from 'react';
import PropertiesContext from './components/context/PropertiesContext';
import AuthContext from './components/context/AuthContext';
import useLocalStorage from './hooks/useLocalStorage';
import useWebsiteTitle from './hooks/useWebsiteTitle';
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './components/pages/Home/Home';
import LastSearchPostPreview from './components/LastSearchPostPreview/LastSearchPostPreview';
import Search from './components/pages/Search/Search';
import Searchbar from './components/Searchbar/Searchbar';
import NotFound from './components/pages/NotFound';
import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute';
import Login from './components/pages/Auth/Login/Login';
import EditProfile from './components/pages/EditProfile/EditProfile';
import MyRecepies from './components/pages/MyRecepies/MyRecepies';
import AddRecepie from './components/pages/MyRecepies/AddRecepie';
import Register from './components/pages/Auth/Register/Register';
import EditRecepie from './components/pages/MyRecepies/EditRecepie';
import { random } from './lib/random';

const Profile = lazy(() => import('./components/pages/Profile/Profile'));

function App() {
  useWebsiteTitle('Main page')
  const [randomRecipe, setRandomRecipe] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await random();
      setRandomRecipe(res)
    }
    getData();
  }, [])

  const [isLogged, setIsLogged] = useLocalStorage('log', false);
  const [theme, setTheme] = useLocalStorage('theme', {
    color: '#1a1a1a',
    background: 'rgba(255,255,255,0.87)',
    border: '#1a1a1a',
    hover: '#A7F3D0'
  });


  const changeTheme = () => {
    setTheme(prev => {
      const newBg = prev.background === 'rgba(255,255,255,0.87)' ? '#1a1a1a' : 'rgba(255,255,255,0.87)';

      return {
        background: newBg,
        color: newBg === 'rgba(255,255,255,0.87)' ? '#1a1a1a' : 'rgba(255,255,255,0.87)',
        border: newBg === 'rgba(255,255,255,0.87)' ? 'unset' : 'rgba(255,255,255,0.87)'
      };
    });
  };

  const content = (
    <Suspense fallback={'Loading...'}>
      <Routes>
        <Route index element={<Home theme={theme} />} />
        <Route path='/login' element={<h1>{<Login />}</h1>} />
        <Route path='/register' element={<Register />} />
        <Route path='/last-recepie/:id' element={<LastSearchPostPreview />} />
        <Route path='/search' element={
          <>
            <Searchbar />
            <Search />
          </>
        }
        />
        <Route element={<AuthenticatedRoute />}>
          <Route path='/my-profile' element={<Profile />} >
            <Route index element={<EditProfile />} />
            <Route path='recepies' element={<MyRecepies />} />
            <Route path='add-recepie' element={<AddRecepie />} />
            <Route path='edit-recepie/:id' element={<EditRecepie />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  )

  return (
    <>
      <BrowserRouter>
        <ThemeContext.Provider value={{
          color: theme.color,
          background: theme.background,
          changeColor: changeTheme,
          border: theme.border
        }}>
          <PropertiesContext.Provider value={{
            randomRecipe: randomRecipe,
          }}>
            <AuthContext.Provider value={{
              isLogged: isLogged,
              logIn: () => setIsLogged(true),
              logOut: () => setIsLogged(false)
            }}>
              <Layout

                header={<Header />}
                container={
                  <div style={{
                    background: theme.background,
                    minHeight: '100vh',
                    color: theme.color,
                  }}>
                    <Container >
                      {content}
                    </Container>
                  </div>
                }
              >
              </Layout>
            </AuthContext.Provider>
          </PropertiesContext.Provider>
        </ThemeContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App