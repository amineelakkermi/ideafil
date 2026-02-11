import styles from '../style'

const Title = ({ title }) => {
  return (
    <div>
    <h1 className={`${styles.title} text-white text-right`}>
    {title}
    </h1>
    </div>
  )
}

export default Title