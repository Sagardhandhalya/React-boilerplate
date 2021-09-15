import { IHoverCardProps } from './Types'
import './HoverCard.scss'
const HoverCard = ({ title, link, descreption }: IHoverCardProps) => {
  return (
    <a href={link} className="card">
      <h3>{title} &rarr;</h3>
      <p>{descreption}</p>
    </a>
  )
}

export default HoverCard
