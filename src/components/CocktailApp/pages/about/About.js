import "./about.css";
import img from "./img/mahdi-soultana.png";
const About = () => {
  return (
    <div className="about_contianer">
      <div>
        <div className="imgContainerAbout">
          <img src={img} alt="Mahdi Soultana" />
          <div className="hi">
            <span>👋</span>
            <span>Hi</span>
          </div>
        </div>
      </div>
      <div>
        <h4>Hello I'm really Happy To See You Here 🥰! </h4>
        <h3>Who is This?👀👆</h3>
        <p>
          Hey Helloooooo 😆 <br /> I am Mahdi Soultana Form Morroco I web
          developer by JavaScript HTML CSS I Love my Path Javascrpit Curve
          Learning Ilove to discover and work with the latest technologie Like{" "}
          <b>ReactJS</b> , <b>NextJs</b>, <b>Gatsby </b>
          <b> GraphQL</b>, <b> MongoDB </b>(Mongoose) <b>Socket</b>,{" "}
          <b>FireBase</b> , <b>NodeJS</b>,<b>contentFull</b>, <b>wordpress</b>,
          <b>stripe</b>.
          <br />{" "}
        </p>
        <p className="wich">
          {" "}
          I hope To Find and meet all kind teams developpers and clients for
          work and build good solid realtionship togther forward to make earth
          somewhere good for living !
        </p>
        <p className="end">
          {" "}
          Peace🙏 <br />
          Thank you for All 🥳
        </p>
        <h2 className="findme">You can Reach me on My Social Netwok 👇 !</h2>
      </div>
    </div>
  );
};

export default About;
