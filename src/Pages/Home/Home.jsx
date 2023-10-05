import Marquee from "react-fast-marquee";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import LeftAside from "../../components/LeftAside/LeftAside";
import Aside from "../../components/Aside/Aside";
import { useLoaderData } from "react-router-dom";
import HomeNews from "./HomeNews";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Home = () => {
useEffect(()=>{
  Aos.init()
},[])



  const allNews=useLoaderData()
  return (
    <div>
      <Header />
      <div className="mt-5 flex items-center gap-5 bg-slate-200 p-2 rounded-md my-10">
        <button className="btn bg-[#D72050;] text-white">Latest</button>
        <Marquee direction="right" speed={100}>
          <p>{allNews.length}</p>
          <p>Hello</p>
          <p>Hello</p>
        </Marquee>
      </div>
      <Navigation />

      <main className="grid grid-cols-4 my-20 gap-5 ">
        <div className="border  ">
          <LeftAside />
        </div>
        <div className=" col-span-2 px-2">
         <div className="flex flex-col gap-5 " >
          {
            allNews.map(news=><HomeNews key={news._key} news={news}/>)
          }
         </div>
        </div>
        <div>
          <Aside />
        </div>
      </main>
    </div>
  );
};

export default Home;
