import React from 'react';
import { Route } from 'react-router-dom'

import "./display.css"
import About from './about/about';
import Projects from './projects/projects';
import Hungry from './hungry/hungry'
import Skills from './skills/skills'

const Display = () => {

	return <div className='display' id="scroll">
		<Route exact path="/" component={About} />
		<Route path="/about" component={About} />
		<Route path="/projects" component={Projects} />
		<Route path="/skills" component={Skills} />
		<Route path="/hungry" component={Hungry} />
	</div>
}



export default Display;