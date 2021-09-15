import './Home.scss'
import HoverCard from '../../components/HoverCard/HoverCard'

const Home = () => {
  return (
    <div className="container">
      <main>
        <h1 className="title">Boiler Plate Code for React JS</h1>

        <p className="description">
          This are the things are pre configured. Get started by editing{' '}
          <code>App.tsx</code>
        </p>

        <div className="grid">
          <HoverCard
            title="TypeScript + Sass"
            descreption="type script ans sass support"
            link="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"
          />
          <HoverCard
            title="Linting & Code formatting "
            descreption="all packages for esLint and prettier added."
            link="https://eslint.org/docs/rules/"
          />
          <HoverCard
            title="Testing"
            descreption="Jest and react testing library support"
            link="https://testing-library.com/docs/react-testing-library/intro/"
          />
          <HoverCard
            title="Routing"
            descreption="react router dom with demo router"
            link="https://reactrouter.com/web/guides/quick-start"
          />
        </div>
      </main>
    </div>
  )
}

export default Home
