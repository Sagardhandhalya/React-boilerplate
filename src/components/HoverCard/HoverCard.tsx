import { IHoverCardProps } from './Types'
import './HoverCard.scss'
import { FC } from 'react'
const HoverCard: FC<IHoverCardProps> = ({ title, link, descreption }) => {
  return (
    <a href={link} className="card">
      <h3>{title} &rarr;</h3>
      <p>{descreption}</p>
    </a>
  )
}

export default HoverCard
