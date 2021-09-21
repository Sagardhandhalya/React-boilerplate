import Footer from '../components/organisms/Footer/Footer'
import Header from './../components/organisms/Header/Header'

const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
