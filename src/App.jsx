import Header from './components/Header/HeaderF';
import MainSection from './containers/MainSection/Section';


import List from './components/List/List';
import CardCourse from './components/Card/CardCourse';
import WebDesign from './assets/images/web-design.jpeg';
import profile from './assets/images/profile.jpeg';
import CardStudent from './components/Card/CardStudent';

function App() {

  return (
    <>
      <Header />
      <MainSection />


      {/* <Button classBtn="btn btn__second" text={"Singn In"} />
      <Button classBtn="btn btn__primary" text={"Free trial"} />
      <Button classBtn="btn btn__icon" icon="<box-icon name='play' color='#fff' class='btn__icon-bgr'></box-icon>" text={"What's Etech?"} />

      <List
        icon="<box-icon type='solid' name='graduation' color='#fff' class='icon__bgr'></box-icon>"
        title="Online Degrees"
        text="Earn accredited degrees from comfort of your home, opening doors to a world of possibilities." />
      <List
        icon="<box-icon name='book-open' color='#fff' class='icon__bgr'></box-icon>"
        title="Shor Courses"
        text="Enhance your skills with our concise and focused short courses, designed for quick and effective learning." />
      <List
        icon="<box-icon type='solid' name='user' color='#fff' class='icon__bgr'></box-icon>"
        title="Training From Experts"
        text="Immerse yourself in knowledge with industry experts guiding you through hands-on experience." />
      <List
        icon="<box-icon name='play' color='#fff' class='icon__bgr'></box-icon>"
        title="1.5k+ Video Courses"
        text="Drive into a vast library of over 1.5k video courses covering many subjects, offering a visual learning experience." />

      <CardCourse
        imageCourse={WebDesign}
        courseName={"Web Design"}
        qualification={"4.9"}
        subject={"Web Design & Development"}
        classesNumber={"25"}
        studentsNumber={"185"}
        price={"560.00"}
        teacherName={"J. Morson"}
        teacherProfile={profile}
      />
      <CardStudent
        personName='Alexa Rodriguez'
        courseName='Web Developer'
        numStars={2}
        text='Enrolling in courses at this eLearning platform was a game-changer for me. Absolutely transformative experience!'
      /> */}
    </>

  )
}

export default App
