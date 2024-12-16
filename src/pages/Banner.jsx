import { motion } from "framer-motion"
import image1 from '../assets/image/image1.jpg';
import image2 from '../assets/image/image2.jpg';


const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">

                
                <div className="flex-1">
                <motion.img
                animate={{y: [0, 70, 0]}}
                transition={{duration: 10, repeat: Infinity}}
                src={image2}
                className="max-w-xs rounded-t-[40px] border-l-4 border-blue-500 rounded-br-[40px] shadow-2xl" />
                <motion.img
                animate={{x: [50, 140, 50]}}
                transition={{duration: 10, delay:5, repeat: Infinity}}
                src={image1}
                className="max-w-xs rounded-t-[40px] border-l-4 border-blue-500 rounded-br-[40px] shadow-2xl" />
                </div>


                <div className="flex-1">
                <motion.h1 
                animate={{x: 50}}
                transition={{duration:2, delay:1, ease: 'easeInOut', repeat:Infinity }}
                
                className="text-5xl font-bold">Least <motion.span
                animate={{color: ['#fcba03','#4efc03','#03dbfc']}}
                transition={{duration:2, delay:1, ease:'easeInOut',repeat:Infinity }}
                >Jobs</motion.span> For You ?</motion.h1>
                <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;