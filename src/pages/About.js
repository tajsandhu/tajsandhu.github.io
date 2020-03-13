import React from 'react';
import '../styles/About.css';

class About extends React.Component {

    componentDidMount = () => {
        this.props.updateTab('about');
    }
    render() {
        return(
            <div className='About_container'>
                <h1 className='About_title'>Who I Am</h1>
                <div>
                    <h2 className='About_category_title'>As a Professional</h2>
                    <p className='About_paragraph'>
                        I am a creative, hard working, and social developer who enjoys solving complex problems and creating effective solutions to modern problems. 
                        I decided to become a developer a few semesters into community college after spending some time drifting between majors. Since I had always 
                        loved technology, teamwork, and problem solving, it felt like a good fit. During my tenure as a student at California State University Long Beach,
                        I found technologies and methodologies that I am passionate about and learned the fundamentals of designing and implementing good applications.
                        I am now confident in my ability to create industry grade software and am excited to be given the opportunity to join and contribute to the industry.
                    </p>
                </div>
                <div>
                    <h2 className='About_category_title'>As a Person</h2>
                    <p className='About_paragraph'>
                        I firmly believe that a well balanced life is something worth striving for, and because of this I do my best to engage in a variety of activities. One
                        of my favorite things is meeting new people. I enjoy hearing about people's life experiences and how they contributed towards who they are today. I also 
                        find exercise to be a wonderful form of stress relief, and my favorite forms of exercise are working out and hiking. When I am in a more reserved or tired mood,
                        I can regularly be found playing my favorite video game or watching whatever baseball, soccer, or hockey game is on at the time.
                    </p>
                </div>
            </div>
        )
    }
}

export default About;