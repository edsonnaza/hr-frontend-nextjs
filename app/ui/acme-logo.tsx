import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Logo from "@/public/logoblanco.png";
import Image from 'next/image';
export default function AcmeLogo() {
  return (
    <div className={`${lusitana.className} flex flex-col items-center text-center sm:ml-12 text-white`}>
   <div className="flex flex-col items-center   ">
    <Image
      className="h-14 w-14  "
      src={Logo}
      width={800}
      height={800}
      alt="Picture of the author"
    />
    <p className="text-[44px] mt-0 text-center font-semibold">CEC</p>
  </div>
</div>

  );
}
