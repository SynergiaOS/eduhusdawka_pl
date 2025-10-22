import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import PasswordProtected from "@/components/common/password-protected"

export const metadata: Metadata = {
  title: "Kwestionariusz ADHD | EduHustawka",
  description: "Zaloguj się aby wejść do kwestionariusza oceny symptomów ADHD",
  keywords: "kwestionariusz, ADHD, diagnoza ADHD, badanie ADHD",
}

export default function QuestionnaireADHDPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header />
      
      <main className="pt-20 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <PasswordProtected password={["ADHD", "adhd"]}>
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-purple-600">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">Kwestionariusz Oceny Symptomów ADHD</h1>
              
              <div className="space-y-8">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-purple-700 mb-4">Instrukcja:</h2>
                  <p className="text-gray-700 mb-4">
                    Proszę odpowiedzieć na poniższe pytania dotyczące zachowania i funkcjonowania dziecka. 
                    Odpowiedzi będą pomocne w diagnozie ADHD i opracowaniu planu wsparcia.
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Ważne:</strong> Ten kwestionariusz nie stanowi diagnozy medycznej. Jest narzędziem pomocniczym do oceny symptomów.
                  </p>
                </div>

                <form className="space-y-6">
                  {/* Sekcja 1: Ogólna informacja */}
                  <div className="border-b pb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Informacja o dziecku:</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Imię i nazwisko dziecka:</label>
                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Wiek dziecka:</label>
                        <input type="number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Data wypełnienia:</label>
                        <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
                      </div>
                    </div>
                  </div>

                  {/* Sekcja 2: Objawy nieuwagi */}
                  <div className="border-b pb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Objawy nieuwagi:</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Czy dziecko ma trudności w skupianiu się na zadaniach?
                        </label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                          <option value="">Wybierz odpowiedź</option>
                          <option value="nigdy">Nigdy</option>
                          <option value="rzadko">Rzadko</option>
                          <option value="czasami">Czasami</option>
                          <option value="czesto">Często</option>
                          <option value="zawsze">Zawsze</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Czy dziecko łatwo się rozprasza?
                        </label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                          <option value="">Wybierz odpowiedź</option>
                          <option value="nigdy">Nigdy</option>
                          <option value="rzadko">Rzadko</option>
                          <option value="czasami">Czasami</option>
                          <option value="czesto">Często</option>
                          <option value="zawsze">Zawsze</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Czy dziecko zapomina instrukcji i obowiązków?
                        </label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                          <option value="">Wybierz odpowiedź</option>
                          <option value="nigdy">Nigdy</option>
                          <option value="rzadko">Rzadko</option>
                          <option value="czasami">Czasami</option>
                          <option value="czesto">Często</option>
                          <option value="zawsze">Zawsze</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Sekcja 3: Objawy nadpobudliwości */}
                  <div className="border-b pb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Objawy nadpobudliwości i impulsywności:</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Czy dziecko ma ciągłe ruchy nóg i rąk?
                        </label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                          <option value="">Wybierz odpowiedź</option>
                          <option value="nigdy">Nigdy</option>
                          <option value="rzadko">Rzadko</option>
                          <option value="czasami">Czasami</option>
                          <option value="czesto">Często</option>
                          <option value="zawsze">Zawsze</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Czy dziecko ma trudności w pozostaniu siedząco?
                        </label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                          <option value="">Wybierz odpowiedź</option>
                          <option value="nigdy">Nigdy</option>
                          <option value="rzadko">Rzadko</option>
                          <option value="czasami">Czasami</option>
                          <option value="czesto">Często</option>
                          <option value="zawsze">Zawsze</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Czy dziecko odpowiada zanim się skończy pytanie?
                        </label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                          <option value="">Wybierz odpowiedź</option>
                          <option value="nigdy">Nigdy</option>
                          <option value="rzadko">Rzadko</option>
                          <option value="czasami">Czasami</option>
                          <option value="czesto">Często</option>
                          <option value="zawsze">Zawsze</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Przycisk wysyłki */}
                  <div className="flex gap-4">
                    <button type="submit" className="px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition">
                      Wyślij
                    </button>
                    <button type="reset" className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 transition">
                      Wyczyść
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </PasswordProtected>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
