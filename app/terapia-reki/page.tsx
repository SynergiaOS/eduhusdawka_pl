import type { Metadata } from "next"
import TerapiaRekiClientPage from "./TerapiaRekiClientPage"

export const metadata: Metadata = {
  title: "Terapia Ręki Białystok, Pomigacze - Rozwój Motoryki Małej | EduHustawka",
  description:
    "Terapia ręki dla dzieci w Pomigaczach k. Białegostoku. Wsparcie rozwoju motoryki małej, grafomotoryki i umiejętności pisania. Dojazd na terenie woj. podlaskiego.",
  keywords: "terapia ręki Białystok, motoryka mała Pomigacze, grafomotoryka Podlaskie, pisanie dzieci, terapia ręki województwo podlaskie",
}

export default function TerapiaRekiPage() {
  return <TerapiaRekiClientPage />
}
