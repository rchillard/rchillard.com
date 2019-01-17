import React, {Component} from "react"
import style from "./header.css"

class Header extends Component {
    render () {
        return (
            <div className={style}>
                <h1>RCH</h1>
                <ul>
                    <li>Leadership</li>
                    <li>Development</li>
                    <li>About</li>
                </ul>
            </div>
        )
    }
}

export default Header