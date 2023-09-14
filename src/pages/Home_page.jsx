import Navbar from '../components/Navbar'
import '../styles/home.css';
import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

function Home() {

  const [chalu, setChalu] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setChalu(true);
    } else {
      setChalu(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <div>
      <div className='image'>
        <h2 className='iit-hyd'>
          LOREM HEADING
        </h2>
        {/* <h2 className='iim-chapter'>
          IIM STUDENT CHAPTER
        </h2> */}
        <div className='animation'>
          <TypeAnimation
            sequence={[
              'IIT HYDERABAD',
              3500,
              'IIM STUDENT CHAPTER',
              3500,
            ]}
            speed={320}
            cursor={false} // omit the default css typing animation class
            className="type"
            repeat={Infinity}
          />
        </div>
        <p className='short-desc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero asperiores voluptatem ipsum laboriosam cumque. Ex aliquid dolorum illum, repudiandae laudantium maxime nesciunt et reiciendis culpa perferendis fugiat labore maiores quos!
        </p>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ut. Saepe aliquid, placeat consectetur doloremque laudantium recusandae ab nemo molestiae iure sint architecto dolorem temporibus fuga voluptatem sit hic esse voluptates impedit inventore laborum! Assumenda odit quae, ex provident deserunt doloribus voluptate error repellat quas pariatur laboriosam quos dolor? Harum illum officia laudantium itaque magni. Facilis harum quam beatae quaerat quae nulla temporibus? Maxime id, maiores vitae quisquam fugit accusamus, nostrum a nulla harum alias omnis veritatis natus repellendus eveniet odit et amet ipsum aliquam quaerat ullam consectetur. Illo asperiores dolorum provident laudantium, sequi, obcaecati itaque dicta nulla aut expedita velit in tempora voluptatum dolor atque nesciunt dolores modi qui laborum sunt soluta! Earum amet harum ipsa dolorum, suscipit reprehenderit, rem atque voluptatem rerum praesentium sit quibusdam impedit officia eligendi eum repellendus dignissimos qui quaerat excepturi expedita quis ullam. Deserunt minima aliquid in et impedit aliquam exercitationem iure, recusandae vero earum porro ab obcaecati, libero animi atque. Ullam repudiandae corporis eveniet nesciunt, quis nihil ipsam porro quas deleniti recusandae, unde eius impedit voluptatibus similique maiores quo ea perferendis quisquam doloribus fuga aspernatur. Quisquam quidem ex fugiat ipsa expedita similique in odit quas sequi aut? Quo, ex nesciunt doloremque quasi quam optio dolore facere expedita iusto molestias officia necessitatibus modi hic asperiores excepturi nam omnis ducimus ab aperiam explicabo? Ea nulla omnis sequi aperiam fugiat velit quibusdam ad expedita placeat asperiores doloribus, porro veniam earum quo architecto quas quia ipsum dolores tempora necessitatibus ullam ipsa, nemo deleniti laborum? Repellat, error animi? Corrupti neque odit, perspiciatis quam incidunt repudiandae eveniet praesentium voluptas labore laudantium velit magni! Praesentium autem dicta alias repellat consequuntur, architecto quo asperiores illo modi reiciendis ipsa, officia saepe iusto sapiente enim cumque quam dolor repellendus totam voluptatum ducimus laudantium. Dolorum quas molestias, minus repellendus necessitatibus aspernatur facere dicta cupiditate sed vel atque qui nesciunt voluptatem sequi alias cum numquam explicabo non quisquam fugiat hic pariatur officiis. Quia iure quod amet, numquam exercitationem odit veritatis voluptatibus. Voluptate asperiores veritatis molestias minus excepturi fugit. Reiciendis nobis eum repellendus magnam, earum porro? Et voluptatum quae accusantium iste dolor odio ratione tenetur nulla aliquam laboriosam praesentium culpa totam nostrum maiores dicta, ab inventore deserunt eius delectus sapiente impedit? Cum exercitationem veniam harum ullam cumque itaque possimus laudantium, earum nobis? Porro illo eos quasi! Repellat saepe adipisci eligendi architecto odio incidunt cumque ducimus exercitationem. Officiis veritatis atque odio odit delectus doloribus quam quo adipisci unde nam voluptatum accusamus repellat perferendis molestiae soluta, ducimus hic iste autem nemo! Repudiandae dicta dolorem in, hic nesciunt repellendus necessitatibus error facilis. Nihil veritatis neque dolorum sint aut nam aliquid, consequuntur quis, similique reiciendis porro. Ab quidem molestiae aliquid dignissimos ratione fugiat beatae unde deleniti pariatur quas, hic consequuntur dolorum inventore corrupti facilis reiciendis, odit itaque doloribus eaque. Odio officiis amet laborum voluptatem, rem corrupti, fuga temporibus necessitatibus inventore qui natus officia, ipsum consectetur nemo fugit saepe? Porro placeat iure ipsum et odit voluptatum sed laudantium facere aliquam officia ut ullam reprehenderit reiciendis rem quis nostrum, voluptatibus consectetur vel?
      </p>
    </div>
  )
}

export default Home
