import Image from "next/image";
import { dataListaMusica } from "@/services";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-lvh">
      <h1 className="text-[2.5rem]">appcatolico</h1>
      uma forma simples de cantar para Deus
      {/* <Image
        className="dark:invert"
        src="https://nextjs.org/icons/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      {dataListaMusica?.map(i => <a key={i.nome} href={'/detalhe/'+ i.id}>{i.nome}</a>)} */}
    </div>
  );
}
