import React from "react";
import Warper from "../../components/warper/warper.component";

import HelloGif from "../../assets/Hello.gif";
import Illustration from "../../assets/illustration-2.png";
import AboutImage from "../../assets/about.jpg";

import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import bootstrapIcon from "../../assets/bootstrap-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import mysqlIcon from "../../assets/mysql-icon.svg";
import sassIcon from "../../assets/sass-icon.svg";
import wordpressIcon from "../../assets/wordpress.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faTelegram } from "@fortawesome/free-brands-svg-icons/faTelegram";
import Projects from "../../components/projects/projects.component";

const HomePage = () => (
	<Warper className="py-24 text-white">
		{/* Hero Section */}
		<div className="flex flex-col md:flex-row px-5">
			<div className="flex-1 py-20">
				<div className="flex mb-2 text-xl">
					<span>Hi</span>
					<img
						src={HelloGif}
						alt="Hello Gif iamge"
						className="w-5 h-5"
					/>
					<span>, I'm</span>
				</div>
				<h1 className="font-bold text-6xl mb-2">Shoaib Fateh</h1>
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
				<div className="flex-2 px-10">
					<img
						src={AboutImage}
						alt="Illustration"
						className="w-100 rounded-[5rem] rotate-6 shadow-2xl"
					/>
				</div>
				<div className="flex-2">
					<div className="font-bold text-blue-600 mb-2 text-3xl">
						About
					</div>
					<div className="font-bold text-white mb-2">
						As a React developer, I have a strong foundation in
						building dynamic and responsive web applications.
					</div>
					<div className="font-bold text-white mb-2">
						I enjoy utilizing my skills in JavaScript, HTML5, CSS3,
						and various frameworks to create user-friendly
						interfaces. I am also experienced in backend development
						with Node.js, ensuring that my applications are both
						scalable and secure.
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
					<div className="flex gap-1">
						<img
							src={htmlIcon}
							alt="Illustration"
							className="w-10 shadow-2xl"
						/>
						<img
							src={cssIcon}
							alt="Illustration"
							className="w-10 shadow-2xl"
						/>
						<img
							src={jsIcon}
							alt="Illustration"
							className="w-10 shadow-2xl"
						/>
						<img
							src={bootstrapIcon}
							alt="Illustration"
							className="w-10 shadow-2xl"
						/>
						<img
							src={nodeIcon}
							alt="Illustration"
							className="w-10 shadow-2xl"
						/>
						<img
							src={reactIcon}
							alt="Illustration"
							className="w-10 shadow-2xl"
						/>
						<img
							src={mysqlIcon}
							alt="Illustration"
							className="w-10 shadow-2xl"
						/>
						<img
							src={sassIcon}
							alt="Illustration"
							className="w-10 shadow-2xl"
						/>
						<img
							src={wordpressIcon}
							alt="Illustration"
							className="w-10 shadow-2xl"
						/>
						<img
							src={typescriptIcon}
							alt="Illustration"
							className="w-10 shadow-2xl"
						/>
					</div>
				</div>
			</div>
		</section>

		{/* My Projects */}
		<section className="pt-[6rem] pb-[6rem]">
			<h1 className="text-center text-4xl font-bold mb-10">
				My Projects
			</h1>

			<div className="flex gap-2">
				<Projects
					title="Herai Rafah ICT"
					description="Herai Rafah ICT is a comprehensive project aimed at integrating information and you even cant imagin how powerful is this."
					technologies={
						<>
							<img
								src={wordpressIcon}
								alt="Illustration"
								className="w-8"
							/>
							<img
								src={htmlIcon}
								alt="Illustration"
								className="w-8"
							/>
							<img
								src={cssIcon}
								alt="Illustration"
								className="w-8"
							/>
							<img
								src={jsIcon}
								alt="Illustration"
								className="w-8"
							/>
						</>
					}
					githubLink="https://github.com/shoaib-fateh/herai_rafah_ict"
					liveDemo="http://herairafah.net/"
				/>
				<Projects
					title="Line Civic Institution"
					description="Civic empowerment at Line Civic Institution. A non-profit initiative promoting d"
					githubLink="https://github.com/shoaib-fateh/line-civic-institution"
					technologies={
						<>
							<img
								src={htmlIcon}
								alt="Illustration"
								className="w-8"
							/>
							<img
								src={cssIcon}
								alt="Illustration"
								className="w-8"
							/>
							<img
								src={jsIcon}
								alt="Illustration"
								className="w-8"
							/>
						</>
					}
				/>
				<Projects
					title="Dark Calculator"
					description="This is an advanced JavaScript calculator with a user-friendly interface, design"
					githubLink="https://github.com/shoaib-fateh/dark-calculator"
					technologies={
						<>
							<img
								src={htmlIcon}
								alt="Illustration"
								className="w-8"
							/>
							<img
								src={cssIcon}
								alt="Illustration"
								className="w-8"
							/>
							<img
								src={jsIcon}
								alt="Illustration"
								className="w-8"
							/>
						</>
					}
				/>
			</div>

			<div className="flex gap-2 mt-5">
				<Projects
					title="Xylophone"
					description="A web app featuring a virtual xylophone, allowing users to play musical notes wi"
					githubLink="https://github.com/shoaib-fateh/xylophone"
					technologies={
						<>
							<img
								src={wordpressIcon}
								alt="Illustration"
								className="w-8"
							/>
							<img
								src={htmlIcon}
								alt="Illustration"
								className="w-8"
							/>
							<img
								src={cssIcon}
								alt="Illustration"
								className="w-8"
							/>
							<img
								src={jsIcon}
								alt="Illustration"
								className="w-8"
							/>
						</>
					}
				/>
				<Projects
					title="Line Civic Institution"
					description="Civic empowerment at Line Civic Institution. A non-profit initiative promoting d"
					githubLink="https://github.com/shoaib-fateh/line-civic-institution"
					technologies={
						<>
							<img
								src={htmlIcon}
								alt="Illustration"
								className="w-8"
							/>
							<img
								src={cssIcon}
								alt="Illustration"
								className="w-8"
							/>
							<img
								src={jsIcon}
								alt="Illustration"
								className="w-8"
							/>
						</>
					}
				/>
				<Projects
					title="Dark Calculator"
					description="This is an advanced JavaScript calculator with a user-friendly interface, design"
					githubLink="https://github.com/shoaib-fateh/dark-calculator"
					technologies={
						<>
							<img
								src={htmlIcon}
								alt="Illustration"
								className="w-8"
							/>
							<img
								src={cssIcon}
								alt="Illustration"
								className="w-8"
							/>
							<img
								src={jsIcon}
								alt="Illustration"
								className="w-8"
							/>
						</>
					}
				/>
			</div>
		</section>

		{/* Contacts */}
		<section className="pt-[6rem] pb-[6rem]">
			<h1 className="text-center text-4xl font-bold mb-5">Contact</h1>

			<div className="text-center">
				Ready to get started on your project? <br /> Contact me now for
				a Free consultation.
			</div>

			<form action="mailto:shoaibfateh21@yahoo.com">
				<input
					type="email"
					name="email"
					placeholder="Your Email"
					className="py-2 px-3 rounded-lg outline-none text-xl border"
				/>
				<textarea
					className="py-2 px-3 rounded-lg outline-none text-xl border"
					placeholder="Your Message"
				></textarea>
			</form>
		</section>
	</Warper>
);

export default HomePage;
