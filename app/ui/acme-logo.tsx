
import { lusitana } from '@/app/ui/fonts';
import Logo from "@/public/logoblanco.png";
import Image from 'next/image';
export default function AcmeLogo() {
  return (
    <div className={`${lusitana.className} flex items-center text-center   text-white`}>
    <div className="flex-col items-center md:ml-10  ">
      <Image
        className="h-14 w-14 ml-8  "
        src={Logo}
        width={800}
        height={800}
        alt="Picture of the author"
      />
      <p className="text-[44px] ml-3   text-center font-semibold ">CEC</p>
    </div>
  </div>
  

  );
}
