import './App.css'
import Layout from './components/Layout/Layout'
import Header from './components/Header/Header'
import Container from './components/Container/Container'
import Searchbar from './components/Searchbar/Searchbar'

function App() {

  const onSearch = (value) => {
    console.log(value, 'dupa')
  }

  return (
    <>
      <Header />
      <Layout
        container={
          <Container >
            <Searchbar onSearch={onSearch} />
          </Container>
        }
      >
      </Layout>
    </>
  )
}

export default App
