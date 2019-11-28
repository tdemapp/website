import AOS from 'aos';

import 'aos/dist/aos.css';

export default ({ app }, inject) => {
	app.AOS = new AOS.init({
		duration: 1000,
		easing: 'ease-in-out-sin',
		once: true,
	});
};
