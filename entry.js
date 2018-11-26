import Wkt from 'wicket/wicket-gmap3.js';

const wicket = new Wkt.Wkt('POINT(30 10)');

document.write(JSON.stringify(wicket, null, 2));
