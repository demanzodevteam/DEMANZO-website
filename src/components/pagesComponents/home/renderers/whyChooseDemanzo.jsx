import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../../../config/urls';
import HeroTwoAnnimation from './HeroTwoAnnimation';

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
      .get(API_URL + 'why-it-companies-choose-demanzo')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Failed to fetch data:', error);
      });
  }, []);

  return (
    <>

      <div className="flex flex-col justify-center gap-4 py-8 lg:py-20">
        <p className="text-[40px] font-[700] text-[#191d27]">
          {data?.title}
        </p>
        <p
          className="text-[16px] font-[500] text-[#616670] leading-relaxed"

        >{data.content}</p>
      </div>
      <HeroTwoAnnimation image={data.image} client:visible />

    </>

  );
};

export default WhyChooseDemanzo;
