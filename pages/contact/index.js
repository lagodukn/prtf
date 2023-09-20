import {BsArrowRight} from 'react-icons/bs'
import ParticlesContainer from '../../components/ParticlesContainer';


const Contact = () => {
  return (
    <div className='bg-primary/60 h-[85vh] xl:h-[90vh] m-4 rounded-3xl'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          <h2 className='h2 text-center mb-12'>
            Bora
            <span className='text-accentpink'> dar certo</span>
          </h2>
          <form className='flex-1 flex flex-col gap-6 w-full mx-auto'>
            <div className='flex gap-x-6 w-full'>
              <input type='text' placeholder='Seu nome aqui' className='input' />
              <input type='email' placeholder='Seu e-mail agora' className='input' />
            </div>
            <input type='text' placeholder='Sobre o que posso ajudar?' className='input' />
            <textarea placeholder='Fale mais sobre...' className='textarea'></textarea>
            <button className='btn rounded-full border-2 border-white/20 max-w-[170px] px-8 transition-all duration-300 flex flex items-center justify-center overflow-hidden hover:border-accentpink group'>
              <span className='group hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Bora nessa!</span>
              <BsArrowRight className='text-accentpink -translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 trasition-all duration-300 absolute text-[22px]'/>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
