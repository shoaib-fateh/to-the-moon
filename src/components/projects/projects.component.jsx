import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

const Projects = ({
	title,
	description,
	technologies,
	githubLink,
	liveDemo = null,
}) => (
	<div className="flex-1 bg-blue-950 px-5 py-5 rounded-3xl gap-3 w-fit mx-auto">
		<div className="flex my-2align-middle mb-5">
			<div className="flex-2 flex text-2xl w-full">
				<FontAwesomeIcon icon={faFolderOpen} />
			</div>
			<div className="flex-2 flex text-2xl gap-4">
				<a href={githubLink}>
					<FontAwesomeIcon icon={faGithub} />
				</a>
				{liveDemo ? (
					<a href="#">
						<FontAwesomeIcon icon={faExternalLink} />
					</a>
				) : (
					""
				)}
			</div>
		</div>
		<span className="text-bold text-xl">{title}</span>
		<div>{`${description.slice(0, 85)}...`}</div>
		<div className="flex gap-3 mt-5">{technologies}</div>
	</div>
);

export default Projects;
