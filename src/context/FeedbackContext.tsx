import { createContext, useContext, useState } from 'react'
import { ContextProps, IFeedbackContextValue, ISnackSpecs } from './Types'

const initialState = {}
const feedbackContext = createContext<IFeedbackContextValue>(
  initialState as IFeedbackContextValue
)

const FeedbackContext = ({ children }: ContextProps) => {
  const [snackProps, setSnackProps] = useState<ISnackSpecs>({
    type: 'success',
    msg: '',
    position: 'bottom_right',
  })
  const [isSnackVisible, setIsSnackVisible] = useState(false)
  const [isLoaderVisible, setIsLoaderVisible] = useState(false)
  console.log('ran again...')

  return (
    <feedbackContext.Provider
      value={{
        snackProps,
        setSnackProps,
        isSnackVisible,
        setIsSnackVisible,
        isLoaderVisible,
        setIsLoaderVisible,
      }}
    >
      {children}
    </feedbackContext.Provider>
  )
}

export const useFeedbackContext = () => useContext(feedbackContext)

export default FeedbackContext
