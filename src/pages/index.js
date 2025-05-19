import Head from "next/head";
import Hero from "@/components/landing/hero";
import About from "../components/landing/about";
import Gallery from "@/components/landing/gallery";
import Testimonials from "@/components/landing/testimonials";
import Contact from "@/components/landing/contact";
import Footer from './../components/ui/footer';
import Layout from "@/components/layout"

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Baylis | Fashion House</title>
        <meta
          name="description"
          content="Showcasing the latest in fashion design"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Hero />
        <About />
        <Gallery />
        <Testimonials />
        <Contact />
      </Layout>
      <Footer />
    </div>
  );
}
