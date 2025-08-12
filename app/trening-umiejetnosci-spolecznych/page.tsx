import type { Metadata } from "next"
import TreningUmiejetnosciSpolecznychClientPage from "./TreningUmiejetnosciSpolecznychClientPage"

export const metadata: Metadata = {
  title: "Trening Umiejętności Społecznych (TUS) - 80 zł | EduHustawka",
  description:
    "Zajęcia grupowe TUS dla dzieci z trudnościami społecznymi. 80 zł za 50 min, karnet miesięczny 300 zł. Rozwój umiejętności interpersonalnych i regulacji emocji w Pomigaczach.",
  keywords: "TUS, trening umiejętności społecznych, zajęcia grupowe, dzieci, Pomigacze, umiejętności społeczne, autyzm, ADHD, 80 zł",
}

export default function TreningUmiejetnosciSpolecznychPage() {
  return <TreningUmiejetnosciSpolecznychClientPage />
}
