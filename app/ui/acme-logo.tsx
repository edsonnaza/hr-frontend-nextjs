
import { lusitana } from '@/app/ui/fonts';
import Logo from "@/public/logoblanco.png";
import Image from 'next/image';
export default function AcmeLogo() {
  return (
    <div className={`${lusitana.className} sm:h-18 flex items-center justify-center text-center text-white content-center`}>
    <div className="flex place-items-center">
      <Image
        className="h-14 w-14  "
        src={Logo}
        width={800}
        height={800}
        alt="Picture of the author"
      />
      <p className="text-[40px] font-semibold">CEC</p>
    </div>
  </div>
  
  
  

  );
}
