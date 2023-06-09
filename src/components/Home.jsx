import React, { useEffect } from 'react';
import { SlCarousel, SlCarouselItem } from '@shoelace-style/shoelace/dist/react';

function Home() {
  return (
    <div>
      <div>
        <marquee width="100%" direction="left" height="50px">
         Welcome to Sri Kotilinga Hari Hara Mahakshetram 
        </marquee>
        <SlCarousel pagination autoplay>
          <SlCarouselItem>
            <img
              alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
              src="/1.jpg"
            />
          </SlCarouselItem>
          <SlCarouselItem>
            <img
              alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
              src="/temp1.jpg"
            />
          </SlCarouselItem>
          <SlCarouselItem>
            <img
              alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
              src="/temp.jpg"
            />
          </SlCarouselItem>
          <SlCarouselItem>
            <img
              alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
              src="/2.jpg"
            />
          </SlCarouselItem>
          <SlCarouselItem>
            <img
              alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
              src="/3.jpg"
            />
          </SlCarouselItem>
          <SlCarouselItem>
            <img
              alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
              src="/4.jpg"
            />
          </SlCarouselItem>
          <SlCarouselItem>
            <img
              alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
              src="/5.jpg"
            />
          </SlCarouselItem>
          <SlCarouselItem>
            <img
              alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
              src="/6.jpg"
            />
          </SlCarouselItem>
        </SlCarousel>
      </div>
      <div className='sides'>
        <h3>About Sri Kotilinga Hari Hara Mahakshetram</h3>
        <p className="paragraph">Sri Kotilinga Hari Hara Mahakshetram is situated on the banks of the Krishna river, at Muktyala village. Sages like Baradwaja performed severe penance and got salvation here. The Krishna River flows north at this place & it is known as Uttaravahani. Due to its sacredness, it got the name Uttarkashi.
          The main deity in the Garbhalaya is Pancha mukha Amruta Lingeswara Swamy. The lord has four faces on four sides, one face- Urdhva mukha. There are four Nandis facing the shiva linga on four sides. Sri Kotilinga Pancha Mukha Amrita Lingeswara Swamy temple was constructed in five stories vimana. This temple alone has five phases and four entrances. There is a big Nandi in the temple. During the Tretayuga sage, Baradwaj set a hermitage here and used to have a holy dip in the Krishna waters.
          it is said that a couple of Nandieeswara were seen. Still, the devotees believe that one golden shivas temple is situated in the depths of the water. The great Rushya Srunga Maharshi performed penance in the cave nearby. The chanting of Sama Gana was heard from the cave and was written in Brahmanda Purana. It owned four dwajastambas at four sides and on either side of the Shivaji’s temple.
          In the Mukteswara Mahakshetra, a Sivalaya was constructed by BaliChakravarthi. Lord Shiva was visited by Lord Shri Rama and Lakshmana in Tretayuga, and also by Pandavas in Dwarparayuga. The Shatavahanas and many kings visited Mukteswaralaya. In 1946 Sree Chandrasekhara Saraswathi of Sree Kanchi Kamakoti Peetham, known as the incarnation of Lord Shiva also visited this sacred place. This temple is adorned with Shat Ganapathi’s and Shat Subramanya’s temples. It is also adorned with 108 sub-temples and LordVenkateswara along with his consorts Sridevi and Bhudevi is also seated here.
          The temple is under the endowment department and the department is developing it. Anyone can do linga Prathista here. On the eastern side of the temple, there are Dwadasa jyotirlinga temples. The temple authorities want to install Koti Lingala – which means to install one crore Shiva lingas. There is a big Shiva idol on the premises. The Lord is known as Kamakshi Sameta Pancha mukha Amruta Lingeswara Swamy. </p>
        <h3>Timings to visit Sri Kotilinga Hari Hara Mahakshetram
        </h3>
        <p className="paragraph">Mornings: 06:00 AM – 12:30 PM <br />Evenings: 04:00 PM – 07:30 PM</p>

        <h3>Festivals celebrated at Sri Kotilinga Hari Hara Mahakshetram
        </h3>
        <span className="paragraph">Mahashivaratri, Karthika Masam, Ugadi.</span>
        <h3>Address</h3>
        <p className="paragraph">KotiLingala Road, Jaggayapeta Mandal, Mukteswarapuram, Jaggayyapeta, Krishna District, Andhra Pradesh, 521457, India.</p>
        <h3>Sri Kotilinga Hari Hara Mahakshetram Map</h3><br/>
        <span>click on the location icon for the route</span>
        <a href='https://goo.gl/maps/bmYi7SWmrLvvV4VX8'><img style={{paddingLeft:"20px", height:"25px", width:"20px"}} src='images.png' alt=""/></a>
      </div>
    </div>
  )
}

export default Home