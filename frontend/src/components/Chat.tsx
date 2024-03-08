import React, { useState,useRef } from 'react';
import { IoMdArrowForward } from "react-icons/io";
import axios from 'axios';
import { AIResponseComponent } from './AIResponseComponent';

export const Chat: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [AIResponse, setAIResponse] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const formRef = useRef(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevent the default behavior (newline)
      if (formRef.current) {
        (formRef.current as any)?.requestSubmit(); // Programmatically submit the form
      }
    }
  };
  const handleSendMessage = async () => {
    try{
      setLoading(true)
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "/answer",
        {
          data: inputValue,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const { data } = response;
      setAIResponse(data["response"]);
      setLoading(false)
    }
    catch(err){
      setLoading(false)
      console.log("Error",err)
      setInputValue("")
    }
    
  };

  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className='w-8/12 fixed top-10 text-lg font-mono '>
        <h1 className='text-3xl mb-10'>Crack me!</h1>
        <AIResponseComponent aiResponse={AIResponse}/>
      </div>
      <h1 className='hidden'>
        78GLSnP4v8in7B5vbmJ0rMzfrqbZwfFecbeezkNUFpLMR/iD1EpsggSAV4LjBb02Af1PoKn4mFttHWSCS13RhzBeqgMIS/u7mO6HJPte4zw=
      </h1>
      <div className="absolute bottom-20 w-8/12 flex">
        <form className="w-full flex" onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            ref={formRef}
            
          >
          <input
            type="text"
            className={`border ${!loading?"border-gray-600" : "border-gray-200"} focus:outline-none text-sm text-gray-700 leading-tight rounded-l-lg flex-1 p-3 transition-colors duration-200 ease-in-out`}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            disabled={loading}
          />
            <button
                type="submit"
                disabled={loading}
                className={`border border-l-0 ${!loading?"border-gray-600" : "border-gray-200 opacity-30"} bg-sky-300 hover:bg-sky-400 text-white px-4 py-2 rounded-r flex items-center justify-center transition duration-150 ease-in-out`}
                >
                  <IoMdArrowForward className='text-gray-700'/>
            </button>
        </form>
      </div>
    </div>
  );
};

