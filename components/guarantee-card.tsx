import { motion } from "framer-motion";

interface GuaranteeCardProps {
  text: string;
  delay: number;
  header: string;
}

export default function GuaranteeCard({
  text,
  header,
  delay,
}: GuaranteeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="relative"
    >
      <div className="absolute -top-8 right-4 text-red-500  font-bold"></div>
      <div className="bg-orange-50  rounded-lg p-6 shadow-sm">
        <h3 className="text-xl text-orange-500 font-bold mb-2">{header}</h3>
        <p className="text-gray-700 text-lg">{text}</p>
      </div>
      <div className="absolute -z-10 top-0 right-0 w-24 h-24">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-red-50">
          <path d="M0,100 C30,100 100,70 100,0 L100,100 L0,100 Z" />
        </svg>
      </div>
    </motion.div>
  );
}
