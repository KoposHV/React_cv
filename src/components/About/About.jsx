import './About.css';



const About = () => {
  return (
    <div>
     {hero.aboutMe.map((item) => (
      <p>{item.info}</p>
     ))}
    </div>
  )
}

export default About