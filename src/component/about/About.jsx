import SectionTitle from "../service/SectionTitle"

function About() {
  return (
    <div>
        <div className="w-full md:w-6/12">
            <SectionTitle>A propos</SectionTitle>
        </div>
        <div>
            <img src="../../public/mon_profile.png" alt="about" />
        </div>
    </div>
  )
}

export default About