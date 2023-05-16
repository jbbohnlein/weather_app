import Search from "./components/Search"
import useForecast from "./hooks/useForecast"
import Forecast from "./components/Forecast"

const App = (): JSX.Element => {

  const {
    term,
    forecast,
    options,
    onOptionSelect,
    onSubmit,
    onInputChange
  } = useForecast()

  return (
    <main className="flex justify-center items-center 
      bg-gradient-to-br from-sky-900 via-sky-500 to-sky-200 h-[100vh] w-full">
      {forecast ? (
        <Forecast data={forecast}/>
      ): (
      
      <Search
        term={term}
        options={options}
        onInputChange={onInputChange} 
        onOptionSelect={onOptionSelect} 
        onSubmit={onSubmit} />
      )}  
    </main>
  )
}

export default App
