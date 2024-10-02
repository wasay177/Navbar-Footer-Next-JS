import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function About() {
    return(
        <div className="bg-green-700">
            <Header />
            <h1 className="text-9xl font-semibold text-center font-qwitcher text-yellow-400">
              Hi,
              <br />
              I am Abdul Wasay
              <br />
              Quarter 2 Student
              <br />
              Currently I am Learning Full Stack Development
            </h1>
            <Footer />
        </div>
    )
}