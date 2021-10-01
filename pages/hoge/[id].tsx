import { useRouter } from 'next/router'
import Layout from '../../components/layout'

export default function HogeId() {
  const router = useRouter()
  const { id } = router.query
  return (
    <Layout>
      <article>/hoge/{id}</article>
    </Layout>
  )
}