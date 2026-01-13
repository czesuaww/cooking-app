import './App.css';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import ThemeContext from './components/context/ThemeContext';
import { useReducer } from 'react';
import PropertiesContext from './components/context/PropertiesContext';
import AuthContext from './components/context/AuthContext';
import useLocalStorage from './hooks/useLocalStorage';
import useWebsiteTitle from './hooks/useWebsiteTitle';
import { BrowserRouter, Routes, Route } from "react-router";
import { initState, reducer, randomRecepie } from './reducer';
import Home from './components/pages/Home';
import LastSearchPostPreview from './components/LastSearchPostPreview/LastSearchPostPreview';

function App() {
  useWebsiteTitle('Main page')
  const [isLogged, setIsLogged] = useLocalStorage('log', false);
  console.log(isLogged, 'isLogged')
  const [theme, setTheme] = useLocalStorage('theme', {
    color: '#000',
    background: '#fff'
  });
  const [state, dispatch] = useReducer(reducer, initState)
  const onSearch = value => dispatch({ type: 'search-posts', payload: value })

  const changeTheme = () => {
    setTheme(prev => ({
      color: prev.color === '#000' ? '#fff' : '#000',
      background: prev.background === '#fff' ? '#000' : '#fff'
    }));
  };

  const content = (
    <Routes>
      <Route index element={
        <>
          <Home state={state} theme={theme} />
        </>
      } />
      <Route path='/login' element={<h1>Log in</h1>} />
      <Route path='/register' element={<h1>Register</h1>} />
      <Route path='/last-recepie/:id' element={<LastSearchPostPreview />} />
    </Routes>
  )

  return (
    <>
      <BrowserRouter>
        <ThemeContext.Provider value={{
          color: theme.color,
          background: theme.background,
          changeColor: changeTheme
        }}>
          <PropertiesContext.Provider value={{
            randomRecipe: randomRecepie,
            onSearch: onSearch,
            posts: state.posts,
            allPosts: state.poststsAll
          }}>
            <AuthContext.Provider value={{
              isLogged: isLogged,
              logIn: () => setIsLogged(true),
              logOut: () => setIsLogged(false)
            }}>
              <Layout
                header={<Header />}
                container={
                  <Container >
                    {content}
                  </Container>
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