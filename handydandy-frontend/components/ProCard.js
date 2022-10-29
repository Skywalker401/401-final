
export default function ProCard(props) {
  console.log("PROPS PRO", props.pro)
  return (
    <div className="flex justify-center min-w-full">
      <div className="max-w-md px-8 py-4 my-20 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center -mt-16 md:justify-end">
          <img className="object-cover w-20 h-20 border-2 border-indigo-500 rounded-full" src="https://images.unsplash.com/photo-1581783898377-1c85bf937427?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-center text-gray-800">{props.pro.name}</h2>
          <p className="mt-2 mb-2 text-gray-600">Proficient in:</p>
          {Object.entries(props.pro.competencies).filter(competency => competency.includes(true)).map(competency2 => <p className="font-semibold uppercase">{competency2}</p>)}
        </div>
        <div className="flex justify-end mt-4">
          <a href="#" className="text-xl font-medium text-indigo-500">{props.pro.email}</a>
        </div>
      </div>
    </div>
  )
}