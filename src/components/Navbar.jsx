import gsap from 'gsap';
import { useGSAP } from '@gsap/react'

import { navLinks } from '../../constants/index.js'

const Navbar = () => {
 useGSAP(() => {
	const navTween = gsap.timeline({
	 scrollTrigger: {
		trigger: 'nav',
		start: 'bottom top'
	 }
	});
	
	navTween.fromTo('nav', { backgroundColor: 'transparent' }, {
	 backgroundColor: '#00000050',
	 backgroundFilter: 'blur(10px)',
	 duration: 1,
	 ease: 'power1.inOut'
	});
 })
 
 return (
	<nav>
	 <div>
		<a href="#home" className="flex items-center gap-2">
		 <img src="/images/MM-1.png" alt="logo" className="h-8 md:h-10" />
		</a>
		
		<ul>
		 {navLinks.map((link) => (
			<li key={link.id}>
			 <a 
				href={`#${link.id}`}
				className={link.id === 'contact' ? 'contact-btn' : ''}
				style={link.id === 'contact' ? { backgroundColor: '#83C244' } : {}}
			 >
				{link.title}
			 </a>
			</li>
		 ))}
		 <li>
			<button className="team-login-btn" style={{ backgroundColor: '#83C244' }}>
				Team Login
			</button>
		 </li>
		</ul>
	 </div>
	</nav>
 )
}
export default Navbar
