import React from 'react';
import './TestimonialsPage.css';

  // Dummy testimonial data
  const testimonials = [
    {
      id: 1,
      author: 'John Doe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo odio sed lorem interdum, a dictum elit feugiat.',
    },
    {
      id: 2,
      author: 'Jane Smith',
      text: 'In hac habitasse platea dictumst. Curabitur ut fringilla odio. Nullam cursus neque in metus venenatis scelerisque.',
    },
    {
      id: 3,
      author: 'Alice Johnson',
      text: 'Fusce a euismod elit. Nullam fringilla purus ut mauris luctus, vel vulputate neque pharetra. Ut non tincidunt arcu.',
    },
    {
      id: 4,
      author: 'Bob Williams',
      text: 'Vivamus tincidunt risus in neque condimentum, eu dignissim lectus hendrerit. Sed bibendum facilisis sagittis.',
    },
    {
      id: 5,
      author: 'Eva Brown',
      text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean id massa nec turpis volutpat finibus.',
    },
    {
      id: 6,
      author: 'Mike Johnson',
      text: 'Suspendisse potenti. Fusce vitae justo at justo consequat semper. Vivamus auctor varius felis, ac convallis augue sollicitudin at.',
    },
  ];
  

  
  function TestimonialsPage() {
    return (
      <div className="testimonials-container">
        <h2>Testimonials</h2>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <p className="quote">{testimonial.text}</p>
            <p className="author">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    );
  }

export default TestimonialsPage;
