function Form(props) {
    return (
        <div className="bg-green-250 p-3 w-max mx-auto rounded-lg ">
            <h1 className="text-center text-2xl p-2">Create Cookie Stand</h1>
            <form className="mx-auto flex border-gray-200 p-2 items-center" onSubmit={props.onSubmit}>
                <p className="pr-2">Location</p>
                <input placeholder="Barcelona" className="pl-2 h-4 w-full bg-blue-50 placeholder-black"/>
            </form>
                <div className="flex justify-center p-3">
                    <div>
                        <p className="text-xs text-center">Minimum Customers per Hour</p>
                        <input placeholder="2" className="mx-2 h-5 w-95 placeholder-black"></input>
                    </div>
                    <div>
                        <p className="text-xs text-center">Maximum Customers per Hour</p>
                        <input placeholder="4" className="mx-2 h-5 placeholder-black"></input>
                    </div>
                    <div>
                        <p className="text-xs text-center">Average Cookies Per Sale</p>
                        <input placeholder="2.5" className="mx-2 h-5 placeholder-black"></input>
                    </div>
                  
                    <button className="bg-green-500 py-3 px-20 w-max">Create</button>
                </div>
        </div>
    )
  }

  export default Form
