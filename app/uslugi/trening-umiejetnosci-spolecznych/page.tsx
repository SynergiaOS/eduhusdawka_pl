import type { Metadata } from "next"
import TreningUmiejetnosciSpolecznychClientPage from "./TreningUmiejetnosciSpolecznychClientPage"

export const metadata: Metadata = {
  title: "TUS Białystok, Pomigacze - Trening Umiejętności Społecznych 80 zł | EduHustawka",
  description:
    "Zajęcia grupowe TUS dla dzieci w Pomigaczach k. Białegostoku. 80 zł za 50 min. Rozwój umiejętności społecznych i regulacji emocji. Woj. podlaskie.",
  keywords: "TUS Białystok, trening umiejętności społecznych Pomigacze, zajęcia grupowe Podlaskie, umiejętności społeczne dzieci, autyzm ADHD Białystok, 80 zł",
}

export default function TreningUmiejetnosciSpolecznychPage() {
  return <TreningUmiejetnosciSpolecznychClientPage />
}
