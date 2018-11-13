import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
    <div style={{ color: `purple` }}>
        <Link to="/contact/">Contact</Link>
        <Header headerText="About Gatsby" />
        <Header headerText="WTF Props!!" />
        Hello Gatsby!
    </div>
)