import { Div } from "../../styles/Elements";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const Email = () => {
  const router = useRouter()
  const { tx } = router.query
    return (
      <Layout title="email">
        <p>Email: {tx}</p>
      </Layout>
    )
  }
  
export default Email