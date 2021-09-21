import Todos from '../../components/organisms/Todos/Todos'
import DataContext from '../../context/DataContext'

const FeatureTest = () => {
  return (
    <div className="container">
      <DataContext>
        <Todos />
      </DataContext>
    </div>
  )
}

export default FeatureTest
