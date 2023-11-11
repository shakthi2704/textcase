import TextConverter from "./components/converters/TextConverter"
const Home = () => {
  return (
    <div className="">
      <div className="px-10 py-5">
        <h2 className="text-5xl font-semibold mb-4 text-center">
          Convert Case
        </h2>
        <TextConverter />
      </div>
    </div>
  )
}

export default Home
