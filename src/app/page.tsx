import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {

  return (
    <div className=" max-w-screen-sm mx-auto p-4 bg-white rounded-lg  w-80% " >
      <div className="flex flex-col h-screen align-center justify-center w-80 mx-auto "  >
        <Button className="m-2" asChild>
          <Link href="/formulario">Formulário</Link>
        </Button>
        <Button className="m-2" asChild>
          <Link href="/lista">Lista</Link>
        </Button>
      </div>
    </div>
  )
}


