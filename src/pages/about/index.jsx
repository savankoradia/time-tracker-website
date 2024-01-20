import { MDBBtn } from "mdb-react-ui-kit";
const About = () => {
  return (
    <div>
      <h2>About me</h2>
      <p>
        Hi there! I'm Savan Koradia, the developer behind this time tracking
        application. I'm passionate about creating tools that help people work
        more efficiently and productively, and I'm excited to share this project
        with you.
      </p>
      <p>
        Feel free to check out links to learn more about my experience and skills.
        <MDBBtn tag="a" href="https://savankoradia.com/" className="stretched-link" color="success">Blog</MDBBtn>&nbsp;
        <MDBBtn tag="a" href="https://www.linkedin.com/in/savan-koradia/" className="stretched-link">LinkedIn</MDBBtn>
      </p>
      <h4>Why Time Tracking?</h4>
      <p>
        I believe that effective time management is essential for success in any
        field. Whether you're a freelancer, a small business owner, or part of a
        large team, understanding how you spend your time can help you boost
        productivity, identify areas for improvement, and achieve your goals.
      </p>
      <h4>My Vision for This App</h4>
      <p>
        I created this time tracking application with a simple goal in mind: to
        make time management easier and more accessible for everyone. I wanted
        to build a tool that was not only powerful but also user-friendly and
        visually appealing. That's why I chose to use React for its flexibility
        and performance, and MDBootstrap for its clean and modern design.
      </p>
      <h4>What's Next?</h4>
      <p>
        I'm constantly working to improve this application and add new features.
        I'm open to feedback and suggestions, so please feel free to reach out
        if you have any ideas!
      </p>
      <p>
        I'm excited to see how this app can help you take control of your time
        and achieve your goals.
      </p>
      <p>Thanks for visiting!</p>
    </div>
  );
};
export default About;
