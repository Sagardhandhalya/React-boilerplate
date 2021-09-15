import Todos from '../../components/Todos/Todos'
import DataContext from '../../context/DataContext'

const FeatureTest = () => {
  return (
    <div className="container">
      <DataContext>
        <h1>JSON PlaceHolder TODO App</h1>
        <Todos />
      </DataContext>
    </div>
  )
}

export default FeatureTest
