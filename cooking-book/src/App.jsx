import './App.css'
import Layout from './components/Layout/Layout'
import Header from './components/Header/Header'
import Container from './components/Container/Container'
import Searchbar from './components/Searchbar/Searchbar'
import Posts from './components/Posts/Posts'
import ThemeContext from './components/context/ThemeContext'
import { useReducer } from 'react'
import BestPost from './components/BestPost/BestPost'
import PropertiesContext from './components/context/PropertiesContext'

const postsPL = [
  {
    id: 1,
    name: 'Przepisz na naleśniki',
    shortContent: 'Na naturalnym mleku',
    longContent: 'Wymieszaj jaja z mąką i dodaj oleju kurwa',
    image: 'https://picsum.photos/id/237/200/300'
  },
  {
    id: 2,
    name: 'Przepisz na kebaba',
    shortContent: 'Na naturalnym cieście',
    longContent: 'Wymieszaj jaja z mąką i dodaj oliwy kurwa do pizzy',
    image: 'https://picsum.photos/id/237/200/300'
  },
  {
    id: 3,
    name: 'Przepisz na pizze',
    shortContent: 'Na naturalnym sosie',
    longContent: 'Dodaj sosu pomidorowego i oregano i jakieś reaper żeby Ci dupe spiekło chujku',
    image: 'https://picsum.photos/id/237/200/300'
  },
  {
    id: 4,
    name: 'Przepisz na zupe z dynii',
    shortContent: 'Na naturalnej dynii',
    longContent: 'Obierać dynie trzeba ciężko jest, ale jak zrobisz to wychodzi wykurwiście',
    image: 'https://picsum.photos/id/237/200/300'
  }
]

const initState = {
  posts: [],
  poststsAll: postsPL,
  color: '#000',
  background: '#fff'
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'search-posts': {
      const value = (action.payload || '').trim().toLowerCase();
      if (value === '') {
        return {
          ...state,
          posts: []
        };
      }
      const filteredPosts = state.poststsAll.filter(post => post.name.toLowerCase().includes(value));
      return {
        ...state,
        posts: filteredPosts
      };
    }
    case 'change-color': {
      return {
        ...state,
        color: state.color === '#000' ? '#fff' : '#000',
        background: state.background === '#fff' ? '#000' : '#fff',
      };
    }
    default:
      console.warn(`Unknown action: ${action.type}`);
      return state;
  }
}

const randomRecepieFun = () => {
  const randomIndex = Math.floor(Math.random() * postsPL.length);
  return postsPL[randomIndex]
}

const randomRecepie = randomRecepieFun();


function App() {

  const [state, dispatch] = useReducer(reducer, initState)
  const onSearch = value => dispatch({ type: 'search-posts', payload: value })
  const changeTheme = () => dispatch({ type: 'change-color' })

  return (
    <>
      <Header />
      <ThemeContext.Provider value={{
        color: state.color,
        background: state.background,
        changeColor: changeTheme
      }}>
        <PropertiesContext.Provider value={{
          recipe: randomRecepie,
          onSearch: onSearch,
          posts: state.posts
        }}>
          <Layout
            container={
              <Container >
                <BestPost />
                <Searchbar />
                {state.posts.length > 0
                  ?
                  <Posts />
                  :
                  <div className="empty-state">
                    <h2 style={{ color: state.color, background: state.background }}>🔍Enter the name of the dish</h2>
                    <p style={{ color: state.color, background: state.background }}>We'll find the best recipes for you!</p>
                  </div>
                }
              </Container>
            }
          >
          </Layout>
        </PropertiesContext.Provider>
      </ThemeContext.Provider>
    </>
  )
}

export default App
