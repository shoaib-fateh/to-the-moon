import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import wordpressIcon from "../../assets/wordpress.svg";

const Projects = ({ title, description }) => (
	<div className="flex-1 bg-blue-950 px-5 py-5 rounded-3xl gap-3 w-fit mx-auto">
		<div className="flex my-2align-middle mb-5">
			<div className="flex-2 flex text-xl w-full">
				<FontAwesomeIcon icon={faGithub} />
			</div>
			<div className="flex-2 text-xl flex gap-4">
				<FontAwesomeIcon icon={faGithub} />
				<FontAwesomeIcon icon={faGithub} />
			</div>
		</div>
		<span className="text-bold text-xl">{title}</span>
		<div>{`${description.slice(0, 85)}...`}</div>
		<div className="flex gap-3 mt-5">
			<img
				src={wordpressIcon}
				alt="Illustration"
				className="w-10 shadow-2xl"
			/>
			<img
				src={htmlIcon}
				alt="Illustration"
				className="w-10 shadow-2xl"
			/>
			<img src={cssIcon} alt="Illustration" className="w-10 shadow-2xl" />
			<img src={jsIcon} alt="Illustration" className="w-10 shadow-2xl" />
		</div>
	</div>
);

export default Projects;
