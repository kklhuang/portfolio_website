import React from 'react';
import artImage from '../images/art.jpg';
import photographyImage from '../images/photo.jpeg';
import musicImage from '../images/aca.JPG';
import gamingImage from '../images/poro.png';


function Hobbies() {
  const hobbies = [
    { 
      title: 'Art', 
      description: 'Sketching, painting, <a href="https://www.instagram.com/kkogumakai/" target="_blank" rel="noopener noreferrer" class="hobby-link">digital art</a>. I go back and forth between realism and more stylised art.',
      image: artImage
    },
    { 
      title: 'Photography', 
      description: 'Just a hobbyist photographer who especially loves playing with <a href="https://www.instagram.com/kkl.png/" target="_blank" rel="noopener noreferrer" class="hobby-link">film</a>.',
      image: photographyImage
    },
    { 
      title: 'Music', 
      description: 'Been playing multiple instruments for forever. I also sing with a few <a href="https://www.instagram.com/uwacc/" target="_blank" rel="noopener noreferrer" class="hobby-link">a cappella groups at UW</a>!',
      image: musicImage
    },
    { 
      title: 'Gaming', 
      description: 'Loved playing games since I was a kid. Might be working on a game myself as well..?',
      image: gamingImage
    },
  ];  

  return (
    <div className="page hobbies">
      <h2>For Fun ✰ .ᐟ </h2>
      <div className="hobbies-container">
        {hobbies.map((hobby, index) => (
          <div key={index} className="hobbies-panel">
            <h3>{hobby.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: hobby.description }}></p>
            <img src={hobby.image} alt={hobby.title} className="hobby-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hobbies;
