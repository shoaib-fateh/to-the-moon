import React from "react";
import Warper from "../../components/warper/warper.component";

import HelloGif from "../../assets/Hello.gif";
import Illustration from "../../assets/illustration-2.png";
import AboutImage from "../../assets/about.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faTelegram } from "@fortawesome/free-brands-svg-icons/faTelegram";

const HomePage = () => (
	<Warper className="py-24 text-white">
		{/* Hero Section */}
		<div className="flex flex-col md:flex-row px-5">
			<div className="flex-1 py-20">
				<div className="flex mb-2">
					<span>Hi</span>
					<img
						src={HelloGif}
						alt="Hello Gif iamge"
						className="w-5 h-5"
					/>
					<span>, I'm</span>
				</div>
				<h1 className="font-bold text-6xl mb-4">Shoaib Fateh</h1>
				<div className="font-bold text-blue-600 mb-10">
					ReactJS Developer
				</div>

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
			</div>
			<div className="flex-1">
				<img src={Illustration} alt="Illustration" className="w-100" />
			</div>
		</div>

		{/* About Section */}
		<section className="pt-[6rem] pb-[6rem]">
			<div className="flex flex-col md:flex-row px-5">
				<div className="flex-1 py-20">
					<div className="font-bold text-blue-600 mb-2 text-3xl">
						About
					</div>
					<div className="font-bold text-white mb-2">
						Hi there! I'm Vinayak, a website developer with a
						passion for creating custom online experiences for my
						clients. With a skill set including HTML, CSS,
						JavaScript, and React, I have the tools to bring any
						website vision to life.
					</div>
					<div className="font-bold text-white mb-2">
						But my services go beyond just custom development - I'm
						also proficient in using CMS systems like WordPress and
						Shopify, making it easy for my clients to take control
						of their own websites and keep them up to date.
					</div>
					<div className="font-bold text-white mb-2">
						So if you're in need of a new website or just looking to
						revamp your current online presence, I'd love to chat
						and see how I can help. Let's bring your website dreams
						to reality together!
					</div>

					<div className="font-bold text-blue-600 mb-2 text-2xl">
						Here are my main skills:
					</div>
				</div>
				<div className="flex-1">
					<img
						src={AboutImage}
						alt="Illustration"
						className="w-100 rounded-[5rem] rotate-6 shadow-2xl"
					/>
				</div>
			</div>
		</section>
	</Warper>
);

export default HomePage;
