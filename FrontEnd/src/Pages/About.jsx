import React from 'react'
import { useRef } from "react";
import {Helmet} from "react-helmet";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import ImgBox from '../Component/ImgBox';
import ButtonLink from '../Component/ButtonLink';
import Footer from '../Component/Footer';






export default function About() {

    const timeline = gsap.timeline()
    useGSAP(() => {
        // gsap code here...
        timeline.from(".imgCharacter", {duration: 1, scaleX: 0});
        timeline.to(".imgCharacter", {scaleX:1})
        timeline.fromTo(".titleCharacter", {opacity:0, y: -800},{opacity:1, y: -660, delay:1}, "+0.1")
        timeline.fromTo(".animationbottom ", {opacity:0, y: 30},{opacity:1, y: 0, delay:1}, "+1")


      
      })
  return (
    <div className='principalContainer AboutContainer'>
      <Helmet>
        <title>My Title</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
      <ImgBox text={"ABOUT ME"}/>
      <div className='animationbottom'>

      
      <div className="AboutInfo">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, sequi. Facere praesentium expedita dicta sed aspernatur, molestias et exercitationem nulla facilis eveniet eius quo non amet omnis quam est? Quia ipsa temporibus illum quas deserunt libero velit, aliquam corporis. Vitae eum, animi temporibus id ab laboriosam eaque sed itaque fugit, non repudiandae reprehenderit. Accusamus reiciendis possimus nihil cum tempora illum itaque temporibus blanditiis harum expedita deserunt iusto veniam nisi sint, asperiores est excepturi laboriosam? Corporis provident nihil magnam magni! Velit id praesentium cum nisi modi ducimus hic quae saepe accusantium exercitationem. Incidunt sit deleniti corporis, unde sapiente ratione deserunt eum accusamus quia quibusdam ipsum voluptatibus. Beatae nesciunt enim fugit quidem optio, impedit aliquam aliquid, velit dolorum voluptates qui odit vel error non nostrum obcaecati id laborum quod? Enim adipisci sit consequuntur. Sit minima natus tempore repellat consectetur. Dignissimos ut ducimus ullam veniam sunt minima exercitationem consequatur ratione numquam animi, quasi soluta tempore, at beatae recusandae itaque voluptatibus dolor adipisci. Optio vel nulla magni quae sequi cumque. Sequi ab explicabo sunt blanditiis optio aspernatur natus fuga ipsa perspiciatis deserunt. Dolorum facilis iure harum sunt tenetur possimus quia suscipit eum itaque maiores! Quos reprehenderit temporibus dolore ut quis dolor adipisci quibusdam? Ipsam quaerat repellat ut perferendis dolore dicta nam harum quia, quibusdam veniam ullam nobis repellendus blanditiis repudiandae! Quidem fugit harum nemo laborum aliquid nostrum magnam voluptatibus reprehenderit obcaecati quam. Sed reiciendis possimus cumque sapiente ipsa neque odit, facilis adipisci sint est dolorum ips <br /> <br />  am sunt aperiam. Accusamus fuga sed enim similique illo deleniti suscipit dignissimos architecto repellendus. Quas beatae error praesentium iusto illo minus facilis a rem corrupti, et excepturi sed nihil cumque nemo eaque reiciendis deserunt neque est! Cumque ab animi dicta aperiam harum tenetur laboriosam quas earum eaque doloribus ut, ea vel reprehenderit? Reiciendis, recusandae? Cum voluptates iste dignissimos odit placeat praesentium ratione nemo sequi aspernatur repellendus hic voluptatum officia ex, quia possimus molestias ipsam. Atque hic eum iste laudantium error enim fugiat tempora labore commodi? Vitae id, quam quas excepturi illum voluptatum iure et? Libero corrupti esse dolores eligendi temporibus fuga est eum molestias odit. Sequi velit eius ex! Recusandae corrupti quia officia sequi porro ad ex, consectetur a enim sapiente nulla ipsum unde non perferendis harum, magni reiciendis, accusamus soluta numquam ab. Quidem quis omnis doloremque eligendi quos ullam, dicta ex libero. In accusamus deleniti iste voluptatibus debitis tempora, doloribus, amet ea maxime enim minus sed earum placeat iure aperiam! Sed consequuntur cupiditate illum, libero deleniti ex commodi atque inventore corrupti natus. Voluptatem, blanditiis. Quaerat ut veritatis, optio tempora est at deleniti ipsa, mollitia omnis unde molestias dignissimos esse voluptates f <br/><br/> Explicabo dolorem adipisci illum ad cumque non est! Voluptates nesciunt facilis molestiae consectetur aliquid accusamus nulla facere excepturi id eaque, quibusdam unde voluptate nisi laboriosam magnam dignissimos. Aliquid sequi aliquam repellat fugiat veritatis dignissimos velit. Sit soluta ipsum, sint aperiam illum possimus natus accusamus modi perspiciatis ad consequuntur nisi ut necessitatibus iusto amet quidem sapiente quae aut asperiores maxime qui hic ducimus excepturi veritatis? Quibusdam laudantium, aspernatur quidem accusamus itaque animi? Inventore corporis ipsum cumque placeat quos ab pariatur. Vel, tempore veniam amet recusandae inventore dolores quae aliquid, fugiat sint obcaecati similique quibusdam ullam repellat quia asperiores dignissimos? Repellat sunt quis consequatur dolor eius tempore qui nam. At rem saepe recusandae quia fugiat, omnis voluptates tenetur, tempore maxime magni modi iure delectus quae fugit veritatis assumenda sequi quaerat nemo impedit quas atque voluptate. Dignissimos quaerat nemo, aut eum facere illo, iusto delectus error modi deleniti saepe. Tempora tempore fugit sequi soluta laborum, excepturi officia neque amet at ipsum sit eius totam odio beatae velit quae! Impedit, explicabo reiciendis eveniet blanditiis distinctio nulla dolorum, porro laboriosam dignissimos corrupti recusandae cum. Porro enim neque eos sunt facere id placeat temporibus, mollitia doloremque vel fugiat modi obcaecati explicabo distinctio. Consequatur suscipit omnis cupiditate, id tempora perspiciatis accusantium consequuntur quaerat, nihil veritatis dignissimos quis, nam neque beatae mollitia numquam! Sequi debitis eos distinctio iste in, quo ratione ab iusto eveniet labore, ullam autem beatae. Maxime consequuntur vel quod quas<br/><br/> provident cumque deserunt ut amet vero! Dolore veritatis temporibus est molestiae quas aspernatur numquam dignissimos nostrum veniam iste! Obcaecati voluptas aspernatur veritatis veniam, dolorum rerum quibusdam delectus repellat rem dignissimos temporibus, laudantium suscipit a vitae laborum doloribus ipsa vel voluptatibus iure beatae accusamus conse excepturi vitae sunt laboriosam blanditiis alias. Eos rem magnam laudantium eaque dolorum? Iure explicabo asperiores non laboriosam dicta soluta ta hic assumenda quia quis labore! Quam ex, placeat vero maiores, ab distinctio cupiditate accusamus eos facilis totam dolore natus dolores eligendi nemo officiis expedita! Voluptatibus impedit officiis error excepturi odit nobis harum vitae porro eveniet vero incidunt culpa aliquid saepe atque repellendus sunt quas iste, omnis hic dolorem ipsam, expedita eius asperiores facere? A quibusdam quis doloremque rerum totam quo quas facilis. Perferendis excepturi vitae quidem animi sequi mollitia, quod fugiat quae qui assumenda dolores, culpa veritatis ipsa soluta inventore dolorum non, nesciunt blanditiis quam quos quibusdam nobis consequuntur. Reiciendis, odio. Animi commodi sed eum, minima maiores ex quibusdam? Possimus libero aliquid et cumque magni tenetur quia odio vero facilis! Assumenda placeat minima rerum et in odio ea ullam qui excepturi veritatis, sunt cum aliquam eum, omnis aspernatur? Vel, non dolores! Ipsam reiciendis quaerat aspernatur, architecto, magni temporibus deleniti necessitatibus, dolores recusandae consequatur enim quia cum vel ea labore perspiciatis magnam non eos nostrum nobis veritatis delectus nemo dolor veniam? Repellendus perspiciatis repellat officia autem quas nihil? Vel, tenetur facilis assumenda iusto labore enim, nihil corporis perferendis ratione excepturi id quis ducimus? Sapiente aut repudiandae, amet cum rerum temporibus corporis quia nisi id ipsam, architecto reiciendis provident eius molestiae numquam assumenda dignissimos. Magni a aspernatur repellat ipsum doloribus odit cum laudantium incidunt praesentium vero, vel atque! Iste ab eaque aliquid incidunt illum beatae.</p>

      </div>
      <ButtonLink link={'/Project'} name={"SEE MY WORK"}/>
      <h2 className='titleSection'>MY JOURNEY</h2>
      <ul className='journeyContainer'>
        <h3>2023</h3>
        <li>THREEJOURNEY</li>
        <li>OPPENCLASSROOM</li>
        <h3>2022</h3>
        <li>MYDIGITALSCHOOL</li>
        <h3>2020</h3>
        <li>Lycee Marie Laurentcin</li>
      </ul>
      </div>
    <Footer/>

    </div>
  )
}
