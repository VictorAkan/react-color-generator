import { useState } from "react"
import SingleColor from "./SingleColor"

import  Values  from "values.js"

export default function ColorContent() {
    const [color, setColor] = useState("")
    const [error, setError] = useState(false)
    const [list, setList] = useState(new Values('#f15025').all(10))
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            let colors = new Values(color).all(10)
            setList(colors)
            setError(false)
        } catch(error) {
            setError(true)
            console.log(error);
        }
    }
    return(
        <div>
            <div className="content-head mt-4 container">
                <h1>Color Generator</h1>
                <form onSubmit={handleSubmit} className="d-flex">
                    <input
                    type="text"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    placeholder='#f15025'
                    className={`form-control me-5 ${error ? 'error' : null}`}
                    />
                    <button type="submit" className="submit btn btn-primary">Submit</button>
                </form>
            </div>
            <section className="colors">
                {list.map((color, index) => {
                    return <SingleColor key={index} {...color} index={index} />
                })}
            </section>          
        </div>
    )
}