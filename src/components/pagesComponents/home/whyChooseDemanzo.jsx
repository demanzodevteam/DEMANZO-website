import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../../config/urls';
import HeroTwoAnnimation from '../../HeroTwoAnnimation';

const WhyChooseDemanzo = () => {
  const [data, setData] = useState({
    title: '',
    content: '',
    button: '',
    link: '',
    image: '',
  });

  useEffect(() => {
    axios
      .get(API_URL+'why-it-companies-choose-demanzo')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Failed to fetch data:', error);
      });
  }, []);

  return (
    <>
    {/* <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] px-4 lg:px-8 gap-4">
      <div className="flex flex-col justify-center gap-4 py-8 lg:py-20">
        <p className="text-[40px] font-[700] text-[#191d27]">
          {data.title}
        </p>
        <p
          className="text-[16px] font-[500] text-[#616670] leading-relaxed"
          dangerouslySetInnerHTML={{ __html: data.content }}
        ></p>
      </div>
      <HeroTwoAnnimation image={data.image}/>
    </div> */}




    <div class="flex flex-col justify-center gap-4 py-8 lg:py-20">
         <p className="text-[40px] font-[700] text-[#191d27]">
          {data?.title}
        </p>
        <p
          className="text-[16px] font-[500] text-[#616670] leading-relaxed"
        
        >{data.content}</p>
    </div>
    <HeroTwoAnnimation image={data.image} client:load/>

    </>
    

  );
};

export default WhyChooseDemanzo;
