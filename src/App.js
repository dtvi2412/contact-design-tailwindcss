import './App.css';

function App() {
  return (
    <div className="py-20 px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
      <div className="text-center">
        <h1 className="relative inline uppercase font-bold text-[24px]">
          Contact
          <span className="absolute left-1/2 bg-gray-500 -bottom-2 -translate-x-1/2 h-[1px] w-[60px]"></span>
        </h1>
      </div>
      <form className="flex flex-col gap-8">
        <div className="flex flex-col">
          <label>Your Name (required)</label>
          <input className="p-2 outline-none border border-white focus:border-gray-400" />
        </div>
        <div className="flex flex-col">
          <label>Your Email (required)</label>
          <input className="p-2 outline-none border border-white focus:border-gray-400" />
        </div>
        <div className="flex flex-col">
          <label>Subject</label>
          <input className="p-2 outline-none border border-white focus:border-gray-400" />
        </div>
        <div className="flex flex-col">
          <label>Your Message</label>
          <textarea
            cols="10"
            rows="10"
            className="resize-none border border-white focus:border-gray-400 outline-none p-2"
          ></textarea>
        </div>
        <button className="bg-gray-700 text-white hover:bg-teal-600 hover:text-black uppercase duration-300 rounded-full p-2">
          Send
        </button>
      </form>
    </div>
  );
}

export default App;
