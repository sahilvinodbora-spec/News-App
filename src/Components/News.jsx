import axios from "axios";
import React,{useState,useEffect} from "react";

function News({ }) {
     const [newArticle, setArticle] = useState([]);
        const abc = async () => {
            const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2768e57c95b9484c82d67821fda0384b`)
            const data =  res.data;
            setArticle(data.articles);
        };
        useEffect(() => {
            abc();
        })
    return (
        <div className=' flex flex-col items-center justify-center py-25'>
            
            {newArticle.map((value, index) => {
                return (
                    <div className='flex  flex-col justify-center items-center shadow-lg bg-gray-400 w-[600px]  mb-12 hover:bg-black text-white hover:scale-113'>


                        <div className='p-4 font-serif font-bold'>
                            <h1>{value.title}</h1>
                        </div>

                        <div className="flex gap-2">
                            <div className=' h-[100%] w-full shadow-xl/30 '>
                                <img className="flex-col  h-100 w-100  " src={value.urlToImage} />
                            </div>
                        </div>
                        <div>
                            <p classname=' text-sm'>{value.description}</p>
                        </div>

                    </div>

            

                )
            })}
            
        </div>
    )
}
export default News