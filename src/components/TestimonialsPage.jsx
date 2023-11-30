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
        text: 'Little IQ Creche has been a second home for our daughter Anelisa. The welcoming environment, coupled with skilled educators, has made her early years truly special. We appreciate the focus on both academic and social development.',
        avatar: 'url_to_sophia_parent_avatar.jpg',
    },
    {
        id: 2,
        author: 'Parent of Ethan',
        text: "Our experience with Little IQ Creche has been outstanding. The emphasis on interactive learning has ignited our son Ethan's curiosity. The regular updates and parent-teacher communication keep us involved in his educational journey.",
        avatar: 'url_to_ethan_parent_avatar.jpg',
    },
   

    //////
    {
        id: 6,
        author: 'Parent of MANELISI CEBEKHULU ',
        text: 'Mina ngibone umehluko omkhulu ku Manelisi kakhulu uyasikhuluma nje.isingisi nokuba active okuchaza a good communication phakathi kwakhe no Thisha Ukuthi baziphethe kahle izingane kuningi nje uyazama unomehluko omkhulu Siyabonga',
        avatar: 'url_to_aria_parent_avatar.jpg',
    },
    {
        id: 7,
        author: 'grandparent of Lubanzi Kweyama ',
        text: "Good day, Ey ,for me ,I am very impressed with Little I Q'S  creche,  my grandson is wto and will be 3 years next month Feb ,started this year mid year but already he is able to say English words, his communication skills has improved a lot, he is able to identify some of the animals Thanks to the teachers and the Principal of course, they are loving and caring  to our kids, should they notice that your child has any problem ,the will inform the parent, the teachers are so loving, the respect they have for the parents, Keep up the good work Little  I Q'S,  we love u, our kids or grandkids are in good hands.",
        avatar: 'url_to_aria_parent_avatar.jpg',
    },
    {
        id: 3,
        author: 'Parent of Mia and Noah',
        text: 'As parents of twins, Mia and Noah, we sought a creche that values individuality. Little IQ exceeded our expectations. The personalized attention given to each child and the vibrant learning spaces make it a fantastic place for early education.',
        avatar: 'url_to_mia_noah_parent_avatar.jpg',
    },
    {
      id: 8,
      author: 'Parent of Tawanda Ngcongo  ',
      text: "Her vocabulary is improving and everyday she comes back home excited to share what she learnt from school ...she's always vibrant and happy to go to school.",
      avatar: 'url_to_aria_parent_avatar.jpg',
  },
  {
    id: 9,
    author: 'Parent of Amonge Ngcobo ',
    text: "I see a lot of improvement in all aspects of learning. My child started around March but now she has improved in English, numeracy and in alphabets. Thanks to the staff and management for the good work you are doing to our children.To all the parents who wants best for their children, I personally recommend LITTLE IQs",
    avatar: 'url_to_aria_parent_avatar.jpg',
},
{
  id: 10,
  author: 'Parent of Ziyanda Mncwabe  ',
  text: "I am Ziyanda 's mom would like to take this opportunity and thank the Little IQ's for playing a very wonderful role towards my 4 years daughter but she is now able to pray for me, months of the year, days of the week, counting up wards, knows A to Z and so forth, keep up a good work, looking forward to grade R next year. ",
  avatar: 'url_to_aria_parent_avatar.jpg',
},
{
  id: 11,
  author: 'Parent of Nokukhanya Nyandeni   ',
  text: "My  daughter is now able to speak English and she knows the days of the weeks and months and also counting to 10 at the age of 3 years. I can't wait to see what she learns next year.",
  avatar: 'url_to_aria_parent_avatar.jpg',
},
{
  id: 12,
  author: 'Parent of Emuhle Makhaye  ',
  text: "I'm so happy and grateful for the support you did to my child he's now can understand when I say something in English it's only that he can't answer me in English and respect to other people he please and thanks keep it up Team Little IQs",
  avatar: 'url_to_aria_parent_avatar.jpg',
},
{
  id: 13,
  author: 'Parent of Asimbonge Ngcobo  ',
  text: "Little IQ,s staff makes a huge improvement in my child since I was having challenges about him. But since  he entered little IQ,s he likes to write, he sing for us at home , he play with other kids, I hope he will improve more next year. Keep the good work Little IQ,s staff.",
  avatar: 'url_to_aria_parent_avatar.jpg',
},
{
  id: 14,
  author: 'Parent of Aphelele Kweyama   ',
  text: "I would like to express my sincere gratitude for the passion you put into helping my daughter grow and learn. Seeing her prosper and make friends is the most wonderful thing a parent could hope for. Thank you for creating such a fun and educational environment for my daughter.   and thank for her newfound confidence (and growing vocabulary). Knowing my child is in such good hands every day is a blessing. Thank you for all your patience, hard work, and wisdom!.Not to mention your Health environment and good hygiene. ",
  avatar: 'url_to_aria_parent_avatar.jpg',
},
{
  id: 15,
  author: 'Parent of Lwandle Malinga    ',
  text: "What started as a dream,  ended up becoming a dream to most parents who took a risk on you and your stuff. I can see a lot of improvement from my son's behaviour, improvement on his behaviour, concentration and how quickly he was able to love coming to school. I'd like to thank the principal for choosing the best stuff to look after our kids and yes there is always a room for improvement but so far,  am happy.  ",
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
                <div
                    key={testimonial.id}
                    className="testimonial-card"
                    style={{
                        backgroundColor: cardColors[index % cardColors.length],
                    }}
                >
                    <img
                        className="avatar"
                        src={testimonial.avatar}
                        alt={`${testimonial.author}'s Avatar`}
                    />
                    <p className="quote">{testimonial.text}</p>
                    <p className="author">- {testimonial.author}</p>
                </div>
            ))}
        </div>
    );
}

export default TestimonialsPage;
