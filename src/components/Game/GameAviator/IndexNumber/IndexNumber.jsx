import { useIndex } from "../Context/IndexContext"

const IndexNumber = () => {
    const {index} = useIndex();

  return (
    <div>{index.toFixed(2)}x</div>
  )
}

export default IndexNumber