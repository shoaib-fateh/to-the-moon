import React from "react";
import Warper from "../../components/warper/warper.component";

import HelloGif from "../../assets/Hello.gif";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faTelegram } from "@fortawesome/free-brands-svg-icons/faTelegram";

const HomePage = () => (
	<Warper className="py-20 text-white">
		<div className="flex mb-2">
			<span>Hi</span>
			<img src={HelloGif} alt="Hello Gif iamge" className="w-5 h-5" />
			<span>, I'm</span>
		</div>
		<h1 className="font-bold text-6xl mb-4">Shoaib Fateh</h1>
		<div className="font-bold text-blue-600 mb-10">ReactJS Developer</div>

		<button className="bg-blue-600 p-2 px-10 rounded-lg text-lg mb-3">
			Contact
		</button>

		<div className="flex gap-3 text-3xl px-2">
			<a href="https://github.com/shoaib-fateh">
				<FontAwesomeIcon icon={faGithub} />
			</a>
			<a href="https://www.linkedin.com/in/shoaib-fateh/">
				<FontAwesomeIcon icon={faLinkedin} />
			</a>
			<a href="https://t.me/shoaibfateh21">
				<FontAwesomeIcon icon={faTelegram} />
			</a>
		</div>
	</Warper>
);

export default HomePage;
