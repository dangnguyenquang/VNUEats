import HomePage from "@/components/pages/HomePage"
import { getHome } from "@/services/axios/actions/home.action"

export default async function Home() {
  let homeData = undefined

  try {
    homeData = await getHome()
  } catch (error) {}

  return (
    <>
      <HomePage data={homeData} />
    </>
  )
}
