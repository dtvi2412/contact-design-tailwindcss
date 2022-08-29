import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="py-20 px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
      <div className="text-center">
        <h1 className="relative inline uppercase font-bold text-[24px]">
          Contact
          <span className="absolute left-1/2 bg-gray-500 -bottom-2 -translate-x-1/2 h-[1px] w-[60px]"></span>
        </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
        <div className="flex flex-col">
          <label>Your Name (required)</label>
          <input
            {...register('name', {
              required: true,
              minLength: 3,
              maxLength: 100,
            })}
            className="p-2 outline-none border border-white focus:border-gray-400"
          />
          {errors.name?.type === 'required' && (
            <span className="text-red-500 mt-1">Your name is required</span>
          )}
          {errors.name?.type === 'minLength' && (
            <span className="text-red-500 mt-1">Your name min length is 3</span>
          )}
          {errors.name?.type === 'maxLength' && (
            <span className="text-red-500 mt-1">
              Your name max length is 100
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label>Your Email (required)</label>
          <input
            {...register('email', {
              required: true,
              minLength: 3,
              maxLength: 100,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address',
              },
            })}
            className="p-2 outline-none border border-white focus:border-gray-400"
          />
          {errors.email?.type === 'pattern' && (
            <span className="text-red-500 mt-1">Your email is invalid</span>
          )}
          {errors.email?.type === 'required' && (
            <span className="text-red-500 mt-1">Your email is required</span>
          )}
          {errors.email?.type === 'minLength' && (
            <span className="text-red-500 mt-1">
              Your email min length is 3
            </span>
          )}
          {errors.email?.type === 'maxLength' && (
            <span className="text-red-500 mt-1">
              Your email max length is 100
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label>Subject</label>
          <input
            {...register('subject', {
              minLength: 3,
              maxLength: 500,
            })}
            className="p-2 outline-none border border-white focus:border-gray-400"
          />
          {errors.subject?.type === 'minLength' && (
            <span className="text-red-500 mt-1">
              Your subject min length is 3
            </span>
          )}
          {errors.subject?.type === 'maxLength' && (
            <span className="text-red-500 mt-1">
              Your subject max length is 500
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label>Your Message</label>
          <textarea
            {...register('message', {
              minLength: 3,
              maxLength: 500,
            })}
            cols="10"
            rows="10"
            className="resize-none border border-white focus:border-gray-400 outline-none p-2"
          ></textarea>
          {errors.message?.type === 'minLength' && (
            <span className="text-red-500 mt-1">
              Your message min length is 3
            </span>
          )}
          {errors.message?.type === 'maxLength' && (
            <span className="text-red-500 mt-1">
              Your message max length is 500
            </span>
          )}
        </div>
        <button className="bg-gray-700 text-white hover:bg-teal-600 hover:text-black uppercase duration-300 rounded-full p-2">
          Send
        </button>
      </form>
    </div>
  );
}

export default App;
