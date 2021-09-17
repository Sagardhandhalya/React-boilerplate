import { FC } from 'react'
import './Loader.scss'
import { ILoaderProps } from './Types'
const Loader: FC<ILoaderProps> = ({ visible }) => {
  return visible ? <div className="loader"></div> : <div></div>
}

export default Loader
