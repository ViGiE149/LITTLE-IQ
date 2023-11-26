import React from 'react';
import './TestimonialsPage.css';

// Dummy testimonial data with avatars
// ... (Your existing code)

// Dummy testimonial data with avatars
// ... (Your existing code)

// Dummy testimonial data with avatars
const testimonials = [
  {
    id: 1,
    author: 'Parent of Anelisa',
    text: "Little IQ Creche has been a second home for our daughter Anelisa. The welcoming environment, coupled with skilled educators, has made her early years truly special. We appreciate the focus on both academic and social development.",
    avatar: 'url_to_sophia_parent_avatar.jpg',
  },
  {
    id: 2,
    author: 'Parent of Ethan',
    text: "Our experience with Little IQ Creche has been outstanding. The emphasis on interactive learning has ignited our son Ethan's curiosity. The regular updates and parent-teacher communication keep us involved in his educational journey.",
    avatar: 'url_to_ethan_parent_avatar.jpg',
  },
  {
    id: 3,
    author: 'Parent of Mia and Noah',
    text: "As parents of twins, Mia and Noah, we sought a creche that values individuality. Little IQ exceeded our expectations. The personalized attention given to each child and the vibrant learning spaces make it a fantastic place for early education.",
    avatar: 'url_to_mia_noah_parent_avatar.jpg',
  },
  {
    id: 4,
    author: 'Single Parent of Jayden',
    text: "Being a single parent, finding the right creche for Jayden was crucial. Little IQ not only provided a safe and nurturing environment but also fostered a sense of community. Jayden loves going to 'school' and has made wonderful friends.",
    avatar: 'url_to_jayden_parent_avatar.jpg',
  },
  {
    id: 5,
    author: 'Parent of Aria',
    text: "Choosing Little IQ Creche was an easy decision for our family. Aria's growth, both academically and emotionally, has been remarkable. The holistic approach to early childhood education sets this creche apart. Grateful for the caring staff.",
    avatar: 'url_to_aria_parent_avatar.jpg',
  },
  // Add more testimonials as needed
];

// ... (Your existing code)


// ... (Your existing code)

const cardColors = ['#FF5733', '#3498db', '#e7e43c', '#9B59B6', '#2ECC71'];
function TestimonialsPage() {
  return (
    <div className="testimonials-container">
      <h2>Testimonials</h2>
      {testimonials.map((testimonial, index) => (
        <div key={testimonial.id} className="testimonial-card" style={{ backgroundColor: cardColors[index % cardColors.length] }}>
          <img className="avatar" src={testimonial.avatar} alt={`${testimonial.author}'s Avatar`} />
          <p className="quote">{testimonial.text}</p>
          <p className="author">- {testimonial.author}</p>
        </div>
      ))}
    </div>
  );
}

export default TestimonialsPage;



