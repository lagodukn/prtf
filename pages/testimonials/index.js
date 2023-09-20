import TestimonialSlider from "../../components/TestimonialSlider";

const Testimonials = () => {
  return (
  <div className='bg-primary/60 h-[85vh] xl:h-[90vh] m-4 rounded-3xl text-center flex flex-col justify-center'>
    <div className='container mx-auto h-hull flex flex-col justify-center items-center'>
      <h2 className='h2 mb-8'>
        O que dizem <span className='text-purple-600'>geralmente.</span>
      </h2>
      <div>
        <TestimonialSlider />
      </div>
    </div>
  </div>
  );
};

export default Testimonials;
