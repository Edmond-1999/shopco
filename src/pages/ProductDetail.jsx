import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'

function ProductDetail() {
  const { id } = useParams()

  return (
    <div>
      <Navbar />
      <div>

      </div>
    </div>
  )
}

export default ProductDetail