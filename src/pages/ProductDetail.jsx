import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ProductInfo from '../components/ProductInfo'

function ProductDetail() {
  const { id } = useParams()

  return (
    <div>
      <Navbar />
      <div>
        <ProductInfo key={id} productId={id} />
      </div>
    </div>
  )
}

export default ProductDetail