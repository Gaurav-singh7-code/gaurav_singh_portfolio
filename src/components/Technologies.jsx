// import { FaUnity } from "react-icons/fa6";
// import { SiAnaconda } from "react-icons/si";
// import { TbBrandPython } from "react-icons/tb";
// import { SiGnubash } from "react-icons/si";
// import { FaLinux } from "react-icons/fa";
// import { SiScikitlearn } from "react-icons/si";
// import { motion } from "framer-motion";
// import { FaJava, FaPython, FaGitAlt } from "react-icons/fa6";
// import { SiMysql } from "react-icons/si";

// // import { FaJava, FaPython, FaHtml5, FaCss3, FaGitAlt, FaDocker, FaMaven, FaTableau, FaAndroid } from "react-icons/fa";
// // import { SiMysql, SiVisualstudiocode, SiIntellijidea, SiJupyter, SiPandas, SiNumpy, SiTensorflow, SiPytorch } from "react-icons/si";


// const iconVariants = (duration) => ({
//     initial: { y: -10 },
//     animate: {
//         y: [10, -10],
//         transition: {
//             duration: duration,
//             ease: "linear",
//             repeat: Infinity,
//             repeatType: "reverse",
//         },
//     },
// });

// const Technologies = () => {
//     return (
//         <div className="border-b border-neutral-800 pb-24">
//             <motion.h1 
//                 whileInView={{ opacity: 1, y: 0 }}
//                 initial={{ opacity: 0, y: -100 }}
//                 transition={{ duration: 1.5 }}
//                 className="my-20 text-center text-4xl">
//                 TECHNOLOGIES
//             </motion.h1>
//             <motion.div 
//                 whileInView={{ opacity: 1, x: 0 }}
//                 initial={{ opacity: 0, x: -100 }}
//                 transition={{ duration: 1.5 }}
//                 className="flex flex-wrap items-center justify-center gap-4">
//                 <motion.a 
//                     href="https://www.oracle.com/java/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     variants={iconVariants(2.5)}
//                     initial="initial"
//                     animate="animate"
//                     className="rounded-2xl border-4 border-neutral-800 p-4">
//                     <FaJava className="text-7xl text-red-400" />
//                 </motion.a>
//                 <motion.a 
//                     href="https://www.mysql.com/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     variants={iconVariants(5)}
//                     initial="initial"
//                     animate="animate"
//                     className="rounded-2xl border-4 border-neutral-800 p-4">
//                     <SiMysql className="text-7xl text-blue-400" />
//                 </motion.a>
//                 <motion.a 
//                     href="https://www.python.org/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     variants={iconVariants(3)}
//                     initial="initial"
//                     animate="animate"
//                     className="rounded-2xl border-4 border-neutral-800 p-4">
//                     <FaPython className="text-7xl text-yellow-200" />
//                 </motion.a>
//                 <motion.a 
//                     href="https://git-scm.com/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     variants={iconVariants(7)}
//                     initial="initial"
//                     animate="animate"
//                     className="rounded-2xl border-4 border-neutral-800 p-4">
//                     <FaGitAlt className="text-7xl text-orange-500" />
//                 </motion.a>
//             </motion.div>
//         </div>
//     );
// };

// export default Technologies;


import { FaJava, FaPython, FaHtml5, FaCss3, FaGitAlt, FaDocker, FaAndroid } from "react-icons/fa";
import { SiMysql, SiVisualstudiocode,SiTableau, SiApachemaven,SiIntellijidea, SiJupyter, SiPandas, SiNumpy, SiTensorflow, SiPytorch } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">
                TECHNOLOGIES
            </motion.h1>
            <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.a 
                    href="https://www.oracle.com/java/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJava className="text-7xl text-red-400" />
                </motion.a>
                <motion.a 
                    href="https://www.python.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPython className="text-7xl text-yellow-200" />
                </motion.a>
                <motion.a 
                    href="https://www.mysql.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMysql className="text-7xl text-blue-400" />
                </motion.a>
                <motion.a 
                    href="https://html.spec.whatwg.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaHtml5 className="text-7xl text-orange-400" />
                </motion.a>
                <motion.a 
                    href="https://www.w3.org/Style/CSS/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaCss3 className="text-7xl text-blue-500" />
                </motion.a>
                <motion.a 
                    href="https://git-scm.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={iconVariants(7)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaGitAlt className="text-7xl text-orange-500" />
                </motion.a>
                <motion.a 
                    href="https://www.docker.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaDocker className="text-7xl text-cyan-400" />
                </motion.a>
                <motion.a 
                    href="https://maven.apache.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiApachemaven className="text-7xl text-red-400" />
                </motion.a>
                <motion.a 
                    href="https://code.visualstudio.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiVisualstudiocode className="text-7xl text-blue-400" />
                </motion.a>
                <motion.a 
                    href="https://www.jetbrains.com/idea/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiIntellijidea className="text-7xl text-purple-400" />
                </motion.a>
                <motion.a 
                    href="https://developer.android.com/studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaAndroid className="text-7xl text-green-400" />
                </motion.a>
                <motion.a 
                    href="https://jupyter.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={iconVariants(7)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiJupyter className="text-7xl text-orange-500" />
                </motion.a>
                <motion.a 
                    href="https://pandas.pydata.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPandas className="text-7xl text-blue-500" />
                </motion.a>
                <motion.a 
                    href="https://numpy.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiNumpy className="text-7xl text-blue-300" />
                </motion.a>
                <motion.a 
                    href="https://www.tensorflow.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTensorflow className="text-7xl text-orange-400" />
                </motion.a>
                <motion.a 
                    href="https://pytorch.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPytorch className="text-7xl text-red-500" />
                </motion.a>
                <motion.a 
                    href="https://www.tableau.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTableau className="text-7xl text-blue-300" />
                </motion.a>
            </motion.div>
        </div>
    );
};

export default Technologies;