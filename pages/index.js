import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Catchphrase from '../components/Catchphrase'
import Features from '../components/Features'
import Contact from '../components/contact'
import Projects from '../components/projects'

export default function Home() {
  return (
    <Layout>
      <Hero/>
      <Catchphrase />
      <Features />
      <Projects />
      <Contact />
    </Layout>
  )
}
