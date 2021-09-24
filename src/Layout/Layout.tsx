import Loader from '../components/atoms/Loader/Loader'
import SnackBar from '../components/molecules/SnackBar/SnackBar'
import Footer from '../components/organisms/Footer/Footer'
import { useFeedbackContext } from '../context/FeedbackContext'
import Header from './../components/organisms/Header/Header'

const Layout = ({ children }: any) => {
  const { setIsSnackVisible, isSnackVisible, snackProps, isLoaderVisible } =
    useFeedbackContext()

  return (
    <>
      <SnackBar
        snackSpecs={{
          ...snackProps,
          close: setIsSnackVisible,
        }}
        visible={isSnackVisible}
      />
      <Loader visible={isLoaderVisible} />

      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
