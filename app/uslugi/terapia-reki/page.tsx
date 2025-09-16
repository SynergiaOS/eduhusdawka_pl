import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Phone, Hand } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terapia Ręki - 120 zł gabinet, 150 zł dojazd | EduHustawka",
  description: "Profesjonalna terapia ręki w Pomigaczach. 120 zł (gabinet), 150 zł (dojazd). Rozwój motoryki małej, grafomotoryki i umiejętności pisania u dzieci.",
  keywords: "terapia ręki, motoryka mała, grafomotoryka, pisanie, Pomigacze, 120 zł",
}

export default function TerapiaRekiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Header />
      
      <main className="pt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="py-16">
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-fit mx-auto mb-6">
                <Hand className="h-12 w-12 text-purple-600" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Terapia <span className="text-purple-600">Ręki</span>
              </h1>
              <p className="text-xl text-purple-600 mb-8">
                Rozwój motoryki małej i umiejętności grafomotorycznych
              </p>
              
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold mb-6 text-purple-700">
                  Dla kogo jest terapia ręki?
                </h2>
                
                <p className="text-lg mb-6">
                  <strong>Rodzicu, jeśli Twoje dziecko:</strong>
                </p>
                
                <ul className="text-left space-y-3 mb-8">
                  <li>• niechętnie pisze, rysuje, lepi z plasteliny</li>
                  <li>• ma trudności z ubieraniem się, zapinaniem guzików</li>
                  <li>• zaciska dłonie zbyt mocno na przedmiotach</li>
                  <li>• unika dotykania nowych faktur i powierzchni</li>
                  <li>• ma trudności z używaniem nożyczek</li>
                  <li>• słabo trzyma kredkę lub długopis</li>
                </ul>
                

                <div className="text-center">
                  <a href="tel:+48531509008">
                    <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                      <Phone className="h-4 w-4 mr-2" />
                      Zadzwoń: 531 509 008
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
